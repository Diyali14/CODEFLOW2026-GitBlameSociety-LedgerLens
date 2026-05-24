package com.bankai.bank_statement_analyzer.dto.anomaly;

import java.math.BigDecimal;

public record AnomalyTransactionDTO(

        BigDecimal amount,

        String category

) {}
