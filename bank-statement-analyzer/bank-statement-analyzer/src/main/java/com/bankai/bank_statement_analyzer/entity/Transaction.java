package com.bankai.bank_statement_analyzer.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "transactions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate txnDate;

    private String narration;

    private BigDecimal debit;

    private BigDecimal credit;

    private BigDecimal balance;

    private String category;

    private Boolean anomaly;

    private Double confidence;

    @ManyToOne
    @JoinColumn(name = "statement_id")
    private Statement statement;
}
