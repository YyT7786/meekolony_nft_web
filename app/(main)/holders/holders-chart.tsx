"use client";

import {
    BarChart,
    Bar,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

import { HolderStats } from "@/types/meekolony";

type Props = {
    holderStats: HolderStats;
}

export const HoldersChart = ({
    holderStats
}: Props) => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="text-white text-lg font-semibold">
                Holders Distribution
            </div>
            <div className="h-[320px] w-[400px] bg-[#201f2d] rounded-lg pr-10 pt-4 text-xs">
                <ResponsiveContainer height={"100%"} width={"100%"}>
                    <BarChart height={128} width={128} data={holderStats?.tokenHistogram?.bars ?? []}>
                        <Tooltip
                            content={(props) => (
                                <div>
                                    {props.payload?.map((item) => {
                                        return (
                                            <div
                                                className="border bg-white text-black py-2 px-4 rounded-md shadow-lg"
                                                key={item.payload.l_val}
                                            >
                                                <div>
                                                    <p>{item.payload.l_val}</p>
                                                    <div className="flex items-center gap-x-2">
                                                        <div className="border rounded bg-[#484385] h-[12px] w-[12px]" />
                                                        <p>{item.value}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        />
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis dataKey="hight" stroke="white" />
                        <XAxis dataKey="l_val" stroke="white" />
                        <Bar dataKey="hight" fill="#484385" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};