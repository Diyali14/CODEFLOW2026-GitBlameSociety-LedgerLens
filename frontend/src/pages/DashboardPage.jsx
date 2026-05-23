import DashboardSummary from "../components/dashboard/DashboardSummary";

import ExpensePieChart from "../components/dashboard/ExpensePieChart";

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
    dashboardSummary,
    categoryDistribution,
    monthlyTrend,
    transactions,
    anomalies,
    recurringPayments,
    aiSummary,
    incomeExpenseData,
    savingsTrendData,
    categoryComparisonData,
} from "../data/dummyData";

function DashboardPage() {

    return (
        <div className="space-y-8">

            <DashboardSummary
                summary={dashboardSummary}
            />

            <FinancialHealthCard />

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">

                <ExpensePieChart
                    data={categoryDistribution}
                />

                <MonthlyTrendChart
                    data={monthlyTrend}
                />

            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">

                <IncomeExpenseBarChart
                    data={incomeExpenseData}
                />

                <SavingsTrendAreaChart
                    data={savingsTrendData}
                />

            </div>

            <CategoryComparisonChart
                data={categoryComparisonData}
            />

            <AIInsightCard
                summary={aiSummary}
            />

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">

                <AnomalyCard
                    anomalies={anomalies}
                />

                <RecurringPaymentsCard
                    recurring={recurringPayments}
                />

            </div>

            <TransactionTable
                transactions={transactions}
            />

        </div>
    );
}

export default DashboardPage;