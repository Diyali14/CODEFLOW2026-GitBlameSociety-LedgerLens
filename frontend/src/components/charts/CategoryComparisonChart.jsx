import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function CategoryComparisonChart({
    data,
}) {

    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Category Comparison
            </h2>

            <div className="h-87.5">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        layout="vertical"
                        data={data}
                    >

                        <XAxis type="number" />

                        <YAxis
                            type="category"
                            dataKey="category"
                        />

                        <Tooltip />

                        <Bar
                            dataKey="amount"
                            fill="#22C55E"
                            radius={[0, 10, 10, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default CategoryComparisonChart;