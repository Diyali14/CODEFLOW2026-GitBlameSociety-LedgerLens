package com.bankai.bank_statement_analyzer.ai;

import com.bankai.bank_statement_analyzer.dto.ai.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class AiServiceClient {

    private final WebClient webClient;

    public AiServiceClient(
            @Qualifier("categoryWebClient")
            WebClient webClient
    ) {
        this.webClient = webClient;
    }

    public CategoryPredictionResponse predictCategories(
            CategoryPredictionRequest request
    ) {

        return webClient.post()
                .uri("/predict")
                .bodyValue(request)
                .retrieve()
                .bodyToMono(CategoryPredictionResponse.class)
                .block();
    }
}