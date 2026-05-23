function TransactionTable({ transactions }) {

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-emerald-100
            bg-white/60 backdrop-blur-2xl
            shadow-sm
        ">

            <div className="p-6 border-b border-emerald-100 bg-white/40">
                <h2 className="text-lg font-medium text-slate-900">
                    Recent Transactions
                </h2>
            </div>

            <div className="overflow-x-auto">

                <table className="w-full min-w-225">

                    <thead className="bg-emerald-50/60 text-slate-600">

                        <tr>

                            <th className="text-left p-5">Date</th>
                            <th className="text-left p-5">Narration</th>
                            <th className="text-left p-5">Category</th>
                            <th className="text-left p-5">Amount</th>
                            <th className="text-left p-5">Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {transactions.map((txn) => (
                            <tr
                                key={txn.transactionId}
                                className="
                                    border-b border-emerald-50
                                    hover:bg-emerald-50/40 transition
                                "
                            >

                                <td className="p-5 text-slate-600">
                                    {txn.date}
                                </td>

                                <td className="p-5 font-medium text-slate-900">
                                    {txn.narration}
                                </td>

                                <td className="p-5">
                                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs">
                                        {txn.category}
                                    </span>
                                </td>

                                <td className="p-5 font-semibold text-red-500">
                                    ₹{txn.debit}
                                </td>

                                <td className="p-5">

                                    {txn.anomaly ? (
                                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
                                            Suspicious
                                        </span>
                                    ) : (
                                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs">
                                            Normal
                                        </span>
                                    )}

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default TransactionTable;