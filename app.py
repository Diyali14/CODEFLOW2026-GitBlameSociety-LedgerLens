from fastapi import FastAPI
from pydantic import BaseModel
import onnxruntime as ort
import numpy as np
import json
from transformers import AutoTokenizer

app = FastAPI()

# Load tokenizer
tokenizer = AutoTokenizer.from_pretrained("distilroberta-base")

# Load ONNX model
session = ort.InferenceSession("model.onnx")

# Load labels
with open("label_map.json", "r") as f:
    id2label = json.load(f)


class Transaction(BaseModel):
    transactionId: int
    narration: str


class Request(BaseModel):
    transactions: list[Transaction]


def predict(text: str):
    inputs = tokenizer(
        text,
        return_tensors="np",
        padding="max_length",
        truncation=True,
        max_length=32
    )

    outputs = session.run(
        None,
        {
            "input_ids": inputs["input_ids"].astype(np.int64),
            "attention_mask": inputs["attention_mask"].astype(np.int64)
        }
    )

    logits = outputs[0]

    probs = np.exp(logits) / np.sum(np.exp(logits), axis=1, keepdims=True)

    pred_id = str(int(np.argmax(probs)))
    confidence = float(np.max(probs))

    return id2label[pred_id], confidence


@app.post("/predict")
def predict_batch(req: Request):

    results = []

    for t in req.transactions:
        category, conf = predict(t.narration)

        results.append({
            "transactionId": t.transactionId,
            "category": category,
            "confidence": round(conf, 4)
        })

    return {"predictions": results}