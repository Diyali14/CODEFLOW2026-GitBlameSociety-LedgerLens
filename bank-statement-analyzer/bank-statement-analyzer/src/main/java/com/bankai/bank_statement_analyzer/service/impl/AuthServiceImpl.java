package com.bankai.bank_statement_analyzer.service.impl;

import com.bankai.bank_statement_analyzer.dto.auth.LoginRequest;
import com.bankai.bank_statement_analyzer.dto.auth.LoginResponse;
import com.bankai.bank_statement_analyzer.dto.auth.SignupRequest;
import com.bankai.bank_statement_analyzer.dto.auth.SignupResponse;
import com.bankai.bank_statement_analyzer.entity.User;
import com.bankai.bank_statement_analyzer.repository.UserRepository;
import com.bankai.bank_statement_analyzer.service.AuthService;
import com.bankai.bank_statement_analyzer.service.SessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import com.bankai.bank_statement_analyzer.exception.ApiException;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final SessionService sessionService;
    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public SignupResponse signup(SignupRequest request) {

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new ApiException("Username already exists");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ApiException("Email already exists");
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);

        return new SignupResponse("User registered successfully");
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new ApiException("User not found"));

        sessionService.setCurrentUser(user);

        return new LoginResponse(
                "Login successful",
                request.getUsername()
        );
    }
}