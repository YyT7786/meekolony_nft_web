import {
    getFloorPriceMarketTrend,
    getNFTsByOwner,
    getWalletUserInfo,
    isWalletUserValid
} from "@/lib/api/meekolony";
import { ItemLayout } from "@/components/item-layout";
import { WalletHeader } from "./wallet-header";

type Props = {
    params: {
        walletAddressId: string;
    }
}

const WalletIdPage = async ({
    params
}: Props) => {
    const isWalletUserValidData = isWalletUserValid(params.walletAddressId);
    const walletUserInfoData = getWalletUserInfo(params.walletAddressId);
    const nftItemsData = getNFTsByOwner(params.walletAddressId);
    const floorPrice1dChartData = getFloorPriceMarketTrend("1d");

    const [
        isWalletValid,
        walletUserInfo,
        nftItems,
        floorPrice1dChart
    ] = await Promise.all([
        isWalletUserValidData,
        walletUserInfoData,
        nftItemsData,
        floorPrice1dChartData,
    ]);

    return (
        <div>
            <WalletHeader
                isWalletUserValid={isWalletValid}
                walletUserInfo={walletUserInfo}
                walletAddressId={params.walletAddressId}
                walletItems={nftItems}
                latestFloorPrice={floorPrice1dChart[floorPrice1dChart.length - 1]}
            />
            <ItemLayout
                layoutType="wallet"
                listingItems={undefined}
                saleItems={undefined}
                walletItems={nftItems}
                latestFloorPrice={floorPrice1dChart[floorPrice1dChart.length - 1]}
            />
        </div>
    );
};

export default WalletIdPage;