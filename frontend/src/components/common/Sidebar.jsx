import { Link, useLocation } from "react-router-dom";
import {
    FaChartPie,
    FaMoneyBillWave,
    FaRobot,
    FaExclamationTriangle,
    FaSyncAlt,
    FaFileInvoice,
    FaUser,
    FaCog,
} from "react-icons/fa";

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaChartPie />,
        },
        {
            name: "Transactions",
            path: "/transactions",
            icon: <FaMoneyBillWave />,
        },
        {
            name: "Insights",
            path: "/insights",
            icon: <FaChartPie />,
        },
        {
            name: "AI Recommendations",
            path: "/recommendations",
            icon: <FaRobot />,
        },
        {
            name: "Anomalies",
            path: "/anomalies",
            icon: <FaExclamationTriangle />,
        },
        {
            name: "Recurring",
            path: "/recurring",
            icon: <FaSyncAlt />,
        },
        {
            name: "Reports",
            path: "/reports",
            icon: <FaFileInvoice />,
        },
        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser />,
        },
        {
            name: "Settings",
            path: "/settings",
            icon: <FaCog />,
        },
    ];

    return (
        <div className="w-64 bg-slate-900 border-r border-slate-700 min-h-screen p-4">

            <h2 className="text-3xl font-bold text-blue-400 mb-10">
                FinSight
            </h2>

            <div className="flex flex-col gap-3">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
            ${location.pathname === item.path
                                ? "bg-blue-500 text-white"
                                : "hover:bg-slate-800 text-slate-300"
                            }`}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default Sidebar;