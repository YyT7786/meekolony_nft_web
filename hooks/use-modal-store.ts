import { FloorPriceMarketTrend, ListingItem, NFTItem, SaleItem } from "@/types/meekolony";
import { create } from "zustand";

export type ModalType = "nftModal";

export interface ModalData {
    listingItem?: ListingItem,
    saleItem?: SaleItem,
    walletItem?: NFTItem,
    latestFloorPrice?: FloorPriceMarketTrend,
}

interface ModalStore {
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
    onClose: () => set({ type: null, isOpen: false })
}));