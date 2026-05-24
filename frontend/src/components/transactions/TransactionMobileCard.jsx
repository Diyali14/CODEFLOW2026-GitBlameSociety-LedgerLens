function TransactionMobileCard({ txn }) {

    return (
        <div className="
            relative overflow-hidden rounded-4xl
            border border-emerald-100
            bg-white/70 backdrop-blur-xl
            p-5
        ">

            <div className="absolute inset-0 bg-linear-to-br from-white via-emerald-50/30 to-white" />

            <div className="relative z-10">

                <div className="flex justify-between">

                    <div>
                        <h3 className="font-medium text-slate-900">
                            {txn.narration}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                            {txn.date}
                        </p>
                    </div>

                    <span className={
                        txn.anomaly
                            ? "badge-red"
                            : "badge-green"
                    }>
                        {txn.anomaly ? "Risk" : "Normal"}
                    </span>

                </div>

                <div className="flex justify-between mt-5">

                    <span className="badge-amber">
                        {txn.category}
                    </span>

                    <span className="text-red-600 font-medium">
                        ₹{txn.debit}
                    </span>

                </div>

            </div>

            <style>{`
                .badge-red{
                    background:#fee2e2;
                    color:#dc2626;
                    padding:4px 10px;
                    border-radius:999px;
                    font-size:12px;
                }
                .badge-green{
                    background:#d1fae5;
                    color:#059669;
                    padding:4px 10px;
                    border-radius:999px;
                    font-size:12px;
                }
                .badge-amber{
                    background:#fef3c7;
                    color:#b45309;
                    padding:4px 10px;
                    border-radius:999px;
                    font-size:12px;
                }
            `}</style>

        </div>
    );
}

export default TransactionMobileCard;