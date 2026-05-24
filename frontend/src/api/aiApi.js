import axiosInstance from "./axiosInstance";

export const triggerAiAnalysisApi =
    async () => {

        const response =
            await axiosInstance.get(
                "/api/test-ai"
            );

        return response.data;
    };