function TransactionTable({
    transactions,
}) {

    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

            <div className="p-6 border-b border-slate-200">

                <h2 className="text-2xl font-bold text-slate-800">
                    Recent Transactions
                </h2>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full min-w-175">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="text-left p-5">
                                Date
                            </th>

                            <th className="text-left p-5">
                                Narration
                            </th>

                            <th className="text-left p-5">
                                Category
                            </th>

                            <th className="text-left p-5">
                                Amount
                            </th>

                            <th className="text-left p-5">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {transactions.map((txn) => (

                            <tr
                                key={txn.transactionId}
                                className="border-b border-slate-100 hover:bg-slate-50"
                            >

                                <td className="p-5">
                                    {txn.date}
                                </td>

                                <td className="p-5 font-medium">
                                    {txn.narration}
                                </td>

                                <td className="p-5">

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                        {txn.category}
                                    </span>

                                </td>

                                <td className="p-5 font-semibold text-red-600">
                                    ₹{txn.debit}
                                </td>

                                <td className="p-5">

                                    {txn.anomaly ? (

                                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                                            Suspicious
                                        </span>

                                    ) : (

                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
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