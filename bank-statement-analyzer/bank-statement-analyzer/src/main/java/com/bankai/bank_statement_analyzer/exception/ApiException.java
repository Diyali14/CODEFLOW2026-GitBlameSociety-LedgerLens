package com.bankai.bank_statement_analyzer.exception;

public class ApiException extends RuntimeException {

    public ApiException(String message) {
        super(message);
    }
}