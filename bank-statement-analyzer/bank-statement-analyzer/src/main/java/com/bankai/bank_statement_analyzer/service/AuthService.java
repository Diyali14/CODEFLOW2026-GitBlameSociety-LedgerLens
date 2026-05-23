package com.bankai.bank_statement_analyzer.service;

import com.bankai.bank_statement_analyzer.dto.auth.SignupRequest;
import com.bankai.bank_statement_analyzer.dto.auth.SignupResponse;

public interface AuthService {

    SignupResponse signup(SignupRequest request);
}