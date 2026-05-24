import { useEffect, useState, useMemo } from "react";

import DashboardSummary from "../components/dashboard/DashboardSummary";
import MonthlyTrendChart from "../components/dashboard/MonthlyTrendChart";
import AIInsightCard from "../components/dashboard/AIInsightCard";
import AnomalyCard from "../components/dashboard/AnomalyCard";
import RecurringPaymentsCard from "../components/dashboard/RecurringPaymentsCard";
import TransactionTable from "../components/dashboard/TransactionTable";
import FinancialHealthCard from "../components/dashboard/FinancialHealthCard";

import IncomeExpenseBarChart from "../components/charts/IncomeExpenseBarChart";
import SavingsTrendAreaChart from "../components/charts/SavingsTrendAreaChart";
import CategoryComparisonChart from "../components/charts/CategoryComparisonChart";

import {
    getDashboardAnalyticsApi,
    getTransactionsApi,
    getRecurringTransactionsApi,
    getHighestCategorySpending,
} from "../api/analytics";

import { anomalies, aiSummary } from "../data/dummyData";

import { calculateFinancialHealthScore } from "../utils/financialHealthScore";

function DashboardPage() {

    // =========================
    // ALL HOOKS ALWAYS FIRST
    // =========================
    const [dashboardData, setDashboardData] = useState(null);
    const [recentTransactions, setRecentTransactions] = useState([]);
    const [recurringPayments, setRecurringPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);

            const [
                dashboardResponse,
                transactionsResponse,
                recurringResponse,
                highestCategoryResponse,
            ] = await Promise.all([
                getDashboardAnalyticsApi(),
                getTransactionsApi(),
                getRecurringTransactionsApi(),
                getHighestCategorySpending(),
            ]);

            const enriched = {
                ...dashboardResponse,
                highestCategorySpending: highestCategoryResponse,
            };

            setDashboardData(enriched);

            setRecentTransactions(
                transactionsResponse.slice(0, 5).map((txn, i) => ({
                    transactionId: i + 1,
                    date: txn.date,
                    narration: txn.narration,
                    category: txn.category,
                    debit: Number(txn.debit),
                    credit: Number(txn.credit),
                    anomaly: txn.status,
                }))
            );

            setRecurringPayments(
                recurringResponse
                    .filter(i => Number(i.amount) > 0)
                    .slice(0, 5)
                    .map((item, i) => ({
                        id: i + 1,
                        name: item.narration,
                        amount: Number(item.amount),
                        frequency: `${item.frequency} times`,
                    }))
            );

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // SAFE DERIVED VALUES (NO HOOKS)
    // =========================
    const financialInput = dashboardData ? {
        income: dashboardData.totalIncome,
        currentExpense: dashboardData.totalExpense,
        previousExpense:
            dashboardData.monthlyExpenseTrend?.[0]?.totalExpense || dashboardData.totalExpense,

        highestCategorySpend:
            dashboardData.highestCategorySpending?.total || 0,

        highestCategory:
            dashboardData.highestCategorySpending?.category || "Other",

        recurringExpense: recurringPayments.reduce((s, r) => s + r.amount, 0),

        anomalies: anomalies,

        totalSavings: dashboardData.totalSavings,

        savingsRates:
            dashboardData.monthlySavingsTrend?.map(m => m.savingsRate || 0) || [],
    } : null;

    // =========================
    // SAFE MEMO (NO CONDITIONALS)
    // =========================
    const financialHealth = useMemo(() => {
        if (!financialInput) {
            return {
                finalScore: 0,
                breakdown: {}
            };
        }

        return calculateFinancialHealthScore(financialInput);
    }, [financialInput]);

    // =========================
    // LOADING AFTER HOOKS (IMPORTANT FIX)
    // =========================
    if (loading || !dashboardData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading dashboard analytics...
            </div>
        );
    }

    // =========================
    // UI DATA
    // =========================
    const dashboardSummary = {
        income: dashboardData.totalIncome,
        expense: dashboardData.totalExpense,
        savings: dashboardData.totalSavings,
        topCategory: dashboardData.highestCategorySpending?.category,
    };

    const monthLabels = [
        "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const monthlyTrend = dashboardData.monthlyExpenseTrend.map(i => ({
        month: monthLabels[i.month],
        expense: i.totalExpense,
    }));

    const incomeExpenseData = dashboardData.monthlyExpenseTrend.map(i => ({
        month: monthLabels[i.month],
        expense: i.totalExpense,
        income: dashboardData.totalIncome / 12,
    }));

    const savingsTrendData = dashboardData.monthlySavingsTrend.map(i => ({
        month: monthLabels[i.month],
        savings: i.savings,
    }));

    // =========================
    // RENDER
    // =========================
    return (
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 space-y-12">

            <DashboardSummary summary={dashboardSummary} />

            <FinancialHealthCard
                data={{
                    score: financialHealth.finalScore,
                    breakdown: financialHealth.breakdown,
                }}
            />

            <section className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
                <MonthlyTrendChart data={monthlyTrend} />

                <div>
                    <IncomeExpenseBarChart data={incomeExpenseData} />
                    <SavingsTrendAreaChart data={savingsTrendData} />
                </div>
            </section>

            <CategoryComparisonChart />

            <AIInsightCard summary={aiSummary} />
            <AnomalyCard anomalies={anomalies} />
            <RecurringPaymentsCard recurring={recurringPayments} />

            <TransactionTable transactions={recentTransactions} />

        </div>
    );
}

export default DashboardPage;