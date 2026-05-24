package com.bankai.bank_statement_analyzer.dto.ai;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CategoryPredictionResponse {

    private List<PredictionResult> predictions;
}