import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
    Cell,
} from "recharts";

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl px-4 py-3">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                    {label}
                </p>

                {payload.map((entry, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-6 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-slate-600">
                                {entry.name}
                            </span>
                        </div>

                        <span className="font-semibold text-slate-800">
                            ₹{entry.value?.toLocaleString()}
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    return null;
}

function IncomeExpenseBarChart({ data }) {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">

            {/* subtle background glow */}
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-40" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-rose-100 blur-3xl opacity-40" />

            <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">

                    <div>
                        <p className="text-sm font-medium tracking-wide uppercase text-slate-400">
                            Financial Overview
                        </p>

                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
                            Income vs Expense
                        </h2>
                    </div>

                    <div className="flex items-center gap-5 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-linear-to-br from-emerald-300 to-emerald-600 shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
                            <span className="text-slate-600 font-medium">
                                Income
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-linear-to-br from-rose-300 to-rose-600 shadow-[0_0_12px_rgba(244,63,94,0.7)]" />
                            <span className="text-slate-600 font-medium">
                                Expense
                            </span>
                        </div>
                    </div>

                </div>

                {/* Chart */}
                <div className="h-95">

                    <ResponsiveContainer width="100%" height="100%">

                        <BarChart
                            data={data}
                            barGap={10}
                            barCategoryGap="25%"
                        >

                            <defs>

                                {/* Income glossy gradient */}
                                <linearGradient
                                    id="incomeGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#34D399"
                                    />

                                    <stop
                                        offset="45%"
                                        stopColor="#10B981"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#059669"
                                    />
                                </linearGradient>

                                {/* Expense glossy gradient */}
                                <linearGradient
                                    id="expenseGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#FB7185"
                                    />

                                    <stop
                                        offset="45%"
                                        stopColor="#F43F5E"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#E11D48"
                                    />
                                </linearGradient>

                            </defs>

                            <CartesianGrid
                                strokeDasharray="4 4"
                                vertical={false}
                                stroke="#E2E8F0"
                            />

                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fill: "#64748B",
                                    fontSize: 13,
                                    fontWeight: 500,
                                }}
                            />

                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fill: "#64748B",
                                    fontSize: 13,
                                }}
                                tickFormatter={(value) =>
                                    `₹${value / 1000}k`
                                }
                            />

                            <Tooltip
                                cursor={{
                                    fill: "rgba(148,163,184,0.08)",
                                    radius: 12,
                                }}
                                content={<CustomTooltip />}
                            />

                            <Bar
                                dataKey="income"
                                name="Income"
                                radius={[12, 12, 4, 4]}
                                maxBarSize={42}
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={`income-${index}`}
                                        fill="url(#incomeGradient)"
                                    />
                                ))}
                            </Bar>

                            <Bar
                                dataKey="expense"
                                name="Expense"
                                radius={[12, 12, 4, 4]}
                                maxBarSize={42}
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={`expense-${index}`}
                                        fill="url(#expenseGradient)"
                                    />
                                ))}
                            </Bar>

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
}

export default IncomeExpenseBarChart;