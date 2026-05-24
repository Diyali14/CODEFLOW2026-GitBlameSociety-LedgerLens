import {
    FaRobot,
} from "react-icons/fa";

function AIAnalysisHero() {

    return (
        <div className="bg-linear-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white shadow-lg">

            <div className="max-w-4xl">

                <div className="flex items-center gap-5">

                    <div className="bg-white/20 p-5 rounded-3xl">

                        <FaRobot className="text-5xl" />

                    </div>

                    <div>

                        <h1 className="text-4xl md:text-5xl font-bold">
                            AI Financial Intelligence
                        </h1>

                        <p className="text-green-100 mt-4 text-lg">
                            Advanced AI-powered analysis of your financial behavior, spending patterns, anomalies, and savings opportunities.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AIAnalysisHero;