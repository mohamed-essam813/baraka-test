import { RiDoubleQuotesR } from "react-icons/ri";

export function Testimonial() {
    return (
        <div className="flex flex-col bg-testimonial-bg-image bg-cover bg-center bg-no-repeat w-full min-h-[700px] lg:px-24 xl:px-52 py-36">
            <div className="flex text-white text-6xl justify-end mb-[44px]"><RiDoubleQuotesR /></div>
            <div className="text-white text-6xl justify-center items-center font-light mb-[64px]">The best investment you can make is in yourself, and a great way to do that is by taking a vacation to refresh your body and mind.</div>
            <span className="flex text-white text-sm">Warren Buffett</span>
        </div>
    );
}