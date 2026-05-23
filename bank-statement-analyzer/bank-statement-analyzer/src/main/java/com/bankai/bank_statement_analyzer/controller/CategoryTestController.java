package com.bankai.bank_statement_analyzer.controller;

import com.bankai.bank_statement_analyzer.service.CategoryPredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/category")
@RequiredArgsConstructor
public class CategoryTestController {

    private final CategoryPredictionService categoryPredictionService;

    @PostMapping("/run")
    public String runCategoryPrediction() {

        categoryPredictionService.predictAndSaveCategories();

        return "Category mapping completed";
    }
}
