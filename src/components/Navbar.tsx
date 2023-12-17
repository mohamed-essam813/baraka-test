import BARAKA_LOGO from '../../public/baraka-logo.svg';
import Image from "next/image";

export function Navbar() {
    return (
        <div className="flex py-3 px-6 justify-between items-center">
            <Image src={BARAKA_LOGO} alt="baraka-logo" className="w-7" />
            <div>
                <button className="bg-zinc-800 text-white py-2 px-5 text-xs rounded-full">Get the App</button>
            </div>
        </div>
    );
}