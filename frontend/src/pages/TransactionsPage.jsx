import { useMemo, useState } from "react";

import { allTransactions } from "../data/dummyData";

import TransactionStats from "../components/transactions/TransactionStats";
import TransactionFilters from "../components/transactions/TransactionFilters";
import TransactionTable from "../components/dashboard/TransactionTable";
import TransactionMobileCard from "../components/transactions/TransactionMobileCard";
import TransactionPagination from "../components/transactions/TransactionPagination";
import EmptyTransactions from "../components/transactions/EmptyTransactions";

function TransactionsPage() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const filteredTransactions = useMemo(() => {

        let filtered = [...allTransactions];

        if (search) {
            filtered = filtered.filter(txn =>
                txn.narration.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category) {
            filtered = filtered.filter(txn => txn.category === category);
        }

        if (status === "anomaly") {
            filtered = filtered.filter(txn => txn.anomaly);
        }

        if (status === "normal") {
            filtered = filtered.filter(txn => !txn.anomaly);
        }

        if (sortOrder === "high") {
            filtered.sort((a, b) => b.debit - a.debit);
        }

        if (sortOrder === "low") {
            filtered.sort((a, b) => a.debit - b.debit);
        }

        return filtered;

    }, [search, category, status, sortOrder]);

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

    const paginatedTransactions =
        filteredTransactions.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );

    return (
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-10">

            {/* glow (multi-layer AI field) */}
            <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-200 h-200">

                <div className="absolute inset-0 bg-emerald-300/20 blur-[160px] rounded-full" />

                <div className="absolute inset-0 bg-sky-300/20 blur-[160px] rounded-full translate-x-24" />

                <div className="absolute inset-0 bg-amber-200/20 blur-[160px] rounded-full -translate-x-24" />

            </div>

            {/* header */}
            <div className="
    relative overflow-hidden rounded-4xl
    border border-emerald-100/70
    bg-white/60 backdrop-blur-2xl
    shadow-[0_25px_90px_rgba(16,185,129,0.10)]
    p-8
">

                {/* animated gradient layer */}
                <div className="
        absolute inset-0
        bg-linear-to-r
        from-emerald-50/70 via-white to-sky-50/60
        opacity-80
    " />

                {/* subtle radial highlight */}
                <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_55%)]
    " />

                <div className="relative z-10">

                    {/* title */}
                    <h1 className="
            text-3xl md:text-4xl
            font-light tracking-[-0.03em]
            text-slate-900
        ">
                        Transactions
                    </h1>

                    {/* subtitle */}
                    <p className="mt-3 text-slate-500 text-base md:text-lg max-w-2xl">
                        AI-powered monitoring of your financial activity with anomaly detection,
                        categorization, and behavioral insights.
                    </p>

                </div>

            </div>
            <TransactionStats transactions={filteredTransactions} />
            <TransactionFilters
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                status={status}
                setStatus={setStatus}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />

            {filteredTransactions.length === 0 ? (
                <EmptyTransactions />
            ) : (
                <>
                    <div className="hidden lg:block">
                        <TransactionTable transactions={paginatedTransactions} />
                    </div>

                    <div className="grid gap-5 lg:hidden">
                        {paginatedTransactions.map(txn => (
                            <TransactionMobileCard key={txn.transactionId} txn={txn} />
                        ))}
                    </div>

                    <TransactionPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                    />
                </>
            )}

        </div>
    );
}

export default TransactionsPage;