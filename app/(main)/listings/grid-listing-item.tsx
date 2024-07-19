"use client";

import { Clock } from "lucide-react";
import Image from "next/image";

import { 
    calculateDayDifference, 
    convertSolToPriceString, 
    getMeekolonyIndexName, 
    getOwnerAbbreviation 
} from "@/lib/meekolony";
import { FloorPriceMarketTrend, ListingItem } from "@/types/meekolony";
import { useModal } from "@/hooks/use-modal-store";

type Props = {
    item: ListingItem;
    latestFloorPrice: FloorPriceMarketTrend;
}

export const GridListingItem = ({
    item,
    latestFloorPrice
}: Props) => {
    const { onOpen } = useModal();
    
    const meekolonyIndexName = getMeekolonyIndexName(item.title);
    const lastSoldPrice = convertSolToPriceString(item.lastSalePriceWithFees);
    const listedTime = calculateDayDifference(item.listingUpdatedAt.updatedAt);
    const ownerAbbreviation = getOwnerAbbreviation(item.owner);
    const listPrice = item.price.toFixed(3);
    const rarityRank = item.rarity.moonrank.rank;

    return (
        <button 
            onClick={() => onOpen("nftModal", { listingItem: item, latestFloorPrice: latestFloorPrice })}
            className="flex w-full flex-shrink-0"
        >
            <div className="flex flex-col border border-none rounded-2xl bg-[#201f2d] py-2.5 gap-y-2.5 w-[180px] sm:w-[208px] cursor-pointer hover:opacity-80">
                <div className="flex items-center px-5">
                    <div className="flex mr-auto text-start flex-col">
                        <span className="text-gray-500 text-xs font-semibold">
                            Owner
                        </span>
                        <span className="text-white text-sm font-semibold">
                            {ownerAbbreviation}
                        </span>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center border-0 rounded-lg px-1.5 py-1 bg-[#141420] border-transparent">
                        <Clock
                            className="text-white h-3.5 w-3.5"
                        />
                        <span
                            className="text-white text-xs"
                        >
                            {listedTime}
                        </span>
                    </div>
                </div>
                <div className="flex mx-auto w-[160px] sm:w-[180px]">
                    <Image
                        src={item.img}
                        alt="Meekolony"
                        height={208}
                        width={180}
                        unoptimized={true}
                        className="rounded-2xl aspect-square object-cover"
                    />
                </div>
                <div className="flex flex-col gap-y-1.5 px-5">
                    <div className="text-white text-xs text-start sm:text-sm font-semibold">
                        {meekolonyIndexName}
                    </div>
                    <div className="flex gap-x-1 items-center">
                        <span className="text-white text-xs sm:text-sm font-semibold">
                            {listPrice}
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                            SOL
                        </span>
                    </div>
                    <div className="flex items-center">
                        <div className="text-gray-500 text-xs sm:text-sm font-semibold mr-auto">
                            {`Last ${lastSoldPrice} SOL`}
                        </div>
                        <div className="flex items-center border-0 rounded-lg px-1.5 py-1 bg-[#6565d1] border-transparent">
                            <span
                                className="text-white text-xs"
                            >
                                {rarityRank}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
};