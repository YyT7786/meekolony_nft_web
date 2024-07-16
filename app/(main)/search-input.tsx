"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const SearchInput = () => {
    return (
        <div className="relative">
            <Search
                className="h-4 w-4 absolute top-3 left-3 text-[#EEEEEE]"
            />
            <Input
                className="bg-[#1f1f2d] w-full md:w-[500px] pl-9 text-[#eeeeee] text-xs rounded-full border-none focus-visible:ring-offset-0 focus-visible:ring-0"
                placeholder="Search for a wallet address"
            />
        </div>
    );
};