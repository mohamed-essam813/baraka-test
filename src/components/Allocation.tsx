import { CircularProgress, Accordion, AccordionItem, Progress } from "@nextui-org/react";

export function Allocation() {
    return (
        <div className="flex flex-col gap-12 lg:px-24 xl:px-56 py-40">
            <div className="grid grid-cols-2 gap-6 bg-black border rounded-xl px-16 py-32">
                <div className="flex flex-col">
                    <h2 className="text-white lg:text-2xl xl:text-4xl mb-8">Asset Allocation</h2>
                    <p className="text-white lg:text-sm xl:text-xl">To achieve your financial freedom, we have designed an asset allocation strategy that balances risk and growth, guiding your investments toward your retirement and financial goals</p>
                </div>
                <div className="flex gap-12 items-center">
                    <div className="flex">
                        <CircularProgress
                            classNames={{
                                svg: "lg:w-40 lg:h-40 xl:w-48 xl:h-48 drop-shadow-sm",
                                indicator: "stroke-white",
                                track: "stroke-white/10",
                                value: "xl:text-xl lg:text-sm font-semibold text-white",
                            }}
                            size="sm"
                            value={75}
                            valueLabel="Your Portfolio"
                            showValueLabel={true}
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="w-9 h-1 bg-white rounded-full mb-1" />
                        <span className="text-lg text-neutral-500 mb-1">Equity</span>
                        <span className="text-white xl:text-3xl lg:text-xl">75 <span className="text-sm text-neutral-500"> %</span></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="w-9 h-1 bg-neutral-500 rounded-full mb-1" />
                        <span className="text-lg text-neutral-500 mb-1">Cash</span>
                        <span className="text-white xl:text-3xl lg:text-xl">25 <span className="text-sm text-neutral-500"> %</span></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-3xl text-black mb-4">Product Allocation</h3>
                <div className="grid grid-cols-products-table-header w-full mb-3 px-6">
                    <span className="text-sm text-neutral-500 font-light">Fund name</span>
                    <span className="text-sm text-neutral-500 font-light">Ticker</span>
                    <span className="text-sm text-neutral-500 font-light">Allocation</span>
                </div>
                <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
                    <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title={
                            <div className="grid grid-cols-products-table w-full">
                                <p className="text-black">IShares Core S&P 500 ETF</p>
                                <span className="text-neutral-500">IVV</span>
                                <div className="flex gap-1 items-center">
                                    <span>45.56%</span>
                                    <div className="flex w-[100px] px-3">
                                        <Progress size="md" aria-label="progress-accordion-1" color="success" value={45.56} />
                                    </div>
                                </div>
                                <span className="text-sm self-center justify-self-end">See Details</span>
                            </div>
                        }
                    >
                        <div className="bg-neutral-400/10 w-full text-sm text-neutral-500 p-3 mb-4 rounded-lg">
                            The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this inde
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        key="2"
                        aria-label="Accordion 2"
                        title={
                            <div className="grid grid-cols-products-table w-full">
                                <p className="text-black">iShares Edge MSCI USA Momentum Factor ETF</p>
                                <span className="text-neutral-500">MTUM</span>
                                <div className="flex gap-1 items-center">
                                    <span>35.63%</span>
                                    <div className="flex w-[100px] px-3">
                                        <Progress size="md" aria-label="progress-accordion-1" color="success" value={35.63} />
                                    </div>
                                </div>
                                <span className="text-sm self-center justify-self-end">See Details</span>
                            </div>
                        }
                    >
                        <div className="bg-neutral-400/10 w-full text-sm text-neutral-500 p-3 mb-4 rounded-lg">
                            The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this inde
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        key="3"
                        aria-label="Accordion 3"
                        title={
                            <div className="grid grid-cols-products-table w-full">
                                <p className="text-black">Invesco 5&P MidCap Momentum ETF</p>
                                <span className="text-neutral-500">XMMO</span>
                                <div className="flex gap-1 items-center">
                                    <span>15.53%</span>
                                    <div className="flex w-[100px] px-3">
                                        <Progress size="md" aria-label="progress-accordion-1" color="success" value={15.53} />
                                    </div>
                                </div>
                                <span className="text-sm self-center justify-self-end">See Details</span>
                            </div>
                        }
                    >
                        <div className="bg-neutral-400/10 w-full text-sm text-neutral-500 p-3 mb-4 rounded-lg">
                            The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this inde
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        key="4"
                        aria-label="Accordion 4"
                        title={
                            <div className="grid grid-cols-products-table w-full">
                                <p className="text-black">IShares Core S&P 500 ETF</p>
                                <span className="text-neutral-500">IVV</span>
                                <div className="flex gap-1 items-center">
                                    <span>45.56%</span>
                                    <div className="flex w-[100px] px-3">
                                        <Progress size="md" aria-label="progress-accordion-1" color="success" value={45.56} />
                                    </div>
                                </div>
                                <span className="text-sm self-center justify-self-end">See Details</span>
                            </div>
                        }
                    >
                        <div className="bg-neutral-400/10 w-full text-sm text-neutral-500 p-3 mb-4 rounded-lg">
                            The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this inde
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        key="5"
                        aria-label="Accordion 5"
                        title={
                            <div className="grid grid-cols-products-table w-full">
                                <p className="text-black">IShares Core S&P 500 ETF</p>
                                <span className="text-neutral-500">IVV</span>
                                <div className="flex gap-1 items-center">
                                    <span>45.56%</span>
                                    <div className="flex w-[100px] px-3">
                                        <Progress size="md" aria-label="progress-accordion-1" color="success" value={45.56} />
                                    </div>
                                </div>
                                <span className="text-sm self-center justify-self-end">See Details</span>
                            </div>
                        }
                    >
                        <div className="bg-neutral-400/10 w-full text-sm text-neutral-500 p-3 mb-4 rounded-lg">
                            The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this inde
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        key="6"
                        aria-label="Accordion 6"
                        title={
                            <div className="grid grid-cols-products-table w-full">
                                <p className="text-black">Cash (USD)</p>
                                <span className="text-neutral-500">USD</span>
                                <div className="flex gap-1 items-center">
                                    <span>10.00%</span>
                                    <div className="flex w-[100px] px-3">
                                        <Progress size="md" aria-label="progress-accordion-1" color="success" value={10.0} />
                                    </div>
                                </div>
                                <span className="text-sm self-center justify-self-end">See Details</span>
                            </div>
                        }
                    >
                        <div className="bg-neutral-400/10 w-full text-sm text-neutral-500 p-3 mb-4 rounded-lg">
                            The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this inde
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}