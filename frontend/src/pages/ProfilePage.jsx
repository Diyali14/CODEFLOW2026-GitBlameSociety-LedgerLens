import { useState } from "react";
import { profileData } from "../data/dummyData";

function ProfilePage() {

    const [profile, setProfile] =
        useState(profileData);

    return (
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-10">

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-150 bg-emerald-300/20 blur-[160px] rounded-full" />

            {/* HERO PROFILE CARD */}
            <div className="
                relative
                overflow-hidden
                rounded-4xl
                border border-emerald-100
                bg-linear-to-r from-green-600 to-green-700
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(16,185,129,0.08)]
                p-8
            ">

                {/* soft gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-white/80 via-transparent to-emerald-50/40 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">

                    <div className="relative">
                        <img
                            src="https://i.pravatar.cc/200?img=12"
                            alt="profile"
                            className="
                                w-28 h-28
                                rounded-3xl
                                border border-emerald-100
                                shadow-md
                            "
                        />

                        {/* subtle ring glow */}
                        <div className="absolute inset-0 rounded-3xl bg-emerald-300/10 blur-xl" />
                    </div>

                    <div className="space-y-2">

                        <h1 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-[-0.02em]">
                            {profile.username}
                        </h1>

                        <p className="text-white text-sm md:text-base">
                            {profile.email}
                        </p>

                    </div>

                </div>

            </div>

            {/* =========================
                STATS
            ========================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1 */}
                <div className="
                    relative
                    overflow-hidden
                    rounded-[1.8rem]
                    border border-emerald-100
                    bg-white/70
                    backdrop-blur-xl
                    p-6
                    shadow-sm
                ">

                    <div className="absolute inset-0 bg-linear-to-br from-emerald-50/60 via-white to-transparent pointer-events-none" />

                    <div className="relative z-10">

                        <p className="text-slate-500 text-sm">
                            Statements Analyzed
                        </p>

                        <h2 className="text-2xl font-medium text-emerald-700 mt-3">
                            {profile.statementsAnalyzed}
                        </h2>

                    </div>

                </div>

                {/* Card 2 */}
                <div className="
                    relative
                    overflow-hidden
                    rounded-[1.8rem]
                    border border-emerald-100
                    bg-white/70
                    backdrop-blur-xl
                    p-6
                    shadow-sm
                ">

                    <div className="absolute inset-0 bg-linear-to-br from-yellow-50/40 via-white to-transparent pointer-events-none" />

                    <div className="relative z-10">

                        <p className="text-slate-500 text-sm">
                            Financial Score
                        </p>

                        <h2 className="text-2xl font-medium text-yellow-600 mt-3">
                            {profile.financialScore}
                        </h2>

                    </div>

                </div>

                {/* Card 3 */}
                <div className="
                    relative
                    overflow-hidden
                    rounded-[1.8rem]
                    border border-emerald-100
                    bg-white/70
                    backdrop-blur-xl
                    p-6
                    shadow-sm
                ">

                    <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-emerald-50/40 pointer-events-none" />

                    <div className="relative z-10">

                        <p className="text-slate-500 text-sm">
                            Total Uploads
                        </p>

                        <h2 className="text-2xl font-medium text-slate-800 mt-3">
                            {profile.uploads}
                        </h2>

                    </div>

                </div>

            </div>

            {/* =========================
                ACCOUNT FORM
            ========================== */}
            <div className="
                relative
                overflow-hidden
                rounded-4xl
                border border-emerald-100
                bg-white/70
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(16,185,129,0.06)]
                p-8
            ">

                <div className="absolute inset-0 bg-linear-to-br from-white/80 via-transparent to-emerald-50/40 pointer-events-none" />

                <div className="relative z-10">

                    <h2 className="text-lg font-medium text-slate-900">
                        Account Information
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                        Update your personal details
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                        {/* Username */}
                        <div>

                            <label className="block mb-2 text-sm font-medium text-slate-700">
                                Username
                            </label>

                            <input
                                type="text"
                                value={profile.username}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        username: e.target.value,
                                    })
                                }
                                className="
                                    w-full
                                    rounded-2xl
                                    border border-emerald-100
                                    bg-white/70
                                    backdrop-blur-md
                                    px-4 py-3
                                    text-slate-800
                                    outline-none
                                    transition
                                    focus:border-emerald-400
                                    focus:ring-4
                                    focus:ring-emerald-100
                                "
                            />

                        </div>

                        {/* Email */}
                        <div>

                            <label className="block mb-2 text-sm font-medium text-slate-700">
                                Email
                            </label>

                            <input
                                type="email"
                                value={profile.email}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        email: e.target.value,
                                    })
                                }
                                className="
                                    w-full
                                    rounded-2xl
                                    border border-emerald-100
                                    bg-white/70
                                    backdrop-blur-md
                                    px-4 py-3
                                    text-slate-800
                                    outline-none
                                    transition
                                    focus:border-emerald-400
                                    focus:ring-4
                                    focus:ring-emerald-100
                                "
                            />

                        </div>

                    </div>

                    {/* Save button */}
                    <button className="
                        mt-8
                        px-6 py-3
                        rounded-2xl
                        bg-emerald-600
                        text-white
                        font-medium
                        transition-all
                        hover:bg-emerald-700
                        hover:-translate-y-0.5
                        hover:shadow-[0_10px_40px_rgba(16,185,129,0.25)]
                        shadow-md
                        shadow-emerald-500/20
                    ">
                        Save Changes
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProfilePage;