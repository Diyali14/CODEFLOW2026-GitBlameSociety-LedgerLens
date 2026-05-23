function FinancialHealthCard() {

    const score = 78;

    return (
        <div className="bg-linear-to-r from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-lg">

            <h2 className="text-3xl font-bold">
                Financial Health Score
            </h2>

            <p className="mt-2 text-green-100">
                AI-calculated financial wellness indicator
            </p>

            <div className="mt-8">

                <div className="flex justify-between mb-3">

                    <span>Score</span>

                    <span className="font-bold">
                        {score}/100
                    </span>

                </div>

                <div className="w-full bg-white/20 rounded-full h-5">

                    <div
                        className="bg-white h-5 rounded-full"
                        style={{
                            width: `${score}%`,
                        }}
                    ></div>

                </div>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="bg-white/10 rounded-2xl p-4">

                    <p className="text-sm text-green-100">
                        Savings Ratio
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                        23%
                    </h3>

                </div>

                <div className="bg-white/10 rounded-2xl p-4">

                    <p className="text-sm text-green-100">
                        Expense Stability
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                        Good
                    </h3>

                </div>

            </div>

        </div>
    );
}

export default FinancialHealthCard;