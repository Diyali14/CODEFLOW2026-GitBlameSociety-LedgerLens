function DashboardPage() {
    return (
        <div>

            <h1 className="text-4xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-3 gap-6">

                <div className="bg-slate-900 p-6 rounded-xl">
                    <h2 className="text-lg text-slate-400">
                        Total Income
                    </h2>

                    <p className="text-3xl font-bold mt-2">
                        ₹85,000
                    </p>
                </div>

                <div className="bg-slate-900 p-6 rounded-xl">
                    <h2 className="text-lg text-slate-400">
                        Total Expense
                    </h2>

                    <p className="text-3xl font-bold mt-2">
                        ₹65,000
                    </p>
                </div>

                <div className="bg-slate-900 p-6 rounded-xl">
                    <h2 className="text-lg text-slate-400">
                        Savings
                    </h2>

                    <p className="text-3xl font-bold mt-2">
                        ₹20,000
                    </p>
                </div>

            </div>

        </div>
    );
}

export default DashboardPage;