import {
    recurringSubscriptionsData,
} from "../data/dummyData";

function RecurringPage() {

    const totalYearly =
        recurringSubscriptionsData.reduce(
            (acc, item) =>
                acc + item.yearly,
            0
        );

    return (
        <div className="space-y-8">

            <div className="bg-linear-to-r from-green-600 to-green-700 rounded-3xl p-8 text-white">

                <h1 className="text-4xl font-bold">
                    Recurring Payments Intelligence
                </h1>

                <p className="mt-3 text-lg text-green-100">
                    Analyze subscriptions and recurring financial commitments.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        Active Subscriptions
                    </p>

                    <h2 className="text-4xl font-bold text-green-700 mt-3">
                        {recurringSubscriptionsData.length}
                    </h2>

                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        Monthly Cost
                    </p>

                    <h2 className="text-4xl font-bold text-red-600 mt-3">
                        ₹997
                    </h2>

                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200">

                    <p className="text-slate-500">
                        Yearly Projection
                    </p>

                    <h2 className="text-4xl font-bold text-orange-500 mt-3">
                        ₹{totalYearly}
                    </h2>

                </div>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {recurringSubscriptionsData.map(
                    (item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm"
                        >

                            <div className="flex justify-between items-center">

                                <h2 className="text-2xl font-bold text-slate-800">
                                    {item.name}
                                </h2>

                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

                                    Monthly

                                </span>

                            </div>

                            <div className="mt-6 space-y-4">

                                <div className="flex justify-between">

                                    <span className="text-slate-500">
                                        Monthly Cost
                                    </span>

                                    <span className="font-bold">
                                        ₹{item.monthly}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-slate-500">
                                        Yearly Impact
                                    </span>

                                    <span className="font-bold text-red-600">
                                        ₹{item.yearly}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-slate-500">
                                        Renewal Date
                                    </span>

                                    <span className="font-bold">
                                        {item.renewal}
                                    </span>

                                </div>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );
}

export default RecurringPage;