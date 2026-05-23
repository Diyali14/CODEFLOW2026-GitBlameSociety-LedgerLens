function KPICard({
    title,
    value,
}) {

    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">

            <p className="text-slate-500 font-medium">
                {title}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mt-4 wrap-break-word">
                {value}
            </h2>

        </div>
    );
}

export default KPICard;