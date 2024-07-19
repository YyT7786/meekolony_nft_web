"use client";

import { HolderStats } from "@/types/meekolony";

type Props = {
    holderStats: HolderStats;
}

export const HoldersState = ({
    holderStats
}: Props) => {
    let totalHolders: number = 0;
    holderStats.tokenHistogram.bars.forEach(bar => totalHolders += bar.hight)

    const avgOwned = (holderStats.totalSupply / totalHolders).toFixed(1);
    const uniqueHolders = Math.round((totalHolders / holderStats.totalSupply) * 100)

    return (
        <div className="flex flex-col gap-y-3">
            <div className="text-white text-lg font-semibold">
                States
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex items-center bg-[#201f2d] rounded-lg w-[334px] h-[45px]">
                    <div className="flex items-center gap-x-1 m-auto">
                        <span className="text-white text-xs font-normal">
                            Supply
                        </span>
                        <span className="text-white text-sm font-semibold">
                            {holderStats.totalSupply.toLocaleString()}
                        </span>
                    </div>
                </div>
                <div className="flex items-center bg-[#201f2d] rounded-lg w-[334px] h-[45px]">
                    <div className="flex items-center gap-x-1 m-auto">
                        <span className="text-white text-xs font-normal">
                            Holders
                        </span>
                        <span className="text-white text-sm font-semibold">
                            {totalHolders.toLocaleString()}
                        </span>
                    </div>
                </div>
                <div className="flex items-center bg-[#201f2d] rounded-lg w-[334px] h-[45px]">
                    <div className="flex items-center gap-x-1 m-auto">
                        <span className="text-white text-xs font-normal">
                            Avg. owned
                        </span>
                        <span className="text-white text-sm font-semibold">
                            {avgOwned}
                        </span>
                    </div>
                </div>
                <div className="flex items-center bg-[#201f2d] rounded-lg w-[334px] h-[45px]">
                    <div className="flex items-center gap-x-1 m-auto">
                        <span className="text-white text-xs font-normal">
                            Unique holders
                        </span>
                        <span className="text-white text-sm font-semibold">
                            {`${uniqueHolders}%`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};