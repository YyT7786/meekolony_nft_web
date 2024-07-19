import { 
    getFloorPriceMarketTrend, 
    getHolders, 
    getMeekolonyPassCollection, 
    getMeekolonyPassCollectionStats 
} from "@/lib/api/meekolony";
import { FloorPriceChart } from "./floor-price-chart";
import { CollectionHeader } from "@/components/collection-header";

const FloorPricePage = async () => {
    const meekolonyPassCollectionData = getMeekolonyPassCollection();
    const meekolonyPassCollectionStatsData = getMeekolonyPassCollectionStats();
    const holderStatsData = getHolders();
    const floorPrice1dChartData = getFloorPriceMarketTrend("1d");

    const [
        meekolonyPassCollection,
        meekolonyPassCollectionStats,
        holderStats,
        floorPrice1dChart
    ] = await Promise.all([
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
            <FloorPriceChart/>
        </div>
    );
};

export default FloorPricePage;