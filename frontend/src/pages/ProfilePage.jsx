import {
    useState,
} from "react";

import {
    profileData,
} from "../data/dummyData";

function ProfilePage() {

    const [profile, setProfile] =
        useState(profileData);

    return (
        <div className="space-y-8">

            <div className="bg-linear-to-r from-green-600 to-green-700 rounded-3xl p-8 text-white">

                <div className="flex flex-col md:flex-row md:items-center gap-6">

                    <img
                        src="https://i.pravatar.cc/200?img=12"
                        alt="profile"
                        className="w-32 h-32 rounded-full border-4 border-white"
                    />

                    <div>

                        <h1 className="text-4xl font-bold">
                            {profile.username}
                        </h1>

                        <p className="text-green-100 mt-2 text-lg">
                            {profile.email}
                        </p>

                    </div>

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        Statements Analyzed
                    </p>

                    <h2 className="text-4xl font-bold text-green-700 mt-3">
                        {profile.statementsAnalyzed}
                    </h2>

                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        Financial Score
                    </p>

                    <h2 className="text-4xl font-bold text-orange-500 mt-3">
                        {profile.financialScore}
                    </h2>

                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        Total Uploads
                    </p>

                    <h2 className="text-4xl font-bold text-slate-800 mt-3">
                        {profile.uploads}
                    </h2>

                </div>

            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8">

                <h2 className="text-2xl font-bold text-slate-800">
                    Account Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    <div>

                        <label className="block mb-2 font-medium">
                            Username
                        </label>

                        <input
                            type="text"
                            value={profile.username}
                            onChange={(e) =>
                                setProfile({
                                    ...profile,
                                    username:
                                        e.target.value,
                                })
                            }
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            value={profile.email}
                            onChange={(e) =>
                                setProfile({
                                    ...profile,
                                    email:
                                        e.target.value,
                                })
                            }
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                        />

                    </div>

                </div>

                <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-semibold">

                    Save Changes

                </button>

            </div>

        </div>
    );
}

export default ProfilePage;