import { useEffect, useState } from "react";

function FinancialScoreCard({ data }) {

    const [progress, setProgress] =
        useState(0);

    useEffect(() => {

        let start = 0;

        const end = data.score;

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

    }, [data.score]);

    const radius = 85;

    const circumference =
        2 * Math.PI * radius;

    const strokeDashoffset =
        circumference -
        (progress / 100) *
        circumference;

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-800">
                Financial Health Score
            </h2>

            <div className="mt-8 flex items-center justify-center">

                <div className="relative w-56 h-56 flex items-center justify-center">

                    <svg
                        className="absolute top-0 left-0 w-full h-full -rotate-90"
                        viewBox="0 0 220 220"
                    >

                        {/* Background Circle */}
                        <circle
                            cx="110"
                            cy="110"
                            r={radius}
                            stroke="#E2E8F0"
                            strokeWidth="14"
                            fill="none"
                        />

                        {/* Animated Progress Circle */}
                        <circle
                            cx="110"
                            cy="110"
                            r={radius}
                            stroke="#22C55E"
                            strokeWidth="14"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-300 ease-out"
                        />

                    </svg>

                    <div className="z-10">

                        <h1 className="text-5xl font-bold text-green-700 text-center">
                            {progress}
                        </h1>

                        <p className="text-slate-500 text-center mt-2">
                            Score
                        </p>

                    </div>

                </div>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="bg-slate-100 rounded-2xl p-5">

                    <p className="text-slate-500">
                        Savings Ratio
                    </p>

                    <h3 className="text-2xl font-bold text-green-700 mt-2">
                        {data.savingsRatio}%
                    </h3>

                </div>

                <div className="bg-slate-100 rounded-2xl p-5">

                    <p className="text-slate-500">
                        Expense Stability
                    </p>

                    <h3 className="text-2xl font-bold text-green-700 mt-2">
                        {data.expenseStability}
                    </h3>

                </div>

                <div className="bg-slate-100 rounded-2xl p-5">

                    <p className="text-slate-500">
                        Risk Level
                    </p>

                    <h3 className="text-2xl font-bold text-orange-500 mt-2">
                        {data.anomalyRisk}
                    </h3>

                </div>

                <div className="bg-slate-100 rounded-2xl p-5">

                    <p className="text-slate-500">
                        Recurring Load
                    </p>

                    <h3 className="text-2xl font-bold text-blue-600 mt-2">
                        {data.recurringLoad}
                    </h3>

                </div>

            </div>

        </div>
    );
}

export default FinancialScoreCard;