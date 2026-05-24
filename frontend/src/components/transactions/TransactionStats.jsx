function TransactionStats({ transactions }) {

    const totalTransactions = transactions.length;

    const suspiciousCount = transactions.filter(txn => txn.anomaly).length;

    const totalSpent = transactions.reduce((acc, txn) => acc + txn.debit, 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <StatCard
                label="Total Transactions"
                value={totalTransactions}
                tone="emerald"
            />

            <StatCard
                label="Total Spent"
                value={`₹${totalSpent}`}
                tone="red"
            />

            <StatCard
                label="Suspicious Transactions"
                value={suspiciousCount}
                tone="amber"
            />

        </div>
    );
}

function StatCard({ label, value, tone }) {

    const tones = {
        emerald: "from-emerald-50/60 to-white text-emerald-700",
        red: "from-red-50/60 to-white text-red-600",
        amber: "from-yellow-50/60 to-white text-yellow-600",
    };

    return (
        <div className="
            relative overflow-hidden rounded-[1.8rem]
            border border-emerald-100
            bg-white/70 backdrop-blur-xl
            p-6
        ">
            <div className={`absolute inset-0 bg-linear-to-br ${tones[tone]}`} />

            <div className="relative z-10">
                <p className="text-slate-500 text-sm">{label}</p>
                <h2 className="text-2xl font-medium mt-3">{value}</h2>
            </div>
        </div>
    );
}

export default TransactionStats;