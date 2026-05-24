package com.bankai.bank_statement_analyzer.service.impl;

import com.bankai.bank_statement_analyzer.ai.AiServiceClient;
import com.bankai.bank_statement_analyzer.dto.ai.*;
import com.bankai.bank_statement_analyzer.repository.TransactionRepository;
import com.bankai.bank_statement_analyzer.service.AiTestService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AiTestServiceImpl implements AiTestService {

    private final TransactionRepository transactionRepository;

    private final AiServiceClient aiServiceClient;

    @Override
    public void testCategoryPrediction() {

        CategoryPredictionRequest request =
                CategoryPredictionRequest.builder()
                        .transactions(List.of(
                                new CategoryPredictionRequest
                                        .TransactionNarration(
                                        1L,
                                        "UPI SWIGGY"
                                ),
                                new CategoryPredictionRequest
                                        .TransactionNarration(
                                        2L,
                                        "UBER"
                                )
                        ))
                        .build();

        CategoryPredictionResponse response =
                aiServiceClient.predictCategories(request);

        System.out.println(response);
    }
}