package com.bankai.bank_statement_analyzer.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Bean
    public WebClient categoryWebClient() {

        return WebClient.builder()
                .baseUrl("https://transaction-service-6fuh.onrender.com")
                .build();
    }

    @Bean
    public WebClient anomalyWebClient() {

        return WebClient.builder()
                .baseUrl("https://anomaly-detection-model-4sk4.onrender.com")
                .build();
    }
}