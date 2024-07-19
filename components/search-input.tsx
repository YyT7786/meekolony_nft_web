"use client";

import { useCallback, useEffect, useState } from "react";
import { useKey } from "react-use";
import { useRouter } from "next/navigation";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value);
    
    const router = useRouter();

    const handleClick = useCallback(() => {
        if (debouncedValue.length === 0) {
            return;
        }

        router.push(`/wallet/${debouncedValue}`)
    }, [debouncedValue, router]);

    useKey('Enter', handleClick, {}, [handleClick]);

    return (
        <div className="relative">
            <Search
                className="h-4 w-4 absolute top-3 left-3 text-[#EEEEEE]"
            />
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-[#1f1f2d] w-full md:w-[500px] pl-9 text-[#eeeeee] text-xs rounded-full border-none focus-visible:ring-offset-0 focus-visible:ring-0"
                placeholder="Search for a wallet address"
            />
        </div>
    );
};