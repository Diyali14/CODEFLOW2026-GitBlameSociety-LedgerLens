import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UploadPage from "../pages/UploadPage";
import DashboardPage from "../pages/DashboardPage";
import TransactionsPage from "../pages/TransactionsPage";
import InsightsPage from "../pages/InsightsPage";
import AIRecommendationsPage from "../pages/AIRecommendationsPage";
import AnomaliesPage from "../pages/AnomaliesPage";
import RecurringPage from "../pages/RecurringPaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />

                </Route>

                <Route
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route path="/upload" element={<UploadPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                    <Route path="/insights" element={<InsightsPage />} />
                    <Route path="/recommendations" element={<AIRecommendationsPage />} />
                    <Route path="/anomalies" element={<AnomaliesPage />} />
                    <Route path="/recurring" element={<RecurringPage />} />
                    <Route path="/profile" element={<ProfilePage />} />

                </Route>

                <Route path="*" element={<NotFoundPage />} />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;