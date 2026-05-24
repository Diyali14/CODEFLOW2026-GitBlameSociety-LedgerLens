function FinancialHealthCard({ data }) {
    const score = data?.score;

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-emerald-100
            bg-white/60 backdrop-blur-2xl
            p-8 shadow-sm
        ">

            {/* glow */}
            <div className="absolute -top-24 right-0 w-125 h-125 bg-emerald-300/20 blur-[140px]" />

            <h2 className="text-2xl font-medium text-slate-900 relative z-10">
                Financial Health Score
            </h2>

            <p className="mt-1 text-slate-500 text-sm relative z-10">
                AI-calculated financial wellness indicator
            </p>

            {/* score */}
            <div className="mt-8 relative z-10">

                <div className="flex justify-between text-sm text-slate-600 mb-3">
                    <span>Overall Score</span>
                    <span className="font-semibold text-emerald-700">
                        {score ?? "..."}/100
                    </span>
                </div>

                <div className="w-full h-3 bg-emerald-100 rounded-full overflow-hidden">
                    <div
                        className="h-3 bg-linear-to-r from-emerald-500 to-green-400 rounded-full"
                        style={{ width: `${score}%` }}
                    />
                </div>

            </div>

            {/* stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">

                <div className="rounded-2xl bg-emerald-50/70 p-4 border border-emerald-100">
                    <p className="text-xs text-slate-500">Savings Ratio</p>
                    <h3 className="text-xl font-semibold text-emerald-700 mt-1">
                        23%
                    </h3>
                </div>

                <div className="rounded-2xl bg-yellow-50/60 p-4 border border-yellow-100">
                    <p className="text-xs text-slate-500">Expense Stability</p>
                    <h3 className="text-xl font-semibold text-yellow-700 mt-1">
                        Good
                    </h3>
                </div>

            </div>

        </div>
    );
}

export default FinancialHealthCard;