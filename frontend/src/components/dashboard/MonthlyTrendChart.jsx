import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function MonthlyTrendChart({ data }) {

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-emerald-100
            bg-white/60 backdrop-blur-2xl
            p-6
        ">

            {/* glow */}
            <div className="absolute -top-24 left-0 w-100 h-100 bg-emerald-200/20 blur-[120px]" />

            <h2 className="text-lg font-medium text-slate-900 mb-5 relative z-10">
                Monthly Expense Trend
            </h2>

            <div className="h-80 relative z-10">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "white",
                                border: "1px solid #d1fae5",
                                borderRadius: "12px",
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="expense"
                            stroke="#10b981"
                            strokeWidth={3}
                            dot={{ r: 3 }}
                            activeDot={{ r: 6 }}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default MonthlyTrendChart;