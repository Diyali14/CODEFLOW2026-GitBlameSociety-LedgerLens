package com.bankai.bank_statement_analyzer.dto.anomaly;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnomalyApiRequest {

    private Double amount;

    private String category;
}