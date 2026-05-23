import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
    return (
        <div className="w-full h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6">

            <h1 className="text-2xl font-bold text-blue-400">
                FinSight AI
            </h1>

            <div className="flex items-center gap-5">
                <FaBell className="text-xl cursor-pointer" />
                <FaUserCircle className="text-3xl cursor-pointer" />
            </div>

        </div>
    );
}

export default Navbar;