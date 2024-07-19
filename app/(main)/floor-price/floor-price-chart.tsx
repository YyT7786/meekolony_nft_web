"use client"

import { cn } from '@/lib/utils';
import { FloorPriceMarketTrend } from '@/types/meekolony';
import { useState } from 'react';
import {
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend,
    ResponsiveContainer,
} from 'recharts';

import { 
    floorPrice1dChartData,
    floorPrice1wChartData,
    floorPrice1mChartData,
    floorPrice3mChartData,
    floorPrice6mChartData,
    floorPriceAllChartData, 
    marketTrendDateType 
} from '@/constants';
import { convertSolToPriceString } from '@/lib/meekolony';

type CustomTooltipProps = {
    active?: boolean,
    payload?: any[],
    label?: number | string,
}

const formatDateDisplay = (ts:number | string | undefined) => {
    if (!ts) {
        return "";
    }

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    const date = new Date(ts);
    return date.toLocaleString('en-US', options);
};

const formatDate = (ts:number | string | undefined) => {
    if (!ts) {
        return "";
    }

    const date = new Date(ts);
    return date.toLocaleDateString();
};

const formatTimestamp = (ts:number | string | undefined) => {
    if (!ts) {
        return "";
    }

    const date = new Date(ts);
    return date.toLocaleTimeString();
};

const formatYAxis = (value:number) => `${value} SOL`;

