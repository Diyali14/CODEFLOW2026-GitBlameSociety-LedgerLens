package com.bankai.bank_statement_analyzer.service.impl;

import com.bankai.bank_statement_analyzer.ai.AnomalyAiClient;
import com.bankai.bank_statement_analyzer.dto.anomaly.*;
import com.bankai.bank_statement_analyzer.entity.Transaction;
import com.bankai.bank_statement_analyzer.repository.TransactionRepository;
import com.bankai.bank_statement_analyzer.service.AnomalyDetectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnomalyDetectionServiceImpl
        implements AnomalyDetectionService {

    private final TransactionRepository transactionRepository;

    private final AnomalyAiClient anomalyAiClient;

    @Override
    public void detectAndSaveAnomalies() {

        List<Transaction> transactions =
                transactionRepository.findAll();

        for (Transaction txn : transactions) {

            BigDecimal amount =
                    txn.getDebit() != null
                            ? txn.getDebit()
                            : txn.getCredit();

            if(amount == null || txn.getCategory() == null) {
                continue;
            }

            AnomalyApiRequest request =
                    AnomalyApiRequest.builder()
                            .amount(amount.doubleValue())
                            .category(txn.getCategory())
                            .build();

            AnomalyResponseDTO response =
                    anomalyAiClient.detectAnomaly(request);

            txn.setAnomaly(response.anomaly());
            txn.setConfidence(response.score());

            transactionRepository.save(txn);
        }
    }
}