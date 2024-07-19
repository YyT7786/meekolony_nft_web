"use client"

import Image from "next/image";

import { 
    calculateDayDifference, 
    convertSolToPriceString, 
    getMeekolonyIndexName, 
    getOwnerAbbreviation 
} from "@/lib/meekolony";
import { cn } from "@/lib/utils";
import { 
    FloorPriceMarketTrend, 
    ListingItems 
} from "@/types/meekolony";
import { useModal } from "@/hooks/use-modal-store";

type Props = {
    listingItems?: ListingItems;
    latestFloorPrice: FloorPriceMarketTrend;
}

export const ListingsTable = ({
    listingItems,
    latestFloorPrice
}: Props) => {
    const { onOpen } = useModal();
    
    return (
        <div className="flex overflow-x-auto">
            <table className="justify-center border-b border-[#201f2d] divide-y divide-[#201f2d]">
                <thead className="bg-[#201f2d]">
                    <tr>
                        <th>
                            <div className="py-3 px-3 text-xs font-semibold text-white text-left left-[51px] min-w-[168px] lg:w-[240px]">
                                Item
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Rarity
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Listing Price
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Floor Difference
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Last Sold
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Owner
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Listed Time
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#201f2d]">
                    {listingItems?.results.map((item, index) => {
                        const meekolonyIndexName = getMeekolonyIndexName(item.title);
                        const lastSoldPrice = convertSolToPriceString(item.lastSalePriceWithFees);
                        const listedTime = calculateDayDifference(item.listingUpdatedAt.updatedAt);
                        const ownerAbbreviation = getOwnerAbbreviation(item.owner);
                        const listPrice = item.price.toFixed(3);
                        const rarityRank = item.rarity.moonrank.rank;
                        const floorDiff = (Math.abs((item.price / latestFloorPrice.cFP) - 1)).toFixed(3);

                        return (
                            <tr key={index} className="hover:bg-[#201f2d]/50 h-[64px] cursor-pointer">
                                <td>
                                    <button 
                                        onClick={() => onOpen("nftModal", { listingItem: item, latestFloorPrice: latestFloorPrice })}
                                        className="flex items-center justify-start gap-x-3"
                                    >
                                        <div className="flex items-center gap-x-3">
                                            <Image
                                                src={item.img}
                                                alt="Meekolony"
                                                height={40}
                                                width={40}
                                                unoptimized={true}
                                                className="rounded-full aspect-square object-cover"
                                            />
                                            <span className="text-sm font-medium text-white">
                                                {meekolonyIndexName}
                                            </span>
                                        </div>
                                    </button>
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <div className="rounded-sm bg-[#6565d1]">
                                            <div className="text-xs font-medium text-white px-2 py-1 text-start">
                                                {rarityRank}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex gap-x-1 px-1 py-2.5 text-start">
                                        <span className="text-sm font-medium text-white ">
                                            {listPrice}
                                        </span>
                                        <span className="text-sm font-medium text-white/40">
                                            SOL
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-green-500 px-1 py-2.5 text-start">
                                        {`+${floorDiff}%`}
                                    </div>
                                </td>
                                <td>
                                    <div className="px-1 py-2.5 text-start flex gap-x-1">
                                        <span className="text-sm font-medium text-white ">
                                            {lastSoldPrice}
                                        </span>
                                        <span className={cn(
                                            "text-sm font-medium text-white/40",
                                            lastSoldPrice === "--" && "text-transparent"
                                        )}>
                                            SOL
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        {ownerAbbreviation}
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        {listedTime}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    );
};