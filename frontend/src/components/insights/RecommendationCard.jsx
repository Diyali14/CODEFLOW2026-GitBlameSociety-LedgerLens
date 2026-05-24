function RecommendationCard({ item }) {

    const isHigh = item.impact === "High";

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-emerald-100
            bg-white/70 backdrop-blur-xl
            p-7
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]
        ">

            {/* soft glow */}
            <div className="absolute inset-0 bg-linear-to-br from-emerald-50/60 via-white to-yellow-50/30" />

            {/* accent orb */}
            <div className={`
                absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40
                ${isHigh ? "bg-red-300" : "bg-yellow-300"}
            `} />

            <div className="relative z-10">

                <div className="flex items-start justify-between gap-4">

                    <h2 className="text-xl md:text-2xl font-medium text-slate-900 tracking-[-0.02em]">
                        {item.title}
                    </h2>

                    <span className={`
                        px-4 py-1.5 rounded-full text-xs font-medium border
                        ${isHigh
                            ? "bg-red-50 text-red-600 border-red-100"
                            : "bg-yellow-50 text-yellow-700 border-yellow-100"
                        }
                    `}>
                        {item.impact} Impact
                    </span>

                </div>

                <p className="text-slate-600 mt-5 leading-relaxed">
                    {item.description}
                </p>

                {/* subtle footer highlight */}
                <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-emerald-200 to-transparent" />

                <div className="mt-4 text-xs text-slate-400">
                    AI-driven insight • personalized recommendation
                </div>

            </div>

        </div>
    );
}

export default RecommendationCard;