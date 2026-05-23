function TransactionStats({
    transactions,
}) {

    const totalTransactions =
        transactions.length;

    const suspiciousCount =
        transactions.filter(
            (txn) => txn.anomaly
        ).length;

    const totalSpent =
        transactions.reduce(
            (acc, txn) => acc + txn.debit,
            0
        );

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

                <p className="text-slate-500">
                    Total Transactions
                </p>

                <h2 className="text-4xl font-bold text-green-700 mt-3">
                    {totalTransactions}
                </h2>

            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

                <p className="text-slate-500">
                    Total Spent
                </p>

                <h2 className="text-4xl font-bold text-red-600 mt-3">
                    ₹{totalSpent}
                </h2>

            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

                <p className="text-slate-500">
                    Suspicious Transactions
                </p>

                <h2 className="text-4xl font-bold text-orange-500 mt-3">
                    {suspiciousCount}
                </h2>

            </div>

        </div>
    );
}

export default TransactionStats;