import KPICard from "./KPICard";

function DashboardSummary({ summary }) {

    const cards = [
        { title: "Income", value: `₹${summary.income}`, tone: "emerald" },
        { title: "Expense", value: `₹${summary.expense}`, tone: "red" },
        { title: "Savings", value: `₹${summary.savings}`, tone: "amber" },
        { title: "Top Category", value: summary.topCategory, tone: "sky" },
        { title: "Anomalies", value: summary.anomalyCount, tone: "red" },
        { title: "Recurring", value: summary.recurringSubscriptions, tone: "emerald" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cards.map((card) => (
                <KPICard
                    key={card.title}
                    title={card.title}
                    value={card.value}
                    tone={card.tone}
                />
            ))}
        </div>
    );
}

export default DashboardSummary;