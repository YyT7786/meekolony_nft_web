"use client";

import Image from "next/image";
import { useModal } from "@/hooks/use-modal-store";

import { Clock, MoveRight } from "lucide-react";

import { 
    calculateDayDifference,
    convertSolToPriceString, 
    getMeekolonyIndexName, 
    getOwnerAbbreviation 
} from "@/lib/meekolony";
import { cn } from "@/lib/utils";
import { SaleItem } from "@/types/meekolony";

type Props = {
    item: SaleItem;
}

export const GridSaleItem = ({
    item
}: Props) => {
    const { onOpen } = useModal();

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
        <button
            onClick={() => onOpen("nftModal", { saleItem: item })}
            className="flex w-full flex-shrink-0"
        >
            <div className="flex flex-col border border-none rounded-2xl bg-[#201f2d] py-2.5 gap-y-2.5 w-[180px] sm:w-[208px] cursor-pointer hover:opacity-80">
                <div className="flex items-center px-5">
                    <div className={cn(
                        "flex mr-auto items-center border-0 rounded-lg px-3.5 py-1 border-transparent",
                        statusTag === "Buy" && "bg-green-900",
                        statusTag === "Sell" && "bg-red-900",
                    )}>
                        <span
                            className="text-white text-xs"
                        >
                            {statusTag}
                        </span>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center border-0 rounded-lg px-1.5 py-1 bg-[#141420] border-transparent">
                        <Clock
                            className="text-white h-3.5 w-3.5"
                        />
                        <span
                            className="text-white text-xs"
                        >
                            {saleTime}
                        </span>
                    </div>
                </div>
                <div className="flex mx-auto w-[160px] sm:w-[180px]">
                    <Image
                        src={item.mintObject.img}
                        alt="Meekolony"
                        height={208}
                        width={180}
                        unoptimized={true}
                        className="rounded-2xl aspect-square object-cover"
                    />
                </div>
                <div className="flex flex-col gap-y-1.5 px-5">
                    <div className="text-white text-xs sm:text-sm font-semibold text-start">
                        {meekolonyIndexName}
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <span className="text-white text-xs sm:text-sm font-semibold">
                            {sellerOwnerAbbreviation}
                        </span>
                        <MoveRight className="text-gray-500 w-4" />
                        <span className="text-white text-xs sm:text-sm font-semibold">
                            {buyerOwnerAbbreviation}
                        </span>
                    </div>
                    <div className="flex">
                        <div className="flex flex-1 gap-x-1 items-center">
                            <span className="text-white text-xs sm:text-sm font-semibold">
                                {price}
                            </span>
                            <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                                SOL
                            </span>
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