import { recurringSubscriptionsData } from "../data/dummyData";

function RecurringPage() {

    const totalYearly =
        recurringSubscriptionsData.reduce(
            (acc, item) =>
                acc + item.yearly,
            0
        );

    return (
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-10">

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-162.5 h-162.5 bg-emerald-300/20 blur-[160px] rounded-full" />

            {/* =========================
                HEADER
            ========================== */}
            <div className="
                relative
                overflow-hidden
                rounded-4xl
                border border-emerald-100
                bg-linear-to-r from-green-600 to-green-700 text-white
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(16,185,129,0.08)]
                p-8
            ">

                <div className="absolute inset-0 pointer-events-none" />

                <div className="relative z-10">

                    <h1 className="
                        text-3xl md:text-4xl
                        font-light
                        tracking-[-0.04em]
                    ">
                        Recurring Payments Intelligence
                    </h1>

                    <p className="mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
                        Analyze subscriptions and recurring financial commitments
                        with AI-driven insights and yearly projections.
                    </p>

                </div>

            </div>

            {/* =========================
                STATS
            ========================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Active */}
                <div className="
                    relative
                    overflow-hidden
                    rounded-[1.8rem]
                    border border-emerald-100
                    bg-white/70
                    backdrop-blur-xl
                    p-6
                ">

                    <div className="absolute inset-0 bg-linear-to-br from-emerald-50/60 via-white to-transparent pointer-events-none" />

                    <div className="relative z-10">

                        <p className="text-slate-500 text-sm">
                            Active Subscriptions
                        </p>

                        <h2 className="text-2xl font-medium text-emerald-700 mt-3">
                            {recurringSubscriptionsData.length}
                        </h2>

                    </div>

                </div>

                {/* Monthly */}
                <div className="
                    relative
                    overflow-hidden
                    rounded-[1.8rem]
                    border border-emerald-100
                    bg-white/70
                    backdrop-blur-xl
                    p-6
                ">

                    <div className="absolute inset-0 bg-linear-to-br from-yellow-50/40 via-white to-transparent pointer-events-none" />

                    <div className="relative z-10">

                        <p className="text-slate-500 text-sm">
                            Monthly Cost
                        </p>

                        <h2 className="text-2xl font-medium text-yellow-600 mt-3">
                            ₹997
                        </h2>

                    </div>

                </div>

                {/* Yearly */}
                <div className="
                    relative
                    overflow-hidden
                    rounded-[1.8rem]
                    border border-emerald-100
                    bg-white/70
                    backdrop-blur-xl
                    p-6
                ">

                    <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-emerald-50/40 pointer-events-none" />

                    <div className="relative z-10">

                        <p className="text-slate-500 text-sm">
                            Yearly Projection
                        </p>

                        <h2 className="text-2xl font-medium text-slate-800 mt-3">
                            ₹{totalYearly}
                        </h2>

                    </div>

                </div>

            </div>

            {/* =========================
                SUBSCRIPTION GRID
            ========================== */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {recurringSubscriptionsData.map(
                    (item, index) => (

                        <div
                            key={index}
                            className="
                                relative
                                overflow-hidden
                                rounded-4xl
                                border border-emerald-100
                                bg-white/70
                                backdrop-blur-2xl
                                shadow-[0_10px_40px_rgba(16,185,129,0.06)]
                                p-7
                            "
                        >

                            {/* subtle glow */}
                            <div className="absolute inset-0 bg-linear-to-br from-white/80 via-transparent to-emerald-50/40 pointer-events-none" />

                            <div className="relative z-10">

                                <div className="flex justify-between items-center">

                                    <h2 className="text-lg md:text-xl font-medium text-slate-900">
                                        {item.name}
                                    </h2>

                                    <span className="
                                        bg-emerald-50
                                        text-emerald-700
                                        px-4 py-1.5
                                        rounded-full
                                        text-xs
                                        border border-emerald-100
                                        font-medium
                                    ">
                                        Monthly
                                    </span>

                                </div>

                                <div className="mt-6 space-y-4">

                                    {/* Monthly cost */}
                                    <div className="flex justify-between">

                                        <span className="text-slate-500 text-sm">
                                            Monthly Cost
                                        </span>

                                        <span className="font-medium text-slate-900">
                                            ₹{item.monthly}
                                        </span>

                                    </div>

                                    {/* Yearly impact */}
                                    <div className="flex justify-between">

                                        <span className="text-slate-500 text-sm">
                                            Yearly Impact
                                        </span>

                                        <span className="font-medium text-red-500">
                                            ₹{item.yearly}
                                        </span>

                                    </div>

                                    {/* Renewal */}
                                    <div className="flex justify-between">

                                        <span className="text-slate-500 text-sm">
                                            Renewal Date
                                        </span>

                                        <span className="font-medium text-slate-800">
                                            {item.renewal}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );
}

export default RecurringPage;