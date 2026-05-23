import KPICard from "./KPICard";

function DashboardSummary({
    summary,
}) {

    const cards = [
        {
            title: "Total Income",
            value: `₹${summary.totalIncome}`,
        },
        {
            title: "Total Expense",
            value: `₹${summary.totalExpense}`,
        },
        {
            title: "Savings",
            value: `₹${summary.savings}`,
        },
        {
            title: "Top Category",
            value: summary.topCategory,
        },
        {
            title: "Anomalies",
            value: summary.anomalyCount,
        },
        {
            title: "Recurring",
            value: summary.recurringSubscriptions,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {cards.map((card) => (
                <KPICard
                    key={card.title}
                    title={card.title}
                    value={card.value}
                />
            ))}

        </div>
    );
}

export default DashboardSummary;