"use client";

import { Clock } from "lucide-react";
import Image from "next/image";

export const GridListingItem = () => {
    return (
        <div className="flex w-full flex-shrink-0">
            <div className="flex flex-col border border-none rounded-2xl bg-[#201f2d] py-2.5 gap-y-2.5 w-[180px] sm:w-[208px] cursor-pointer hover:opacity-80">
                <div className="flex items-center px-5">
                    <div className="flex flex-1 flex-col">
                        <span className="text-gray-500 text-xs font-semibold">
                            Owner
                        </span>
                        <span className="text-white text-sm font-semibold">
                            TTATG
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
                    <div className="flex gap-x-1 items-center">
                        <span className="text-white text-xs sm:text-sm font-semibold">
                            2.026
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                            SOL
                        </span>
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm font-semibold">
                        Last 1.866 SOL
                    </div>
                </div>
            </div>
        </div>
    );
};