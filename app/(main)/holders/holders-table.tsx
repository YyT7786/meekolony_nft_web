"use client";

import Image from "next/image";
import { HolderStats } from "@/types/meekolony";
import { Progress } from "@/components/ui/progress";
import { getOwnerAbbreviation, getWalletImageUrl } from "@/lib/meekolony";

type Props = {
    holderStats: HolderStats;
}

export const HoldersTable = ({
    holderStats
}: Props) => {
    return (
        <div className="flex flex-col gap-y-3 overflow-x-auto">
            <div className="text-white text-lg font-semibold">
                Top Holders
            </div>
            <table className="border-b border-[#201f2d] divide-y divide-[#201f2d]">
                <thead className="bg-[#201f2d]">
                    <tr>
                        <th>
                            <div className="py-3 px-3 text-xs font-semibold text-white text-left left-[51px] min-w-[180px] lg:w-[260px]">
                                Rank
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[220px] lg:w-[300px]">
                                Holder
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[180px] lg:w-[260px]">
                                Owns
                            </div>
                        </th>
                        <th>
                            <div className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[180px] lg:w-[260px]">
                                % of supply
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#201f2d]">
                    {holderStats.topHolders.map((holder, index) => {
                        const itemIndex = index + 1;
                        const ownerAbbreviation = holder?.ownerDisplay?.sol ?? getOwnerAbbreviation(holder.owner, 8);
                        const tokens = holder.tokens;
                        const supplyPercentage = ((tokens / holderStats.totalSupply) * 100);

                        return (
                            <tr key={index} className="hover:bg-[#201f2d]/50 h-[64px]">
                                <td>
                                    <div className="justify-center text-sm font-medium text-white px-3 py-2.5">
                                        {itemIndex}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center justify-start gap-x-3">
                                        <div className="flex items-center gap-x-3">
                                            <Image
                                                src={holder.avatarMintImg ?? getWalletImageUrl(holder.owner)}
                                                alt="Meekolony"
                                                height={40}
                                                width={40}
                                                unoptimized={true}
                                                className="rounded-full aspect-square object-cover"
                                            />
                                            <div className="flex flex-row">
                                                <div>
                                                    {holder?.ownerDisplay?.sol !== undefined ? (
                                                        <svg className="tw-shrink-0 tw-inline-flex mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0134 2.34082V5.91899" stroke="#7A7BFF" stroke-linejoin="round"></path><path d="M16.7001 13.8498L13.6001 12.0498" stroke="#7A7BFF" stroke-linejoin="round"></path><path d="M3.3125 13.8521L6.39988 12.0498" stroke="#7A7BFF" stroke-linejoin="round"></path><path d="M6.3999 7.9499L9.9999 9.9999M6.3999 7.9499L6.3999 12.0499L9.9999 14.0999V9.9999M6.3999 7.9499L9.9999 5.8999L13.5999 7.9499L9.9999 9.9999M13.5997 7.9499L9.99969 9.9999V14.0999L13.5997 12.0499V7.9499Z" stroke="#52C7DA" stroke-width="0.5"></path><path d="M3.31276 6.15685L10.0135 10.0045M3.31276 6.15685L3.31276 13.8522L10.0135 17.6998M3.31276 6.15685L10.0135 2.2998L16.6861 6.15684L10.0135 10.0045M10.0135 10.0045V17.6998M10.0135 10.0045L16.7001 6.15685V13.8522L10.0135 17.6998" stroke="#7A7BFF" stroke-linejoin="round"></path></svg>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div className="text-sm font-medium text-white">
                                                    {ownerAbbreviation}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        {tokens}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-x-3">
                                        <Progress
                                            value={supplyPercentage}
                                            className="w-[100%] bg-[#201f2d] h-[10px]"
                                        />
                                        <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                            {`${supplyPercentage.toFixed(1)}%`}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    );
};