package com.bankai.bank_statement_analyzer.dto;

import java.math.BigDecimal;

public record MonthlyExpenseTrendDTO(
        Integer month,
        BigDecimal totalExpense
) {}
