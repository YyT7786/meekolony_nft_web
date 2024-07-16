"use client";

import { useEffect, useState } from "react";
import { NftModal } from "../modals/nft-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <NftModal />
        </>
    );
};