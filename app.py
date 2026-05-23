from fastapi import FastAPI
from pydantic import BaseModel

from transformers import (
    DistilBertTokenizerFast,
    DistilBertForSequenceClassification
)

import torch
import torch.nn.functional as F

app = FastAPI()

MODEL_PATH = "./transaction-model"

tokenizer = DistilBertTokenizerFast.from_pretrained(MODEL_PATH)

model = DistilBertForSequenceClassification.from_pretrained(
    MODEL_PATH
)

model.eval()

id2label = model.config.id2label


class Transaction(BaseModel):
    transactionId: int
    narration: str


class RequestBody(BaseModel):
    transactions: list[Transaction]


@app.get("/")
def home():
    return {
        "message": "Transaction Category AI Running"
    }


@app.post("/predict-category")
def predict(data: RequestBody):

    predictions = []

    for txn in data.transactions:

        inputs = tokenizer(
            txn.narration.lower(),
            return_tensors="pt",
            truncation=True,
            padding=True,
            max_length=32
        )

        with torch.no_grad():
            outputs = model(**inputs)

        probs = F.softmax(outputs.logits, dim=1)

        confidence, predicted_class = torch.max(probs, dim=1)

        predictions.append({
            "transactionId": txn.transactionId,
            "category": id2label[predicted_class.item()],
            "confidence": round(confidence.item(), 2)
        })

    return {
        "predictions": predictions
    }