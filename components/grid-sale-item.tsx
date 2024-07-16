"use client";

import Image from "next/image";
import { useModal } from "@/hooks/use-modal-store";

import { Clock, MoveRight } from "lucide-react";

export const GridSaleItem = () => {
    const { onOpen } = useModal();

    return (
        <button
            onClick={() => onOpen("nftModal")}
            className="flex w-full flex-shrink-0"
        >
            <div className="flex flex-col border border-none rounded-2xl bg-[#201f2d] py-2.5 gap-y-2.5 w-[180px] sm:w-[208px] cursor-pointer hover:opacity-80">
                <div className="flex items-center px-5">
                    <div className="flex mr-auto items-center border-0 rounded-lg px-3.5 py-1 bg-green-900 border-transparent">
                        <span
                            className="text-white text-xs"
                        >
                            Buy
                        </span>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center border-0 rounded-lg px-1.5 py-1 bg-[#141420] border-transparent">
                        <Clock
                            className="text-white h-3.5 w-3.5"
                        />
                        <span
                            className="text-white text-xs"
                        >
                            24d
                        </span>
                    </div>
                </div>
                <div className="flex mx-auto w-[160px] sm:w-[180px]">
                    <Image
                        src="https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://cdn.tatsu.gg/static/mkln/media/1078.gif"
                        alt="Meekolony"
                        height={208}
                        width={180}
                        unoptimized={true}
                        className="rounded-2xl aspect-square object-cover"
                    />
                </div>
                <div className="flex flex-col gap-y-1.5 px-5">
                    <div className="text-white text-xs sm:text-sm font-semibold">
                        #1078
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <span className="text-white text-xs sm:text-sm font-semibold">
                            ATMXKS
                        </span>
                        <MoveRight className="text-gray-500 w-4" />
                        <span className="text-white text-xs sm:text-sm font-semibold">
                            CMNYYC
                        </span>
                    </div>
                    <div className="flex">
                        <div className="flex flex-1 gap-x-1 items-center">
                            <span className="text-white text-xs sm:text-sm font-semibold">
                                2.026
                            </span>
                            <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                                SOL
                            </span>
                        </div>
                        <div className="flex items-center border-0 rounded-lg px-1.5 py-1 bg-[#6565d1] border-transparent">
                            <span
                                className="text-white text-xs"
                            >
                                6033
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
};