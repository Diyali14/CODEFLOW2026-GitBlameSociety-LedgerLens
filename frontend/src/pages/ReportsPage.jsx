import {
    reportsData,
} from "../data/dummyData";

function ReportsPage() {

    return (
        <div className="space-y-8">

            <div className="bg-linear-to-r from-slate-700 to-slate-900 rounded-3xl p-8 text-white">

                <h1 className="text-4xl font-bold">
                    Financial Reports Center
                </h1>

                <p className="mt-3 text-lg text-slate-300">
                    Download and manage your financial reports and analytics.
                </p>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                {reportsData.map(
                    (report, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
                        >

                            <h2 className="text-2xl font-bold text-slate-800">
                                {report.title}
                            </h2>

                            <p className="text-slate-600 mt-4 leading-7">
                                {report.description}
                            </p>

                            <div className="flex gap-4 mt-8">

                                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold">

                                    Download PDF

                                </button>

                                <button className="border border-slate-300 px-6 py-3 rounded-2xl font-semibold">

                                    Export CSV

                                </button>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );
}

export default ReportsPage;