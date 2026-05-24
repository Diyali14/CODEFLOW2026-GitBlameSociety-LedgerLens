import Sidebar from "../common/Sidebar";

function MobileSidebar({
    mobileOpen,
    setMobileOpen,
}) {

    return (
        <>

            {mobileOpen && (

                <div
                    className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                >

                    <div
                        className="w-72 h-full bg-white"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <Sidebar />

                    </div>

                </div>

            )}

        </>
    );
}

export default MobileSidebar;