import { Link } from "react-router-dom";
import {
    FaBell,
    FaBars,
    FaSignOutAlt,
} from "react-icons/fa";

function Navbar({ setMobileOpen }) {

    const handleLogout = () => {
        // keep simple hook-compatible placeholder
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="
            h-20 sticky top-0 z-40
            flex items-center justify-between
            px-4 md:px-8
            bg-white/70 backdrop-blur-2xl
            border-b border-emerald-100
            shadow-sm
        ">

            {/* LEFT */}
            <div className="flex items-center gap-4">

                <button
                    onClick={() => setMobileOpen(true)}
                    className="lg:hidden text-xl text-emerald-700"
                >
                    <FaBars />
                </button>

                <div>
                    <h1 className="text-xl md:text-2xl font-light text-slate-900">
                        Financial Dashboard
                    </h1>
                    <p className="text-slate-500 text-sm">
                        AI-powered financial intelligence
                    </p>
                </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-5">

                {/* Notifications → AI Recommendations */}
                <Link to="/recommendations" className="relative">

                    <FaBell className="text-xl text-slate-600 hover:text-emerald-600 transition" />

                    {/* dot instead of number */}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />

                </Link>

                {/* profile */}
                <Link to="/profile">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="profile"
                        className="w-10 h-10 rounded-full border border-emerald-100"
                    />
                </Link>

                {/* logout */}
                <button
                    onClick={handleLogout}
                    className="
                        flex items-center gap-2
                        px-4 py-2 rounded-xl
                        text-sm font-medium
                        text-red-600
                        bg-red-50 hover:bg-red-100
                        transition
                    "
                >
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Navbar;