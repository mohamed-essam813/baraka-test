import { IoDiamondOutline } from "react-icons/io5";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import FOOTER_NUMBERS from '../../public/footer-numbers.svg';
import FOOTER_LOGO from '../../public/footer-logo.svg';

export function Footer() {
    return (
    <div className="flex flex-col">
        <div className="flex flex-col justify-center bg-footer-bg-image bg-cover bg-no-repeat w-full min-h-[700px]">
            <div className="flex items-center flex-col w-full h-full mt-auto">
                <h2 className="text-white text-5xl text-center max-w-[550px] mb-[24px]">
                    Get the Most from Your Personalized Monthly Financial Report
                </h2>
                <button className="flex gap-2 items-center bg-zinc-800 text-white py-2 px-5 text-xs rounded-full">
                    <IoDiamondOutline />Unlock Full Personalized Financial Report
                </button>
            </div>
            <div className="flex justify-center mt-auto">
                <Image src={FOOTER_NUMBERS} alt="footer-numbers" />
            </div>
        </div>
        <div className="flex flex-col bg-black w-full lg:px-24 xl:px-40 py-[100px]">
            <div className="grid grid-cols-5 mb-[80px]">
                <div className="flex flex-col">
                    <Image src={FOOTER_LOGO} alt="footer-logo" />
                    <div className="flex gap-2 mt-[32px]">
                        <a className="text-white text-xl" href="#">
                            <FaFacebookF />
                        </a>
                        <a className="text-white text-xl" href="#">
                            <FaInstagram />
                        </a>
                        <a className="text-white text-xl" href="#">
                            <FaLinkedinIn />
                        </a>
                        <a className="text-white text-xl" href="#">
                            <FaTwitter />
                        </a>
                        <a className="text-white text-xl" href="#">
                            <FaWhatsapp />
                        </a>
                    </div>
                    <div className="flex text-xs text-white gap-2 mt-[16px]">
                        <span>English</span>
                        <span>|</span>
                        <span>عربي</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-lg mb-[4px]">Company</h3>
                    <a className="text-xs text-zinc-500" href="#">About us</a>
                    <a className="text-xs text-zinc-500" href="#">Support</a>
                    <a className="text-xs text-zinc-500" href="#">Blog</a>
                    <a className="text-xs text-zinc-500" href="#">Press</a>
                    <a className="text-xs text-zinc-500" href="#">Glossary</a>
                    <a className="text-xs text-zinc-500" href="#">FAQs</a>
                    <a className="text-xs text-zinc-500" href="#">Careers</a>
                    <a className="text-xs text-zinc-500" href="#">Market Hours</a>
                    <a className="text-xs text-zinc-500" href="#">Media Kit</a>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-lg mb-[4px]">Products</h3>
                    <a className="text-xs text-zinc-500" href="#">Features</a>
                    <a className="text-xs text-zinc-500" href="#">Stocks</a>
                    <a className="text-xs text-zinc-500" href="#">News</a>
                    <a className="text-xs text-zinc-500" href="#">Learn</a>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-lg mb-[4px]">Legal & Regulatory</h3>
                    <a className="text-xs text-zinc-500" href="#">Terms & Conditions</a>
                    <a className="text-xs text-zinc-500" href="#">Privacy Policy</a>
                    <a className="text-xs text-zinc-500" href="#">Disclosures</a>
                </div>
            </div>
            <div className="flex w-full text-xs text-zinc-600">
                © baraka financial limited. All rights reserved.
                Baraka Financial Limited (“Baraka”) is registered in the Dubai International Financial Centre (“DIFC”) and is regulated by the Dubai Financial Services Authority (“DFSA”). It holds a Category 4 license with the permission of Arranging Deals in Investments, with a Retail endorsement. However, Baraka is not authorised to hold, nor control, client assets or money. Therefore, the client money rules are not applicable to the business currently undertaken by Baraka. Baraka is a wholly owned subsidiary of Baraka Technology Holding in Abu Dhabi Global Market.<br /><br />
                Baraka does not provide any trading or investment advice and shall not be responsible for any loss arising from any investment based on any general information provided by Baraka or as may be available on Baraka’s website and other web-based services (collectively, the “Website Services“). Your investment can fluctuate, so you may get back less than you invested. Baraka does not warrant that the information is accurate, reliable or complete or that the supply will be without interruptions. Any third party information provided through does not reflect the views of Baraka.<br /><br />
                The content of the Website Services provided by Baraka is only intended to provide you with general information and is neither an offer to sell nor a solicitation of an offer to purchase any security and may not be relied upon for investment purposes. Any commentaries, articles, daily news items, public and/or private chat publications, stock analysis and/or other information contained in the Website Services should not be considered investment advice.<br /><br />
                Baraka shall not be liable for any delay, inaccuracy, error or omission of any kind in the information provided by Baraka and/or any third party information provider or for any resulting loss or damage you may suffer as a result of or in connection with the information supplied by Baraka and/or any third party information provider. In addition, Baraka shall have no liability for any losses arising from unauthorized access to information or any other misuse of information.<br /><br />
                Any opinions, news, research, analysis, prices, or other information contained on our Website Services, or emailed to you, are provided as general market commentary, and do not constitute investment advice. Baraka will not accept liability for any loss or damage, including, without limitation, for any loss of profit which may arise directly or indirectly from use of or reliance on such information. Each decision as to whether an investment is appropriate or proper is an independent decision by you. You agree that Baraka has no fiduciary duty to you and is not responsible for any liabilities, claims, damages, costs and expenses, including attorneys’ fees, incurred in connection with you following Baraka’s generic investment information. Baraka makes no representations as to whether a particular investment is appropriate or suitable for you.<br /><br />
                Baraka provides traditional securities and does not intend to engage a Shariah advisor or obtain a fatwa regarding Shariah screened securities. Baraka does not have an Islamic Window endorsement from the DFSA. Clients should be aware that Shariah screened stocks may involve additional risks and costs. There can be no assurance as to the Shariah compliance of the securities listed by Baraka. Clients are reminded that views on Shariah compliance differ and that they should obtain their own independent advice as to the permissibility of a security.
            </div>
        </div>
    </div>
    );
}