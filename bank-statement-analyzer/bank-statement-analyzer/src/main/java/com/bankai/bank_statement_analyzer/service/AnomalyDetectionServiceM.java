package com.bankai.bank_statement_analyzer.service;

import com.bankai.bank_statement_analyzer.entity.Transaction;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AnomalyDetectionServiceM {

    private static final Map<String, BigDecimal> THRESHOLDS = new HashMap<>();

    static {
        THRESHOLDS.put("Food", new BigDecimal("30000"));
        THRESHOLDS.put("Shopping", new BigDecimal("70000"));
        THRESHOLDS.put("Travel", new BigDecimal("50000"));
        THRESHOLDS.put("Salary", new BigDecimal("500000"));
        THRESHOLDS.put("EMI", new BigDecimal("100000"));
        THRESHOLDS.put("Subscription", new BigDecimal("20000"));
        THRESHOLDS.put("Utilities", new BigDecimal("40000"));
        THRESHOLDS.put("Entertainment", new BigDecimal("30000"));
        THRESHOLDS.put("Transfer", new BigDecimal("80000"));
        THRESHOLDS.put("Rent", new BigDecimal("100000"));
        THRESHOLDS.put("ATM Withdrawal", new BigDecimal("50000"));
        THRESHOLDS.put("Insurance", new BigDecimal("100000"));
        THRESHOLDS.put("Education", new BigDecimal("150000"));
        THRESHOLDS.put("Grocery", new BigDecimal("25000"));
        THRESHOLDS.put("Recharge", new BigDecimal("5000"));
        THRESHOLDS.put("Tax", new BigDecimal("200000"));
        THRESHOLDS.put("Interest", new BigDecimal("50000"));
        THRESHOLDS.put("Loan", new BigDecimal("100000"));
        THRESHOLDS.put("Miscellaneous", new BigDecimal("30000"));
    }

    public List<Transaction> detectAnomalies(List<Transaction> transactions) {

        for (Transaction t : transactions) {

            BigDecimal amount = getEffectiveAmount(t);
            BigDecimal threshold = THRESHOLDS.get(t.getCategory());

            if (threshold == null || amount == null) {
                t.setAnomaly(false);
                continue;
            }

            t.setAnomaly(amount.compareTo(threshold) > 0);
        }

        return transactions;
    }

    private BigDecimal getEffectiveAmount(Transaction t) {

        if (t.getDebit() != null) {
            return t.getDebit();   // spending case
        }

        if (t.getCredit() != null) {
            return t.getCredit();  // income case
        }

        return BigDecimal.ZERO;
    }
}