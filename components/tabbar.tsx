"use client";

import { TabbarItem } from "./tabbar-item";

export const Tabbar = () => {
    return (
        <div className="flex gap-x-2 border-b border-[#201f2d] overflow-y-auto">
            <TabbarItem
                label="Floor Price"
                href="/floor-price"
            />
            <TabbarItem
                label="Item Listings"
                href="/listings"
            />
            <TabbarItem
                label="Recent Sales"
                href="/sales"
            />
            <TabbarItem
                label="Holders"
                href="/holders"
            />
        </div>
    );
};