package com.bankai.bank_statement_analyzer.controller;

import com.bankai.bank_statement_analyzer.dto.CategorySpendingDTO;
import com.bankai.bank_statement_analyzer.service.AnalyticsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bankai.bank_statement_analyzer.dto.*;
import com.bankai.bank_statement_analyzer.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/analytics")
@RequiredArgsConstructor
public class AnalyticsController {

    private final AnalyticsService analyticsService;
    private final TransactionRepository transactionRepository;


    @GetMapping("/spending-by-category")
    public List<CategorySpendingDTO> getSpendingByCategory() {

        return analyticsService.getSpendingByCategory();
    }

    @GetMapping("/dashboard")
    public DashboardSummaryDTO getDashboardAnalytics() {

        BigDecimal totalIncome =
                transactionRepository.getTotalIncome();

        BigDecimal totalExpense =
                transactionRepository.getTotalExpense();

        BigDecimal totalSavings =
                totalIncome.subtract(totalExpense);

        List<MonthlyExpenseTrendDTO> monthlyExpenseTrend =
                transactionRepository.getMonthlyExpenseTrend();

        List<MonthlySavingsTrendDTO> monthlySavingsTrend =
                transactionRepository.getMonthlySavingsTrend();

        CategorySpendingDTO highestCategorySpending =
                transactionRepository
                        .getSpendingByCategory()
                        .get(0);

        return new DashboardSummaryDTO(
                totalIncome,
                totalExpense,
                totalSavings,
                monthlyExpenseTrend,
                monthlySavingsTrend,
                highestCategorySpending
        );
    }

    @GetMapping("/highest-category-spending")
    public CategorySpendingDTO getHighestCategorySpending() {

        List<CategorySpendingDTO> result =
                transactionRepository.getHighestCategorySpending();

        if(result.isEmpty()) {
            return new CategorySpendingDTO(
                    "NO DATA",
                    BigDecimal.ZERO
            );
        }

        return result.get(0);
    }

    @GetMapping("/transactions-table")
    public List<TransactionTableDTO> getTransactionsTable() {

        return transactionRepository.getAllTransactionsTable();
    }

    @GetMapping("/recurring-transactions")
    public List<RecurringTransactionDTO> getRecurringTransactions() {

        return transactionRepository.getRecurringTransactions();
    }
}