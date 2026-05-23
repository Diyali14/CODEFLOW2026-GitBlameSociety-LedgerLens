import {
    useEffect,
    useState,
} from "react";

function SettingsPage() {

    const [darkMode, setDarkMode] =
        useState(false);

    const [notifications, setNotifications] =
        useState(true);

    useEffect(() => {

        localStorage.setItem(
            "darkMode",
            darkMode
        );

        localStorage.setItem(
            "notifications",
            notifications
        );

    }, [
        darkMode,
        notifications,
    ]);

    return (
        <div className="space-y-8">

            <div className="bg-linear-to-r from-slate-700 to-slate-900 rounded-3xl p-8 text-white">

                <h1 className="text-4xl font-bold">
                    Settings
                </h1>

                <p className="mt-3 text-lg text-slate-300">
                    Manage your application preferences and account settings.
                </p>

            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-8">

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-2xl font-bold text-slate-800">
                            Dark Mode
                        </h2>

                        <p className="text-slate-500 mt-1">
                            Enable dark theme for the dashboard.
                        </p>

                    </div>

                    <button
                        onClick={() =>
                            setDarkMode(!darkMode)
                        }
                        className={`w-16 h-8 rounded-full transition-all
            ${darkMode
                                ? "bg-green-600"
                                : "bg-slate-300"
                            }`}
                    >

                        <div
                            className={`w-6 h-6 bg-white rounded-full mt-1 transition-all
              ${darkMode
                                    ? "ml-9"
                                    : "ml-1"
                                }`}
                        ></div>

                    </button>

                </div>

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-2xl font-bold text-slate-800">
                            Notifications
                        </h2>

                        <p className="text-slate-500 mt-1">
                            Receive AI financial alerts and recommendations.
                        </p>

                    </div>

                    <button
                        onClick={() =>
                            setNotifications(
                                !notifications
                            )
                        }
                        className={`w-16 h-8 rounded-full transition-all
            ${notifications
                                ? "bg-green-600"
                                : "bg-slate-300"
                            }`}
                    >

                        <div
                            className={`w-6 h-6 bg-white rounded-full mt-1 transition-all
              ${notifications
                                    ? "ml-9"
                                    : "ml-1"
                                }`}
                        ></div>

                    </button>

                </div>

            </div>

        </div>
    );
}

export default SettingsPage;