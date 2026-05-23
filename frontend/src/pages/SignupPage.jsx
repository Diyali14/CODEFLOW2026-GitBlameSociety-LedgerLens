import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import SignupForm from "../components/auth/SignupForm";
import useAuth from "../hooks/useAuth";
import AuthBackground from "../components/animations/AuthBackground";

function SignupPage() {

    const { signup } = useAuth();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleSignup = async (data) => {

        try {

            setLoading(true);

            const response = await signup(data);

            if (response.success) {

                toast.success(response.message);

                navigate("/login");

            } else {

                toast.error(response.message);
            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Signup failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#f7faf7] flex items-center justify-center px-4">

            <AuthBackground />

            {/* Top glow */}
            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.06),transparent_40%)]" />

            <div className="relative z-10 w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-8">
                    <Link
                        to="/"
                        className="inline-block text-5xl font-semibold tracking-[-0.04em] text-emerald-700 font-['Space_Grotesk']"
                    >
                        LedgerLens
                    </Link>

                    <p className="mt-4 text-slate-500 text-sm tracking-wide">
                        AI Powered Financial Intelligence
                    </p>
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-4xl border border-emerald-100 bg-white/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(16,185,129,0.08)] p-10">

                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/80 via-transparent to-emerald-50/40 pointer-events-none" />

                    <div className="relative z-10">

                        <div className="mb-8">
                            <h1 className="text-4xl font-light tracking-[-0.04em] text-slate-900 mb-3">
                                Create account
                            </h1>

                            <p className="text-slate-500 leading-relaxed">
                                Start analyzing your financial data with AI-powered insights.
                            </p>
                        </div>

                        <SignupForm
                            onSubmit={handleSignup}
                            loading={loading}
                        />

                        <div className="mt-8 space-y-4">

                            <p className="text-center text-sm text-slate-500">

                                Already have an account?

                                <Link
                                    to="/login"
                                    className="ml-2 font-medium text-emerald-700 hover:text-emerald-600 transition-colors"
                                >
                                    Login
                                </Link>

                            </p>

                            <p className="text-center text-sm text-slate-500">

                                Return to

                                <Link
                                    to="/"
                                    className="ml-2 font-medium text-emerald-700 hover:text-emerald-600 transition-colors"
                                >
                                    Home
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default SignupPage;