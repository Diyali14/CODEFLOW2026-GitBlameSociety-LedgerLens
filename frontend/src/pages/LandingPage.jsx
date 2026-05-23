import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center">

            <h1 className="text-6xl font-bold mb-6 text-blue-400">
                LedgerLens AI
            </h1>

            <p className="text-xl text-slate-300 mb-8">
                AI Powered Bank Statement Analyzer
            </p>

            <div className="flex gap-5">

                <Link
                    to="/login"
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
                >
                    Login
                </Link>

                <Link
                    to="/signup"
                    className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg"
                >
                    Signup
                </Link>

            </div>

        </div>
    );
}

export default LandingPage;