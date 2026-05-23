import RecommendationCard from "../components/insights/RecommendationCard";

import {
    aiRecommendations,
} from "../data/dummyData";

function RecommendationsPage() {

    return (
        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold text-slate-800">
                    AI Recommendations
                </h1>

                <p className="text-slate-500 mt-3 text-lg">
                    Personalized financial recommendations generated using AI analysis.
                </p>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {aiRecommendations.map(
                    (item, index) => (

                        <RecommendationCard
                            key={index}
                            item={item}
                        />

                    )
                )}

            </div>

        </div>
    );
}

export default RecommendationsPage;