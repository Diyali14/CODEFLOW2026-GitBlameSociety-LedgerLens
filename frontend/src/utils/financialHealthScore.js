const clamp = (value, min = 0, max = 100) => {
    return Math.max(min, Math.min(max, value));
};

/* =========================================
   1. SAVINGS RATIO SCORE
========================================= */
const calculateSavingsRatioScore = (
    income,
    expenses
) => {

    if (!income || income <= 0)
        return 0;
    const savingsRatio =
        ((income - expenses) / income) * 100;

    if (savingsRatio > 40)
        return 100;

    if (savingsRatio >= 25)
        return 80;

    if (savingsRatio >= 15)
        return 60;

    if (savingsRatio >= 5)
        return 40;

    if (savingsRatio >= 0)
        return 20;

    return 0;
};

/* =========================================
   2. EXPENSE TREND STABILITY
========================================= */
const calculateExpenseTrendScore = (
    currentExpense,
    previousExpense
) => {

    if (!previousExpense || previousExpense <= 0)
        return 100;

    const growth =
        ((currentExpense - previousExpense)
            / previousExpense) * 100;

    if (growth < 0)
        return 100;

    if (growth <= 5)
        return 80;

    if (growth <= 15)
        return 60;

    if (growth <= 30)
        return 30;

    return 0;
};

/* =========================================
   3. CATEGORY DOMINANCE SCORE
========================================= */
const calculateCategoryDominanceScore = (
    highestCategorySpend,
    totalExpense,
    category
) => {

    if (!totalExpense || totalExpense <= 0)
        return 100;

    const dominance = (highestCategorySpend / totalExpense) * 100;

    let score = 100;

    if (dominance < 20)
        score = 100;
    else if (dominance < 35)
        score = 80;
    else if (dominance < 50)
        score = 50;
    else
        score = 20;

    const riskyCategories = [
        "EMI",
        "Loan",
        "Credit Card",
    ];

    if (
        riskyCategories.includes(category)
    ) {
        score -= 20;
    }

    return clamp(score);
};

/* =========================================
   4. RECURRING STABILITY SCORE
========================================= */
const calculateRecurringScore = (
    recurringExpense,
    income
) => {

    if (!income || income <= 0)
        return 0;

    const ratio =
        (recurringExpense / income) * 100;

    if (ratio < 20)
        return 100;
    if (ratio < 40)
        return 70;

    if (ratio < 60)
        return 40;

    return 10;
};

/* =========================================
   5. ANOMALY SCORE
========================================= */
const calculateAnomalyScore = (
    anomalies = []
) => {

    let score = 100;

    anomalies.forEach((item) => {

        if (item.severity === "Small")
            score -= 5;
        else if (
            item.severity === "Medium"
        )
            score -= 10;

        else if (
            item.severity === "High"
        )
            score -= 25;
    });

    return clamp(score);
};

/* =========================================
   6. LIQUIDITY / RESERVE SCORE
========================================= */
const calculateLiquidityScore = (
    totalSavings,
    monthlyExpense
) => {
    if (
        !monthlyExpense ||
        monthlyExpense <= 0
    )
        return 100;

    const reserveMonths =
        totalSavings / monthlyExpense;

    if (reserveMonths > 12)
        return 100;

    if (reserveMonths >= 6)
        return 80;

    if (reserveMonths >= 3)
        return 60;

    if (reserveMonths >= 1)
        return 30;

    return 10;
};
/* =========================================
   CONSISTENCY MULTIPLIER
========================================= */
const calculateConsistencyMultiplier = (
    savingsRates = []
) => {

    if (!savingsRates.length)
        return 1;

    const mean =
        savingsRates.reduce(
            (sum, value) => sum + value,
            0
        ) / savingsRates.length;

    const variance =
        savingsRates.reduce(
            (sum, value) => {
                return sum + Math.pow(value - mean, 2);
            },
            0
        ) / savingsRates.length;
    const stdDev = Math.sqrt(variance);

    const consistency =
        1 - stdDev / 100;

    return Math.max(0.7, consistency);
};

/* =========================================
   MAIN FINANCIAL HEALTH SCORE
========================================= */
export const calculateFinancialHealthScore = ({
    income,
    currentExpense,
    previousExpense,
    highestCategorySpend,
    highestCategory,
    recurringExpense,
    anomalies,
    totalSavings,
    savingsRates,
}) => {

    const savingsRatioScore =
        calculateSavingsRatioScore(
            income,
            currentExpense
        );

    const expenseTrendScore =
        calculateExpenseTrendScore(
            currentExpense,
            previousExpense
        );

    const categoryDominanceScore =
        calculateCategoryDominanceScore(
            highestCategorySpend,
            currentExpense,
            highestCategory
        );

    const recurringScore =
        calculateRecurringScore(
            recurringExpense,
            income
        );

    const anomalyScore =
        calculateAnomalyScore(
            anomalies
        );

    const liquidityScore =
        calculateLiquidityScore(
            totalSavings,
            currentExpense
        );

    const baseScore =
        (
            0.30 * savingsRatioScore +
            0.20 * expenseTrendScore +
            0.15 * categoryDominanceScore +
            0.15 * recurringScore +
            0.10 * anomalyScore +
            0.10 * liquidityScore
        );

    const consistencyMultiplier =
        calculateConsistencyMultiplier(
            savingsRates
        );

    const finalScore =
        baseScore * consistencyMultiplier;

    return {
        finalScore: Math.round(
            clamp(finalScore)
        ),

        breakdown: {
            savingsRatioScore,
            expenseTrendScore,
            categoryDominanceScore,
            recurringScore,
            anomalyScore,
            liquidityScore,
        },
    };
};