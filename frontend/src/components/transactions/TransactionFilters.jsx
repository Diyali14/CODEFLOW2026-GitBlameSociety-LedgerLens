function TransactionFilters({
    search,
    setSearch,
    category,
    setCategory,
    status,
    setStatus,
    sortOrder,
    setSortOrder,
}) {

    return (
        <div className="
            relative overflow-hidden
            rounded-4xl
            border border-emerald-100
            bg-white/70 backdrop-blur-2xl
            p-6
        ">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search transactions..."
                    className="input"
                />

                <select value={category} onChange={(e) => setCategory(e.target.value)} className="input">
                    <option value="">All Categories</option>
                    <option>Food</option>
                    <option>Shopping</option>
                    <option>Travel</option>
                    <option>Bills</option>
                    <option>Subscription</option>
                </select>

                <select value={status} onChange={(e) => setStatus(e.target.value)} className="input">
                    <option value="">All Status</option>
                    <option value="normal">Normal</option>
                    <option value="anomaly">Suspicious</option>
                </select>

                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="input">
                    <option value="">Sort by Amount</option>
                    <option value="high">High → Low</option>
                    <option value="low">Low → High</option>
                </select>

            </div>

            <style>{`
                .input{
                    width:100%;
                    padding:12px 14px;
                    border-radius:16px;
                    border:1px solid rgba(16,185,129,0.2);
                    background:rgba(255,255,255,0.7);
                    outline:none;
                    transition:0.2s;
                }
                .input:focus{
                    border-color:rgb(16 185 129);
                    box-shadow:0 0 0 4px rgba(16,185,129,0.1);
                }
            `}</style>

        </div>
    );
}

export default TransactionFilters;