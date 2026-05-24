import { useEffect, useState } from "react";

import FinancialScoreCard from "../components/insights/FinancialScoreCard";
import SpendingBehaviorCard from "../components/insights/SpendingBehaviorCard";
import SavingsOpportunityCard from "../components/insights/SavingsOpportunityCard";
import RiskAnalysisCard from "../components/insights/RiskAnalysisCard";
import InsightTimeline from "../components/insights/InsightTimeline";
import AIAnalysisHero from "../components/insights/AIAnalysisHero";

import { computeFinancialHealth } from "../services/financialHealthService";
import { buildFinancialDataset } from "../services/analyticsService";

import {
    savingsOpportunities,
    aiRisks,
    insightTimeline,
} from "../data/dummyData";

function InsightsPage() {
    const [financial, setFinancial] = useState(null);
    const [spendingBehavior, setSpendingBehavior] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);

            const dataset = await buildFinancialDataset();

            const result = computeFinancialHealth(dataset);

            setFinancial(result);

            setSpendingBehavior({
                category: dataset.highestCategory,
                total: Number(dataset.highestCategorySpend).toLocaleString(),
                averageDailySpend: "12,450",
                spendingPattern:
                    "Your spending is heavily concentrated in this category.",
            });

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <AIAnalysisHero />

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">

                <FinancialScoreCard
                    data={{
                        score: financial?.finalScore,
                        breakdown: financial?.breakdown,
                    }}
                />

                {loading ? (
                    <div className="bg-white rounded-3xl border p-8 flex items-center justify-center min-h-105">
                        Loading spending insights...
                    </div>
                ) : (
                    <SpendingBehaviorCard data={spendingBehavior} />
                )}

            </div>

            <div>
                <h2 className="text-3xl font-bold mb-6">
                    Savings Opportunities
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {savingsOpportunities.map((item, i) => (
                        <SavingsOpportunityCard key={i} item={item} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-6">
                    AI Risk Analysis
                </h2>

                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
                    {aiRisks.map((risk, i) => (
                        <RiskAnalysisCard key={i} risk={risk} />
                    ))}
                </div>
            </div>

            <InsightTimeline data={insightTimeline} />
        </div>
    );
}

export default InsightsPage;