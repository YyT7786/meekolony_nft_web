"use client"

import { SaleItems } from "@/types/meekolony";
import Image from "next/image";

import { 
    calculateDayDifference,
    convertSolToPriceString, 
    getMeekolonyIndexName, 
    getOwnerAbbreviation 
} from "@/lib/meekolony";
import { cn } from "@/lib/utils";
import { useModal } from "@/hooks/use-modal-store";

type Props = {
    saleItems?: SaleItems;
}

export const SalesTable = ({
    saleItems
}: Props) => {
    const { onOpen } = useModal();
    
    return (
        <div className="flex overflow-x-auto">
            <table className="justify-center border-b border-[#201f2d] divide-y divide-[#201f2d]">
                <thead className="bg-[#201f2d]">
                    <tr>
                        <th>
                            <div
                                className="py-3 px-3 text-xs font-semibold text-white text-left left-[51px] min-w-[168px] lg:w-[240px]">
                                Item
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Type
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Rarity
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Seller
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Buyer
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Price
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                Time
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#201f2d]">
                    {saleItems?.results.map((item, index) => {
                        
                        const meekolonyIndexName = getMeekolonyIndexName(item.mintObject.title);
                        const rarityRank = item.mintObject.rarity.moonrank.rank;
                        const price = convertSolToPriceString(item.amount);
                        const sellerOwnerAbbreviation = getOwnerAbbreviation(item.seller_address);
                        const buyerOwnerAbbreviation = getOwnerAbbreviation(item.buyer_address);
                        const statusTag = !item?.signers ? "Buy" : "Sell"

                        // Convert unix timestamp
                        const date = new Date(item.blockTime * 1000);
                        const saleTime = calculateDayDifference(date);

                        return (
                            <tr key={index} className="hover:bg-[#201f2d]/50 h-[64px] cursor-pointer">
                                <td>
                                    <button 
                                        onClick={() => onOpen("nftModal", { saleItem: item })}
                                        className="flex items-center justify-start gap-x-3"
                                    >
                                        <div className="flex items-center gap-x-3">
                                            <Image
                                                src={item.mintObject.img}
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
                                        <div className={cn(
                                            "rounded-sm",
                                            statusTag === "Buy" && "bg-green-900",
                                            statusTag === "Sell" && "bg-red-900",
                                        )}>
                                            <div className="text-xs font-medium text-white px-2 py-1 text-start">
                                                {statusTag}
                                            </div>
                                        </div>
                                    </div>
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
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        {sellerOwnerAbbreviation}
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        {buyerOwnerAbbreviation}
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start flex gap-x-1">
                                        <span>
                                            {price}
                                        </span>
                                        <span className="text-gray-400">
                                            SOL
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        {saleTime}
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