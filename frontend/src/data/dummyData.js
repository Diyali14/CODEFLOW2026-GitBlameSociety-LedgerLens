export const dashboardSummary = {
    totalIncome: 85000,
    totalExpense: 65000,
    savings: 20000,
    topCategory: "Food",
    anomalyCount: 2,
    recurringSubscriptions: 4,
};

export const categoryDistribution = [
    {
        category: "Food",
        amount: 23000,
    },
    {
        category: "Travel",
        amount: 12000,
    },
    {
        category: "Shopping",
        amount: 18000,
    },
    {
        category: "Bills",
        amount: 12000,
    },
];

export const monthlyTrend = [
    {
        month: "Jan",
        expense: 12000,
    },
    {
        month: "Feb",
        expense: 18000,
    },
    {
        month: "Mar",
        expense: 14000,
    },
    {
        month: "Apr",
        expense: 21000,
    },
    {
        month: "May",
        expense: 17000,
    },
];

export const transactions = [
    {
        transactionId: 1,
        date: "2026-04-01",
        narration: "UPI SWIGGY",
        debit: 450,
        category: "Food",
        anomaly: false,
    },
    {
        transactionId: 2,
        date: "2026-04-03",
        narration: "AMAZON INDIA",
        debit: 3200,
        category: "Shopping",
        anomaly: false,
    },
    {
        transactionId: 3,
        date: "2026-04-05",
        narration: "IRCTC",
        debit: 2100,
        category: "Travel",
        anomaly: false,
    },
    {
        transactionId: 4,
        date: "2026-04-07",
        narration: "NETFLIX",
        debit: 499,
        category: "Subscription",
        anomaly: false,
    },
];

export const anomalies = [
    {
        transactionId: 91,
        amount: 45000,
        category: "Food",
        score: 0.92,
    },
    {
        transactionId: 92,
        amount: 39000,
        category: "Shopping",
        score: 0.88,
    },
];

export const recurringPayments = [
    {
        name: "NETFLIX",
        amount: 499,
        frequency: "Monthly",
    },
    {
        name: "Spotify",
        amount: 199,
        frequency: "Monthly",
    },
    {
        name: "Electricity Bill",
        amount: 2500,
        frequency: "Monthly",
    },
];

export const aiSummary = `
Your spending is mostly concentrated in Food and Shopping categories.
Savings remain healthy at 23% of your total income.
2 unusual transactions were detected this month.
You may reduce recurring subscription costs to improve savings further.
`;

export const incomeExpenseData = [
    {
        month: "Jan",
        income: 45000,
        expense: 32000,
    },
    {
        month: "Feb",
        income: 52000,
        expense: 38000,
    },
    {
        month: "Mar",
        income: 48000,
        expense: 41000,
    },
    {
        month: "Apr",
        income: 61000,
        expense: 46000,
    },
    {
        month: "May",
        income: 58000,
        expense: 39000,
    },
];

export const savingsTrendData = [
    {
        month: "Jan",
        savings: 13000,
    },
    {
        month: "Feb",
        savings: 14000,
    },
    {
        month: "Mar",
        savings: 7000,
    },
    {
        month: "Apr",
        savings: 15000,
    },
    {
        month: "May",
        savings: 19000,
    },
];

export const categoryComparisonData = [
    {
        category: "Food",
        amount: 23000,
    },
    {
        category: "Shopping",
        amount: 18000,
    },
    {
        category: "Travel",
        amount: 12000,
    },
    {
        category: "Bills",
        amount: 10000,
    },
    {
        category: "Subscriptions",
        amount: 4000,
    },
];

