import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import MobileSidebar from "../components/dashboard/MobileSidebar";

function DashboardLayout() {

    const [mobileOpen, setMobileOpen] =
        useState(false);

    return (

        <div className="min-h-screen bg-slate-100">

            <MobileSidebar
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <div className="flex">

                {/* Desktop Sidebar */}
                <div className="
                    hidden lg:block
                    w-72 shrink-0
                ">

                    <div className="
                        sticky top-0
                        h-screen
                    ">

                        <Sidebar />

                    </div>

                </div>

                {/* Main Content */}
                <div className="
                    flex-1 min-w-0
                    flex flex-col
                ">

                    <Navbar
                        setMobileOpen={setMobileOpen}
                    />

                    <main className="
                        flex-1
                        p-4 md:p-8
                    ">

                        <Outlet />

                    </main>

                </div>

            </div>

        </div>

    );
}

export default DashboardLayout;