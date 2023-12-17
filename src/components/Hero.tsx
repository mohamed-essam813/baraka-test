import { IoDownloadOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Navbar } from "@/components/Navbar";
import { useRef } from "react";

export function Hero() {
    const nextSectionBtnRef = useRef<HTMLButtonElement>(null);

    function onScrollToNextSection() {
        if(nextSectionBtnRef.current) {
            nextSectionBtnRef.current.parentElement?.nextElementSibling?.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className="flex justify-between flex-col bg-hero-bg-image bg-cover bg-center bg-no-repeat w-full min-h-screen">
            <Navbar />
            <div className="backdrop-blur-md bg-neutral-300/30 w-[475px] rounded-xl p-[40px] mx-[120px]">
                <h3 className="text-white text-2xl mb-[60px]">Vacation</h3>
                <h2 className="text-white text-5xl">Financial Report for Khaled Abu Asbeh</h2>
                <div className="flex gap-4 mt-[40px] mb-[60px]">
                    <button className="bg-white font-medium text-black py-2 px-5 text-xs rounded-full">Start Investing</button>
                    <button className="flex gap-1 text-white py-2 px-5 text-xs items-center">
                        <IoDownloadOutline />Download Report
                    </button>
                </div>
                <p className="text-white text-xs">October 19, 2023</p>
            </div>
            <button
                className="flex items-center justify-center self-center bg-white text-black text-xs rounded-full w-11 h-11 mb-[40px]"
                ref={nextSectionBtnRef}
                onClick={onScrollToNextSection}
            >
                <IoIosArrowDown />
            </button>
        </div>
    );
}