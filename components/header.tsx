"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { 
    ChevronDown, 
    Search 
} from "lucide-react";
import { SearchInput } from "@/components/search-input";

type Props = {
    isMyWalletVisible?: boolean,
}

export const Header = ({
    isMyWalletVisible
}: Props) => {
    return (
        <div className="sticky top-0 pl-2 md:pl-10 pr-2 md:pr-5 py-6 bg-[#141420] z-50">
            <div className="flex flex-row items-center gap-x-4">
                <button className="flex shrink-0">
                    <Link href="/floor-price">
                        <Image
                            src="/tatsumeeko_label.svg"
                            alt="TatsumeekoLabel"
                            height={36}
                            width={156}
                        />
                    </Link>
                </button>
                <div className="hidden xl:flex pl-4">
                    <div className="flex items-center rounded border px-2 border-transparent cursor-pointer hover:opacity-80 shrink">
                        <div className="text-white text-sm font-semibold">
                            Home
                        </div>
                        <ChevronDown className="text-white h-[15px] w-[20px]" />
                    </div>
                    <div className="flex items-center rounded border px-2 border-transparent cursor-pointer hover:opacity-80">
                        <div className="text-white text-sm font-semibold">
                            Explore
                        </div>
                        <ChevronDown className="text-white h-[15px] w-[20px]" />
                    </div>
                    <div className="flex items-center rounded border px-2 border-transparent cursor-pointer hover:opacity-80">
                        <div className="text-white text-sm font-semibold">
                            Activity
                        </div>
                        <ChevronDown className="text-white h-[15px] w-[20px]" />
                    </div>
                    <div className="flex items-center rounded border px-2 border-transparent cursor-pointer hover:opacity-80">
                        <div className="text-white text-sm font-semibold">
                            Community
                        </div>
                        <ChevronDown className="text-white h-[15px] w-[20px]" />
                    </div>
                    <div className="flex items-center rounded border px-2 border-transparent cursor-pointer hover:opacity-80">
                        <div className="text-white text-sm font-semibold">
                            Pages
                        </div>
                        <ChevronDown className="text-white h-[15px] w-[20px]" />
                    </div>
                    <div className="flex items-center rounded border px-2 border-transparent cursor-pointer hover:opacity-80">
                        <div className="text-white text-sm font-semibold">
                            Contact
                        </div>
                        <ChevronDown className="text-white h-[15px] w-[20px]" />
                    </div>
                </div>
                <div className={cn(
                    "flex w-full justify-end md:justify-center",
                    !isMyWalletVisible && "hidden"
                )}>
                    <div className="hidden md:flex">
                        <SearchInput />
                    </div>
                    <div className="flex md:hidden cursor-pointer hover:opacity-80">
                        <Search className="h-5 w-5 text-white" />
                    </div>
                </div>
                <button className={cn(
                    "flex shrink-0",
                    !isMyWalletVisible && "hidden"
                )}>
                    <Link href="/wallet/BjkhMWdDFfyBonFM1vXvdsF6bPJneVskx1MGcWwrK5A5">
                        <div className="relative flex items-center justify-center p-[2px] rounded-full cursor-pointer hover:opacity-80">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#af31eb] to-dark-purple rounded-full"></div>
                            <div className="relative flex items-center gap-x-2 bg-[#141420] rounded-full px-3.5 lg:px-7 py-1.5 lg:py-2">
                                <Image
                                    src="/wallet.png"
                                    alt="TatsumeekoLabel"
                                    height={16}
                                    width={16}
                                />
                                <span className="text-white text-sm font-semibold text-nowrap">
                                    My Wallet
                                </span>
                            </div>
                        </div>
                    </Link>
                </button>
            </div>
        </div>
    );
};
