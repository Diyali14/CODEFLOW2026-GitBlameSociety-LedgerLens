import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function IncomeExpenseBarChart({
    data,
}) {

    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Income vs Expense
            </h2>

            <div className="h-87.5">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="income"
                            fill="#16A34A"
                            radius={[10, 10, 0, 0]}
                        />

                        <Bar
                            dataKey="expense"
                            fill="#EF4444"
                            radius={[10, 10, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default IncomeExpenseBarChart;