import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function SavingsTrendAreaChart({
    data,
}) {

    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Savings Trend
            </h2>

            <div className="h-87.5">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="savings"
                            stroke="#16A34A"
                            fill="#BBF7D0"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default SavingsTrendAreaChart;