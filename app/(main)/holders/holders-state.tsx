"use client";

export const HoldersState = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="text-white text-lg font-semibold">
                States
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex items-center bg-[#201f2d] rounded-lg w-[334px] h-[45px]">
                    <div className="flex items-center gap-x-1 m-auto">
                        <span className="text-white text-xs font-normal">
                            Supply
                        </span>
                        <span className="text-white text-sm font-semibold">
                            9,994
                        </span>
                    </div>
                </div>
                <div className="flex items-center bg-[#201f2d] rounded-lg w-[334px] h-[45px]">
                    <div className="flex items-center gap-x-1 m-auto">
                        <span className="text-white text-xs font-normal">
                            Holders
                        </span>
                        <span className="text-white text-sm font-semibold">
                            1,941
                        </span>
                    </div>
                </div>
                <div className="flex items-center bg-[#201f2d] rounded-lg w-[334px] h-[45px]">
                    <div className="flex items-center gap-x-1 m-auto">
                        <span className="text-white text-xs font-normal">
                            Avg. owned
                        </span>
                        <span className="text-white text-sm font-semibold">
                            5.2
                        </span>
                    </div>
                </div>
                <div className="flex items-center bg-[#201f2d] rounded-lg w-[334px] h-[45px]">
                    <div className="flex items-center gap-x-1 m-auto">
                        <span className="text-white text-xs font-normal">
                            Unique holders
                        </span>
                        <span className="text-white text-sm font-semibold">
                            20%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};