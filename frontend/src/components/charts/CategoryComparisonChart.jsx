import {
    useEffect,
    useState,
} from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import {
    getCategorySpending,
} from "../../api/analytics";

function CategoryComparisonChart() {

    const [chartData, setChartData] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        fetchCategoryData();

    }, []);

    const fetchCategoryData = async () => {

        try {

            setLoading(true);

            const response =
                await getCategorySpending();

            const formattedData =
                response.map((item) => ({
                    category:
                        item.category,
                    amount:
                        Number(item.total),
                }));

            setChartData(
                formattedData
            );

        } catch (err) {

            console.error(err);

            setError(
                "Failed to load category analytics"
            );

        } finally {

            setLoading(false);

        }
    };

    if (loading) {

        return (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm h-107.5 flex items-center justify-center">

                <p className="text-slate-500 text-lg">
                    Loading category analytics...
                </p>

            </div>
        );
    }

    if (error) {

        return (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm h-107.5 flex items-center justify-center">

                <p className="text-red-500 text-lg">
                    {error}
                </p>

            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">

                Category Comparison

            </h2>

            <div className="h-87.5">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart
                        layout="vertical"
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                    >

                        <XAxis
                            type="number"
                        />

                        <YAxis
                            type="category"
                            dataKey="category"
                            width={120}
                        />

                        <Tooltip
                            formatter={(value) => [
                                `₹${value.toLocaleString()}`,
                                "Amount",
                            ]}
                        />

                        <Bar
                            dataKey="amount"
                            fill="#22C55E"
                            radius={[
                                0,
                                10,
                                10,
                                0,
                            ]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default CategoryComparisonChart;