export const allTransactions = [
    ...transactions,

    {
        transactionId: 5,
        date: "2026-04-08",
        narration: "ZOMATO",
        debit: 780,
        category: "Food",
        anomaly: false,
    },

    {
        transactionId: 6,
        date: "2026-04-10",
        narration: "UBER",
        debit: 560,
        category: "Travel",
        anomaly: false,
    },

    {
        transactionId: 7,
        date: "2026-04-12",
        narration: "APPLE MUSIC",
        debit: 99,
        category: "Subscription",
        anomaly: false,
    },

    {
        transactionId: 8,
        date: "2026-04-14",
        narration: "MYNTRA",
        debit: 5400,
        category: "Shopping",
        anomaly: true,
    },

    {
        transactionId: 9,
        date: "2026-04-15",
        narration: "BIG BASKET",
        debit: 3200,
        category: "Food",
        anomaly: false,
    },

    {
        transactionId: 10,
        date: "2026-04-17",
        narration: "ELECTRICITY BILL",
        debit: 2500,
        category: "Bills",
        anomaly: false,
    },

    {
        transactionId: 11,
        date: "2026-04-18",
        narration: "PAYTM MOVIES",
        debit: 1200,
        category: "Entertainment",
        anomaly: false,
    },

    {
        transactionId: 12,
        date: "2026-04-20",
        narration: "FLIPKART",
        debit: 8900,
        category: "Shopping",
        anomaly: true,
    },
];

export const aiRecommendations = [
    {
        title: "Reduce Food Delivery Expenses",
        description:
            "Food delivery expenses increased by 28% this month. Reducing online food orders can improve savings significantly.",
        impact: "High",
    },

    {
        title: "Cancel Unused Subscriptions",
        description:
            "You have 4 recurring subscriptions. Removing unused subscriptions may save approximately ₹1200/month.",
        impact: "Medium",
    },

    {
        title: "Emergency Fund Opportunity",
        description:
            "Your current savings ratio is healthy. Consider allocating 15% monthly towards an emergency fund.",
        impact: "High",
    },
];

export const spendingBehavior = {
    topCategory: "Food",
    topPercentage: 35,
    averageDailySpend: 2100,
    spendingPattern: "Weekend spending spikes detected",
};

export const financialHealthDetails = {
    score: 78,
    savingsRatio: 23,
    expenseStability: "Good",
    anomalyRisk: "Low",
    recurringLoad: "Moderate",
};

export const savingsOpportunities = [
    {
        source: "Food Delivery",
        possibleSaving: 3500,
    },
    {
        source: "Subscriptions",
        possibleSaving: 1200,
    },
    {
        source: "Impulse Shopping",
        possibleSaving: 5000,
    },
];

export const aiRisks = [
    {
        title: "High Shopping Variance",
        severity: "Medium",
        description:
            "Shopping expenses fluctuated heavily this month indicating impulsive purchase patterns.",
    },

    {
        title: "Large Single Transaction",
        severity: "High",
        description:
            "A suspicious transaction worth ₹45,000 was detected under Food category.",
    },
];

export const insightTimeline = [
    {
        month: "January",
        insight:
            "Spending remained stable with balanced savings.",
    },

    {
        month: "February",
        insight:
            "Travel expenses increased significantly.",
    },

    {
        month: "March",
        insight:
            "Food delivery spending crossed recommended limits.",
    },

    {
        month: "April",
        insight:
            "Recurring subscriptions increased by 2 new services.",
    },
];

export const suspiciousTransactions = [
    {
        id: 1,
        narration: "UPI SWIGGY",
        amount: 45000,
        severity: "High",
        date: "2026-04-02",
    },

    {
        id: 2,
        narration: "AMAZON INDIA",
        amount: 32000,
        severity: "Medium",
        date: "2026-04-10",
    },
];

export const recurringSubscriptionsData = [
    {
        name: "Netflix",
        monthly: 499,
        yearly: 5988,
        renewal: "5 May",
    },

    {
        name: "Spotify",
        monthly: 199,
        yearly: 2388,
        renewal: "12 May",
    },

    {
        name: "Amazon Prime",
        monthly: 299,
        yearly: 3588,
        renewal: "20 May",
    },
];

export const reportsData = [
    {
        title: "Monthly Financial Report",
        description:
            "Complete spending and savings analysis.",
    },

    {
        title: "AI Insights Report",
        description:
            "AI-generated financial intelligence report.",
    },

    {
        title: "Recurring Payments Report",
        description:
            "Subscription and recurring payment analysis.",
    },

    {
        title: "Risk & Anomaly Report",
        description:
            "Suspicious transaction analysis.",
    },
];

export const profileData = {
    username: "Sam",
    email: "sam@gmail.com",
    statementsAnalyzed: 12,
    financialScore: 78,
    uploads: 32,
};