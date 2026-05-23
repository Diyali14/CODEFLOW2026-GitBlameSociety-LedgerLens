import axiosInstance from "./axiosInstance";

export const getAISummaryApi = async () => {

    const response = await axiosInstance.get(
        "/api/insights/summary"
    );

    return response.data;
};

export const getAnomaliesApi = async () => {

    const response = await axiosInstance.get(
        "/api/insights/anomalies"
    );

    return response.data;
};

export const getRecurringApi = async () => {

    const response = await axiosInstance.get(
        "/api/insights/recurring"
    );

    return response.data;
};