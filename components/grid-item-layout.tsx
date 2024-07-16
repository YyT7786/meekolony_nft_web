"use client";

import { GridItem } from "./grid-item";
import { GridListingItem } from "./grid-listing-item";
import { GridSaleItem } from "./grid-sale-item";

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

export const GridItemLayout = () => {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-11 gap-y-3 gap-x-2">
                {items.map((item) => (
                    <GridSaleItem />
                ))}
            </div>
        </div>
    );
};