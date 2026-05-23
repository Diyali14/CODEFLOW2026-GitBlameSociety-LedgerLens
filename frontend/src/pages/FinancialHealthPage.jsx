import FinancialScoreCard from "../components/insights/FinancialScoreCard";

import {
    financialHealthDetails,
} from "../data/dummyData";

function FinancialHealthPage() {

    return (
        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold text-slate-800">
                    Financial Health
                </h1>

                <p className="text-slate-500 mt-3 text-lg">
                    Comprehensive overview of your financial wellness and spending stability.
                </p>

            </div>

            <FinancialScoreCard
                data={financialHealthDetails}
            />

        </div>
    );
}

export default FinancialHealthPage;