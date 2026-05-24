// import { Navigate } from "react-router-dom";

// import useAuth from "../hooks/useAuth";

// import PageLoader from "../components/common/PageLoader";

// function ProtectedRoute({ children }) {

//     const { user, loading } = useAuth();

//     if (loading) {
//         return <PageLoader />;
//     }

//     if (!user) {
//         return <Navigate to="/login" />;
//     }

//     return children;
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PageLoader from "../components/common/PageLoader";

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <PageLoader />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;