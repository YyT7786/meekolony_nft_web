"use client";

import { TabbarItem } from "@/components/tabbar-item";

export const WalletTabbar = () => {
    return (
        <div className="flex gap-x-2 border-b border-[#201f2d] overflow-y-auto">
            <TabbarItem
                label="NFTs"
                href="/wallet"
                isActive={true}
            />
        </div>
    );
};
