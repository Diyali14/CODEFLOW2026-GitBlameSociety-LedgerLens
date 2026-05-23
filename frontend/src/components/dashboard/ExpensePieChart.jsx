import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const COLORS = [
    "#16A34A",
    "#22C55E",
    "#4ADE80",
    "#86EFAC",
];

function ExpensePieChart({
    data,
}) {

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

            <h2 className="text-xl font-bold mb-5">
                Category Distribution
            </h2>

            <div className="h-75">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="amount"
                            nameKey="category"
                            outerRadius={100}
                        >

                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}

                        </Pie>

                        <Tooltip />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default ExpensePieChart;