import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import {
    FaChartPie,
    FaMoneyBillWave,
    FaRobot,
    FaExclamationTriangle,
    FaSyncAlt,
    FaFileInvoice,
    FaUser,
    FaCog,
    FaUpload,
    FaBars,
    FaTimes,
} from "react-icons/fa";

function Sidebar() {

    const location = useLocation();
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
        { name: "Upload", path: "/upload", icon: <FaUpload /> },
        { name: "Transactions", path: "/transactions", icon: <FaMoneyBillWave /> },
        { name: "Insights", path: "/insights", icon: <FaChartPie /> },
        { name: "AI Recommendations", path: "/recommendations", icon: <FaRobot /> },
        { name: "Anomalies", path: "/anomalies", icon: <FaExclamationTriangle /> },
        { name: "Recurring", path: "/recurring", icon: <FaSyncAlt /> },
        { name: "Reports", path: "/reports", icon: <FaFileInvoice /> },
        { name: "Profile", path: "/profile", icon: <FaUser /> },
        { name: "Settings", path: "/settings", icon: <FaCog /> },
    ];

    return (
        <>

            {/* Mobile top bar */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b border-emerald-100 bg-white/70 backdrop-blur-xl sticky top-0 z-50">

                <h1 className="text-xl font-semibold text-emerald-700">
                    LedgerLens
                </h1>

                <button
                    onClick={() => setOpen(true)}
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-700"
                >
                    <FaBars />
                </button>

            </div>

            {/* overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
                />
            )}

            {/* sidebar */}
            <div className={`
                fixed lg:static z-50
                top-0 left-0 h-full w-72
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>

                <div className="
                    h-full flex flex-col p-5
                    bg-white/70 backdrop-blur-2xl
                    border-r border-emerald-100
                    shadow-[0_20px_60px_rgba(16,185,129,0.08)]
                ">

                    {/* close button (mobile only) */}
                    <div className="lg:hidden flex justify-end mb-4">
                        <button
                            onClick={() => setOpen(false)}
                            className="p-2 rounded-xl bg-emerald-50 text-emerald-700"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* glow */}
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-300/20 blur-[120px]" />

                    {/* logo */}
                    <div className="mb-10 relative z-10">
                        <h1 className="text-3xl font-semibold text-emerald-700 tracking-tight">
                            LedgerLens
                        </h1>
                        <p className="text-slate-500 mt-1 text-sm">
                            Smart Finance Analytics
                        </p>
                    </div>

                    {/* menu */}
                    <div className="flex flex-col gap-2 relative z-10">

                        {menuItems.map((item) => {

                            const active = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={`
                                        flex items-center gap-4 px-4 py-3 rounded-2xl
                                        transition-all font-medium text-sm
                                        relative overflow-hidden
                                        ${active
                                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                                            : "text-slate-600 hover:bg-emerald-50"
                                        }
                                    `}
                                >

                                    {/* active glow */}
                                    {active && (
                                        <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-emerald-600 opacity-90" />
                                    )}

                                    <span className="text-base relative z-10">
                                        {item.icon}
                                    </span>

                                    <span className="relative z-10">
                                        {item.name}
                                    </span>

                                </Link>
                            );

                        })}

                    </div>

                </div>

            </div>

        </>
    );
}

export default Sidebar;