import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function MonthlyTrendChart({
    data,
}) {

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

            <h2 className="text-xl font-bold mb-5">
                Monthly Expense Trend
            </h2>

            <div className="h-75">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="expense"
                            stroke="#16A34A"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default MonthlyTrendChart;