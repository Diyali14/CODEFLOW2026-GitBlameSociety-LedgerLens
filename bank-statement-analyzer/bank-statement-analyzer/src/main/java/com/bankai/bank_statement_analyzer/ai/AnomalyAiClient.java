package com.bankai.bank_statement_analyzer.ai;

import com.bankai.bank_statement_analyzer.dto.anomaly.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class AnomalyAiClient {

    private final WebClient webClient;

    public AnomalyAiClient(
            @Qualifier("anomalyWebClient")
            WebClient webClient
    ) {
        this.webClient = webClient;
    }

    public AnomalyResponseDTO detectAnomaly(
            AnomalyApiRequest request
    ) {

        return webClient.post()
                .uri("/detect-anomaly")
                .bodyValue(request)
                .retrieve()
                .bodyToMono(AnomalyResponseDTO.class)
                .block();
    }
}