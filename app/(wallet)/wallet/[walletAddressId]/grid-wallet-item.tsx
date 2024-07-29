"use client";

import Image from "next/image";

import {
    NFTItem
} from "@/types/meekolony";
import {
    convertSolToPriceString,
    getMeekolonyIndexName,
} from "@/lib/meekolony";
import { useModal } from "@/hooks/use-modal-store";

type Props = {
    item: NFTItem;
}

export const GridWalletItem = ({
    item
}: Props) => {
    const { onOpen } = useModal();

    const meekolonyIndexName = getMeekolonyIndexName(item.title);
    const lastSoldPrice = convertSolToPriceString(item.lastSalePriceWithFees);
    const listPrice = item.price.toFixed(3);
    const rarityRank = item.rarity.moonrank.rank;

    return (
        <button
            onClick={() => onOpen("nftModal", { walletItem: item })}
            className="flex w-full flex-shrink-0"
        >
            <div className="flex flex-col border border-none rounded-2xl bg-[#201f2d] py-2.5 gap-y-2.5 w-[180px] sm:w-[208px] cursor-pointer hover:opacity-80">
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
                <div className="flex flex-col gap-y-1 px-5">
                    <div className="text-white text-xs sm:text-sm font-semibold text-start">
                        {meekolonyIndexName}
                    </div>
                    <div className="flex gap-x-1 items-center">
                        {item.price > 0
                            ?
                            <div className="flex flex-row gap-x-1">
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
                                    Unlisted
                                </span>
                            </div>
                        }
                    </div>
                    <div className="flex items-center">
                        <div className="text-gray-500 text-xs sm:text-sm font-semibold mr-auto">
                            {lastSoldPrice === "--" ? "--" : `Last ${lastSoldPrice} SOL`}
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