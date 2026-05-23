package com.bankai.bank_statement_analyzer.util;

import com.bankai.bank_statement_analyzer.dto.pdf.RawTransactionDto;
import com.bankai.bank_statement_analyzer.entity.Transaction;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Component
public class TransactionCleaner {

    //private static final DateTimeFormatter FORMATTER =
     //       DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public Transaction clean(RawTransactionDto raw) {
        if (!isValidTransactionDate(raw.getDate())) {

            throw new RuntimeException(
                    "Invalid transaction row skipped"
            );
        }
        return Transaction.builder()
                .txnDate(parseDate(raw.getDate()))
                .narration(cleanNarration(raw.getNarration()))
                .debit(parseAmount(raw.getDebit()))
                .credit(parseAmount(raw.getCredit()))
                .balance(parseAmount(raw.getBalance()))
                .anomaly(false)
                .build();
    }

    private LocalDate parseDate(String date) {

        String cleanedDate = date.trim();
        cleanedDate = cleanedDate
                .replace("\n", "")
                .replace("\r", "")
                .replace(" ", "");

        DateTimeFormatter[] formatters = {
                DateTimeFormatter.ofPattern("dd/MM/yyyy"),
                DateTimeFormatter.ofPattern("dd-MM-yyyy"),
                DateTimeFormatter.ofPattern("yyyy-MM-dd")
        };

        for (DateTimeFormatter formatter : formatters) {

            try {
                return LocalDate.parse(cleanedDate, formatter);

            } catch (Exception ignored) {
            }
        }

        throw new RuntimeException(
                "Unsupported date format: " + date
        );
    }

    private String cleanNarration(String narration) {

        return narration
                .trim()
                .replaceAll("\\s+", " ")
                .toUpperCase();
    }

    private BigDecimal parseAmount(String amount) {

        if (amount == null || amount.isBlank()) {
            return BigDecimal.ZERO;
        }

        String cleaned = amount
                .replace(",", "")
                .replace("■", "")
                .trim();

        return new BigDecimal(cleaned);
    }

    private boolean isValidTransactionDate(String text) {

        if (text == null || text.isBlank()) {
            return false;
        }

        String cleaned = text.trim();

        return cleaned.matches("\\d{2}[-/]\\w+[-/]\\d{4}")
                ||
                cleaned.matches("\\d{2}[-/]\\d{2}[-/]\\d{4}");
    }
}