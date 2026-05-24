import axiosInstance from "./axiosInstance";

export const uploadStatementApi = async (
    file,
    onUploadProgress
) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await axiosInstance.post(
        "/api/statements/upload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },

            onUploadProgress,
        }
    );

    return response.data;
};