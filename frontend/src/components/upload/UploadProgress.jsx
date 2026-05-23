function UploadProgress({
    progress,
}) {

    return (
        <div className="mt-6">

            <div className="flex justify-between mb-2">

                <span className="text-sm text-slate-500">
                    Upload Progress
                </span>

                <span className="text-sm font-semibold">
                    {progress}%
                </span>

            </div>

            <div className="w-full bg-slate-200 rounded-full h-4">

                <div
                    className="bg-green-600 h-4 rounded-full transition-all"
                    style={{
                        width: `${progress}%`,
                    }}
                ></div>

            </div>

        </div>
    );
}

export default UploadProgress;