export const FloorPriceChart = () => {
    const [marketTrendDateType, setMarketTrendDateType] = useState<marketTrendDateType>("1m");
    const [floorPriceData, setFlootPriceData] = useState<FloorPriceMarketTrend[]>(floorPrice1mChartData);
    const [latestFloorData, setLatestFlootData] = useState<FloorPriceMarketTrend>(floorPrice1mChartData[floorPrice1mChartData.length - 1]);

    const onClickMarketTrendDate = (marketTrendDateType: marketTrendDateType) => {
        if (marketTrendDateType === "1d") {
            setFlootPriceData(floorPrice1dChartData);
            setLatestFlootData(floorPrice1dChartData[floorPrice1dChartData.length - 1])
        }

        if (marketTrendDateType === "1w") {
            setFlootPriceData(floorPrice1wChartData);
            setLatestFlootData(floorPrice1wChartData[floorPrice1wChartData.length - 1])
        }

        if (marketTrendDateType === "1m") {
            setFlootPriceData(floorPrice1mChartData);
            setLatestFlootData(floorPrice1mChartData[floorPrice1mChartData.length - 1])
        }

        if (marketTrendDateType === "3m") {
            setFlootPriceData(floorPrice3mChartData);
            setLatestFlootData(floorPrice3mChartData[floorPrice3mChartData.length - 1])
        }

        if (marketTrendDateType === "6m") {
            setFlootPriceData(floorPrice6mChartData);
            setLatestFlootData(floorPrice6mChartData[floorPrice6mChartData.length - 1])
        }

        if (marketTrendDateType === "all") {
            setFlootPriceData(floorPriceAllChartData);
            setLatestFlootData(floorPriceAllChartData[floorPriceAllChartData.length - 1])
        }

        setMarketTrendDateType(marketTrendDateType);
    };

    return (
        <div className='flex flex-col gap-y-2 lg:gap-y-4'>
            <div className='flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 ml-20'>
                <div className='flex flex-col mr-auto bg-[#201f2d] rounded-lg px-3.5 py-2.5'>
                    <div className='text-white/40 text-xs lg:text-sm mb-1'>
                        FLOOR PRICE
                    </div>
                    <div className='flex flex-row gap-x-1 items-center'>
                        <span className='text-white text-sm lg:text-lg'>
                            {(latestFloorData.cFP).toFixed(3)}
                        </span>
                        <span className='text-white/40 text-xs lg:text-sm'>
                            SOL
                        </span>
                    </div>
                    <div className='text-white text-xs lg:text-sm'>
                        {formatDateDisplay(latestFloorData?.ts)}
                    </div>
                </div>
                <div className='flex items-end'>
                    <div className="flex items-center">
                        <button
                            onClick={() => onClickMarketTrendDate("1d")}
                            className={cn(
                                "flex border-2 border-[#484385] rounded-none rounded-l-lg border-r-0 px-2 py-1 lg:px-2.5 lg:py-1.5 items-center",
                                marketTrendDateType === "1d" && "bg-[#484385]"
                            )}
                        >
                            <span className="text-xs lg:text-sm text-white">
                                1d
                            </span>
                        </button>
                        <button
                            onClick={() => onClickMarketTrendDate("1w")}
                            className={cn(
                                "flex border-2 border-x-none border-[#484385] rounded-none border-r-0 px-2 py-1 lg:px-2.5 lg:py-1.5 items-center",
                                marketTrendDateType === "1w" && "bg-[#484385]"
                            )}
                        >
                            <span className="text-xs lg:text-sm text-white">
                                1w
                            </span>
                        </button>
                        <button
                            onClick={() => onClickMarketTrendDate("1m")}
                            className={cn(
                                "flex border-2 border-x-none border-[#484385] rounded-none border-r-0 px-2 py-1 lg:px-2.5 lg:py-1.5 items-center",
                                marketTrendDateType === "1m" && "bg-[#484385]"
                            )}
                        >
                            <span className="text-xs lg:text-sm text-white">
                                1m
                            </span>
                        </button>
                        <button
                            onClick={() => onClickMarketTrendDate("3m")}
                            className={cn(
                                "flex border-2 border-x-none border-[#484385] rounded-none border-r-0 px-2 py-1 lg:px-2.5 lg:py-1.5 items-center",
                                marketTrendDateType === "3m" && "bg-[#484385]"
                            )}
                        >
                            <span className="text-xs lg:text-sm text-white">
                                3m
                            </span>
                        </button>
                        <button
                            onClick={() => onClickMarketTrendDate("6m")}
                            className={cn(
                                "flex border-2 border-x-none border-[#484385] rounded-none border-r-0 px-2 py-1 lg:px-2.5 lg:py-1.5 items-center",
                                marketTrendDateType === "6m" && "bg-[#484385]"
                            )}
                        >
                            <span className="text-xs lg:text-sm text-white">
                                6m
                            </span>
                        </button>
                        <button
                            onClick={() => onClickMarketTrendDate("all")}
                            className={cn(
                                "flex border-2 border-[#484385] rounded-none rounded-r-lg px-2 py-1 lg:px-2.5 lg:py-1.5 items-center",
                                marketTrendDateType === "all" && "bg-[#484385]"
                            )}
                        >
                            <span className="text-xs lg:text-sm text-white">
                                all
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={floorPriceData}
                    >
                    <CartesianGrid strokeDasharray="3 3" />       
                    { marketTrendDateType === "1d" 
                        ? <XAxis
                            dataKey="ts"
                            tickFormatter={formatTimestamp}
                            interval="preserveStartEnd"
                            minTickGap={50}
                            tick={{ fontSize: 12 }}
                        />
                        : <XAxis
                            dataKey="ts"
                            tickFormatter={formatDate}
                            interval="preserveStartEnd"
                            minTickGap={50}
                            tick={{ fontSize: 12 }}
                        />
                    }
                    <YAxis
                        tickFormatter={formatYAxis}
                        tick={{ fontSize: 12, textAnchor: 'end' }}
                        width={80} 
                    />
                    <Tooltip
                        content={CustomTooltip}
                    />
                    <Line type="monotone" dataKey="cFP" stroke="#8884d8" dot={false} />
                    <Line type="monotone" dataKey="maxFP" stroke="#82ca9d" dot={false} />
                    <Line type="monotone" dataKey="minFP" stroke="#ffc658" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const CustomTooltip = ({ 
    active, 
    payload, 
    label 
}: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div
                className="bg-[#201f2d] text-black py-2 px-4 rounded-md shadow-lg"
                key={label}
            >
                <div className='flex flex-col'>
                    <span className='text-white text-sm mb-2'>{formatDateDisplay(label)}</span>
                    <div className="flex items-center gap-x-2">
                        <div className='flex flex-row items-center gap-x-1'>
                            <div className="rounded bg-[#8884d8] h-[12px] w-[12px]" />
                            <span className='text-white/40 text-sm'>cFP:</span>
                        </div>
                        <span className='text-white text-sm'>{payload[0].value}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className='flex flex-row items-center gap-x-1'>
                            <div className="rounded bg-[#82ca9d] h-[12px] w-[12px]" />
                            <span className='text-white/40 text-sm'>maxFP:</span>
                        </div>
                        <span className='text-white text-sm'>{payload[1].value}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className='flex flex-row items-center gap-x-1'>
                            <div className="rounded bg-[#ffc658] h-[12px] w-[12px]" />
                            <span className='text-white/40 text-sm'>minFP:</span>
                        </div>
                        <span className='text-white text-sm'>{payload[2].value}</span>
                    </div>
                </div>
            </div>
        );
      }
  
    return null;
};