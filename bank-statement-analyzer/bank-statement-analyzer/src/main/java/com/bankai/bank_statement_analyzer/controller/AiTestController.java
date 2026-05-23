package com.bankai.bank_statement_analyzer.controller;

import com.bankai.bank_statement_analyzer.ai.AiServiceClient;
import com.bankai.bank_statement_analyzer.dto.ai.CategoryPredictionRequest;
import com.bankai.bank_statement_analyzer.dto.ai.CategoryPredictionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AiTestController {

    private final AiServiceClient aiServiceClient;

    @GetMapping("/api/test-ai")
    public CategoryPredictionResponse testAi() {

        CategoryPredictionRequest request =
                CategoryPredictionRequest.builder()
                        .transactions(List.of(

                                CategoryPredictionRequest
                                        .TransactionNarration
                                        .builder()
                                        .transactionId(1L)
                                        .narration("NETFLIX")
                                        .build(),

                                CategoryPredictionRequest
                                        .TransactionNarration
                                        .builder()
                                        .transactionId(2L)
                                        .narration("PAYTM UBER")
                                        .build(),

                                CategoryPredictionRequest
                                        .TransactionNarration
                                        .builder()
                                        .transactionId(3L)
                                        .narration("SWIGGY")
                                        .build(),

                                CategoryPredictionRequest
                                        .TransactionNarration
                                        .builder()
                                        .transactionId(4L)
                                        .narration("AMAZON INDIA")
                                        .build(),

                                CategoryPredictionRequest
                                        .TransactionNarration
                                        .builder()
                                        .transactionId(5L)
                                        .narration("IRCTC")
                                        .build()
                        ))
                        .build();

        return aiServiceClient.predictCategories(request);
    }
}