import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import AboutUsCard from "../components/AboutUsCard.jsx";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Team() {
    return (
        <div className="flex flex-col font-montserrat">
            <div className="flex flex-col items-center gap-3 my-15">
                <h5 className="font-bold text-[16px] text-[#737373]">WHAT WE DO</h5>
                <h1 className="font-bold text-[58px] text-[#252B42] max-[890px]:w-[326px] max-[890px]:text-[40px] max-[890px]:text-center">Innovation tailored for you</h1>
                    <div className="flex flex-row items-center gap-2">
                        <Link to="/" className="font-bold text-[14px]">Home</Link>
                        <BsChevronRight size={14} className="text-[#BDBDBD] mt-1"/>
                        <h6 className="font-bold text-[#BDBDBD] text-[14px]">Team</h6>
                    </div>
            </div>
            <div className="flex flex-row gap-2 max-[1070px]:flex-col">
                <div className="w-[50%] h-[530px] bg-[url('/src/assets/team-1.jpg')] bg-no-repeat bg-cover bg-center max-[1070px]:w-[100%]"></div>
                <div className="flex flex-col w-[50%] gap-[10px] max-[1070px]:w-[100%]">
                    <div className="flex flex-row gap-2 h-[260px]">
                        <div className="w-[50%] h-[260px] bg-[url('/src/assets/team-2.jpg')] bg-no-repeat bg-cover bg-center"></div>
                        <div className="w-[50%] h-[260px] bg-[url('/src/assets/team-3.jpg')] bg-no-repeat bg-cover bg-center"></div>
                    </div>
                    <div className="flex flex-row gap-2 h-[260px]">
                        <div className="w-[50%] h-[260px] bg-[url('/src/assets/team-2.jpg')] bg-no-repeat bg-cover bg-center"></div>
                        <div className="w-[50%] h-[260px] bg-[url('/src/assets/team-3.jpg')] bg-no-repeat bg-cover bg-center"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-30 mt-25 mb-40 items-center max-[1050px]:gap-15">
                <h2 className="font-bold text-[40px] text-[#252B42]">Meet Our Team</h2>
                <div className="flex flex-row gap-8 max-[1050px]:flex-wrap max-[1050px]:justify-center">
                    <AboutUsCard />
                    <AboutUsCard />
                    <AboutUsCard />
                </div>
                <div className="flex flex-row gap-8 max-[1050px]:flex-wrap max-[1050px]:justify-center">
                    <AboutUsCard />
                    <AboutUsCard />
                    <AboutUsCard />
                </div>
                <div className="flex flex-row gap-8 max-[1050px]:flex-wrap max-[1050px]:justify-center">
                    <AboutUsCard />
                    <AboutUsCard />
                    <AboutUsCard />
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 mb-30">
                <h2 className="font-bold text-[40px] text-[#252B42] max-[600px]:w-[342px] max-[600px]:text-center">Start your <br className="hidden max-[600px]:inline"/>14 days free trial</h2>
                <p className="font-semibold text-[14px] text-[#737373] w-[411px] text-center max-[600px]:w-[321px] max-[600px]:text-center">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
                <button className="px-7 py-3 font-semibold text-[14px] text-white bg-[#23A6F0] rounded-md hover:scale-103 transition-shadow duration-300">Try it free now</button>
                <div className="flex flex-row gap-7">
                    <FaTwitter size={24} className="text-[#23A6F0] cursor-pointer hover:scale-110 transition-all duration-300"/>
                    <ImFacebook2 size={24} className="text-[#395185] cursor-pointer hover:scale-110 transition-all duration-300"/>
                    <FaInstagram size={24} className="text-black cursor-pointer hover:scale-110 transition-all duration-300"/>
                    <FaLinkedin size={24} className="text-[#0A66C2] cursor-pointer hover:scale-110 transition-all duration-300"/>
                </div>
            </div>
        </div>
    )};