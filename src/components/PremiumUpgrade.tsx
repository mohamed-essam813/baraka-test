import { IoDiamondOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GoEye } from "react-icons/go";


export function PremiumUpgrade() {
    return (
      <div className="flex items-center bg-premium-upgrade-bg-image bg-cover bg-center bg-no-repeat w-full min-h-[700px] lg:pl-20 xl:pl-48 py-[100px]">
          <div className="flex flex-col backdrop-blur-md bg-zinc-800/80 lg:w-[325px] xl:w-[425px] shrink-0 rounded-xl lg:p-6 xl:p-12">
              <div className="text-white lg:text-3xl xl:text-5xl mb-12">
                  <IoDiamondOutline />
              </div>
              <h2 className="text-white lg:text-2xl xl:text-4xl mb-6">
                  Upgrade to Premium and Unlock Next Quarters Reports
              </h2>
              <p className="text-neutral-500 lg:text-sm xl:text-xl mb-12">
                  Supercharge your financial planning by accessing next quarters insights and stay one step ahead.
              </p>
              <button className="flex gap-2 items-center bg-neutral-800 text-black py-2 px-5 lg:text-xs xl:text-sm rounded-full w-fit">
                  <IoDiamondOutline /><span className="text-white">Unlock</span> Your Financial Foresight
              </button>
          </div>
          <div className="grid grid-cols-3 lg:gap-8 xl:gap-16 lg:pl-20 xl:pl-32 relative">
              <hr className="absolute z-0 top-[65px] border-white/20 w-full" />
              <div className="flex flex-col gap-4">
                  <h4 className="text-white text-xl">Q1 2024</h4>
                  <div className="flex z-10 items-center justify-center bg-white text-black text-xl rounded-full w-11 h-11">
                      <GoEye />
                  </div>
                  <p className="text-white text-sm">
                      Diversify investments across equities, bonds, and real estate to mitigate risk and promote long-term growth.
                  </p>
              </div>
              <div className="flex flex-col gap-4">
                  <h4 className="text-neutral-500 text-xl">Q2 2024</h4>
                  <div className="flex z-10 items-center justify-center bg-zinc-800 text-white text-xl rounded-full w-11 h-11">
                      <CiLock />
                  </div>
              </div>
              <div className="flex flex-col gap-4">
                  <h4 className="text-neutral-500 text-xl">Q3 2024</h4>
                  <div className="flex z-10 items-center justify-center bg-zinc-800 text-white text-xl rounded-full w-11 h-11">
                      <CiLock />
                  </div>
              </div>
          </div>
      </div>
    );
}