package com.bankai.bank_statement_analyzer.controller;

import com.bankai.bank_statement_analyzer.dto.auth.*;
import com.bankai.bank_statement_analyzer.entity.User;
import com.bankai.bank_statement_analyzer.service.AuthService;
import com.bankai.bank_statement_analyzer.service.SessionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final SessionService sessionService;

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

    @GetMapping("/me")
    public Object getCurrentUser() {

        User user = sessionService.getCurrentUser();

        if (user == null) {
            return "No user logged in";
        }

        return user;
    }
}