"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  href: string;
  isActive?: boolean;
};

export const TabbarItem = ({ label, href, isActive }: Props) => {
  const pathname = usePathname();
  const active = isActive || pathname === href;

  return (
    <Button
      variant="none"
      size="none"
      className={cn(
        "text-xs lg:text-sm font-[500] px-5 py-4 lg:py-5 rounded-none",
        active && "border-b-[3px] border-[#484385] text-white",
        !active && "text-gray-500 hover:text-slate-600 "
      )}
    >
      <Link href={href}>
        <div className="text-nowrap">{label}</div>
      </Link>
    </Button>
  );
};
