"use server"

import { revalidatePath } from "next/cache";

import { getListingItems } from "@/lib/api/meekolony"

export const GetLatestListingItems = async () => {
    var listingItems = getListingItems();

    // To ensure the cache data is updated
    revalidatePath("/floor-price");
    revalidatePath("/listings");
    revalidatePath("/sales");
    revalidatePath("/holders");

    return listingItems;
}