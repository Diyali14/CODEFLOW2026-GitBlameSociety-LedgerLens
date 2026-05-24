import {
    getHighestCategorySpending,
    getRecurringTransactionsApi,
} from "../api/analytics";

import { suspiciousTransactions } from "../data/dummyData";

/**
 * ONE single normalized financial dataset
 */
export const buildFinancialDataset = async () => {
    const [categoryRes] = await Promise.all([
        getHighestCategorySpending(),
        getRecurringTransactionsApi(),
    ]);

    return {
        income: 120000,
        currentExpense: 70000,
        previousExpense: 65000,

        highestCategorySpend: Number(categoryRes.total),
        highestCategory: categoryRes.category,

        recurringExpense: 20000,

        anomalies: suspiciousTransactions,

        totalSavings: 450000,

        savingsRates: [25, 24, 26, 23, 27],
    };
};