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
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                <input
                    type="text"
                    placeholder="Search narration..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

                <select
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                    className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                >

                    <option value="">
                        All Categories
                    </option>

                    <option value="Food">
                        Food
                    </option>

                    <option value="Shopping">
                        Shopping
                    </option>

                    <option value="Travel">
                        Travel
                    </option>

                    <option value="Bills">
                        Bills
                    </option>

                    <option value="Subscription">
                        Subscription
                    </option>

                </select>

                <select
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value)
                    }
                    className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                >

                    <option value="">
                        All Status
                    </option>

                    <option value="normal">
                        Normal
                    </option>

                    <option value="anomaly">
                        Suspicious
                    </option>

                </select>

                <select
                    value={sortOrder}
                    onChange={(e) =>
                        setSortOrder(e.target.value)
                    }
                    className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                >

                    <option value="">
                        Sort by Amount
                    </option>

                    <option value="high">
                        Highest First
                    </option>

                    <option value="low">
                        Lowest First
                    </option>

                </select>

            </div>

        </div>
    );
}

export default TransactionFilters;