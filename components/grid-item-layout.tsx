"use client";

import { startTransition, useEffect, useState } from "react";

import {
    FloorPriceMarketTrend,
    ListingItems,
    NFTItems,
    SaleItems
} from "@/types/meekolony";
import {
    layoutType
} from "@/constants";

import { GridListingItem } from "@/app/(main)/listings/grid-listing-item";
import { GridSaleItem } from "@/app/(main)/sales/grid-sale-item";
import { GridWalletItem } from "@/app/(wallet)/wallet/[walletAddressId]/grid-wallet-item";
import { GetLatestListingItems } from "@/actions/listings";
import { toast } from "sonner";
import { GetLatestSaleItems } from "@/actions/sales";

type Props = {
    layoutType: layoutType,
    listingItems?: ListingItems,
    saleItems?: SaleItems,
    walletItems?: NFTItems,
    latestFlootPrice: FloorPriceMarketTrend,
}

export const GridItemLayout = ({
    layoutType,
    listingItems,
    saleItems,
    walletItems,
    latestFlootPrice
}: Props) => {
    const [listingItemsData, setListingItemsData] = useState(listingItems);
    const [saleItemsData, setSaleItemsData] = useState(saleItems);

    useEffect(() => {
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
        }, 300000);

        return () => {
            clearInterval(interval);
        };
    }, [listingItemsData]);

    useEffect(() => {
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
        }, 300000);

        return () => {
            clearInterval(interval);
        };
    }, [saleItemsData]);

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-y-3 gap-x-2">
                {layoutType === "listings" && listingItemsData && listingItemsData.results.map((item, index) => (
                    <GridListingItem
                        key={index}
                        item={item}
                        latestFloorPrice={latestFlootPrice}
                    />
                ))}
                {layoutType === "sales" && saleItemsData && saleItemsData.results.map((item, index) => (
                    <GridSaleItem
                        key={index}
                        item={item}
                    />
                ))}
                {layoutType === "wallet" && walletItems && walletItems.results.filter(item => item.collectionName === "meekolony").map((item, index) => (
                    <GridWalletItem
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};