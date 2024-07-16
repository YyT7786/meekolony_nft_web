"use client"

import Image from "next/image";
import { useModal } from "@/hooks/use-modal-store";

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import {
    ExternalLink,
    NotebookText,
    RefreshCw,
    ScrollText,
    Settings,
    Share2
} from "lucide-react";

export const NftModal = () => {
    const { isOpen, onClose, type } = useModal();

    const isModalOpen = isOpen && type === "nftModal";

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="border-0 bg-[#141420] mx-auto h-[calc(100vh-32px)] max-w-[max(min(1300px,calc(178dvh-300px)),788px)]">
                <div>
                    <div className="flex flex-row gap-x-4 mt-2.5 pt-4 border-t-2 border-[#201f2d]">
                        <div className="flex">
                            <div className="rounded-lg flex bg-[#201f2d] px-2.5 py-2.5">
                                <Image
                                    src="https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://cdn.tatsu.gg/static/mkln/media/1078.gif"
                                    alt="Meekolony"
                                    height={600}
                                    width={600}
                                    unoptimized={true}
                                    className="rounded-lg aspect-square object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center">
                                <div className="text-gray-400 text-xs">
                                    Tatsumeeko: Meekolony Pass
                                </div>
                                <div className="ml-auto">
                                    <button
                                        className="border-2 border-[#201f2d] rounded-l-lg px-2.5 py-1.5 border-r-0"
                                    >
                                        <RefreshCw
                                            color="white"
                                            className="h-4 w-4"
                                        />
                                    </button>
                                    <button
                                        className="border-2 border-[#201f2d] px-2.5 py-1.5 border-r-0"
                                    >
                                        <ExternalLink
                                            color="white"
                                            className="h-4 w-4"
                                        />
                                    </button>
                                    <button
                                        className="border-2 border-[#201f2d] px-2.5 py-1.5 border-r-0"
                                    >
                                        <Share2
                                            color="white"
                                            className="h-4 w-4"
                                        />
                                    </button>
                                    <button
                                        className="border-2 border-[#201f2d] rounded-r-lg px-2.5 py-1.5"
                                    >
                                        <Settings
                                            color="white"
                                            className="h-4 w-4"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4 gap-y-1">
                                <div className="text-white text-xl">
                                    Meekolony #1078
                                </div>
                                <div className="flex gap-x-1 items-center">
                                    <span className="text-gray-400 text-xs">
                                        Owned by
                                    </span>
                                    <span className="text-white text-sm">
                                        ABBTTZS
                                    </span>
                                </div>
                            </div>
                            <div className="flex mt-4 px-3.5 pt-2.5 pb-3.5 rounded-lg bg-[#201f2d]">
                                <div className="flex-1 flex-col">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <ScrollText
                                            color="white"
                                            className="h-4 w-4"
                                        />
                                        <div className="text-white text-sm font-semibold">
                                            Overview
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-2 mt-4">
                                        <div className="flex flex-row gap-x-2">
                                            <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5">
                                                <span className="text-gray-400 text-xs">
                                                    List Price
                                                </span>
                                                <span className="text-white text-sm">
                                                    2.008
                                                </span>
                                            </div>
                                            <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5">
                                                <span className="text-gray-400 text-xs">
                                                    Floor Price
                                                </span>
                                                <span className="text-white text-sm">
                                                    1.879
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-x-2">
                                            <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5">
                                                <span className="text-gray-400 text-xs">
                                                    Top Offer
                                                </span>
                                                <span className="text-white text-sm">
                                                    1.388
                                                </span>
                                            </div>
                                            <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5">
                                                <span className="text-gray-400 text-xs">
                                                    Floor Diff.
                                                </span>
                                                <span className="text-white text-sm">
                                                    6.90%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-4 px-3.5 pt-2.5 pb-3.5 rounded-lg bg-[#201f2d]">
                                <div className="flex-1 flex-col">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <NotebookText
                                            color="white"
                                            className="h-4 w-4"
                                        />
                                        <div className="text-white text-sm font-semibold">
                                            Details
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-2.5 mt-4 bg-[#484385]/30 rounded-lg px-2.5 py-2.5">
                                        <div className="flex flex-row items-center">
                                            <span className="flex-1 text-white text-sm">
                                                Mint
                                            </span>
                                            <span className="text-gray-400 text-sm hover:text-white">
                                                2.008
                                            </span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <span className="flex-1 text-white text-sm">
                                                On-chain Collection
                                            </span>
                                            <span className="text-gray-400 text-sm hover:text-white">
                                                ASDBVG
                                            </span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <span className="flex-1 text-white text-sm">
                                                Token Address
                                            </span>
                                            <span className="text-gray-400 text-sm hover:text-white">
                                                ASDBVG
                                            </span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <span className="flex-1 text-white text-sm">
                                                Token Standard
                                            </span>
                                            <span className="text-gray-400 text-sm hover:text-white">
                                                NFT
                                            </span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <span className="flex-1 text-white text-sm">
                                                Royalties
                                            </span>
                                            <span className="text-gray-400 text-sm hover:text-white">
                                                7%
                                            </span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <span className="flex-1 text-white text-sm">
                                                Tradable
                                            </span>
                                            <span className="text-gray-400 text-sm hover:text-white">
                                                Yes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};