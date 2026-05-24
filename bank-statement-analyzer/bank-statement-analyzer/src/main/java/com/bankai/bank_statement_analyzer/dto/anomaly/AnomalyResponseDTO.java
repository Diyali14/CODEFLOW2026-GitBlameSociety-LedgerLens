package com.bankai.bank_statement_analyzer.dto.anomaly;

public record AnomalyResponseDTO(

        Boolean anomaly,

        Double score

) {}