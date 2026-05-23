function FinancialScoreCard({
    data,
}) {

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-800">
                Financial Health Score
            </h2>

            <div className="mt-8 flex items-center justify-center">

                <div className="w-48 h-48 rounded-full border-14 border-green-500 flex items-center justify-center">

                    <div>

                        <h1 className="text-5xl font-bold text-green-700 text-center">
                            {data.score}
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