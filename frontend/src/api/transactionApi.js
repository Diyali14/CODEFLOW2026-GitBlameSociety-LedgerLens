import axiosInstance from "./axiosInstance";

export const getTransactionsApi = async () => {

    const response = await axiosInstance.get(
        "/api/transactions?page=0&size=10"
    );

    return response.data;
};