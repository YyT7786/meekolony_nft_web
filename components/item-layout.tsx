"use client";

import {
    AlignJustify,
    LayoutGrid,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GridItemLayout } from "./grid-item-layout";
import { ListItemLayout } from "./list-item-layout";

export const ItemLayout = () => {
    const [isGrid, setIsGrid] = useState(true);

    const onChangeGridLayout = () => {
        setIsGrid(true);
    }

    const onChangeListLayout = () => {
        setIsGrid(false);
    }

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex items-center">
                <div className="flex-1 text-white">
                    1,000 Items
                </div>
                <div className="flex items-center">
                    <button
                        onClick={onChangeGridLayout}
                        className={cn(
                            "flex gap-x-2 border-2 border-[#484385] rounded-none rounded-l-lg border-r-0 px-2.5 py-1.5 items-center",
                            isGrid && "bg-[#484385]"
                        )}
                    >
                        <LayoutGrid
                            fill="white"
                            className="h-4 w-4 text-white"
                        />
                        <span
                            className="text-sm text-white"
                        >
                            Grid
                        </span>
                    </button>
                    <button
                        onClick={onChangeListLayout}
                        className={cn(
                            "flex gap-x-2 border-2 border-[#484385] rounded-none rounded-r-lg px-2.5 py-1.5 items-center",
                            !isGrid && "bg-[#484385]"
                        )}
                    >
                        <AlignJustify
                            fill="white"
                            className="h-4 w-4 text-white"
                        />
                        <span
                            className="text-sm text-white"
                        >
                            List
                        </span>
                    </button>
                </div>
            </div>

            {isGrid
                ? <GridItemLayout />
                : <ListItemLayout />}
        </div>
    )
}