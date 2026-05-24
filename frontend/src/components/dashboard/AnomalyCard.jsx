function AnomalyCard({ anomalies }) {

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-red-100
            bg-white/60 backdrop-blur-2xl
            p-6
        ">

            {/* red glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-300/20 blur-[140px]" />

            <h2 className="text-xl font-medium text-red-600 relative z-10">
                Suspicious Activity
            </h2>

            <p className="text-sm text-slate-500 mt-1 relative z-10">
                AI-detected anomalies requiring attention
            </p>

            <div className="space-y-4 mt-5 relative z-10">

                {anomalies.map((item) => (
                    <div
                        key={item.transactionId}
                        className="
                            rounded-2xl
                            border border-red-100
                            bg-linear-to-br from-red-50/70 to-white
                            p-4
                        "
                    >

                        <div className="flex justify-between items-center">

                            <p className="font-medium text-slate-900">
                                ₹{item.amount}
                            </p>

                            <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">
                                Risk {item.score}
                            </span>

                        </div>

                        <p className="text-sm text-slate-500 mt-1">
                            {item.category}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default AnomalyCard;