package com.bankai.bank_statement_analyzer.dto.anomaly;

import java.util.List;

public record AnomalyRequestDTO(

        List<AnomalyTransactionDTO> transactions

) {}
