import { useEffect, useMemo, useState } from "react";

function FinancialScoreCard({ data }) {

    const [progress, setProgress] =
        useState(0);

    useEffect(() => {

        let start = 0;

        const end =
            data?.score || 0;

        const duration = 1500;

        const incrementTime =
            15;

        const step =
            end /
            (duration / incrementTime);

        const timer = setInterval(() => {

            start += step;

            if (start >= end) {

                start = end;

                clearInterval(timer);

            }

            setProgress(
                Math.round(start)
            );

        }, incrementTime);

        return () =>
            clearInterval(timer);

    }, [data?.score]);

    const radius = 85;

    const circumference =
        2 * Math.PI * radius;

    const strokeDashoffset =
        circumference -
        (progress / 100) *
        circumference;

    const healthLabel = useMemo(() => {

        if (progress >= 85)
            return "Excellent";

        if (progress >= 70)
            return "Good";

        if (progress >= 55)
            return "Moderate";

        if (progress >= 40)
            return "Risky";

        return "Critical";

    }, [progress]);

    const scoreColor = useMemo(() => {

        if (progress >= 85)
            return "#16A34A";

        if (progress >= 70)
            return "#22C55E";

        if (progress >= 55)
            return "#EAB308";

        if (progress >= 40)
            return "#F97316";

        return "#EF4444";

    }, [progress]);

    return (
        <div className="
            relative overflow-hidden
            bg-white rounded-4xl
            border border-slate-200
            p-8 shadow-sm
        ">

            {/* ambient glow */}
            <div className="
                absolute -top-24 right-0
                w-72 h-72
                bg-green-200/30
                blur-3xl
                rounded-full
            " />

            <div className="relative z-10">

                {/* HEADER */}
                <div className="flex items-start justify-between gap-4">

                    <div>

                        <h2 className="text-3xl font-bold text-slate-800 tracking-[-0.03em]">
                            Financial Health Score
                        </h2>

                        <p className="text-slate-500 mt-2">
                            AI-powered financial wellness analysis
                        </p>

                    </div>

                    <div className={`
                        px-4 py-2 rounded-full text-sm font-semibold border
                        ${progress >= 85
                            ? "bg-green-50 text-green-700 border-green-100"
                            : progress >= 70
                                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                : progress >= 55
                                    ? "bg-yellow-50 text-yellow-700 border-yellow-100"
                                    : progress >= 40
                                        ? "bg-orange-50 text-orange-700 border-orange-100"
                                        : "bg-red-50 text-red-700 border-red-100"
                        }
                    `}>
                        {healthLabel}
                    </div>

                </div>

                {/* SCORE CIRCLE */}
                <div className="mt-10 flex items-center justify-center">

                    <div className="
                        relative
                        w-64 h-64
                        flex items-center justify-center
                    ">

                        <svg
                            className="
                                absolute top-0 left-0
                                w-full h-full
                                -rotate-90
                            "
                            viewBox="0 0 220 220"
                        >

                            {/* Background */}
                            <circle
                                cx="110"
                                cy="110"
                                r={radius}
                                stroke="#E2E8F0"
                                strokeWidth="14"
                                fill="none"
                            />

                            {/* Progress */}
                            <circle
                                cx="110"
                                cy="110"
                                r={radius}
                                stroke={scoreColor}
                                strokeWidth="14"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                className="
                                    transition-all
                                    duration-500
                                    ease-out
                                "
                            />

                        </svg>

                        {/* CENTER CONTENT */}
                        <div className="z-10 text-center">

                            <h1
                                className="text-6xl font-bold"
                                style={{
                                    color: scoreColor,
                                }}
                            >
                                {progress}
                            </h1>

                            <p className="text-slate-500 mt-2">
                                /100 Score
                            </p>

                        </div>

                    </div>

                </div>

                {/* BREAKDOWN GRID */}
                <div className="
                    grid grid-cols-1 md:grid-cols-2
                    gap-5 mt-12
                ">

                    {/* Savings Ratio */}
                    <div className="
                        bg-green-50/70
                        border border-green-100
                        rounded-3xl
                        p-6
                    ">

                        <p className="text-slate-500 text-sm">
                            Savings Ratio Score
                        </p>

                        <h3 className="text-3xl font-bold text-green-700 mt-3">
                            {
                                data?.breakdown
                                    ?.savingsRatioScore || 0
                            }
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            Measures how much income is saved.
                        </p>

                    </div>

                    {/* Expense Trend */}
                    <div className="
                        bg-blue-50/70
                        border border-blue-100
                        rounded-3xl
                        p-6
                    ">

                        <p className="text-slate-500 text-sm">
                            Expense Stability
                        </p>

                        <h3 className="text-3xl font-bold text-blue-700 mt-3">
                            {
                                data?.breakdown
                                    ?.expenseTrendScore || 0
                            }
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            Detects aggressive expense growth.
                        </p>

                    </div>

                    {/* Category Dominance */}
                    <div className="
                        bg-orange-50/70
                        border border-orange-100
                        rounded-3xl
                        p-6
                    ">

                        <p className="text-slate-500 text-sm">
                            Spending Diversification
                        </p>

                        <h3 className="text-3xl font-bold text-orange-600 mt-3">
                            {
                                data?.breakdown
                                    ?.categoryDominanceScore || 0
                            }
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            Penalizes overspending concentration.
                        </p>

                    </div>

                    {/* Recurring Load */}
                    <div className="
                        bg-violet-50/70
                        border border-violet-100
                        rounded-3xl
                        p-6
                    ">

                        <p className="text-slate-500 text-sm">
                            Recurring Stability
                        </p>

                        <h3 className="text-3xl font-bold text-violet-700 mt-3">
                            {
                                data?.breakdown
                                    ?.recurringScore || 0
                            }
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            Measures subscription & EMI pressure.
                        </p>

                    </div>

                    {/* Anomaly */}
                    <div className="
                        bg-red-50/70
                        border border-red-100
                        rounded-3xl
                        p-6
                    ">

                        <p className="text-slate-500 text-sm">
                            Anomaly Score
                        </p>

                        <h3 className="text-3xl font-bold text-red-600 mt-3">
                            {
                                data?.breakdown
                                    ?.anomalyScore || 0
                            }
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            AI-detected suspicious behavior analysis.
                        </p>

                    </div>

                    {/* Liquidity */}
                    <div className="
                        bg-cyan-50/70
                        border border-cyan-100
                        rounded-3xl
                        p-6
                    ">

                        <p className="text-slate-500 text-sm">
                            Liquidity Reserve
                        </p>

                        <h3 className="text-3xl font-bold text-cyan-700 mt-3">
                            {
                                data?.breakdown
                                    ?.liquidityScore || 0
                            }
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            Measures emergency reserve readiness.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default FinancialScoreCard;