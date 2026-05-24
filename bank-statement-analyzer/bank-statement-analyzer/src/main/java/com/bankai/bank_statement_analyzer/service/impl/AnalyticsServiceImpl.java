package com.bankai.bank_statement_analyzer.service.impl;

import com.bankai.bank_statement_analyzer.dto.CategorySpendingDTO;
import com.bankai.bank_statement_analyzer.repository.TransactionRepository;
import com.bankai.bank_statement_analyzer.service.AnalyticsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnalyticsServiceImpl
        implements AnalyticsService {

    private final TransactionRepository transactionRepository;

    @Override
    public List<CategorySpendingDTO> getSpendingByCategory() {

        return transactionRepository.getSpendingByCategory();
    }
}
