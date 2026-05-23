function RecurringPaymentsCard({
    recurring,
}) {

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-bold text-green-700 mb-5">
                Recurring Payments
            </h2>

            <div className="space-y-4">

                {recurring.map((item, index) => (

                    <div
                        key={index}
                        className="border border-green-100 bg-green-50 rounded-xl p-4"
                    >

                        <p className="font-semibold">
                            {item.name}
                        </p>

                        <p className="text-sm text-slate-500">
                            ₹{item.amount}
                        </p>

                        <p className="text-sm text-green-700">
                            {item.frequency}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default RecurringPaymentsCard;