import {
    FaBell,
    FaSearch,
    FaBars,
} from "react-icons/fa";

function Navbar({
    setMobileOpen,
}) {

    return (
        <div className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40">

            <div className="flex items-center gap-4">

                <button
                    onClick={() => setMobileOpen(true)}
                    className="lg:hidden text-2xl text-slate-700"
                >
                    <FaBars />
                </button>

                <div>

                    <h1 className="text-2xl font-bold text-slate-800">
                        Financial Dashboard
                    </h1>

                    <p className="text-slate-500 text-sm">
                        AI-powered analytics overview
                    </p>

                </div>

            </div>

            <div className="flex items-center gap-5">

                <button className="relative">

                    <FaBell className="text-2xl text-slate-600" />

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                        2
                    </span>

                </button>

                <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="profile"
                    className="w-12 h-12 rounded-full"
                />

            </div>

        </div>
    );
}

export default Navbar;