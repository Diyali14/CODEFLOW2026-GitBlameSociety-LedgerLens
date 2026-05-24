package com.bankai.bank_statement_analyzer.service;

import com.bankai.bank_statement_analyzer.dto.CategorySpendingDTO;

import java.util.List;

public interface AnalyticsService {

    List<CategorySpendingDTO> getSpendingByCategory();

}
