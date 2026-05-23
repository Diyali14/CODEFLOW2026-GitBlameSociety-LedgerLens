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
    FaUpload,
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
            name: "Upload",
            path: "/upload",
            icon: <FaUpload />,
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
        <div className="hidden lg:flex w-72 bg-white border-r border-slate-200 min-h-screen flex-col p-5">

            <div className="mb-10">

                <h1 className="text-3xl font-bold text-green-700">
                    LedgerLens
                </h1>

                <p className="text-slate-500 mt-1">
                    Smart Finance Analytics
                </p>

            </div>

            <div className="flex flex-col gap-2">

                {menuItems.map((item) => (

                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-medium
            ${location.pathname === item.path
                                ? "bg-green-600 text-white shadow-md"
                                : "text-slate-600 hover:bg-green-50"
                            }`}
                    >

                        <span className="text-lg">
                            {item.icon}
                        </span>

                        {item.name}

                    </Link>

                ))}

            </div>

        </div>
    );
}

export default Sidebar;