import axiosInstance from "./axiosInstance";

export const signupApi = async (data) => {
    const response = await axiosInstance.post(
        "/api/auth/signup",
        data
    );

    return response.data;
};

export const loginApi = async (data) => {
    const response = await axiosInstance.post(
        "/api/auth/login",
        data
    );

    return response.data;
};

export const logoutApi = async () => {
    const response = await axiosInstance.post(
        "/api/auth/logout"
    );

    return response.data;
};

export const getCurrentUserApi = async () => {
    const response = await axiosInstance.get(
        "/api/auth/me"
    );

    return response.data;
};