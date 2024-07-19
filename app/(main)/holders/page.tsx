import { 
    getFloorPriceMarketTrend, 
    getHolders, 
    getMeekolonyPassCollection, 
    getMeekolonyPassCollectionStats 
} from "@/lib/api/meekolony";
import { HoldersChart } from "./holders-chart";
import { HoldersState } from "./holders-state";
import { HoldersTable } from "./holders-table";
import { CollectionHeader } from "@/components/collection-header";

const HoldersPage = async () => {
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
            <div className="flex flex-col-reverse lg:flex-row gap-y-4">
                <div>
                    <HoldersTable holderStats={holderStats}/>
                </div>
                <div className="flex flex-col gap-y-4 lg:pl-[50px]">
                    <HoldersChart holderStats={holderStats}/>
                    <HoldersState holderStats={holderStats}/>
                </div>
            </div>
        </div>
    );
};

export default HoldersPage;