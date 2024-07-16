import { HoldersChart } from "./holders-chart";
import { HoldersState } from "./holders-state";
import { HoldersTable } from "./holders-table";

const HoldersPage = () => {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row gap-y-4">
                <div>
                    <HoldersTable />
                </div>
                <div className="flex flex-col gap-y-4 lg:pl-[50px]">
                    <HoldersChart />
                    <HoldersState />
                </div>
            </div>
        </div>
    );
};

export default HoldersPage;