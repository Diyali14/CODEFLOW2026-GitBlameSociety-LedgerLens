function RecommendationCard({
    item,
}) {

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-lg transition-all">

            <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold text-slate-800">
                    {item.title}
                </h2>

                <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold
          ${item.impact === "High"
                            ? "bg-red-100 text-red-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                >
                    {item.impact} Impact
                </span>

            </div>

            <p className="text-slate-600 mt-5 leading-7">
                {item.description}
            </p>

        </div>
    );
}

export default RecommendationCard;