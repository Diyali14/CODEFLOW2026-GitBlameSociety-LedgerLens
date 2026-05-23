package com.bankai.bank_statement_analyzer.dto;

import java.math.BigDecimal;

public record RecurringTransactionDTO(

        String narration,

        BigDecimal amount,

        Long frequency

) {}