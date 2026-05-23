package com.bankai.bank_statement_analyzer.service.impl;

import com.bankai.bank_statement_analyzer.dto.auth.SignupRequest;
import com.bankai.bank_statement_analyzer.dto.auth.SignupResponse;
import com.bankai.bank_statement_analyzer.entity.User;
import com.bankai.bank_statement_analyzer.repository.UserRepository;
import com.bankai.bank_statement_analyzer.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public SignupResponse signup(SignupRequest request) {

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);

        return new SignupResponse("User registered successfully");
    }
}