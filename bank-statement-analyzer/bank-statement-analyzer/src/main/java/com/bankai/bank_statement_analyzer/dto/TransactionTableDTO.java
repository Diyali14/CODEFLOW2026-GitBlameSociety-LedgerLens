package com.bankai.bank_statement_analyzer.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public record TransactionTableDTO(

        LocalDate date,

        String narration,

        String category,

        BigDecimal debit,

        BigDecimal credit,

        Boolean status

) {}