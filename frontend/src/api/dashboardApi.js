import axiosInstance from "./axiosInstance";

export const getDashboardSummaryApi = async () => {
    const response = await axiosInstance.get(
        "/api/dashboard/summary"
    );

    return response.data;
};

export const getDashboardChartsApi = async () => {
    const response = await axiosInstance.get(
        "/api/dashboard/charts"
    );

    return response.data;
};