"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FloorPriceMarketTrend, NFTItems, WalletUserInfo } from "@/types/meekolony";
import { convertSolToPriceString, getWalletImageUrl, shortenWalletAdrress } from "@/lib/meekolony";

type Props = {
    isWalletUserValid?: boolean,
    walletAddressId?: string,
    walletUserInfo?: WalletUserInfo,
    latestFloorPrice?: FloorPriceMarketTrend,
    walletItems?: NFTItems,
}

export const WalletHeader = ({
    isWalletUserValid,
    walletAddressId,
    walletUserInfo,
    latestFloorPrice,
    walletItems
}: Props) => {

    const [copied, setCopied] = useState(false);
    const [isExtendedInfoVisible, setisExtendedInfoVisible] = useState(false);
    const walletAddress = walletAddressId;
    const shortWalletAddress = walletAddress ? shortenWalletAdrress(walletAddress) : "";
    const meekolonyItemsCount = walletItems?.results.filter(item => item.collectionName === "meekolony").length ?? 0;
    const totalPortfolio = latestFloorPrice ? (meekolonyItemsCount * (latestFloorPrice.cFP)).toFixed(3) : 0;
    const walletUserImage = walletUserInfo ? walletUserInfo.avatarMintImg : "";

    let totalCost:number = 0;
    walletItems?.results
        .filter(item => item.collectionName === "meekolony")
        .forEach((item) => {
            totalCost += item?.lastSalePriceWithFees ?? 0
        })

    const showExtendedInfo = () => {
        if (isExtendedInfoVisible == true) {
            setisExtendedInfoVisible(false)
        } else {
            setisExtendedInfoVisible(true)
        }
    }

    const onCopy = () => {
        navigator.clipboard.writeText(walletAddress ?? "");
        setCopied(true)

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    return (
        <div className="flex gap-x-2 border-b border-[#201f2d] mb-4">
            <div className="lg:px-6 mb-4 w-full">
                <div className="bg-[#201f2d] rounded-lg px-2.5 py-2.5">
                    <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0">
                        <div className="flex flex-row items-center gap-x-2">
                            <div className="shrink-0">
                                <Image
                                    src={walletUserImage}
                                    alt="MeelokolonyCollection"
                                    height={90}
                                    width={90}
                                    unoptimized={true}
                                    className="rounded-full aspect-square object-cover border-2 border-[#484385]"
                                />
                            </div>
                            <div className="flex gap-x-1 items-center">
                                <div className="flex flex-col gap-y-1">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <div className="text-white text-md lg:text-lg font-semibold text-nowrap">
                                            {shortWalletAddress}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <button 
                                            onClick={onCopy}
                                            className="flex flex-row border rounded-lg border-[#484385] px-2.5 py-1 items-center gap-x-1.5 hover:opacity-80">
                                            <div>
                                                <Image
                                                    src="/chain.svg"
                                                    alt="Chain"
                                                    height={12}
                                                    width={12}
                                                />
                                            </div>
                                            <div 
                                                className="text-white text-xs"
                                            >
                                                {copied
                                                    ? "Copied !"
                                                    : shortWalletAddress}                                            
                                            </div>
                                        </button>
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
                            "hidden lg:flex items-start lg:items-center lg:pl-8 gap-x-3 lg:gap-x-6",
                            isExtendedInfoVisible && "flex",
                        )}>
                            <div className="flex flex-row gap-x-6 gap-y-2.5 lg:gap-y-0">
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-[10px] font-semibold text-gray-400 text-nowrap">
                                        Portfolio Value
                                    </div>
                                    <div className="flex flex-row gap-x-1">
                                        <span className="text-sm font-medium text-white text-nowrap">
                                            {totalPortfolio}
                                        </span>
                                        <span className="text-sm font-medium text-white/40 text-nowrap">
                                            SOL
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-[10px] font-semibold text-gray-400 text-nowrap">
                                        Total Cost
                                    </div>
                                    <div className="flex flex-row gap-x-1">
                                        <span className="text-sm font-medium text-white text-nowrap">
                                            {convertSolToPriceString(totalCost)}
                                        </span>
                                        <span className="text-sm font-medium text-white/40 text-nowrap">
                                            SOL
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { !isWalletUserValid && (
                    <div className="text-white/40 text-[10px] mt-2">
                        *Something went wrong, dummy data will be used.
                    </div>
                )}
            </div>
        </div>
    );
};