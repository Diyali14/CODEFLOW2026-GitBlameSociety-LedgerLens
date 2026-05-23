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
    dashboardSummary,
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
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 space-y-12">

            {/* ambient multi-glow background */}
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-225 h-225">
                <div className="absolute inset-0 bg-emerald-300/20 blur-[180px] rounded-full" />
                <div className="absolute inset-0 bg-sky-300/20 blur-[180px] rounded-full translate-x-32" />
                <div className="absolute inset-0 bg-amber-200/20 blur-[180px] rounded-full -translate-x-32" />
            </div>

            {/* HERO SUMMARY */}
            <section className="relative">
                <DashboardSummary summary={dashboardSummary} />
            </section>

            {/* FINANCIAL HEALTH */}
            <section className="relative">
                <FinancialHealthCard />
            </section>

            {/* CHART SECTION 1 */}
            <section className="grid grid-cols-1 2xl:grid-cols-2 gap-8">

                <div className="
                    rounded-4xl
                    bg-white/60 backdrop-blur-2xl
                    border border-emerald-100
                    p-6 shadow-sm
                ">
                    <MonthlyTrendChart data={monthlyTrend} />
                </div>

                <div className="space-y-8">

                    <div className="
                        rounded-4xl
                        bg-white/60 backdrop-blur-2xl
                        border border-sky-100
                        p-6
                    ">
                        <IncomeExpenseBarChart data={incomeExpenseData} />
                    </div>

                    <div className="
                        rounded-4xl
                        bg-white/60 backdrop-blur-2xl
                        border border-amber-100
                        p-6
                    ">
                        <SavingsTrendAreaChart data={savingsTrendData} />
                    </div>

                </div>

            </section>

            {/* CATEGORY ANALYTICS */}
            <section className="
                rounded-4xl
                bg-white/60 backdrop-blur-2xl
                border border-purple-100
                p-6
            ">
                <CategoryComparisonChart data={categoryComparisonData} />
            </section>

            {/* INSIGHT STRIP (AI + anomaly + recurring) */}
            <section className="grid grid-cols-1 2xl:grid-cols-3 gap-8">

                <div className="2xl:col-span-1">
                    <AIInsightCard summary={aiSummary} />
                </div>

                <AnomalyCard anomalies={anomalies} />

                <RecurringPaymentsCard recurring={recurringPayments} />

            </section>

            {/* TRANSACTIONS (DATA LAYER) */}
            <section className="
                rounded-4xl
                bg-white/60 backdrop-blur-2xl
                border border-emerald-100
                p-6
            ">
                <TransactionTable transactions={transactions} />
            </section>

        </div>
    );
}

export default DashboardPage;