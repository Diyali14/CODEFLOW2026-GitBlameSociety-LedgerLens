package com.bankai.bank_statement_analyzer.repository;

import com.bankai.bank_statement_analyzer.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository
        extends JpaRepository<Transaction, Long> {
}