function EmptyTransactions() {

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-emerald-100
            bg-white/70 backdrop-blur-2xl
            p-16 text-center
        ">

            <div className="absolute inset-0 bg-linear-to-br from-emerald-50/40 via-white to-yellow-50/30" />

            <div className="relative z-10">

                <h2 className="text-2xl font-medium text-slate-900">
                    No Transactions Found
                </h2>

                <p className="text-slate-500 mt-3">
                    Try adjusting filters or search terms
                </p>

            </div>

        </div>
    );
}

export default EmptyTransactions;