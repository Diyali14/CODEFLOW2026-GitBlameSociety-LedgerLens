// import KPICard from "./KPICard";

// function DashboardSummary({
//     summary,
// }) {

//     const cards = [
//         {
//             title: "Total Income",
//             value: `₹${summary.totalIncome}`,
//         },
//         {
//             title: "Total Expense",
//             value: `₹${summary.totalExpense}`,
//         },
//         {
//             title: "Savings",
//             value: `₹${summary.savings}`,
//         },
//         {
//             title: "Top Category",
//             value: summary.topCategory,
//         },
//         {
//             title: "Anomalies",
//             value: summary.anomalyCount,
//         },
//         {
//             title: "Recurring",
//             value: summary.recurringSubscriptions,
//         },
//     ];

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

//             {cards.map((card) => (
//                 <KPICard
//                     key={card.title}
//                     title={card.title}
//                     value={card.value}
//                 />
//             ))}

//         </div>
//     );
// }

// export default DashboardSummary;


import KPICard from "./KPICard";

function DashboardSummary({ summary }) {

    const cards = [
        { title: "Income", value: `₹${summary.totalIncome}`, tone: "emerald" },
        { title: "Expense", value: `₹${summary.totalExpense}`, tone: "red" },
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