import { Link } from "react-router-dom";
import LandingBackground from "../components/animations/LandingBackground";

function LandingPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#f7faf7] text-[#0f172a]">
            <LandingBackground />

            {/* Soft white glow */}
            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_45%)]" />

            {/* Top border */}
            <div className="fixed top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-300/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
                {/* HEADER */}
                <header className="border-b border-emerald-100/70 backdrop-blur-md bg-white/50">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        <h1 className="font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.03em] text-emerald-700">
                            LedgerLens
                        </h1>

                        <Link
                            to="/signup"
                            className="text-sm px-5 py-2 border border-emerald-200 rounded-lg text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                        >
                            Sign Up
                        </Link>
                    </div>
                </header>

                {/* HERO */}
                <section className="min-h-[calc(100vh-80px)] flex items-center px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 mb-6">
                            AI Powered Financial Intelligence
                        </p>

                        <h2 className="text-5xl md:text-7xl font-light leading-tight tracking-[-0.04em] mb-8 text-slate-900">
                            Understand your bank statements instantly
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
                            Upload statements, detect anomalies, categorize expenses,
                            identify recurring payments, and generate smart financial
                            insights using AI.
                        </p>

                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <Link
                                to="/login"
                                className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                            >
                                Login to Explore
                            </Link>

                            <Link
                                to="/signup"
                                className="px-8 py-3 rounded-xl border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="px-6 py-24 border-t border-emerald-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div>
                                <h3 className="text-sm font-semibold tracking-[0.25em] text-emerald-600 mb-4">
                                    AI ANALYSIS
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    Automatically classify transactions, detect spending
                                    patterns, and generate intelligent summaries.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold tracking-[0.25em] text-emerald-600 mb-4">
                                    ANOMALY DETECTION
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    Identify suspicious transactions, unusual spending,
                                    and hidden financial irregularities instantly.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold tracking-[0.25em] text-emerald-600 mb-4">
                                    SMART INSIGHTS
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    Understand recurring expenses, subscriptions, and
                                    monthly financial behavior with visual insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OVERVIEW */}
                <section className="px-6 py-24 border-t border-emerald-100">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl font-light mb-16 text-slate-900">
                            What You Can Do
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* CARD 1 */}
                            <div className="p-8 rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h4 className="font-semibold text-lg mb-5 text-slate-900">
                                    Statement Analysis
                                </h4>

                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li>AI Transaction Categorization</li>
                                    <li>Financial Summaries</li>
                                    <li>Spending Breakdown</li>
                                    <li>Trend Identification</li>
                                    <li>Smart Reports</li>
                                </ul>
                            </div>

                            {/* CARD 2 */}
                            <div className="p-8 rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h4 className="font-semibold text-lg mb-5 text-slate-900">
                                    Fraud Detection
                                </h4>

                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li>Suspicious Transactions</li>
                                    <li>Outlier Detection</li>
                                    <li>High-Risk Spending Alerts</li>
                                    <li>Duplicate Transaction Detection</li>
                                    <li>Behavior Monitoring</li>
                                </ul>
                            </div>

                            {/* CARD 3 */}
                            <div className="p-8 rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h4 className="font-semibold text-lg mb-5 text-slate-900">
                                    Recurring Payments
                                </h4>

                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li>Subscription Tracking</li>
                                    <li>Monthly Bill Monitoring</li>
                                    <li>Recurring Expense Detection</li>
                                    <li>Payment Predictions</li>
                                    <li>Budget Insights</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 py-28 border-t border-emerald-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-slate-900">
                            Financial clarity powered by AI
                        </h3>

                        <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
                            Upload your statements and transform raw transaction data
                            into actionable insights within seconds.
                        </p>

                        <Link
                            to="/signup"
                            className="inline-flex px-10 py-4 rounded-2xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-500/20"
                        >
                            Get Started
                        </Link>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t border-emerald-100 px-6 py-12 bg-white/50 backdrop-blur-md">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                            <div className="max-w-md">
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    AI-driven financial intelligence platform for bank
                                    statement analysis, anomaly detection, and smart
                                    transaction insights.
                                </p>
                            </div>

                            <Link
                                to="/signup"
                                className="text-sm px-6 py-2 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                            >
                                Sign Up
                            </Link>
                        </div>

                        <div className="border-t border-emerald-100 pt-8 text-center text-sm text-slate-500">
                            © 2026 LedgerLens. All Rights Reserved.
                            <i>
                                {" "}Designed & Developed by{" "}
                                <a
                                    href="https://github.com/Diyali14/CODEFLOW2026-GitBlameSociety-LedgerLens"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-emerald-600 transition-colors"
                                >
                                    Git Blame Society
                                </a>
                            </i>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default LandingPage;