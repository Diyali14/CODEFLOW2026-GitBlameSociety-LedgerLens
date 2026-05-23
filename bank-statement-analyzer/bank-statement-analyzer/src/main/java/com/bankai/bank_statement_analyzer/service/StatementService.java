package com.bankai.bank_statement_analyzer.service;

import org.springframework.web.multipart.MultipartFile;

public interface StatementService {

    void uploadStatement(MultipartFile file);
}