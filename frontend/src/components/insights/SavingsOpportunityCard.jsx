function SavingsOpportunityCard({
    item,
}) {

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

            <div className="flex items-center justify-between">

                <h2 className="text-xl font-bold text-slate-800">
                    {item.source}
                </h2>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Save ₹{item.possibleSaving}
                </span>

            </div>

        </div>
    );
}

export default SavingsOpportunityCard;