function KPICard({ title, value, tone = "emerald" }) {

    const tones = {
        emerald: "from-emerald-50/70 to-white text-emerald-700",
        red: "from-red-50/70 to-white text-red-600",
        amber: "from-yellow-50/70 to-white text-yellow-600",
        sky: "from-sky-50/70 to-white text-sky-600",
    };

    return (
        <div className="
            relative overflow-hidden
            rounded-[1.8rem]
            border border-emerald-100
            bg-white/60 backdrop-blur-2xl
            p-6
            hover:shadow-md transition
        ">

            {/* soft gradient layer */}
            <div className={`absolute inset-0 bg-linear-to-br ${tones[tone]}`} />

            {/* glow orb */}
            <div className="
                absolute -top-10 -right-10
                w-40 h-40 bg-emerald-200/20 blur-3xl rounded-full
            " />

            <div className="relative z-10">

                <p className="text-slate-500 text-sm">
                    {title}
                </p>

                <h2 className="text-2xl md:text-3xl font-medium mt-3">
                    {value}
                </h2>

            </div>

        </div>
    );
}

export default KPICard;