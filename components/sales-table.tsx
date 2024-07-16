"use client"

import Image from "next/image";

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

export const SalesTable = () => {
    return (
        <div className="flex overflow-x-auto">
            <table className="justify-center border-b border-[#201f2d] divide-y divide-[#201f2d]">
                <thead className="bg-[#201f2d]">
                    <tr>
                        <th>
                            <div
                                className="py-3 px-3 text-xs font-semibold text-white text-left left-[51px] min-w-[168px] lg:w-[300px]">
                                Item
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[260px]">
                                Type
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[260px]">
                                Rarity
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[260px]">
                                Seller
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[260px]">
                                Buyer
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[260px]">
                                Price
                            </div>
                        </th>
                        <th>
                            <div
                                className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[260px]">
                                Time
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#201f2d]">
                    {items.map((item, index) => {
                        const itemIndex = index + 1;

                        return (
                            <tr key={index} className="hover:bg-[#201f2d]/50 h-[64px] cursor-pointer">
                                <td>
                                    <div className="flex items-center justify-start gap-x-3">
                                        <div className="flex items-center gap-x-3">
                                            <Image
                                                src="https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://cdn.tatsu.gg/static/mkln/media/1078.gif"
                                                alt="Meekolony"
                                                height={40}
                                                width={40}
                                                unoptimized={true}
                                                className="rounded-full aspect-square object-cover"
                                            />
                                            <span className="text-sm font-medium text-white">
                                                # 1078
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <div className="rounded-sm bg-green-900">
                                            <div className="text-xs font-medium text-white px-2 py-1 text-start">
                                                Buy
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <div className="rounded-sm bg-[#6565d1]">
                                            <div className="text-xs font-medium text-white px-2 py-1 text-start">
                                                3229
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        ABCTTZ
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        ABCTTZ
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start flex gap-x-1">
                                        <span>
                                            2.026
                                        </span>
                                        <span className="text-gray-400">
                                            SOL
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                        24d
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};