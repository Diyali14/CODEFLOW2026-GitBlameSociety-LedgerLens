import {
    useMemo,
    useState,
} from "react";

import {
    allTransactions,
} from "../data/dummyData";

import TransactionStats from "../components/transactions/TransactionStats";

import TransactionFilters from "../components/transactions/TransactionFilters";

import TransactionTable from "../components/dashboard/TransactionTable";

import TransactionMobileCard from "../components/transactions/TransactionMobileCard";

import TransactionPagination from "../components/transactions/TransactionPagination";

import TransactionExportButton from "../components/transactions/TransactionExportButton";

import EmptyTransactions from "../components/transactions/EmptyTransactions";

function TransactionsPage() {

    const [search, setSearch] =
        useState("");

    const [category, setCategory] =
        useState("");

    const [status, setStatus] =
        useState("");

    const [sortOrder, setSortOrder] =
        useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const itemsPerPage = 5;

    const filteredTransactions =
        useMemo(() => {

            let filtered =
                [...allTransactions];

            if (search) {

                filtered = filtered.filter(
                    (txn) =>
                        txn.narration
                            .toLowerCase()
                            .includes(
                                search.toLowerCase()
                            )
                );
            }

            if (category) {

                filtered = filtered.filter(
                    (txn) =>
                        txn.category === category
                );
            }

            if (status === "anomaly") {

                filtered = filtered.filter(
                    (txn) => txn.anomaly
                );
            }

            if (status === "normal") {

                filtered = filtered.filter(
                    (txn) => !txn.anomaly
                );
            }

            if (sortOrder === "high") {

                filtered.sort(
                    (a, b) => b.debit - a.debit
                );
            }

            if (sortOrder === "low") {

                filtered.sort(
                    (a, b) => a.debit - b.debit
                );
            }

            return filtered;

        }, [
            search,
            category,
            status,
            sortOrder,
        ]);

    const totalPages =
        Math.ceil(
            filteredTransactions.length /
            itemsPerPage
        );

    const paginatedTransactions =
        filteredTransactions.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );

    return (
        <div className="space-y-8">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>

                    <h1 className="text-4xl font-bold text-slate-800">
                        Transactions
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Analyze and monitor your transaction history
                    </p>

                </div>

                <TransactionExportButton />

            </div>

            <TransactionStats
                transactions={filteredTransactions}
            />

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

                        <TransactionTable
                            transactions={
                                paginatedTransactions
                            }
                        />

                    </div>

                    <div className="grid grid-cols-1 gap-5 lg:hidden">

                        {paginatedTransactions.map(
                            (txn) => (

                                <TransactionMobileCard
                                    key={txn.transactionId}
                                    txn={txn}
                                />

                            )
                        )}

                    </div>

                    <TransactionPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={
                            setCurrentPage
                        }
                    />

                </>

            )}

        </div>
    );
}

export default TransactionsPage;