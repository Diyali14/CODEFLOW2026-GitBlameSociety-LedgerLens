import { useEffect, useState } from "react";

import RecommendationCard from "../components/insights/RecommendationCard";

import {
    getHighestCategorySpending,
} from "../api/analytics";

const genericRecommendations = {
    Food: "Your food spending has been consistently higher than average. Consider reducing frequent online orders, limiting restaurant visits, and setting a fixed weekly dining budget to improve savings.",
    Shopping: "Your shopping expenses appear elevated. Try delaying non-essential purchases and creating a monthly shopping cap to avoid impulse spending.",
    Travel: "Travel costs are taking a significant portion of your monthly budget. Planning trips earlier and comparing transport options could help reduce expenses.",
    Entertainment: "Entertainment expenses are relatively high. Subscriptions and leisure activities can be optimized by prioritizing only the services you actively use.",
    Bills: "Utility and recurring bill expenses are growing steadily. Reviewing unused subscriptions and monitoring electricity consumption may help lower costs.",
    Healthcare: "Healthcare-related expenses are higher than usual. Preventive care planning and tracking medical purchases may improve financial balance.",
    Education: "Educational expenses are contributing heavily to your budget. Reviewing course subscriptions and planning learning investments carefully could help.",
    Others: "Your miscellaneous expenses are increasing steadily. Tracking smaller transactions more closely may help identify avoidable spending patterns.",
};

function RecommendationsPage() {

    const [recommendations, setRecommendations] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        fetchRecommendations();
    }, []);

    const fetchRecommendations =
        async () => {

            try {

                const response =
                    await getHighestCategorySpending();

                const rawCategory =
                    response?.category || "Food";

                const highestCategory =
                    rawCategory.charAt(0).toUpperCase() +
                    rawCategory.slice(1).toLowerCase();

                const allCategories =
                    Object.keys(
                        genericRecommendations
                    ).filter(
                        (category) =>
                            category !== highestCategory
                    );

                const randomCategory =
                    allCategories[
                    Math.floor(
                        Math.random() *
                        allCategories.length
                    )
                    ];

                const generatedRecommendations = [
                    {
                        title: `Reduce ${highestCategory} Expenses`,
                        impact: "High",
                        description:
                            genericRecommendations[
                            highestCategory
                            ] ||
                            genericRecommendations
                                .Others,
                    },
                    {
                        title: `Improve ${randomCategory} Spending`,
                        impact: "Moderate",
                        description:
                            genericRecommendations[
                            randomCategory
                            ] ||
                            genericRecommendations
                                .Others,
                    },
                ];

                setRecommendations(
                    generatedRecommendations
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

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

            {/* Loading */}
            {loading ? (

                <div className="text-center py-20 text-slate-500">
                    Loading recommendations...
                </div>

            ) : (

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {recommendations.map((item, index) => (

                        <RecommendationCard
                            key={index}
                            item={item}
                        />

                    ))}

                </div>

            )}

        </div>
    );
}

export default RecommendationsPage;