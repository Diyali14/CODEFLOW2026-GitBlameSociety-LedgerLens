import RecommendationCard from "../components/insights/RecommendationCard";

import {
    aiRecommendations,
} from "../data/dummyData";

function RecommendationsPage() {

    return (
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-10">

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-162.5 h-162.5 bg-emerald-300/20 blur-[160px] rounded-full" />

            {/* Header */}
            <div className="
                relative overflow-hidden
                rounded-4xl
                border border-emerald-100
                bg-white/70 backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(16,185,129,0.08)]
                p-8
            ">

                <div className="absolute inset-0 bg-linear-to-br from-white/80 via-transparent to-emerald-50/40" />

                <div className="relative z-10">

                    <h1 className="text-3xl md:text-4xl font-light tracking-[-0.03em] text-slate-900">
                        AI Financial Recommendations
                    </h1>

                    <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl">
                        Personalized insights generated from your spending patterns,
                        savings behavior, and recurring financial trends.
                    </p>

                </div>

            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {aiRecommendations.map((item, index) => (

                    <RecommendationCard
                        key={index}
                        item={item}
                    />

                ))}

            </div>

        </div>
    );
}

export default RecommendationsPage;