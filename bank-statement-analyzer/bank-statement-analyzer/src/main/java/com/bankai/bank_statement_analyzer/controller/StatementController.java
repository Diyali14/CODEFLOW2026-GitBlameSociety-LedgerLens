package com.bankai.bank_statement_analyzer.controller;

import com.bankai.bank_statement_analyzer.dto.statement.UploadResponse;
import com.bankai.bank_statement_analyzer.service.StatementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/statements")
@RequiredArgsConstructor
public class StatementController {

    private final StatementService statementService;

    @PostMapping(
            value = "/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public UploadResponse uploadStatement(
            @RequestParam("file") MultipartFile file
    ) {

        statementService.uploadStatement(file);

        return new UploadResponse(
                true,
                "Statement uploaded successfully"
        );
    }
}
