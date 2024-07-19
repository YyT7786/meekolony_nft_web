import { SalesHistory } from "@/constants";
import { SalesHistoryTable } from "./sales-history-table";

const SalesHistoryPage = () => {
    return (
        <div>
            <SalesHistoryTable 
                SalesHistory={SalesHistory}
            />
        </div>
    );
};

export default SalesHistoryPage;