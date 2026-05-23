import {
    useState,
} from "react";

import toast from "react-hot-toast";

function UploadPage() {

    const [file, setFile] =
        useState(null);

    const handleFileChange = (e) => {

        const selected =
            e.target.files[0];

        if (!selected) return;

        if (selected.type !== "application/pdf") {

            toast.error(
                "Only PDF files allowed"
            );

            return;
        }

        setFile(selected);

        toast.success(
            "PDF selected successfully"
        );
    };

    return (
        <div className="max-w-5xl mx-auto">

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
                    Upload Bank Statement
                </h1>

                <p className="text-slate-500 mt-4 text-lg">
                    Upload your PDF bank statement for AI-powered financial analysis.
                </p>

                <div className="border-2 border-dashed border-green-300 rounded-3xl mt-10 p-10 md:p-20 text-center bg-green-50">

                    <h2 className="text-2xl font-bold text-green-700">
                        Drag & Drop PDF Here
                    </h2>

                    <p className="text-slate-500 mt-3">
                        PDF only • Maximum size 10MB
                    </p>

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="mt-8"
                    />

                </div>

                {file && (

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-8">

                        <h3 className="font-bold text-xl">
                            Selected File
                        </h3>

                        <p className="mt-3">
                            {file.name}
                        </p>

                        <p className="text-slate-500 mt-1">
                            {(file.size / 1024 / 1024).toFixed(2)}
                            MB
                        </p>

                    </div>

                )}

                <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all w-full md:w-auto">

                    Analyze Statement

                </button>

            </div>

        </div>
    );
}

export default UploadPage;