package com.bankai.bank_statement_analyzer.service;

import com.bankai.bank_statement_analyzer.dto.auth.*;

public interface AuthService {

    SignupResponse signup(SignupRequest request);

    LoginResponse login(LoginRequest request);
}