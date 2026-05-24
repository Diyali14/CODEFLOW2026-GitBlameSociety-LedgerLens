import {
    signupApi,
    loginApi,
    logoutApi,
    getCurrentUserApi,
} from "../api/authApi";

function useAuth() {

    const signup = async (data) => {

        const response =
            await signupApi(data);

        return response;
    };

    const login = async (data) => {

        const response =
            await loginApi(data);

        return response;
    };

    const logout = async () => {

        const response =
            await logoutApi();

        return response;
    };

    const getCurrentUser = async () => {

        const response =
            await getCurrentUserApi();

        return response;
    };

    return {
        signup,
        login,
        logout,
        getCurrentUser,
    };
}

export default useAuth;