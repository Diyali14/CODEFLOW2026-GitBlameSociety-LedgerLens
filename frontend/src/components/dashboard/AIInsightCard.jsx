import { FaRobot } from "react-icons/fa";

function AIInsightCard({ summary }) {

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-emerald-100
            bg-white/60 backdrop-blur-2xl
            p-8 shadow-sm
        ">

            {/* glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-300/30 blur-[120px]" />

            <div className="flex items-start gap-5 relative z-10">

                <div className="
                    p-4 rounded-2xl
                    bg-linear-to-br from-emerald-500 to-green-600
                    text-white shadow-md
                ">
                    <FaRobot className="text-2xl" />
                </div>

                <div>
                    <h2 className="text-2xl font-medium text-slate-900">
                        AI Financial Insights
                    </h2>

                    <p className="text-slate-500 text-sm mt-1">
                        Real-time intelligence from your spending behavior
                    </p>
                </div>

            </div>

            <div className="mt-6 relative z-10">

                <p className="text-slate-600 leading-7 whitespace-pre-line">
                    {summary}
                </p>

            </div>

        </div>
    );
}

export default AIInsightCard;