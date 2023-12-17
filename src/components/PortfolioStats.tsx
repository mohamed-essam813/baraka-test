import Image from "next/image";
import APPLE_HOLDING from '../../public/apple-holding.svg';
import DISNEY_HOLDING from '../../public/disney-holding.svg';
import I_SHARES_HOLDING from '../../public/ishares-holding.svg';
import SPOTIFY_HOLDING from '../../public/spotify-holding.svg';
import AIR_BNB_HOLDING from '../../public/airbnb-holding.svg';
import MICROSOFT_HOLDING from '../../public/microsoft-holding.svg';

export function PortfolioStats() {
    return (
      <div className="flex flex-col bg-portfolio-stats-bg-image bg-cover bg-no-repeat w-full min-h-[700px] lg:px-24 xl:px-40 py-[100px]">
          <div className="flex justify-center text-white text-5xl mb-[70px]">Your Portfolio Stats</div>
          <div className="flex flex-col p-[16px] backdrop-blur-md bg-black-500/30 border border-white/20 rounded-xl mb-[40px]">
              <span className="text-xs text-zinc-400 mb-[16px]">As of Jan, 2023</span>
              <div className="flex items-center gap-3 pb-[16px]">
                  <h5 className="text-lg text-white">95% probability (6 months)</h5>
                  <div className="flex gap-1">
                      <div className="flex items-center justify-center py-[4px] px-[8px] rounded-lg bg-red-950/30 text-red-400">
                          -17.76%
                      </div>
                      <div className="flex items-center justify-center py-[4px] px-[8px] rounded-lg bg-green-950/30 text-green-500">
                          +26.76%
                      </div>
                  </div>
              </div>
              <hr className="border-white/20" />
              <div className="flex items-center gap-3 py-[16px]">
                  <h5 className="text-lg text-white">Potential Annual Return</h5>
                  <div className="flex gap-1">
                      <div className="flex items-center justify-center py-[4px] px-[8px] rounded-lg bg-green-950/30 text-green-500">
                          10.23%
                      </div>
                  </div>
              </div>
              <hr className="border-white/20" />
              <div className="flex items-center gap-3 pt-[16px]">
                  <h5 className="text-lg text-white">Portfolio Yield</h5>
                  <div className="flex gap-1">
                      <div className="flex items-center justify-center py-[4px] px-[8px] rounded-lg bg-green-950/30 text-green-500">
                          3.4%
                      </div>
                  </div>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-7 mb-[40px]">
              <div className="flex flex-col p-[16px] backdrop-blur-md bg-black-500/30 border border-white/20 rounded-xl">
                  <span className="text-xs text-zinc-400 mb-[16px]">As of Jan, 2023</span>
                  <div className="flex items-center gap-3 pb-[16px]">
                      <h5 className="text-lg text-white">If a 2013 bull market were to happen again</h5>
                  </div>
                  <div className="flex items-center gap-3 py-[16px]">
                      <h5 className="text-lg text-white">S&P 500</h5>
                      <div className="flex gap-1">
                          <div className="flex items-center justify-center py-[4px] px-[8px] rounded-lg bg-green-950/30 text-green-500">
                              10.23%
                          </div>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 py-[16px]">
                      <h5 className="text-lg text-white">Trailblazer</h5>
                      <div className="flex gap-1">
                          <div className="flex items-center justify-center py-[4px] px-[8px] rounded-lg bg-green-950/30 text-green-500">
                              10.23%
                          </div>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col p-[16px] backdrop-blur-md bg-black-500/30 border border-white/20 rounded-xl">
                  <span className="text-xs text-zinc-400 mb-[16px]">As of Jan, 2023</span>
                  <div className="flex items-center gap-3 pb-[16px]">
                      <h5 className="text-lg text-white">If a 2008 bear market were to happen again</h5>
                  </div>
                  <div className="flex items-center gap-3 py-[16px]">
                      <h5 className="text-lg text-white">S&P 500</h5>
                      <div className="flex gap-1">
                          <div className="flex items-center justify-center py-[4px] px-[8px] rounded-lg bg-red-950/30 text-red-400">
                              10.23%
                          </div>
                      </div>
                  </div>
                  <div className="flex items-center gap-3 py-[16px]">
                      <h5 className="text-lg text-white">Trailblazer</h5>
                      <div className="flex gap-1">
                          <div className="flex items-center justify-center py-[4px] px-[8px] rounded-lg bg-red-950/30 text-red-400">
                              10.23%
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex flex-col">
              <div className="flex items-center justify-between mb-[16px]">
                  <h5 className="text-lg text-white">Top Holdings</h5>
                  <span className="text-xs text-zinc-400">As of Jan, 2023</span>
              </div>
              <div className="grid grid-cols-6 gap-2 p-[16px] backdrop-blur-md bg-black-500/30 border border-white/20 rounded-xl">
                  <Image src={APPLE_HOLDING} alt='apple-holding' />
                  <Image src={I_SHARES_HOLDING} alt='i-shares-holding' />
                  <Image src={DISNEY_HOLDING} alt='disney-holding' />
                  <Image src={SPOTIFY_HOLDING} alt='spotify-holding' />
                  <Image src={AIR_BNB_HOLDING} alt='air-bnb-holding' />
                  <Image src={MICROSOFT_HOLDING} alt='microsoft-holding' />
              </div>
          </div>
      </div>
    );
}