"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ChevronDown,
    ChevronUp,
    Crown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
    FloorPriceMarketTrend,
    HolderStats,
    MeekolonyPassCollection, 
    MeekolonyPassCollectionStats 
} from "@/types/meekolony";
import { convertSolToPriceString } from "@/lib/meekolony";

type Props = {
    meelokonyCollection?: MeekolonyPassCollection,
    meelokonyCollectionStats?: MeekolonyPassCollectionStats,
    latestFloorPrice?: FloorPriceMarketTrend,
    holderStats?: HolderStats,
}

export const CollectionHeader = ({
    meelokonyCollection,
    meelokonyCollectionStats,
    latestFloorPrice,
    holderStats,
}: Props) => {
    
    const [isExtendedInfoVisible, setisExtendedInfoVisible] = useState(false);

    const floorPrice = latestFloorPrice ? latestFloorPrice.cFP.toFixed(3) : 0;
    const allVolume = meelokonyCollectionStats ? (meelokonyCollectionStats.results.volumeAll / 10000000000000).toFixed(1): 0;
    const topOffer = meelokonyCollectionStats ? convertSolToPriceString(meelokonyCollectionStats.results.highestGlobalOffer): 0;
    const listedCount = meelokonyCollectionStats ? meelokonyCollectionStats.results.listedCount : 0;
    const totalSupply = holderStats ? holderStats.totalSupply.toLocaleString() : 0;
    const totalOwners = holderStats ? (holderStats.uniqueHolders / 1000).toFixed(1) : 0;

    const showExtendedInfo = () => {
        if (isExtendedInfoVisible == true) {
            setisExtendedInfoVisible(false)
        } else {
            setisExtendedInfoVisible(true)
        }
    }

    return (
        <div className="flex gap-x-2 border-b border-[#201f2d] mb-4">
            <div className="lg:px-6 mb-4 w-full">
                <div className="bg-[#201f2d] rounded-lg px-2.5 py-2.5">
                    <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0">
                        <div className="flex flex-row items-center gap-x-2">
                            <div className="relative shrink-0">
                                <Image
                                    src="https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/meekolony_pfp_1682512553920.gif"
                                    alt="MeelokolonyCollection"
                                    height={60}
                                    width={60}
                                    unoptimized={true}
                                    className="rounded-full aspect-square object-cover border-2 border-[#484385]"
                                />
                                <div className="absolute text-white top-0 right-0">
                                    <Image
                                        src="/circle_check.png"
                                        alt="CircleCheck"
                                        height={24}
                                        width={24}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-x-1 items-center">
                                <div className="flex flex-col gap-y-0.5">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <div className="text-white text-md lg:text-lg font-semibold text-nowrap">
                                            {meelokonyCollection?.name ?? ""}
                                        </div>
                                        <Crown
                                            color="#ffaa00"
                                            fill="#ffaa00"
                                            className="h-4 w-4"
                                        />
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <a href={meelokonyCollection?.discord ?? "https://www.discord.gg/tats"} className="hover:opacity-80">
                                            <div className="bg-[#484385] rounded py-0.5 px-1.5">
                                                <div className="flex items-center gap-x-1">
                                                    <Image
                                                        src="/discord.svg"
                                                        alt="Discord"
                                                        height={16}
                                                        width={16}
                                                    />
                                                    <div className="text-[10px] lg:text-xs text-white font-medium">
                                                        Discord
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href={meelokonyCollection?.twitter?? "https://www.twitter.com/meekolony"} className="hover:opacity-80">
                                            <div className="bg-[#484385] rounded py-0.5 px-1.5">
                                                <div className="flex items-center gap-x-1">
                                                    <Image
                                                        src="/twitter.svg"
                                                        alt="Twitter"
                                                        height={16}
                                                        width={16}
                                                    />
                                                    <div className="text-[10px] lg:text-xs text-white font-medium">
                                                        x.com
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href={meelokonyCollection?.website ?? "https://www.tatsumeeko.com/meekolony"} className="hover:opacity-80">
                                            <div className="bg-[#484385] rounded py-0.5 px-1.5">
                                                <div className="text-[10px] lg:text-xs text-white font-medium">
                                                    tatsumeeko.com
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={showExtendedInfo}
                                    className="flex lg:hidden"
                                >
                                    {isExtendedInfoVisible
                                        ? <ChevronUp
                                            color="white"
                                            className="hover:opacity-80 cursor-pointer"
                                        />
                                        : <ChevronDown
                                            color="white"
                                            className="hover:opacity-80 cursor-pointer"
                                        />}
                                </button>
                            </div>
                        </div>
                        <div className={cn(
                            "hidden lg:flex items-start lg:items-center lg:pl-8 gap-x-6 lg:gap-x-6",
                            isExtendedInfoVisible && "flex",
                        )}>
                            <div className="flex flex-col lg:flex-row lg:gap-x-6 gap-x-0 gap-y-2.5 lg:gap-y-0">
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-[10px] font-semibold text-gray-400 text-nowrap">
                                        Floor Price
                                    </div>
                                    <div className="flex gap-x-1">
                                        <span className="text-sm font-medium text-white text-nowrap">
                                            {floorPrice}
                                        </span>
                                        <span className="text-sm font-medium text-white/40 text-nowrap">
                                            SOL
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-[10px] font-semibold text-gray-400 text-nowrap">
                                        Top Offer
                                    </div>
                                    <div className="flex gap-x-1">
                                        <span className="text-sm font-medium text-white text-nowrap">
                                            {topOffer}
                                        </span>
                                        <span className="text-sm font-medium text-white/40 text-nowrap">
                                            SOL
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:gap-x-6 gap-x-0 gap-y-2.5 lg:gap-y-0">
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-[10px] font-semibold text-gray-400 text-nowrap">
                                        All Vol
                                    </div>
                                    <div className="text-sm font-medium text-white text-nowrap">
                                        {`${allVolume}K`}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-[10px] font-semibold text-gray-400 text-nowrap">
                                        Listed
                                    </div>
                                    <div className="text-sm font-medium text-white text-nowrap">
                                        {listedCount}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:gap-x-6 gap-x-0 gap-y-2.5 lg:gap-y-0">
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-[10px] font-semibold text-gray-400 text-nowrap">
                                        Supply
                                    </div>
                                    <div className="text-sm font-medium text-white text-nowrap">
                                        {totalSupply}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-[10px] font-semibold text-gray-400 text-nowrap">
                                        Owners
                                    </div>
                                    <div className="text-sm font-medium text-white text-nowrap">
                                        {`${totalOwners}K`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};