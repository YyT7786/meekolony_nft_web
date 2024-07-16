"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
    label: string;
    href: string;
}

export const TabbarItem = ({
    label,
    href,
}: Props) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Button
            variant="none"
            size="none"
            className={cn(
                "text-sm font-[500] p-5 rounded-none",
                active && "border-b-[3px] border-[#484385] text-white",
                !active && "text-gray-500 hover:text-slate-600 "
            )}>
            <Link href={href}>
                <div className="text-nowrap">
                    {label}
                </div>
            </Link>
        </Button>
    );
};