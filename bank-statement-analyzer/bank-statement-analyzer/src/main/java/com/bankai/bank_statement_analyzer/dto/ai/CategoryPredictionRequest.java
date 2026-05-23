package com.bankai.bank_statement_analyzer.dto.ai;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryPredictionRequest {

    private List<TransactionNarration> transactions;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class TransactionNarration {

        private Long transactionId;

        private String narration;
    }
}