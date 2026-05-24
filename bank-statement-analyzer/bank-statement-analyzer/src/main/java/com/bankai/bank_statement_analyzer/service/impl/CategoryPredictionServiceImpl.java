package com.bankai.bank_statement_analyzer.service.impl;

import com.bankai.bank_statement_analyzer.entity.Transaction;
import com.bankai.bank_statement_analyzer.repository.TransactionRepository;
import com.bankai.bank_statement_analyzer.service.CategoryPredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryPredictionServiceImpl
        implements CategoryPredictionService {

    private final TransactionRepository transactionRepository;

    @Override
    public void predictAndSaveCategories() {

        List<Transaction> transactions =
                transactionRepository.findByCategoryIsNull();

        for (Transaction txn : transactions) {

            String narration =
                    txn.getNarration().toLowerCase();

            // FOOD
            if (narration.contains("swiggy")
                    || narration.contains("zomato")
                    || narration.contains("restaurant")
                    || narration.contains("cafe")
                    || narration.contains("dominos")
                    || narration.contains("pizza")
                    || narration.contains("uber eats")) {

                txn.setCategory("FOOD");
                txn.setConfidence(0.95);
            }

            // TRAVEL
            else if (narration.contains("uber")
                    || narration.contains("ola")
                    || narration.contains("irctc")
                    || narration.contains("makemytrip")
                    || narration.contains("air india")
                    || narration.contains("metro")
                    || narration.contains("rapido")) {

                txn.setCategory("TRAVEL");
                txn.setConfidence(0.94);
            }

            // SUBSCRIPTION
            else if (narration.contains("netflix")
                    || narration.contains("spotify")
                    || narration.contains("amazon prime")
                    || narration.contains("youtube premium")
                    || narration.contains("hotstar")
                    || narration.contains("zee5")) {

                txn.setCategory("SUBSCRIPTION");
                txn.setConfidence(0.97);
            }

            // HEALTHCARE
            else if (narration.contains("hospital")
                    || narration.contains("pharmacy")
                    || narration.contains("medplus")
                    || narration.contains("apollo")
                    || narration.contains("health")
                    || narration.contains("clinic")) {

                txn.setCategory("HEALTHCARE");
                txn.setConfidence(0.93);
            }

            // SHOPPING
            else if (narration.contains("amazon")
                    || narration.contains("flipkart")
                    || narration.contains("myntra")
                    || narration.contains("ajio")
                    || narration.contains("meesho")
                    || narration.contains("shopping")) {

                txn.setCategory("SHOPPING");
                txn.setConfidence(0.91);
            }

            // UTILITIES
            else if (narration.contains("electricity")
                    || narration.contains("water bill")
                    || narration.contains("gas")
                    || narration.contains("broadband")
                    || narration.contains("wifi")
                    || narration.contains("recharge")) {

                txn.setCategory("UTILITIES");
                txn.setConfidence(0.89);
            }

            // ENTERTAINMENT
            else if (narration.contains("bookmyshow")
                    || narration.contains("inox")
                    || narration.contains("pvr")
                    || narration.contains("game")
                    || narration.contains("entertainment")) {

                txn.setCategory("ENTERTAINMENT");
                txn.setConfidence(0.88);
            }

            // INVESTMENT
            else if (narration.contains("mutual fund")
                    || narration.contains("sip")
                    || narration.contains("groww")
                    || narration.contains("zerodha")
                    || narration.contains("upstox")
                    || narration.contains("investment")) {

                txn.setCategory("INVESTMENT");
                txn.setConfidence(0.96);
            }

            // EMI
            else if (narration.contains("emi")
                    || narration.contains("loan")
                    || narration.contains("finance")
                    || narration.contains("bajaj")
                    || narration.contains("hdfc loan")) {

                txn.setCategory("EMI");
                txn.setConfidence(0.92);
            }

            // SALARY
            else if (narration.contains("salary")
                    || narration.contains("payroll")
                    || narration.contains("salary credit")) {

                txn.setCategory("SALARY");
                txn.setConfidence(0.99);
            }

            // TRANSFER
            else if (narration.contains("neft")
                    || narration.contains("imps")
                    || narration.contains("rtgs")
                    || narration.contains("upi")
                    || narration.contains("transfer")) {

                txn.setCategory("TRANSFER");
                txn.setConfidence(0.85);
            }

            // CASH WITHDRAWAL
            else if (narration.contains("atm")
                    || narration.contains("cash withdrawal")) {

                txn.setCategory("CASH WITHDRAWAL");
                txn.setConfidence(0.90);
            }

            // DEFAULT
            else {
                txn.setCategory("OTHERS");
                txn.setConfidence(0.50);
            }
        }

        transactionRepository.saveAll(transactions);
    }
}