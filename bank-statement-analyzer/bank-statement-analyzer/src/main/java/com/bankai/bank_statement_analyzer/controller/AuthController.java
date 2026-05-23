package com.bankai.bank_statement_analyzer.controller;

import com.bankai.bank_statement_analyzer.dto.auth.LoginRequest;
import com.bankai.bank_statement_analyzer.dto.auth.LoginResponse;
import com.bankai.bank_statement_analyzer.dto.auth.SignupRequest;
import com.bankai.bank_statement_analyzer.dto.auth.SignupResponse;
import com.bankai.bank_statement_analyzer.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public SignupResponse signup(
            @Valid @RequestBody SignupRequest request
    ) {
        return authService.signup(request);
    }

    @PostMapping("/login")
    public LoginResponse login(
            @Valid @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }
}