import { FaRegStar } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";

export function ActionSteps() {
    return (
        <div className="flex flex-col items-center justify-center bg-black w-full lg:px-24 xl:px-40 py-[100px]">
            <div className="flex justify-center text-white text-5xl mb-[70px]">Action Steps</div>
            <div className="grid grid-cols-2 gap-[50px]">
                <div className="flex flex-col gap-[50px]">
                    <div className="flex gap-3">
                        <div className="text-white text-3xl mt-[2px]">
                            <FaRegStar />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white text-3xl mb-[12px]">Emergency Fund</h2>
                            <p className="text-white text-sm">Prioritize building an emergency fund with six months worth of living expenses in a high-yield savings account.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-white text-3xl mt-[2px]">
                            <FaRegStar />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white text-3xl mb-[12px]">Regular Review</h2>
                            <p className="text-white text-sm">Periodically review and rebalance the portfolio to maintain the desired asset allocation.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-white text-3xl mt-[2px]">
                            <GoPeople />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white text-3xl mb-[12px]">Retirement Accounts</h2>
                            <p className="text-white text-sm">Maximize contributions to 401(k) and IRA accounts to take advantage of tax benefits and long-term growth potential.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[50px]">
                    <div className="flex gap-3">
                        <div className="text-white text-3xl mt-[2px]">
                            <GoLightBulb />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white text-3xl mb-[12px]">Diversified Portfolio</h2>
                            <p className="text-white text-sm">Invest in a diversified mix of individual stocks, ETFs, and mutual funds based on risk tolerance and time horizon.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-white text-3xl mt-[2px]">
                            <FaRegStar />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white text-3xl mb-[12px]">529 College Savings Plans</h2>
                            <p className="text-white text-sm">Establish 529 plans to save for childrens education, taking advantage of potential tax benefits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}