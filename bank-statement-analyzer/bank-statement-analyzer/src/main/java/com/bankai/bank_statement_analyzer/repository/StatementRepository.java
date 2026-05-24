package com.bankai.bank_statement_analyzer.repository;

import com.bankai.bank_statement_analyzer.entity.Statement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatementRepository
        extends JpaRepository<Statement, Long> {
}
