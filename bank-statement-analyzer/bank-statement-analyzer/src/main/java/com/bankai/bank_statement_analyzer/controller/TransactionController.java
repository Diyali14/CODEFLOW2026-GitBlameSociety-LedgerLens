package com.bankai.bank_statement_analyzer.controller;

import com.bankai.bank_statement_analyzer.entity.Transaction;
import com.bankai.bank_statement_analyzer.repository.TransactionRepository;
import com.bankai.bank_statement_analyzer.service.AnomalyDetectionServiceM;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class TransactionController {

    private final TransactionRepository transactionRepository;
    private final AnomalyDetectionServiceM anomalyService;

    public TransactionController(TransactionRepository transactionRepository,
                                 AnomalyDetectionServiceM anomalyService) {
        this.transactionRepository = transactionRepository;
        this.anomalyService = anomalyService;
    }

    @GetMapping("/analyzed")
    public List<Transaction> getTransactionsWithAnomaly() {

        List<Transaction> transactions = transactionRepository.findAll();

        return anomalyService.detectAnomalies(transactions);
    }
}
