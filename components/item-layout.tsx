"use client";

import { useState } from "react";

import {
    AlignJustify,
    LayoutGrid,
} from "lucide-react";

import { 
    FloorPriceMarketTrend,
    ListingItems, 
    NFTItems, 
    SaleItems 
} from "@/types/meekolony";
import { cn } from "@/lib/utils";
import { layoutType } from "@/constants";

import { GridItemLayout } from "./grid-item-layout";
import { ListItemLayout } from "./list-item-layout";

type Props = {
    layoutType: layoutType,
    latestFloorPrice: FloorPriceMarketTrend,
    listingItems?: ListingItems,
    saleItems?: SaleItems,
    walletItems?: NFTItems,
}

export const ItemLayout = ({
    layoutType,
    listingItems,
    saleItems,
    walletItems,
    latestFloorPrice
}: Props) => {
    const [isGrid, setIsGrid] = useState(true);

    const onChangeGridLayout = () => {
        setIsGrid(true);
    }

    const onChangeListLayout = () => {
        setIsGrid(false);
    }

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex items-center">
                <div className="flex flex-1 flex-row items-center gap-x-1">
                    <span className=" text-white text-sm lg:text-lg">
                        {listingItems && (
                            listingItems.results.length
                        )}
                        {saleItems && (
                            saleItems.results.length
                        )}
                        {walletItems && (
                            walletItems.results.filter(item => item.collectionName === "meekolony").length
                        )}
                    </span>
                    <span className="text-white/40">
                        Items
                    </span>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={onChangeGridLayout}
                        className={cn(
                            "flex gap-x-2 border-2 border-[#484385] rounded-none rounded-l-lg border-r-0 px-2.5 py-1.5 items-center",
                            isGrid && "bg-[#484385]"
                        )}
                    >
                        <LayoutGrid
                            fill="white"
                            className="h-4 w-4 text-white"
                        />
                        <span
                            className="text-sm text-white"
                        >
                            Grid
                        </span>
                    </button>
                    <button
                        onClick={onChangeListLayout}
                        className={cn(
                            "flex gap-x-2 border-2 border-[#484385] rounded-none rounded-r-lg px-2.5 py-1.5 items-center",
                            !isGrid && "bg-[#484385]"
                        )}
                    >
                        <AlignJustify
                            fill="white"
                            className="h-4 w-4 text-white"
                        />
                        <span
                            className="text-sm text-white"
                        >
                            List
                        </span>
                    </button>
                </div>
            </div>

            {isGrid
                ? <GridItemLayout 
                        layoutType={layoutType}
                        listingItems={listingItems}
                        saleItems={saleItems}
                        walletItems={walletItems}
                        latestFlootPrice={latestFloorPrice}
                    />
                : <ListItemLayout
                        layoutType={layoutType}
                        listingItems={listingItems}
                        saleItems={saleItems}
                        walletItems={walletItems}
                        latestFlootPrice={latestFloorPrice}
                    />}
        </div>
    )
}