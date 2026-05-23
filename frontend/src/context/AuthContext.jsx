import {
    createContext,
    useEffect,
    useState,
} from "react";

import {
    getCurrentUserApi,
    loginApi,
    logoutApi,
    signupApi,
} from "../api/authApi";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {

        try {

            const response = await getCurrentUserApi();

            if (response.success) {
                setUser(response.data);
            }

        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (data) => {

        const response = await loginApi(data);

        if (response.success) {
            setUser(response.data);
        }

        return response;
    };

    const signup = async (data) => {

        const response = await signupApi(data);

        return response;
    };

    const logout = async () => {

        await logoutApi();

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                signup,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;