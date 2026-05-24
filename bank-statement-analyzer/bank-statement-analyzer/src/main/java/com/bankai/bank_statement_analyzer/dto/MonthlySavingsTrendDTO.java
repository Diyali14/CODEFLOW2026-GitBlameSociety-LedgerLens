package com.bankai.bank_statement_analyzer.dto;

import java.math.BigDecimal;

public record MonthlySavingsTrendDTO(
        Integer month,
        BigDecimal savings
) {}
