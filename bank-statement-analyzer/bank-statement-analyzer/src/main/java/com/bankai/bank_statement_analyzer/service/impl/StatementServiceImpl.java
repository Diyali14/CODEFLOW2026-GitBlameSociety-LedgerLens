package com.bankai.bank_statement_analyzer.service.impl;

import com.bankai.bank_statement_analyzer.dto.pdf.RawTransactionDto;
import com.bankai.bank_statement_analyzer.entity.Transaction;
import com.bankai.bank_statement_analyzer.pdf.PdfExtractorService;
import com.bankai.bank_statement_analyzer.repository.TransactionRepository;
import com.bankai.bank_statement_analyzer.service.StatementService;
import com.bankai.bank_statement_analyzer.util.TransactionCleaner;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StatementServiceImpl implements StatementService {

    private final PdfExtractorService pdfExtractorService;

    private final TransactionCleaner transactionCleaner;

    private final TransactionRepository transactionRepository;

    @Override
    public void uploadStatement(MultipartFile file) {

        List<RawTransactionDto> rawTransactions =
                pdfExtractorService.extractTables(file);

        for (RawTransactionDto raw : rawTransactions) {

            Transaction transaction =
                    transactionCleaner.clean(raw);

            transactionRepository.save(transaction);
        }
    }
}
