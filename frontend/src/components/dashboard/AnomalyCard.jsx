function AnomalyCard({
    anomalies,
}) {

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-bold text-red-600 mb-5">
                Suspicious Transactions
            </h2>

            <div className="space-y-4">

                {anomalies.map((item) => (

                    <div
                        key={item.transactionId}
                        className="border border-red-200 bg-red-50 rounded-xl p-4"
                    >

                        <p className="font-semibold">
                            ₹{item.amount}
                        </p>

                        <p className="text-sm text-slate-500">
                            Category: {item.category}
                        </p>

                        <p className="text-sm text-red-600 mt-1">
                            Risk Score: {item.score}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default AnomalyCard;