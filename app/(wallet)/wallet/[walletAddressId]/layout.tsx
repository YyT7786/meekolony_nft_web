import { Header } from "@/components/header";
import { WalletHeader } from "./wallet-header";
import { WalletTabbar } from "./wallet-tabbar";

type Props = {
    children: React.ReactNode;
};

const WalletLayout = ({
    children,
}: Props) => {
    return (
        <>
            <Header 
                isMyWalletVisible={false}
            />
            <WalletTabbar />
            <div className="px-6 pt-6 pb-6 bg-[#141420]">
                {children}
            </div>
        </>
    );
};

export default WalletLayout;