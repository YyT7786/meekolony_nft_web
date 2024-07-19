"use server"

import { revalidatePath } from "next/cache";

import { getSaleItems } from "@/lib/api/meekolony"

export const GetLatestSaleItems = async () => {
    var saleItems = getSaleItems();

    // To ensure the cache data is updated
    revalidatePath("/floor-price");
    revalidatePath("/listings");
    revalidatePath("/sales");
    revalidatePath("/holders");

    return saleItems;
}