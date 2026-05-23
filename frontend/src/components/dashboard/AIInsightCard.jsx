import {
    FaRobot,
} from "react-icons/fa";

function AIInsightCard({
    summary,
}) {

    return (
        <div className="bg-linear-to-r from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-lg">

            <div className="flex items-center gap-4 mb-5">

                <div className="bg-white/20 p-4 rounded-2xl">

                    <FaRobot className="text-3xl" />

                </div>

                <div>

                    <h2 className="text-3xl font-bold">
                        AI Financial Insights
                    </h2>

                    <p className="text-green-100 mt-1">
                        Smart analysis powered by AI
                    </p>

                </div>

            </div>

            <p className="leading-8 text-lg text-green-50 whitespace-pre-line">
                {summary}
            </p>

        </div>
    );
}

export default AIInsightCard;