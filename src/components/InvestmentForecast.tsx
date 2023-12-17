import { AiOutlineLike } from "react-icons/ai";
import Image from "next/image";
import INVESTMENT_FORECAST_CHART from '../../public/graph.png';

export function InvestmentForecast() {
    return(
      <div className="flex flex-col border border-zinc-200 rounded-xl lg:mx-20 xl:mx-48 p-[32px] mt-[80px] mb-[80px] min-h-[200px]">
        <div className="flex justify-between mb-[40px]">
            <div className="flex flex-col">
                <h3 className="text-2xl mb-[32px]">Investment Forecast</h3>
                <p className="text-lg">With Your Portfolio, Your Wealth Could Grow to</p>
                <h4 className="text-xl">$51,998,32 in 20 Years</h4>
            </div>
            <div className="flex bg-green-200 rounded-xl px-[24px] py-[12px] gap-2">
                <div className="text-lg mt-[2px]"><AiOutlineLike /></div>
                <div className="flex flex-col max-w-[330px]">
                    <p className="font-medium mb-[8px]">On−track</p>
                    <p className="font-light">Great! You will most Likely your goal within the desired timeframe.</p>
                </div>
            </div>
        </div>
          <div className="flex justify-center mb-[50px]">
              <Image className="w-3/4 ml-[54px]" src={INVESTMENT_FORECAST_CHART} alt="investment-forecast-chart" />
          </div>
          <div className="w-7/12">
              <h3 className="text-xl mb-[26px]">About Trailblazer Portfolio</h3>
              <p className="text-sm text-zinc-500">Let this pioneer navigate your long-term investment journey. This portfolio offers exposure to the most promising companies and high potential assets classes. Its not for the faint of heart, but in the long run it projects to offer the highest potential returns. This is most suitable for this early in their careers for saving or with goals that reach many years into the future (greater than 7 years).</p>
          </div>
      </div>
    );
}