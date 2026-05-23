package com.bankai.bank_statement_analyzer.dto.statement;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UploadResponse {

    private boolean success;

    private String message;
}