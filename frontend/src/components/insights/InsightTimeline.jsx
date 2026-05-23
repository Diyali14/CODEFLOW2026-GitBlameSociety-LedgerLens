function InsightTimeline({
    data,
}) {

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-800">
                AI Insight Timeline
            </h2>

            <div className="mt-10 space-y-8">

                {data.map((item, index) => (

                    <div
                        key={index}
                        className="flex gap-5"
                    >

                        <div className="flex flex-col items-center">

                            <div className="w-5 h-5 bg-green-600 rounded-full"></div>

                            {index !== data.length - 1 && (

                                <div className="w-1 h-20 bg-green-200"></div>

                            )}

                        </div>

                        <div>

                            <h3 className="text-xl font-bold text-slate-800">
                                {item.month}
                            </h3>

                            <p className="text-slate-600 mt-2 leading-7">
                                {item.insight}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default InsightTimeline;