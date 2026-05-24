import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import {
    FaChartPie,
    FaMoneyBillWave,
    FaRobot,
    FaExclamationTriangle,
    FaSyncAlt,
    FaUser,
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
        { name: "Profile", path: "/profile", icon: <FaUser /> },
    ];

    return (
        <>

            {/* Mobile Top Bar */}
            <div className="
                lg:hidden
                sticky top-0 z-50
                flex items-center justify-between
                px-5 py-4
                border-b border-slate-200/70
                bg-white/80 backdrop-blur-2xl
            ">

                <div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">
                        LedgerLens
                    </h1>

                    <p className="text-xs text-slate-500">
                        Smart Finance Analytics
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="
                        flex items-center justify-center
                        w-11 h-11
                        rounded-2xl
                        bg-linear-to-br
                        from-emerald-500
                        to-emerald-600
                        text-white
                        shadow-[0_10px_25px_rgba(16,185,129,0.35)]
                    "
                >
                    <FaBars />
                </button>

            </div>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="
                        fixed inset-0 z-40
                        bg-black/30 backdrop-blur-sm
                        lg:hidden
                    "
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed lg:relative
                    top-0 left-0 z-50
                    h-full w-72
                    transform transition-transform duration-300 ease-out
                    ${open
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >

                <div
                    className="
                        relative
                        h-screen w-full
                        flex flex-col
                        px-5 py-6
                        bg-white/80 backdrop-blur-3xl
                        border-r border-slate-200/70
                        shadow-[0_8px_40px_rgba(15,23,42,0.08)]
                        overflow-hidden
                    "
                >

                    {/* Ambient Glow Effects */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-300/20 blur-[140px]" />

                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-200/10 blur-[120px]" />

                    {/* Close Button (Mobile Only) */}
                    <div className="lg:hidden flex justify-end relative z-10 mb-4">

                        <button
                            onClick={() => setOpen(false)}
                            className="
                                flex items-center justify-center
                                w-11 h-11
                                rounded-2xl
                                bg-slate-100
                                text-slate-700
                            "
                        >
                            <FaTimes />
                        </button>

                    </div>

                    {/* Logo */}
                    <div className="relative z-10 mb-10">

                        <h1 className="
                            text-3xl font-bold
                            tracking-tight
                            text-slate-900
                        ">
                            Ledger<span className="text-emerald-600">Lens</span>
                        </h1>

                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                            AI-powered finance intelligence dashboard
                        </p>

                    </div>

                    {/* Navigation */}
                    <div className="relative z-10 flex-1 flex flex-col gap-2">

                        {menuItems.map((item) => {

                            const active = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={`
                                        group relative overflow-hidden
                                        flex items-center gap-4
                                        px-4 py-3.5
                                        rounded-2xl
                                        transition-all duration-300
                                        font-medium text-sm
                                        ${active
                                            ? `
                                                bg-linear-to-r
                                                from-emerald-500
                                                to-emerald-600
                                                text-white
                                                shadow-[0_10px_25px_rgba(16,185,129,0.35)]
                                            `
                                            : `
                                                text-slate-600
                                                hover:bg-slate-100/70
                                                hover:text-slate-900
                                            `
                                        }
                                    `}
                                >

                                    {/* Hover Glow */}
                                    {!active && (
                                        <div className="
                                            absolute inset-0
                                            opacity-0 group-hover:opacity-100
                                            transition-opacity duration-300
                                            bg-linear-to-r
                                            from-emerald-50
                                            to-transparent
                                        " />
                                    )}

                                    {/* Icon */}
                                    <span className="
                                        relative z-10
                                        text-base
                                    ">
                                        {item.icon}
                                    </span>

                                    {/* Label */}
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