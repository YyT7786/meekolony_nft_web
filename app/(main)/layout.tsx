import { Tabbar } from "@/components/tabbar";
import { Header } from "./header";
import { CollectionHeader } from "@/components/collection-header";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({
    children,
}: Props) => {
    return (
        <>
            <Header />
            <CollectionHeader />
            <Tabbar />
            <div className="px-6 pt-6 pb-6 bg-[#141420]">
                {children}
            </div>
        </>
    );
};

export default MainLayout;