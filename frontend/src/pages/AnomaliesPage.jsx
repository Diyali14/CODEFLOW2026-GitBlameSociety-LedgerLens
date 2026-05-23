import {
    suspiciousTransactions,
} from "../data/dummyData";

function AnomaliesPage() {

    return (
        <div className="space-y-8">

            <div className="bg-linear-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white">

                <h1 className="text-4xl font-bold">
                    AI Risk Monitoring
                </h1>

                <p className="mt-3 text-lg text-red-100">
                    Detect unusual spending behavior and suspicious financial activities.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        Total Risks
                    </p>

                    <h2 className="text-4xl font-bold text-red-600 mt-3">
                        12
                    </h2>

                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        High Severity
                    </p>

                    <h2 className="text-4xl font-bold text-orange-500 mt-3">
                        3
                    </h2>

                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        Risk Score
                    </p>

                    <h2 className="text-4xl font-bold text-slate-800 mt-3">
                        82%
                    </h2>

                </div>

            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">

                <div className="p-6 border-b border-slate-200">

                    <h2 className="text-2xl font-bold">
                        Suspicious Transactions
                    </h2>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full min-w-175">

                        <thead className="bg-slate-100">

                            <tr>

                                <th className="p-5 text-left">
                                    Date
                                </th>

                                <th className="p-5 text-left">
                                    Narration
                                </th>

                                <th className="p-5 text-left">
                                    Amount
                                </th>

                                <th className="p-5 text-left">
                                    Severity
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {suspiciousTransactions.map(
                                (item) => (

                                    <tr
                                        key={item.id}
                                        className="border-b border-slate-100"
                                    >

                                        <td className="p-5">
                                            {item.date}
                                        </td>

                                        <td className="p-5 font-medium">
                                            {item.narration}
                                        </td>

                                        <td className="p-5 text-red-600 font-bold">
                                            ₹{item.amount}
                                        </td>

                                        <td className="p-5">

                                            <span
                                                className={`px-3 py-1 rounded-full text-sm
                        ${item.severity === "High"
                                                        ? "bg-red-100 text-red-600"
                                                        : "bg-orange-100 text-orange-600"
                                                    }`}
                                            >
                                                {item.severity}
                                            </span>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default AnomaliesPage;