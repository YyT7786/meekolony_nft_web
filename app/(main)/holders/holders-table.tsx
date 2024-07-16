"use client";

import { Progress } from "@/components/ui/progress";

const items = [
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
]

export const HoldersTable = () => {
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
                    {items.map((holder, index) => {
                        const itemIndex = index + 1;

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
                                            <span className="text-sm font-medium text-white">
                                                ABCTTZ
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        123
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-x-3">
                                        <Progress
                                            value={30}
                                            className="w-[100%] bg-[#201f2d] h-[10px]"
                                        />
                                        <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                            2.2%
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