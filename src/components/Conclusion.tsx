import Image from "next/image";
import { IoDownloadOutline } from "react-icons/io5";
import PASS_RATE from '../../public/pass-rate.png';
import CONCLUSION from '../../public/conclusion.png';


export function Conclusion() {
    return (
        <div className="flex w-full">
            <div className="flex flex-col w-1/2 lg:pl-24 xl:pl-40 lg:pr-12 xl:pr-24 justify-center">
                <Image src={PASS_RATE} alt="pass-rate" />
                <h3 className="lg:mt-[12px] xl:mt-[24px] lg:text-3xl xl:text-5xl">Conclusion</h3>
                <p className="lg:mt-[12px] xl:mt-[24px] lg:text-sm xl:text-xl">This financial planning report outlines a customized plan to help John and his family work towards their financial goals. By following the recommended asset allocation and investment strategy, they can achieve financial security, a comfortable retirement, and education savings for their children.</p>
                <p className="lg:mt-[12px] xl:mt-[24px] text-sm text-zinc-500">Please note that this is a fictional sample report and should not be used for any actual financial planning purposes. Real financial planning should be done in consultation with a qualified financial advisor to consider individual circumstances and goals.</p>
                <button className="flex gap-1 text-black py-2 px-5 text-sm items-center mt-[24px]">
                    <IoDownloadOutline />Download
                </button>
            </div>
            <div className="flex flex-col w-1/2">
                <Image className="w-full" src={CONCLUSION} alt="conclusion" />
            </div>
        </div>
    );
}