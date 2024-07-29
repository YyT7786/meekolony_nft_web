import {
    getFloorPriceMarketTrend,
    getHolders,
    getMeekolonyPassCollection,
    getMeekolonyPassCollectionStats
} from "@/lib/api/meekolony";
import { FloorPriceMarketTrend } from '@/types/meekolony';
import { FloorPriceChart } from "./floor-price-chart";
import { CollectionHeader } from "@/components/collection-header";

const FloorPricePage = async () => {
    const meekolonyPassCollectionData = getMeekolonyPassCollection();
    const meekolonyPassCollectionStatsData = getMeekolonyPassCollectionStats();
    const holderStatsData = getHolders();
    const floorPrice1mChartData = getFloorPriceMarketTrend("1m");

    const [
        meekolonyPassCollection,
        meekolonyPassCollectionStats,
        holderStats,
        floorPrice1mChart
    ] = await Promise.all([
        meekolonyPassCollectionData,
        meekolonyPassCollectionStatsData,
        holderStatsData,
        floorPrice1mChartData
    ]);

    return (
        <div>
            <CollectionHeader
                meelokonyCollection={meekolonyPassCollection}
                meelokonyCollectionStats={meekolonyPassCollectionStats}
                latestFloorPrice={floorPrice1mChart[floorPrice1mChart.length - 1]}
                holderStats={holderStats}
            />
            <FloorPriceChart
                floorPriceMarketTrend={floorPrice1mChart} />
        </div>
    );
};

export default FloorPricePage;