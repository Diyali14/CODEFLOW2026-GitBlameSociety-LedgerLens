import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function DashboardLayout() {
    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <div className="p-6 bg-slate-950 min-h-screen">
                    <Outlet />
                </div>

            </div>

        </div>
    );
}

export default DashboardLayout;