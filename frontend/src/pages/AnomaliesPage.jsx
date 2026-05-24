import { useMemo } from "react";

import { suspiciousTransactions } from "../data/dummyData";
import { computeFinancialHealth } from "../services/financialHealthService";
import { buildFinancialDataset } from "../services/analyticsService";

const scoreLabels = {
    savingsRatioScore: "Savings Ratio",
    expenseTrendScore: "Expense Stability",
    categoryDominanceScore: "Category Balance",
    recurringScore: "Recurring Stability",
    anomalyScore: "Anomaly Safety",
    liquidityScore: "Liquidity Reserve",
};

function AnomaliesPage() {
    const dataset = {
        income: 120000,
        currentExpense: 70000,
        previousExpense: 65000,

        highestCategorySpend: 32000,
        highestCategory: "Food",

        recurringExpense: 20000,

        anomalies: suspiciousTransactions,

        totalSavings: 450000,

        savingsRates: [25, 24, 26, 23, 27],
    };

    const { finalScore, breakdown } = useMemo(() => {
        return computeFinancialHealth(dataset);
    }, []);

    const totalRisks = suspiciousTransactions.length;

    const highSeverityCount = useMemo(() => {
        return suspiciousTransactions.filter(
            (t) => t.severity === "High"
        ).length;
    }, []);

    return (
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-10">

            {/* =========================
                BACKGROUND GLOW
            ========================== */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-175 h-175 bg-red-400/20 blur-[170px] rounded-full" />

            {/* =========================
                HEADER
            ========================== */}
            <div className="
                relative overflow-hidden rounded-4xl
                border border-red-200/60
                bg-linear-to-br from-red-600 via-red-500 to-orange-500
                text-white p-8
                shadow-[0_20px_80px_rgba(239,68,68,0.25)]
            ">

                <div className="
                    absolute inset-0
                    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
                    -translate-x-full
                    animate-[shine_4s_ease-in-out_infinite]
                " />

                <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none" />

                <div className="relative z-10">

                    <h1 className="text-3xl md:text-4xl font-medium tracking-[-0.03em]">
                        AI Risk Monitoring
                    </h1>

                    <p className="mt-3 text-red-50/90 text-base md:text-lg max-w-2xl">
                        Detect unusual spending behavior, suspicious transactions,
                        and financial anomalies in real time using AI intelligence.
                    </p>

                </div>

            </div>

            {/* =========================
                STATS
            ========================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="
                    relative overflow-hidden rounded-[1.8rem]
                    border border-red-100
                    bg-white/70 backdrop-blur-xl
                    p-6
                ">
                    <div className="absolute inset-0 bg-linear-to-br from-red-50/60 via-white to-transparent" />

                    <div className="relative z-10">
                        <p className="text-slate-500 text-sm">Total Risks</p>
                        <h2 className="text-2xl font-medium text-red-600 mt-3">
                            {totalRisks}
                        </h2>
                    </div>
                </div>

                <div className="
                    relative overflow-hidden rounded-[1.8rem]
                    border border-red-100
                    bg-white/70 backdrop-blur-xl
                    p-6
                ">
                    <div className="absolute inset-0 bg-linear-to-br from-orange-50/40 via-white to-transparent" />

                    <div className="relative z-10">
                        <p className="text-slate-500 text-sm">High Severity</p>
                        <h2 className="text-2xl font-medium text-orange-500 mt-3">
                            {highSeverityCount}
                        </h2>
                    </div>
                </div>

                <div className="
                    relative overflow-hidden rounded-[1.8rem]
                    border border-red-100
                    bg-white/70 backdrop-blur-xl
                    p-6
                ">
                    <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-red-50/40" />

                    <div className="relative z-10">
                        <p className="text-slate-500 text-sm">Financial Health</p>
                        <h2 className="text-2xl font-medium text-slate-800 mt-3">
                            {finalScore}/100
                        </h2>
                    </div>
                </div>

            </div>

            {/* =========================
                SCORE BREAKDOWN
            ========================== */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {Object.entries(breakdown).map(([key, value]) => (
                    <div
                        key={key}
                        className="
                            rounded-[1.8rem]
                            border border-red-100
                            bg-white/70 backdrop-blur-xl
                            p-5
                        "
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-slate-600 text-sm">
                                {scoreLabels[key] || key}
                            </p>

                            <p className="font-semibold text-slate-800">
                                {value}
                            </p>
                        </div>

                        <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div
                                className="
                                    h-full rounded-full
                                    bg-linear-to-r from-red-500 to-orange-400
                                "
                                style={{ width: `${value}%` }}
                            />
                        </div>
                    </div>
                ))}

            </div>

            {/* =========================
                TABLE
            ========================== */}
            <div className="
                relative overflow-hidden rounded-4xl
                border border-red-100
                bg-white/70 backdrop-blur-2xl
            ">

                <div className="absolute inset-0 bg-linear-to-br from-white/80 via-transparent to-red-50/30" />

                <div className="relative z-10">

                    <div className="
                        p-6
                        border-b border-red-200
                        bg-linear-to-r from-red-600/90 via-red-500/80 to-orange-500/80
                        text-white
                    ">
                        <h2 className="text-lg font-medium">
                            Suspicious Transactions
                        </h2>

                        <p className="text-sm text-white/80 mt-1">
                            Flagged by AI anomaly detection system
                        </p>
                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-175">

                            <thead className="
                                bg-red-50
                                text-red-700
                                border-b border-red-100
                            ">
                                <tr>
                                    <th className="p-5 text-left font-medium">Date</th>
                                    <th className="p-5 text-left font-medium">Narration</th>
                                    <th className="p-5 text-left font-medium">Amount</th>
                                    <th className="p-5 text-left font-medium">Severity</th>
                                </tr>
                            </thead>

                            <tbody>

                                {suspiciousTransactions.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="
                                            border-b border-red-50
                                            hover:bg-red-50/30
                                            transition
                                        "
                                    >
                                        <td className="p-5 text-slate-600">
                                            {item.date}
                                        </td>

                                        <td className="p-5 font-medium text-slate-800">
                                            {item.narration}
                                        </td>

                                        <td className="p-5 font-semibold text-red-600">
                                            ₹{item.amount}
                                        </td>

                                        <td className="p-5">
                                            <span className={`
                                                px-3 py-1 rounded-full text-xs font-medium border
                                                ${item.severity === "High"
                                                    ? "bg-red-50 text-red-600 border-red-100"
                                                    : "bg-orange-50 text-orange-600 border-orange-100"
                                                }
                                            `}>
                                                {item.severity}
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AnomaliesPage;