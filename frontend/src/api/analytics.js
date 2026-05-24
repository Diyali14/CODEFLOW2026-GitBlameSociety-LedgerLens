import axiosInstance from "./axiosInstance";

export const getDashboardAnalyticsApi =
    async () => {

        const response =
            await axiosInstance.get(
                "/api/analytics/dashboard"
            );

        return response.data;
    };

export const getTransactionsApi =
    async () => {

        const response =
            await axiosInstance.get(
                "/api/analytics/transactions-table"
            );

        return response.data;
    };

export const getCategorySpending = async () => {

    const response = await axiosInstance.get(
        "/api/analytics/spending-by-category"
    );

    return response.data;
};

export const getHighestCategorySpending =
    async () => {

        const response =
            await axiosInstance.get(
                "/api/analytics/highest-category-spending"
            );

        return response.data;
    };

export const getRecurringTransactionsApi =
    async () => {

        const response =
            await axiosInstance.get(
                "/api/analytics/recurring-transactions"
            );

        return response.data;
    };