package com.bankai.bank_statement_analyzer.dto;

import java.math.BigDecimal;
import java.util.List;

public record DashboardSummaryDTO(

        BigDecimal totalIncome,
        BigDecimal totalExpense,
        BigDecimal totalSavings,

        List<MonthlyExpenseTrendDTO> monthlyExpenseTrend,
        List<MonthlySavingsTrendDTO> monthlySavingsTrend,

        CategorySpendingDTO highestCategorySpending

) {}