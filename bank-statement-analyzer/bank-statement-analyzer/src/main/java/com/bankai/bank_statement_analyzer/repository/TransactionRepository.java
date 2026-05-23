package com.bankai.bank_statement_analyzer.repository;

import com.bankai.bank_statement_analyzer.dto.*;
import com.bankai.bank_statement_analyzer.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.List;

public interface TransactionRepository
        extends JpaRepository<Transaction, Long> {

    List<Transaction> findByCategoryIsNull();

    @Query("""
       SELECT new com.bankai.bank_statement_analyzer.dto.CategorySpendingDTO(
           t.category,
           SUM(t.debit)
       )
       FROM Transaction t
       WHERE t.debit IS NOT NULL
       GROUP BY t.category
       ORDER BY SUM(t.debit) DESC
       """)
    List<CategorySpendingDTO> getSpendingByCategory();
//total Income
    @Query("""
       SELECT COALESCE(SUM(t.credit), 0)
       FROM Transaction t
       WHERE t.credit IS NOT NULL
       """)
    BigDecimal getTotalIncome();
//total expense
    @Query("""
       SELECT COALESCE(SUM(t.debit), 0)
       FROM Transaction t
       WHERE t.debit IS NOT NULL
       """)
    BigDecimal getTotalExpense();
    //monthly expense trend
    @Query("""
       SELECT new com.bankai.bank_statement_analyzer.dto.MonthlyExpenseTrendDTO(
            MONTH(t.txnDate),
            SUM(t.debit)
       )
       FROM Transaction t
       WHERE t.debit IS NOT NULL
       GROUP BY MONTH(t.txnDate)
       ORDER BY MONTH(t.txnDate)
       """)
    List<MonthlyExpenseTrendDTO> getMonthlyExpenseTrend();

    //monthly savings trend
    @Query("""
       SELECT new com.bankai.bank_statement_analyzer.dto.MonthlySavingsTrendDTO(
            MONTH(t.txnDate),
            SUM(COALESCE(t.credit,0) - COALESCE(t.debit,0))
       )
       FROM Transaction t
       GROUP BY MONTH(t.txnDate)
       ORDER BY MONTH(t.txnDate)
       """)
    List<MonthlySavingsTrendDTO> getMonthlySavingsTrend();
//highest category spending

    @Query("""
       SELECT new com.bankai.bank_statement_analyzer.dto.CategorySpendingDTO(
           t.category,
           SUM(t.debit)
       )
       FROM Transaction t
       WHERE t.debit IS NOT NULL
       GROUP BY t.category
       ORDER BY SUM(t.debit) DESC
       """)
    List<CategorySpendingDTO> getHighestCategorySpending();

    @Query("""
       SELECT new com.bankai.bank_statement_analyzer.dto.TransactionTableDTO(

            t.txnDate,
            t.narration,
            t.category,
            t.debit,
            t.credit,
            t.anomaly

       )
       FROM Transaction t
       ORDER BY t.txnDate DESC
       """)
    List<TransactionTableDTO> getAllTransactionsTable();

    @Query("""
       SELECT new com.bankai.bank_statement_analyzer.dto.RecurringTransactionDTO(

            t.narration,
            t.debit,
            COUNT(t)

       )
       FROM Transaction t

       WHERE t.debit IS NOT NULL

       GROUP BY t.narration, t.debit

       HAVING COUNT(t) >= 2

       ORDER BY COUNT(t) DESC
       """)
    List<RecurringTransactionDTO> getRecurringTransactions();
}