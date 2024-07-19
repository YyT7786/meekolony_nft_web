"use client";

import { 
    FloorPriceMarketTrend,
    ListingItems, 
    NFTItems, 
    SaleItems 
} from "@/types/meekolony";
import { 
    layoutType, 
    listingItems 
} from "@/constants";

import { ListingsTable } from "@/app/(main)/listings/listings-table";
import { SalesTable } from "@/app/(main)/sales/sales-table";
import { WalletTable } from "@/app/(wallet)/wallet/[walletAddressId]/wallet-table";
import { GetLatestSaleItems } from "@/actions/sales";
import { startTransition, useEffect, useState } from "react";
import { GetLatestListingItems } from "@/actions/listings";
import { toast } from "sonner";

type Props = {
    layoutType: layoutType,
    listingItems?: ListingItems,
    saleItems?: SaleItems,
    walletItems?: NFTItems,
    latestFlootPrice: FloorPriceMarketTrend,
}

export const ListItemLayout = ({
    layoutType,
    listingItems,
    saleItems,
    walletItems,
    latestFlootPrice
}: Props) => {
    const [listingItemsData, setListingItemsData] = useState(listingItems);
    const [saleItemsData, setSaleItemsData] = useState(saleItems);

    useEffect (() => {
        if (!listingItemsData) {
            return;
        }

        let interval = setInterval(() => {
            startTransition(() => {
                GetLatestListingItems()
                    .then((response) => {
                        if (response.data) {
                            setListingItemsData(response.data);
                        }
                    })
                    .catch(() => toast.error("Something went wrong"));
            })
        }, 30000);

        return () => {
            clearInterval(interval);
        };
    }, [listingItemsData]);

    useEffect (() => {
        if (!saleItemsData) {
            return;
        }

        let interval = setInterval(() => {
            startTransition(() => {
                GetLatestSaleItems()
                    .then((response) => {
                        if (response.data) {
                            setSaleItemsData(response.data);
                        }
                    })
                    .catch(() => toast.error("Something went wrong"));
            })
        }, 30000);

        return () => {
            clearInterval(interval);
        };
    }, [saleItemsData]);
    
    return (
        <div className="text-white">
            {layoutType === "listings" && <ListingsTable listingItems={listingItemsData} latestFloorPrice={latestFlootPrice}/>}
            {layoutType === "sales" && <SalesTable saleItems={saleItemsData}/>}
            {layoutType === "wallet" && <WalletTable walletItems={walletItems} latestFloorPrice={latestFlootPrice}/>}
        </div>
    )
}