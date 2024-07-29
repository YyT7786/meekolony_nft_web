import {
    floorPrice1dChartData,
    floorPrice1mChartData,
    floorPrice1wChartData,
    floorPrice3mChartData,
    floorPrice6mChartData,
    floorPriceAllChartData,
    holderStats,
    listingItems,
    meekolonyPassCollection,
    meekolonyPassCollectionStats,
    nftsOwnedByOwner,
    saleItems,
    walletUserInfo
} from "@/constants"
import { FloorPriceMarketTrend } from "@/types/meekolony"
import { cache } from "react"

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`
const BASE_DEV_URL = `${process.env.NEXT_PUBLIC_BASE_DEV_URL}`
const BASE_STAT_URL = `${process.env.NEXT_PUBLIC_BASE_STAT_URL}`
const BASE_DEV_V2_URL = `${BASE_DEV_URL}/v2`
const BASE_V2_URL = `${BASE_URL}/v2`
const BASE_RPC_URL = `${BASE_URL}/rpc`
const BASE_IDXV2_URL = `${BASE_URL}/idxv2`
const BASE_AUTH_URL = `${BASE_URL}/auth`

const ALL_NFT_URL = `${BASE_IDXV2_URL}/getAllNftsByCollectionSymbol`;
const MEEKOLONY_PASS_COLLECTION_URL = `${BASE_URL}/collections/meekolony`
const MEEKOLONY_PASS_COLLECTION_STATS_URL = `${BASE_RPC_URL}/getCollectionEscrowStats/meekolony`
const MEEKOLONY_HOLDER_STATS_URL = `${BASE_V2_URL}/collections/meekolony/holder_stats`;
const MEEKOLONY_FLOOP_PRICE_MARKET_TREND_URL = `${BASE_STAT_URL}/collection_stats/getCollectionTimeSeriesV2/meekolony`

const fetchApiData = cache(async (url: string, params?: any, dataConstant?: any) => {
    try {
        const queryString = params ? new URLSearchParams(params).toString() : '';
        const fullUrl = queryString ? `${url}?${queryString}` : url;
        console.log(fullUrl);

        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch API data");
        }

        return response.json();
    } catch {
        if (dataConstant) {
            const dataJsonString = JSON.stringify(dataConstant);
            const dataJson = JSON.parse(dataJsonString);
            return dataJson;
        }

        throw new Error("Failed to fetch API data");
    }
});

export const getListingItems = async () => {
    const params = {
        collectionSymbol: 'meekolony',
        onChainCollectionAddress: '',
        direction: '2',
        field: '1',
        limit: '100',
        token22StandardFilter: '1',
        mplCoreStandardFilter: '1',
        agg: '3',
        compressionMode: 'both',
    };

    const url = `${ALL_NFT_URL}`;
    return fetchApiData(url, params, listingItems);
}

export const getSaleItems = async () => {
    const params = {
        activityTypes: '["sale"]',
        collectionSymbol: 'meekolony',
        limit: '50',
        enableSNS: 'true',
    };

    const url = `${BASE_V2_URL}/activities`;
    return fetchApiData(url, params, saleItems);
}

export const getHolders = async () => {
    const url = `${MEEKOLONY_HOLDER_STATS_URL}`;
    return fetchApiData(url, null, holderStats);
}

export const getMeekolonyCollectionHolderStats = async () => {
    const params = {
        edge_cache: 'true',
        agg: '3',
    };

    const url = `${BASE_RPC_URL}/getCollectionHolderStats/meekolony`;
    return fetchApiData(url, params);
}

export const getMeekolonyPassCollection = async () => {
    const params = {
        edge_cache: 'true',
    };

    const url = `${MEEKOLONY_PASS_COLLECTION_URL}`;
    return fetchApiData(url, params, meekolonyPassCollection);
}

export const getMeekolonyPassCollectionStats = async () => {
    const params = {
        status: 'all',
        edge_cache: 'true',
        agg: '3',
        enableFloorWithFee: 'true',
    };

    const url = `${MEEKOLONY_PASS_COLLECTION_STATS_URL}`;
    return fetchApiData(url, params, meekolonyPassCollectionStats);
}

export const getCollectionsByOwner = async (walletAddress: string) => {
    const params = {
        itemVisibilityMode: 'VISIBLE_ONLY',
        compressionMode: 'both',
        enableFloorWithFee: 'true'
    };

    const url = `${BASE_RPC_URL}/getCollectionsByOwner/${walletAddress}`;
    return fetchApiData(url, params);
}

export const getNFTsByOwner = async (walletAddress: string) => {
    const params = {
        status: 'both',
        offset: '0',
        limit: '100',
        direction: '1',
        field: '2',
        token22StandardFilter: '1',
        mplCoreStandardFilter: '1',
        agg: '3',
        compressionMode: 'both',
        itemVisibilityMode: 'VISIBLE_ONLY'
    };

    const url = `${BASE_RPC_URL}/getNFTsByOwner/${walletAddress}`;
    return fetchApiData(url, params, nftsOwnedByOwner);
}

export const getRoyaltiesByMintAddress = async (mintAddress: string) => {
    const params = {
        edge_cache: 'true',
    };

    const url = `${BASE_RPC_URL}/getRoyaltiesByMintAddress/${mintAddress}`;
    return fetchApiData(url, params);
}

export const getTokensByOwner = async (walletAddress: string) => {
    const url = `${BASE_DEV_V2_URL}/wallets/${walletAddress}/tokens`;
    return fetchApiData(url);
}

export const getWalletUserInfo = async (walletAddress: string) => {
    const params = {
        enableSNS: 'true',
    };

    const url = `${BASE_AUTH_URL}/user/${walletAddress}`;
    return fetchApiData(url, params, walletUserInfo);
}

export const isWalletUserValid = async (walletAddress: string) => {
    try {
        const params = {
            enableSNS: 'true',
        };

        const url = `${BASE_AUTH_URL}/user/${walletAddress}`;

        const queryString = params ? new URLSearchParams(params).toString() : '';
        const fullUrl = queryString ? `${url}?${queryString}` : url;

        const response = await fetch(fullUrl, {
            method: 'GET'
        });

        if (!response.ok) {
            return false;
        }

        return true;
    } catch {
        return false;
    }
}

export const getFloorPriceMarketTrend = async (numOfDays: "1d" | "1w" | "1m" | "3m" | "6m" | "all"): Promise<FloorPriceMarketTrend[]> => {
    const url = `${MEEKOLONY_FLOOP_PRICE_MARKET_TREND_URL}`;
    let constantParams: FloorPriceMarketTrend[] = [];
    let numOfDaysString = "1";

    if (numOfDays === "1d") {
        constantParams = floorPrice1dChartData;
        numOfDaysString = "1";
    } else if (numOfDays === "1w") {
        constantParams = floorPrice1wChartData;
        numOfDaysString = "7";
    } else if (numOfDays === "1m") {
        constantParams = floorPrice1mChartData;
        numOfDaysString = "31";
    } else if (numOfDays === "3m") {
        constantParams = floorPrice3mChartData;
        numOfDaysString = "60";
    } else if (numOfDays === "6m") {
        constantParams = floorPrice6mChartData;
        numOfDaysString = "90";
    } else if (numOfDays === "all") {
        constantParams = floorPriceAllChartData;
        numOfDaysString = "365";
    }

    const params = {
        edge_cache: 'true',
        resolution: '1h',
        numOfDays: numOfDaysString,
        chain: 'solana'
    };

    return fetchApiData(url, params, constantParams);
}