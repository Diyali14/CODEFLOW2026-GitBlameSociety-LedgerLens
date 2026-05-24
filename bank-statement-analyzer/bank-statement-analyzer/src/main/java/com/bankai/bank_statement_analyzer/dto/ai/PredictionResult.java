package com.bankai.bank_statement_analyzer.dto.ai;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PredictionResult {

    private Long transactionId;

    private String category;

    private Double confidence;
}