"use client";

import Image from "next/image";
import { ModalData, useModal } from "@/hooks/use-modal-store";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  ExternalLink,
  NotebookText,
  RefreshCw,
  ScrollText,
  Settings,
  Share2,
} from "lucide-react";
import { convertSolToPriceString, getOwnerAbbreviation, shortenWalletAdrress } from "@/lib/meekolony";

export const NftModal = () => {
  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "nftModal";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="border-0 bg-[#141420] mx-auto h-[calc(100vh-32px)] max-w-[max(min(1300px,calc(178dvh-300px)),788px)]">
        <div className="overflow-x-auto">
          <div className="flex flex-col lg:flex-row gap-x-4 mt-2.5 pt-4 border-t-2 border-[#201f2d]">
            <div className="flex-1 lg:flex">
              <div className="rounded-lg flex bg-[#201f2d] px-2.5 py-2.5">
                <Image
                  src={getImage(data)}
                  alt="Meekolony"
                  height={600}
                  width={600}
                  unoptimized={true}
                  className="rounded-lg aspect-square object-cover"
                />
              </div>
            </div>
            <div className="flex-1 mt-4 lg:mt-0">
              <div className="flex items-center">
                <div className="text-gray-400 text-xs">
                  {getMeekolonyCollectionName(data)}
                </div>
                <div className="ml-auto">
                  <button className="border-2 border-[#201f2d] rounded-l-lg px-2.5 py-1.5 border-r-0 hover:opacity-80">
                    <RefreshCw color="white" className="h-4 w-4" />
                  </button>
                  <button className="border-2 border-[#201f2d] px-2.5 py-1.5 border-r-0 hover:opacity-80">
                    <ExternalLink color="white" className="h-4 w-4" />
                  </button>
                  <button className="border-2 border-[#201f2d] px-2.5 py-1.5 border-r-0 hover:opacity-80">
                    <Share2 color="white" className="h-4 w-4" />
                  </button>
                  <button className="border-2 border-[#201f2d] rounded-r-lg px-2.5 py-1.5 hover:opacity-80">
                    <Settings color="white" className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-y-1">
                <div className="text-white text-xl">{getNftName(data)}</div>
                <div className="flex gap-x-1 items-center">
                  <span className="text-gray-400 text-xs">Owned by</span>
                  <span className="text-white text-sm">{getOwnerAbbreviation(getOwner(data))}</span>
                </div>
              </div>
              <div className="flex mt-4 px-3.5 pt-2.5 pb-3.5 rounded-lg bg-[#201f2d]">
                <div className="flex-1 flex-col">
                  <div className="flex flex-row gap-x-2 items-center">
                    <ScrollText color="white" className="h-4 w-4" />
                    <div className="text-white text-sm font-semibold">
                      Overview
                    </div>
                  </div>
                  { getListPrice(data) === "--" 
                  ? (
                    <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5 mt-4">
                      <span className="text-white font-semibold text-sm">
                        Not Listed
                      </span>
                    </div>
                  )
                  : (
                  <div className="flex flex-col gap-y-2 mt-4">
                    <div className="flex flex-row gap-x-2">
                      <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5">
                        <span className="text-gray-400 text-xs">
                          List Price
                        </span>
                        <span className="text-white text-sm">{getListPrice(data)}</span>
                      </div>
                      <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5">
                        <span className="text-gray-400 text-xs">
                          Floor Price
                        </span>
                        <span className="text-white text-sm">{getFloorPrice(data)}</span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-x-2">
                      <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5">
                        <span className="text-gray-400 text-xs">Top Offer</span>
                        <span className="text-white text-sm">{getTopOffer(data)}</span>
                      </div>
                      <div className="flex flex-1 flex-col bg-[#484385]/30 items-center rounded-lg py-2.5">
                        <span className="text-gray-400 text-xs">
                          Floor Diff.
                        </span>
                        <span className="text-white text-sm">{`${getFloorPriceDiff(data)}%`}</span>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
              </div>
              <div className="flex mt-4 px-3.5 pt-2.5 pb-3.5 rounded-lg bg-[#201f2d]">
                <div className="flex-1 flex-col">
                  <div className="flex flex-row gap-x-2 items-center">
                    <NotebookText color="white" className="h-4 w-4" />
                    <div className="text-white text-sm font-semibold">
                      Details
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2.5 mt-4 bg-[#484385]/30 rounded-lg px-2.5 py-2.5">
                    <div className="flex flex-row items-center">
                      <span className="flex-1 text-white text-sm">
                        Mint
                      </span>
                      <span className="text-gray-400 text-sm hover:text-white">
                        {shortenWalletAdrress(getMintAddress(data))}
                      </span>
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="flex-1 text-white text-sm">
                        On-chain Collection
                      </span>
                      <span className="text-gray-400 text-sm hover:text-white">
                        {shortenWalletAdrress(getOnChainCollection(data))}
                      </span>
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="flex-1 text-white text-sm">
                        Token Address
                      </span>
                      <span className="text-gray-400 text-sm hover:text-white">
                      {shortenWalletAdrress(getTokenAddress(data))}
                      </span>
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="flex-1 text-white text-sm">
                        Token Standard
                      </span>
                      <span className="text-gray-400 text-sm hover:text-white">
                        NFT
                      </span>
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="flex-1 text-white text-sm">
                        Royalties
                      </span>
                      <span className="text-gray-400 text-sm hover:text-white">
                        7%
                      </span>
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="flex-1 text-white text-sm">
                        Tradable
                      </span>
                      <span className="text-gray-400 text-sm hover:text-white">
                        Yes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

function getMeekolonyCollectionName(data: ModalData) {
  if (data.listingItem){
    return data.listingItem.collectionTitle;
  }

  if (data.saleItem){
    return "Tatsumeeko: Meekolony Pass";
  }

  if (data.walletItem){
    return data.walletItem.collectionName;
  }

  return "Tatsumeeko: Meekolony Pass";
}

function getNftName(data: ModalData) {
  if (data.listingItem){
    return data.listingItem.title;
  }

  if (data.saleItem){
    return data.saleItem.mintObject.title;
  }

  if (data.walletItem){
    return data.walletItem.title;
  }

  return "Meekolony";
}

function getOwner(data: ModalData) {
  if (data.listingItem){
    return data.listingItem.owner;
  }

  if (data.saleItem){
    return data.saleItem.buyer_address;
  }

  if (data.walletItem){
    return data.walletItem.owner;
  }

  return "";
}

function getListPrice(data: ModalData) {
  if (data.listingItem){
    return data.listingItem.price.toFixed(3);
  }

  if (data.saleItem){
    return "--";
  }

  if (data.walletItem){
    return data.walletItem.price === 0 ? "--" : data.walletItem.price.toFixed(3);
  }

  return "";
}

function getFloorPrice(data: ModalData) {
  if (data.listingItem)
  {
    return data.latestFloorPrice?.cFP.toFixed(3);
  }

  return "";
}

function getFloorPriceDiff(data: ModalData) {
  if (data.listingItem && data.latestFloorPrice)
  {
    return (Math.abs((data.listingItem.price / data.latestFloorPrice?.cFP) - 1)).toFixed(3);
  }

  return "";
}

function getTopOffer(data: ModalData) {
  if (data.listingItem)
  {
    return convertSolToPriceString(data.listingItem.lastSalePriceWithFees);
  }

  return "";
}

function getOnChainCollection(data: ModalData) {
  if (data.listingItem){
    return data.listingItem.onChainCollection.key;
  }

  if (data.saleItem){
    return data.saleItem.onChainCollectionAddress;
  }

  if (data.walletItem){
    return data.walletItem.onChainCollection.key;
  }

  return "";
}

function getMintAddress(data: ModalData) {
  if (data.listingItem){
    return data.listingItem.mintAddress;
  }

  if (data.saleItem){
    return data.saleItem.mint;
  }

  if (data.walletItem){
    return data.walletItem.mintAddress;
  }

  return "";
}

function getTokenAddress(data: ModalData) {
  if (data.listingItem){
    return data.listingItem.tokenAddress;
  }

  if (data.saleItem){
    return data.saleItem.mint;
  }

  if (data.walletItem){
    return data.walletItem.tokenAddress;
  }

  return "";
}

function getImage(data: ModalData) {
  if (data.listingItem){
    return data.listingItem.img;
  }

  if (data.saleItem){
    return data.saleItem.mintObject.img;
  }

  if (data.walletItem){
    return data.walletItem.img;
  }

  return "https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://cdn.tatsu.gg/static/mkln/media/1078.gif";
}