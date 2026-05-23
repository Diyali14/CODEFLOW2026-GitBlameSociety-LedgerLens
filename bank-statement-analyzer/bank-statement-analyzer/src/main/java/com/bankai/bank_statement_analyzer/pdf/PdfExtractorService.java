package com.bankai.bank_statement_analyzer.pdf;

import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
@Slf4j
public class PdfExtractorService {

    public void extractTables(MultipartFile file) {

        File tempFile = null;

        try {

            tempFile = File.createTempFile("statement-", ".pdf");

            file.transferTo(tempFile);

            PDDocument document = PDDocument.load(tempFile);

            int pages = document.getNumberOfPages();

            log.info("PDF Loaded Successfully");
            log.info("Total Pages: {}", pages);

            document.close();

        } catch (IOException e) {

            throw new RuntimeException("Failed to process PDF");

        } finally {

            if (tempFile != null && tempFile.exists()) {
                tempFile.delete();
            }
        }
    }
}