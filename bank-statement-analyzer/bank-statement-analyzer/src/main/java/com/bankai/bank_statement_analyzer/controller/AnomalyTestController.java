package com.bankai.bank_statement_analyzer.controller;

import com.bankai.bank_statement_analyzer.service.AnomalyDetectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/anomaly")
@RequiredArgsConstructor
public class AnomalyTestController {

    private final AnomalyDetectionService anomalyDetectionService;

    @PostMapping("/run")
    public String runAnomalyDetection() {

        anomalyDetectionService.detectAndSaveAnomalies();

        return "Anomaly detection completed";
    }
}
