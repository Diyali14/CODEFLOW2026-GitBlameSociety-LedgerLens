function RecurringPaymentsCard({ recurring }) {

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-emerald-100
            bg-white/60 backdrop-blur-2xl
            p-6
        ">

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-200/20 blur-[120px]" />

            <h2 className="text-lg font-medium text-slate-900 mb-5">
                Recurring Payments
            </h2>

            <div className="space-y-4">

                {recurring.map((item, index) => (
                    <div
                        key={index}
                        className="
                            rounded-2xl
                            border border-emerald-100
                            bg-linear-to-br from-emerald-50/60 to-white
                            p-4
                        "
                    >

                        <div className="flex justify-between">
                            <p className="font-medium text-slate-900">
                                {item.name}
                            </p>

                            <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                                {item.frequency}
                            </span>
                        </div>

                        <p className="text-sm text-slate-500 mt-1">
                            ₹{item.amount}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default RecurringPaymentsCard;