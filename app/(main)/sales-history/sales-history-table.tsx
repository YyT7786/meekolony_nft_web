"use client"

import Image from "next/image";

import { 
    getOwnerAbbreviation 
} from "@/lib/meekolony";
import { SalesHistory } from "@/constants";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
    SalesHistory?: SalesHistory[];
}

export const SalesHistoryTable = ({
    SalesHistory
}: Props) => {
    const [isClient, setIsClient] = useState(false);
    const [isFirstTimeSearch, setIsFirstTimeSearch] = useState(true);
    const [filteredSalesHistory, setFilteredSalesHistory] = useState<SalesHistory[]>([]);
    const [nftId, setNftId] = useState("");
    const [fromTimestamp, setFromTimestamp] = useState<Date | undefined>();
    const [toTimestamp, setToTimestamp] = useState<Date | undefined>();

    useEffect(() => {
        setIsClient(true)
    }, [])

    const onSearch = () => {
        if (!SalesHistory){
            return;
        }

        if (nftId.length === 0 && !fromTimestamp && !toTimestamp) {
            setFilteredSalesHistory([]);
            return;
        }

        const filteredResults = SalesHistory
            .filter((item) => 
                (nftId.length === 0 ? true : item.nftId === nftId) &&
                (fromTimestamp ? item.timestamp >= fromTimestamp : true) &&
                (toTimestamp ? item.timestamp <= toTimestamp : true))
            
        setFilteredSalesHistory(filteredResults)
        setIsFirstTimeSearch(false)
    }
    
    return (
        <div className="flex flex-col items-center">
            <div className="flex mr-auto">
                <div className="border-2 border-[#201f2d] rounded-lg px-2.5 py-2">
                    <div className="text-white text-sm font-bold">
                        Search Parameters
                    </div>
                    <div className="flex flex-col gap-y-4 mt-4">
                        <div className="flex flex-col gap-y-1">
                            <div className="text-white/40 text-sm">
                                NFT Id
                            </div>
                            <Input
                                value={nftId}
                                onChange={(e) => setNftId(e.target.value)}
                                className="bg-[#201f2d] w-full md:w-[500px] text-[#eeeeee] text-xs rounded-lg border-none focus-visible:ring-offset-0 focus-visible:ring-0"
                                placeholder="Search for a wallet address"
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-2">
                            <div className="flex flex-col gap-y-1">
                                <div className="text-white/40 text-sm">
                                    From timestamp
                                </div>
                                <DatePicker 
                                    date={fromTimestamp}
                                    onDateChange={setFromTimestamp}
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <div className="text-white/40 text-sm">
                                    To timestamp
                                </div>
                                <DatePicker 
                                    date={toTimestamp}
                                    onDateChange={setToTimestamp}
                                />
                            </div>
                        </div>
                        <div className="flex ml-auto">
                            <Button 
                                onClick={onSearch}
                                className="border-2 border-white/40 bg-[#201f2d]"
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 mr-auto">
                <div className={cn(
                    "text-red-500 text-sm text-start mr-auto mb-1",
                    (isFirstTimeSearch || filteredSalesHistory.length > 0) && "hidden"
                )}>
                    *No Results Matched
                </div>
                <div className="flex overflow-x-auto">
                    <table className="justify-center border-b border-[#201f2d] divide-y divide-[#201f2d]">
                        <thead className="bg-[#201f2d]">
                            <tr>
                                <th>
                                    <div
                                        className="py-3 px-3 text-xs font-semibold text-white text-left left-[51px] min-w-[168px] lg:w-[240px]">
                                        Item
                                    </div>
                                </th>
                                <th>
                                    <div
                                        className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                        Seller
                                    </div>
                                </th>
                                <th>
                                    <div
                                        className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                        Buyer
                                    </div>
                                </th>
                                <th>
                                    <div
                                        className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                        Price
                                    </div>
                                </th>
                                <th>
                                    <div
                                        className="py-3 px-1 text-xs font-semibold text-white text-left left-[51px] min-w-[134px] lg:w-[200px]">
                                        Time
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#201f2d]">
                            {filteredSalesHistory?.map((item, index) => {
                                const sellerOwnerAbbreviation = getOwnerAbbreviation(item.sellerAddress);
                                const buyerOwnerAbbreviation = getOwnerAbbreviation(item.buyerAddress);
                                const date = isClient && item.timestamp.toLocaleDateString();

                                return (
                                    <tr key={index} className="hover:bg-[#201f2d]/50 h-[64px] cursor-pointer">
                                        <td>
                                            <div 
                                                className="flex items-center justify-start gap-x-3"
                                            >
                                                <div className="flex items-center gap-x-3">
                                                    <Image
                                                        src="https://cdn.tatsu.gg/static/mkln/media/1078.gif"
                                                        alt="Meekolony"
                                                        height={40}
                                                        width={40}
                                                        unoptimized={true}
                                                        className="rounded-full aspect-square object-cover"
                                                    />
                                                    <span className="text-sm font-medium text-white">
                                                        {item.nftName}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                                {sellerOwnerAbbreviation}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                                {buyerOwnerAbbreviation}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-white px-1 py-2.5 text-start flex gap-x-1">
                                                <span>
                                                    {item.price}
                                                </span>
                                                <span className="text-gray-400">
                                                    SOL
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-white px-1 py-2.5 text-start">
                                                {date}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};