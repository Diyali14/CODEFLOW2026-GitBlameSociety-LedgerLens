package com.bankai.bank_statement_analyzer.pdf;

import com.bankai.bank_statement_analyzer.dto.pdf.RawTransactionDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import technology.tabula.*;
import technology.tabula.extractors.SpreadsheetExtractionAlgorithm;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class PdfExtractorService {

    public List<RawTransactionDto> extractTables(
            MultipartFile file
    ) {

        List<RawTransactionDto> transactions = new ArrayList<>();

        File tempFile = null;

        try {

            tempFile = File.createTempFile(
                    "statement-",
                    ".pdf"
            );

            file.transferTo(tempFile);

            PDDocument document = PDDocument.load(tempFile);

            ObjectExtractor extractor =
                    new ObjectExtractor(document);

            SpreadsheetExtractionAlgorithm sea =
                    new SpreadsheetExtractionAlgorithm();

            PageIterator pages = extractor.extract();

            while (pages.hasNext()) {

                Page page = pages.next();

                List<Table> tables = sea.extract(page);

                for (Table table : tables) {

                    List<List<RectangularTextContainer>> rows =
                            table.getRows();

                    for (int i = 1; i < rows.size(); i++) {

                        List<RectangularTextContainer> cells =
                                rows.get(i);

                        if (cells.size() < 5) {
                            continue;
                        }

                        RawTransactionDto dto =
                                RawTransactionDto.builder()
                                        .date(cells.get(0).getText())
                                        .narration(cells.get(1).getText())
                                        .debit(cells.get(2).getText())
                                        .credit(cells.get(3).getText())
                                        .balance(cells.get(4).getText())
                                        .build();

                        transactions.add(dto);
                    }
                }
            }

            document.close();

            log.info(
                    "Extracted {} transactions",
                    transactions.size()
            );

            return transactions;

        } catch (IOException e) {

            throw new RuntimeException(
                    "Failed to extract PDF data"
            );

        } finally {

            if (tempFile != null && tempFile.exists()) {
                tempFile.delete();
            }
        }
    }
}