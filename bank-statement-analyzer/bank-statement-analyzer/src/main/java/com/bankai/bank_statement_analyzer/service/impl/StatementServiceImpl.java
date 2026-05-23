package com.bankai.bank_statement_analyzer.service.impl;

import com.bankai.bank_statement_analyzer.pdf.PdfExtractorService;
import com.bankai.bank_statement_analyzer.service.StatementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class StatementServiceImpl implements StatementService {

    private final PdfExtractorService pdfExtractorService;

    @Override
    public void uploadStatement(MultipartFile file) {

        pdfExtractorService.extractTables(file);
    }
}
