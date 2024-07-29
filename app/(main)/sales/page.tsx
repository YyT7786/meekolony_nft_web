import {
    getFloorPriceMarketTrend,
    getHolders,
    getMeekolonyPassCollection,
    getMeekolonyPassCollectionStats,
    getSaleItems
} from "@/lib/api/meekolony";
import { ItemLayout } from "@/components/item-layout";
import { CollectionHeader } from "@/components/collection-header";

const SalesPage = async () => {
    const meekolonyPassCollectionData = getMeekolonyPassCollection();
    const meekolonyPassCollectionStatsData = getMeekolonyPassCollectionStats();
    const saleItemsData = getSaleItems();
    const holderStatsData = getHolders();
    const floorPrice1dChartData = getFloorPriceMarketTrend("1d");

    const [
        saleItems,
        meekolonyPassCollection,
        meekolonyPassCollectionStats,
        holderStats,
        floorPrice1dChart
    ] = await Promise.all([
        saleItemsData,
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
                layoutType="sales"
                listingItems={undefined}
                saleItems={saleItems}
                walletItems={undefined}
                latestFloorPrice={floorPrice1dChart[floorPrice1dChart.length - 1]}
            />
        </div>
    );
};

export default SalesPage;