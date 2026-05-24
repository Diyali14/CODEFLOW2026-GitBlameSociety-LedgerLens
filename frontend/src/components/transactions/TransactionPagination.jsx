function TransactionPagination({
    currentPage,
    totalPages,
    setCurrentPage,
}) {

    return (
        <div className="flex justify-center gap-3 flex-wrap">

            {Array.from(
                { length: totalPages },
                (_, index) => (

                    <button
                        key={index}
                        onClick={() =>
                            setCurrentPage(index + 1)
                        }
                        className={`px-5 py-3 rounded-xl font-semibold
            ${currentPage === index + 1
                                ? "bg-green-600 text-white"
                                : "bg-white border border-slate-300"
                            }`}
                    >
                        {index + 1}
                    </button>

                )
            )}

        </div>
    );
}

export default TransactionPagination;