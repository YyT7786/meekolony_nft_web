"use client"

import Image from "next/image";

import {  
    convertSolToPriceString, 
    getMeekolonyIndexName, 
} from "@/lib/meekolony";
import { FloorPriceMarketTrend, NFTItems } from "@/types/meekolony";
import { useModal } from "@/hooks/use-modal-store";

type Props = {
    walletItems?: NFTItems;
    latestFloorPrice: FloorPriceMarketTrend;
}

export const WalletTable = ({
    walletItems,
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
                                Floor
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Last Sold
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#201f2d]">
                    {walletItems && walletItems.results.filter(item => item.collectionName === "meekolony").map((item, index) => {
                        const meekolonyIndexName = getMeekolonyIndexName(item.title);
                        const lastSoldPrice = convertSolToPriceString(item.lastSalePriceWithFees);
                        const listPrice = item.price.toFixed(3);
                        const rarityRank = item.rarity.moonrank.rank;
                        const floorPrice = latestFloorPrice.cFP.toFixed(3);

                        return (
                            <tr key={index} className="hover:bg-[#201f2d]/50 h-[64px] cursor-pointer">
                                <td>
                                    <button 
                                        onClick={() => onOpen("nftModal", { walletItem: item })}
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
                                { item.price > 0 
                                    ?   
                                    <div>
                                        <span className="text-white text-xs sm:text-sm font-semibold">
                                            {listPrice}
                                        </span>
                                        <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                                            SOL
                                        </span>
                                    </div>
                                    :   
                                    <div>
                                        <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                                            --
                                        </span>
                                    </div>
                                }
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start flex gap-x-1">
                                        <span>
                                            {floorPrice}
                                        </span>
                                        <span className="text-gray-400">
                                            SOL
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start flex gap-x-1">
                                    { item.lastSalePriceWithFees > 0 
                                        ?   
                                        <div className="flex flex-row gap-x-1">
                                            <span className="text-white text-xs sm:text-sm font-semibold">
                                                {lastSoldPrice}
                                            </span>
                                            <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                                                SOL
                                            </span>
                                        </div>
                                        :   
                                        <div>
                                            <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                                                --
                                            </span>
                                        </div>
                                    }
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};