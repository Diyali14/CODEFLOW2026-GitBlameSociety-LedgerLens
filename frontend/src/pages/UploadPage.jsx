import {
    useState,
} from "react";

import toast from "react-hot-toast";

import {
    uploadStatementApi,
} from "../api/uploadApi";

import {
    triggerAiAnalysisApi,
} from "../api/aiApi";

function UploadPage() {

    const [file, setFile] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [uploadProgress, setUploadProgress] =
        useState(0);

    const handleFileChange = (e) => {

        const selected =
            e.target.files[0];

        if (!selected) return;

        if (
            selected.type !==
            "application/pdf"
        ) {

            toast.error(
                "Only PDF files allowed"
            );

            return;
        }

        if (
            selected.size >
            10 * 1024 * 1024
        ) {

            toast.error(
                "File size exceeds 10MB"
            );

            return;
        }

        setFile(selected);

        toast.success(
            "PDF selected successfully"
        );
    };

    const handleAnalyze =
        async () => {

            if (!file) {

                toast.error(
                    "Please select a PDF"
                );

                return;
            }

            try {

                setLoading(true);

                setUploadProgress(0);

                // STEP 1 — Upload PDF
                await uploadStatementApi(
                    file,
                    (progressEvent) => {

                        const percent =
                            Math.round(
                                (
                                    progressEvent.loaded *
                                    100
                                ) /
                                progressEvent.total
                            );

                        setUploadProgress(
                            percent
                        );
                    }
                );

                toast.success(
                    "Statement uploaded successfully"
                );

                // STEP 2 — Trigger AI
                await triggerAiAnalysisApi();

                toast.success(
                    "AI analysis completed successfully"
                );

            } catch (error) {

                console.error(error);

                toast.error(
                    error?.response?.data
                        ?.message ||
                    "Something went wrong"
                );

            } finally {

                setLoading(false);

            }
        };

    return (
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-10">

            {/* Ambient Glow */}
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-emerald-300/20 blur-[140px] rounded-full" />

            {/* Main Container */}
            <div
                className="
                relative
                overflow-hidden
                rounded-4xl
                border border-emerald-100
                bg-white/70
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(16,185,129,0.08)]
                p-6 md:p-10
            "
            >

                <div className="absolute inset-0 bg-linear-to-br from-white/80 via-transparent to-emerald-50/40 pointer-events-none" />

                <div className="relative z-10">

                    {/* Header */}
                    <div className="max-w-3xl">

                        <h1
                            className="
                            text-4xl
                            md:text-6xl
                            font-light
                            tracking-tighter
                            leading-tight
                            text-slate-900
                        "
                        >
                            Upload your bank statement
                        </h1>

                        <p
                            className="
                            text-slate-500
                            mt-6
                            text-lg
                            leading-relaxed
                            max-w-2xl
                        "
                        >
                            Upload your PDF statement and let AI categorize
                            transactions, detect anomalies, and generate
                            intelligent financial insights instantly.
                        </p>

                    </div>

                    {/* Upload Box */}
                    <div
                        className="
                        relative
                        overflow-hidden
                        mt-12
                        rounded-4xl
                        border
                        border-dashed
                        border-emerald-300/70
                        bg-linear-to-br
                        from-emerald-50/80
                        via-white
                        to-yellow-50/40
                        p-10 md:p-20
                        text-center
                    "
                    >

                        <div className="relative z-10">

                            <div
                                className="
                                mx-auto
                                mb-8
                                flex
                                items-center
                                justify-center
                                w-24
                                h-24
                                rounded-3xl
                                bg-white/80
                                border border-emerald-100
                            "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-12 h-12 text-emerald-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16.5V3m0 13.5-4.5-4.5M12 16.5l4.5-4.5M3 19.5h18"
                                    />
                                </svg>

                            </div>

                            <h2
                                className="
                                text-3xl
                                md:text-4xl
                                font-light
                                tracking-[-0.04em]
                                text-slate-900
                            "
                            >
                                Drag & Drop PDF Here
                            </h2>

                            <p
                                className="
                                text-slate-500
                                mt-4
                                text-base
                            "
                            >
                                PDF only • Maximum size 10MB
                            </p>

                            {/* File Input */}
                            <div className="mt-10">

                                <label
                                    className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-8
                                    py-4
                                    rounded-2xl
                                    bg-emerald-600
                                    text-white
                                    font-medium
                                    cursor-pointer
                                    hover:bg-emerald-700
                                "
                                >

                                    Select PDF

                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={
                                            handleFileChange
                                        }
                                        className="hidden"
                                    />

                                </label>

                            </div>

                        </div>

                    </div>

                    {/* Selected File */}
                    {file && (

                        <div
                            className="
                            mt-8
                            rounded-[1.8rem]
                            border border-emerald-100
                            bg-white/70
                            backdrop-blur-xl
                            p-6
                        "
                        >

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                                <div>

                                    <h3 className="font-semibold text-lg text-slate-900">

                                        {file.name}

                                    </h3>

                                    <p className="text-slate-500 mt-2 text-sm">

                                        {(file.size / 1024 / 1024).toFixed(2)}
                                        MB

                                    </p>

                                </div>

                                <button
                                    onClick={
                                        handleAnalyze
                                    }
                                    disabled={
                                        loading
                                    }
                                    className={`
                                        px-8
                                        py-4
                                        rounded-2xl
                                        text-white
                                        font-medium
                                        transition-all
                                        ${loading
                                            ? "bg-slate-400 cursor-not-allowed"
                                            : "bg-emerald-600 hover:bg-emerald-700"
                                        }
                                    `}
                                >

                                    {loading
                                        ? "Processing..."
                                        : "Analyze Statement"}

                                </button>

                            </div>

                            {/* Progress */}
                            {loading && (

                                <div className="mt-6">

                                    <div className="flex justify-between mb-2">

                                        <span className="text-sm text-slate-500">

                                            Upload Progress

                                        </span>

                                        <span className="text-sm font-semibold text-emerald-600">

                                            {uploadProgress}%

                                        </span>

                                    </div>

                                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-emerald-500 transition-all duration-300"
                                            style={{
                                                width:
                                                    `${uploadProgress}%`,
                                            }}
                                        ></div>

                                    </div>

                                </div>

                            )}

                        </div>

                    )}

                    {/* Bottom Stats */}
                    <div className="
                         grid
                         grid-cols-1
                         md:grid-cols-3
                         gap-6
                         mt-12
                     ">

                        <div className="
                             rounded-2xl
                             border border-emerald-100
                             bg-white/60
                             backdrop-blur-xl
                             p-6
                         ">
                            <p className="text-sm text-slate-500 mb-2">
                                Supported Format
                            </p>

                            <h3 className="text-2xl font-light text-slate-900">
                                PDF Statements
                            </h3>
                        </div>

                        <div className="
                             rounded-2xl
                             border border-emerald-100
                             bg-white/60
                            backdrop-blur-xl
                             p-6
                         ">
                            <p className="text-sm text-slate-500 mb-2">
                                AI Features
                            </p>

                            <h3 className="text-2xl font-light text-slate-900">
                                Smart Categorization
                            </h3>
                        </div>

                        <div className="
                             rounded-2xl
                             border border-emerald-100
                             bg-white/60
                             backdrop-blur-xl
                             p-6
                         ">
                            <p className="text-sm text-slate-500 mb-2">
                                Security
                            </p>

                            <h3 className="text-2xl font-light text-slate-900">
                                Encrypted Uploads
                            </h3>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default UploadPage;