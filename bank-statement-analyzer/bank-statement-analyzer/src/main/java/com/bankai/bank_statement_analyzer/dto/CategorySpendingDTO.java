package com.bankai.bank_statement_analyzer.dto;

import java.math.BigDecimal;

public record CategorySpendingDTO(
        String category,
        BigDecimal total
) {}