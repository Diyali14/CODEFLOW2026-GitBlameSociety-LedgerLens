import { Link } from "react-router-dom";

import {
    FaBell,
    FaBars,
    FaSignOutAlt,
} from "react-icons/fa";

function Navbar({ setMobileOpen }) {

    const handleLogout = () => {

        localStorage.removeItem("token");

        window.location.href = "/login";

    };

    return (

        <div
            className="
                h-auto min-h-20
                sticky top-0 z-40
                flex flex-col md:flex-row
                md:items-center
                justify-between
                gap-4 md:gap-0
                px-4 md:px-8
                py-3 md:py-0
                bg-white/70 backdrop-blur-2xl
                border-b border-emerald-100
                shadow-sm
            "
        >

            {/* LEFT */}
            <div className="flex items-center justify-between w-full md:w-auto">

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden text-xl text-emerald-700"
                    >
                        <FaBars />
                    </button>

                    <div>

                        <h1 className="text-lg sm:text-xl md:text-2xl font-light text-slate-900">
                            Financial Dashboard
                        </h1>

                        <p className="text-slate-500 text-xs sm:text-sm">
                            AI-powered financial intelligence
                        </p>

                    </div>

                </div>

            </div>

            {/* RIGHT */}
            <div
                className="
                    flex items-center justify-end
                    gap-3 sm:gap-5
                    w-full md:w-auto
                "
            >

                {/* Notifications */}
                <Link
                    to="/recommendations"
                    className="relative shrink-0"
                >

                    <FaBell className="text-xl text-slate-600 hover:text-emerald-600 transition" />

                    <span
                        className="
                            absolute -top-1 -right-1
                            w-2.5 h-2.5
                            bg-red-500 rounded-full
                            animate-pulse
                        "
                    />

                </Link>

                {/* Profile */}
                <Link
                    to="/profile"
                    className="shrink-0"
                >

                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="profile"
                        className="w-10 h-10 rounded-full border border-emerald-100"
                    />

                </Link>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="
                        flex items-center gap-2
                        px-3 sm:px-4 py-2
                        rounded-xl
                        text-sm font-medium
                        text-red-600
                        bg-red-50 hover:bg-red-100
                        transition
                        whitespace-nowrap
                    "
                >

                    <FaSignOutAlt />

                    <span className="hidden sm:inline">
                        Logout
                    </span>

                </button>

            </div>

        </div>

    );

}

export default Navbar;