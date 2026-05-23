function EmptyTransactions() {

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center shadow-sm">

            <h2 className="text-3xl font-bold text-slate-700">
                No Transactions Found
            </h2>

            <p className="text-slate-500 mt-4">
                Try changing filters or search keywords.
            </p>

        </div>
    );
}

export default EmptyTransactions;