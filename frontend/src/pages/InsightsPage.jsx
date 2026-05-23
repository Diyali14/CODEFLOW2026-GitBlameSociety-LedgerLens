import AIAnalysisHero from "../components/insights/AIAnalysisHero";
import FinancialScoreCard from "../components/insights/FinancialScoreCard";
import SpendingBehaviorCard from "../components/insights/SpendingBehaviorCard";
import SavingsOpportunityCard from "../components/insights/SavingsOpportunityCard";
import RiskAnalysisCard from "../components/insights/RiskAnalysisCard";
import InsightTimeline from "../components/insights/InsightTimeline";

import {
    financialHealthDetails,
    spendingBehavior,
    savingsOpportunities,
    aiRisks,
    insightTimeline,
} from "../data/dummyData";

function InsightsPage() {

    return (
        <div className="space-y-8">

            <AIAnalysisHero />

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">

                <FinancialScoreCard
                    data={financialHealthDetails}
                />

                <SpendingBehaviorCard
                    data={spendingBehavior}
                />

            </div>

            <div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                    Savings Opportunities
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {savingsOpportunities.map(
                        (item, index) => (

                            <SavingsOpportunityCard
                                key={index}
                                item={item}
                            />

                        )
                    )}

                </div>

            </div>

            <div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                    AI Risk Analysis
                </h2>

                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">

                    {aiRisks.map(
                        (risk, index) => (

                            <RiskAnalysisCard
                                key={index}
                                risk={risk}
                            />

                        )
                    )}

                </div>

            </div>

            <InsightTimeline
                data={insightTimeline}
            />

        </div>
    );
}

export default InsightsPage;