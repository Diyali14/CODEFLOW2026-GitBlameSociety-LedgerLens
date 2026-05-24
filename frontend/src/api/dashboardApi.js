import axiosInstance from "./axiosInstance";

/**
 * GET /api/analytics/dashboard
 * Returns dashboard summary: totalIncome, totalExpense, totalSavings,
 * monthlyExpenseTrend, monthlySavingsTrend, highestCategorySpending
 */
export const getDashboardSummaryApi = async () => {
    const response = await axiosInstance.get(
        "/api/analytics/dashboard"
    );
    return response.data;
};

/**
 * GET /api/analytics/spending-by-category
 * Returns an array of { category, total } objects
 */
export const getDashboardChartsApi = async () => {
    const response = await axiosInstance.get(
        "/api/analytics/spending-by-category"
    );
    return response.data;
};
