"use client";

import { ListingsTable } from "@/components/listings-table";
import { SalesTable } from "@/components/sales-table";
import { WalletTable } from "@/components/wallet-table";

export const ListItemLayout = () => {
    return (
        <div className="text-white">
            <WalletTable />
        </div>
    )
}