function SpendingBehaviorCard({
    data,
}) {

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-800">
                Spending Behavior Analysis
            </h2>

            <div className="space-y-5 mt-8">

                <div className="bg-green-50 rounded-2xl p-5">

                    <p className="text-slate-500">
                        Highest Spending Category
                    </p>

                    <h3 className="text-3xl font-bold text-green-700 mt-2">
                        {data.topCategory}
                    </h3>

                </div>

                <div className="bg-slate-100 rounded-2xl p-5">

                    <p className="text-slate-500">
                        Category Share
                    </p>

                    <h3 className="text-3xl font-bold text-slate-800 mt-2">
                        {data.topPercentage}%
                    </h3>

                </div>

                <div className="bg-slate-100 rounded-2xl p-5">

                    <p className="text-slate-500">
                        Average Daily Spend
                    </p>

                    <h3 className="text-3xl font-bold text-red-600 mt-2">
                        ₹{data.averageDailySpend}
                    </h3>

                </div>

                <div className="bg-orange-50 rounded-2xl p-5">

                    <p className="text-slate-500">
                        AI Observation
                    </p>

                    <h3 className="text-xl font-semibold text-orange-600 mt-2">
                        {data.spendingPattern}
                    </h3>

                </div>

            </div>

        </div>
    );
}

export default SpendingBehaviorCard;