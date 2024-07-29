import {
    getFloorPriceMarketTrend,
    getHolders,
    getListingItems,
    getMeekolonyPassCollection,
    getMeekolonyPassCollectionStats
} from "@/lib/api/meekolony";
import { ItemLayout } from "@/components/item-layout";
import { CollectionHeader } from "@/components/collection-header";

const ListingsPage = async () => {
    const meekolonyPassCollectionData = getMeekolonyPassCollection();
    const meekolonyPassCollectionStatsData = getMeekolonyPassCollectionStats();
    const listingItemsData = getListingItems();
    const holderStatsData = getHolders();
    const floorPrice1dChartData = getFloorPriceMarketTrend("1d");

    const [
        listingItems,
        meekolonyPassCollection,
        meekolonyPassCollectionStats,
        holderStats,
        floorPrice1dChart
    ] = await Promise.all([
        listingItemsData,
        meekolonyPassCollectionData,
        meekolonyPassCollectionStatsData,
        holderStatsData,
        floorPrice1dChartData
    ]);

    return (
        <div>
            <CollectionHeader
                meelokonyCollection={meekolonyPassCollection}
                meelokonyCollectionStats={meekolonyPassCollectionStats}
                latestFloorPrice={floorPrice1dChart[floorPrice1dChart.length - 1]}
                holderStats={holderStats}
            />
            <ItemLayout
                layoutType="listings"
                listingItems={listingItems}
                saleItems={undefined}
                walletItems={undefined}
                latestFloorPrice={floorPrice1dChart[floorPrice1dChart.length - 1]}
            />
        </div>
    );
};

export default ListingsPage;