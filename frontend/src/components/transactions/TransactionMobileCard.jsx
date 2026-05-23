function TransactionMobileCard({
    txn,
}) {

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">

            <div className="flex items-start justify-between">

                <div>

                    <h3 className="font-bold text-lg text-slate-800">
                        {txn.narration}
                    </h3>

                    <p className="text-slate-500 mt-1">
                        {txn.date}
                    </p>

                </div>

                <span
                    className={`px-3 py-1 rounded-full text-sm
          ${txn.anomaly
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-700"
                        }`}
                >
                    {txn.anomaly
                        ? "Suspicious"
                        : "Normal"}
                </span>

            </div>

            <div className="mt-5 flex items-center justify-between">

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                    {txn.category}

                </span>

                <h2 className="text-2xl font-bold text-red-600">
                    ₹{txn.debit}
                </h2>

            </div>

        </div>
    );
}

export default TransactionMobileCard;