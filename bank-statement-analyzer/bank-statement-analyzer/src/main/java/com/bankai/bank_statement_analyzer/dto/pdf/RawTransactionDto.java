package com.bankai.bank_statement_analyzer.dto.pdf;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RawTransactionDto {

    private String date;

    private String narration;

    private String debit;

    private String credit;

    private String balance;
}