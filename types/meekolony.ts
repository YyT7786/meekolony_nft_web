// MEEKOLONY COLLECTION
export interface MeekolonyPassCollection {
    name: string,
    description: string,
    image: string,
    totalItems: number,
    discord: string,
    twitter: string,
    website: string
}

export interface MeekolonyPassCollectionStat {
    listedCount: number,
    totalSpins24hr: number,
    volumeAll: number,
    highestGlobalOffer: number,
}

export interface MeekolonyPassCollectionStats {
    results: MeekolonyPassCollectionStat,
}

// LISTING
export interface ListingUpdatedAt {
    updatedAt: Date,
    slot: number,
}

export interface OnChainCollection {
    key: string,
}

export interface ListingItem {
    title: string,
    img: string,
    owner: string,
    listingUpdatedAt: ListingUpdatedAt,
    lastSalePrice: number,
    lastSalePriceWithFees: number,
    price: number,
    rarity: Rarity,
    collectionTitle: string,
    onChainCollection: OnChainCollection,
    mintAddress: string,
    tokenAddress: string,
}

export interface ListingItems {
    results: ListingItem[],
}

// SALES
export interface Moonrank {
    rank: number,
}

export interface Rarity {
    moonrank: Moonrank,
}

export interface MintObject {
    title: string,
    img: string,
    rarity: Rarity,
}

export interface SaleItem {
    seller_address: string,
    buyer_address: string,
    amount: number,
    mintObject: MintObject,
    blockTime: number,
    signers?: string[],
    onChainCollectionAddress: string,
    mint: string,
}

export interface SaleItems {
    results: SaleItem[],
}

// HOLDERS
export interface Bar {
    l_val: number,
    hight: number,
}

export interface TokenHistogram {
    bars: Bar[],
}

export interface OwnerDisplay {
    sol: string,
}

export interface topHolder {
    owner: string,
    tokens: number,
    ownerDisplay: OwnerDisplay,
    avatarMintImg: string,
}

export interface HolderStats {
    symbol: string,
    totalSupply: number,
    uniqueHolders: number,
    tokenHistogram: TokenHistogram,
    topHolders: topHolder[],
}

// WALLET
export interface NFTItem {
    collectionName: string,
    title: string,
    img: string,
    lastSalePriceWithFees: number,
    owner: string,
    listingUpdatedAt: ListingUpdatedAt,
    lastSalePrice: number,
    price: number,
    rarity: Rarity,
    onChainCollection: OnChainCollection,
    mintAddress: string,
    tokenAddress: string,
}

export interface NFTItems {
    results: NFTItem[],
}

export interface WalletUserInfo {
    walletAddress: string,
    avatarMintAddress: string,
    avatarMintImg: string
}

// FLOOR PRICE
export interface FloorPriceMarketTrend {
    cFP: number,
    maxFP: number,
    minFP: number,
    ts: number,
}