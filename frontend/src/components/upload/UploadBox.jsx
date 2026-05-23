function UploadBox({
    onFileSelect,
}) {

    const handleChange = (e) => {

        const file = e.target.files[0];

        if (file) {
            onFileSelect(file);
        }
    };

    return (
        <div className="bg-white border-2 border-dashed border-green-300 rounded-3xl p-16 text-center">

            <h2 className="text-3xl font-bold text-green-700 mb-4">
                Upload Bank Statement
            </h2>

            <p className="text-slate-500 mb-8">
                PDF only • Max 10MB
            </p>

            <input
                type="file"
                accept=".pdf"
                onChange={handleChange}
            />

        </div>
    );
}

export default UploadBox;