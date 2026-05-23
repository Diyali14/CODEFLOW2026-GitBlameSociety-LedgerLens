import { Outlet } from "react-router-dom";

import {
    useState,
} from "react";

import Sidebar from "../components/common/Sidebar";

import Navbar from "../components/common/Navbar";

import MobileSidebar from "../components/dashboard/MobileSidebar";

function DashboardLayout() {

    const [mobileOpen, setMobileOpen] =
        useState(false);

    return (
        <div className="bg-slate-100 min-h-screen">

            <MobileSidebar
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 min-w-0">

                    <Navbar
                        setMobileOpen={setMobileOpen}
                    />

                    <div className="p-4 md:p-8">

                        <Outlet />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DashboardLayout;