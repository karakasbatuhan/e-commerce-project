import { FaPlay } from "react-icons/fa";
import AboutUsCard from "../components/AboutUsCard.jsx";

export default function AboutUs() {
    return (
        <div className="flex flex-col font-montserrat">
            <div className="flex flex-row justify-center gap-75 h-[740px] max-[1440px]:flex-col max-[1440px]:h-[1060px] max-[1440px]:gap-40 max-[1440px]:items-center max-[1440px]:mt-40">
                <div className="flex flex-col gap-5 justify-center max-[1440px]:items-center">
                    <h5 className="font-bold text-[16px] text-[#252B42] max-[1440px]:hidden">ABOUT COMPANY</h5>
                    <h1 className="font-bold text-[58px] text-[#252B42] max-[1440px]:text-[40px]">ABOUT US</h1>
                    <h4 className="font-medium text-[20px] text-[#737373] w-[376px] leading-[30px] max-[1440px]:w-[277px] max-[1440px]:text-center">We know how large objects will act, but things on a small scale <span className="hidden max-[1440px]:inline">just do not act that way.</span></h4>
                    <button className="w-[193px] h-[52px] bg-[#23A6F0] text-white font-semibold text-[14px] rounded-lg">Get Quote Now</button>
                </div>
                <div>
                    <div className="w-[632px] h-[612px] flex flex-row max-[1440px]:justify-center">
                        <div className="bg-[url('/src/assets/aboutus-1.png')] bg-cover bg-center w-[571px] h-[668px] absolute max-[1440px]:w-[375.73px] max-[1440px]:h-[439.19px]"></div>
                        <div className="flex flex-col items-center gap-80 mt-10 max-[1440px]:gap-60">
                            <div className="w-[77.39px] h-[77.39px] rounded-[50%] bg-[#FFE9EA] max-[1440px]:w-[47.27px] max-[1440px]:h-[47.27px]"></div>
                            <div className="w-[14.78px] h-[14.78px] rounded-[50%] bg-[#977DF4] max-[1440px]:w-[9.02px] max-[1440px]:h-[9.02px]"></div>
                        </div>
                        <div className="w-[484.06px] h-[484.06px] rounded-[50%] bg-[#FFE9EA] mt-10 max-[1440px]:w-[295.65px] max-[1440px]:h-[295.65px]"></div>
                        <div className="flex flex-col w-[50px] items-center mt-45 ml-5 gap-25 max-[1440px]:mt-30 max-[1440px]:gap-15">
                            <div className="w-[14.78px] h-[14.78px] rounded-[50%] bg-[#977DF4] ml-5 max-[1440px]:w-[9.02px] max-[1440px]:h-[9.02px]"></div>
                            <div className="w-[30.25px] h-[30.25px] rounded-[50%] bg-[#FFE9EA] mr-5 max-[1440px]:w-[18.48px] max-[1440px]:h-[18.48px]"></div>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="flex flex-row ml-90 gap-40 h-[236px] max-[1487px]:ml-0 max-[1440px]:flex-col max-[1440px]:h-[500px] max-[1440px]:items-center max-[1440px]:gap-15">
                <div className="flex flex-col gap-5 max-[1440px]:items-center">
                    <p className="font-semibold text-[14px] text-[#E74040]">Problems trying</p>
                    <h3 className="font-bold text-2xl text-[#252B42] w-[394px] max-[1440px]:w-[279px] max-[1440px]:text-center">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                </div>
                <div className="flex flex-col mt-10">
                    <p className="font-semibold text-[14px] text-[#737373] w-[545px] max-[1440px]:w-[353px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-45 h-[264px] items-center max-[1440px]:flex-col max-[1440px]:h-[1006px] max-[1440px]:gap-30">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[58px] text-[#252B42]">15K</h1>
                    <h5 className="font-bold text-[16px] text-[#737373]">Happy Customers</h5>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[58px] text-[#252B42]">150K</h1>
                    <h5 className="font-bold text-[16px] text-[#737373]">Montly Visitors</h5>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[58px] text-[#252B42]">15</h1>
                    <h5 className="font-bold text-[16px] text-[#737373]">Countries Worldwide</h5>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[58px] text-[#252B42]">100+</h1>
                    <h5 className="font-bold text-[16px] text-[#737373]">Top Partners</h5>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-[764px] max-[1100px]:h-[550px]">
                <div className="bg-[url('/src/assets/aboutus-2.jpg')] bg-cover bg-center w-[989px] h-[540px] flex flex-col justify-center items-center rounded-4xl max-[1100px]:w-[307px] max-[1100px]:h-[316px]">
                    <button className="w-[92.6px] h-[92.6px] rounded-[50%] bg-[#23A6F0]"> <FaPlay className="text-white m-auto" size={23}/></button>
                </div>
            </div>
            <div className="flex flex-col h-[806px] items-center mt-30 gap-30 max-[1100px]:h-[1627px] max-[1100px]:mt-10">
                <div className="flex flex-col items-center gap-5">
                    <h2 className="font-bold text-[40px] text-[#252B42]">Meet Our Team</h2>
                    <p className="font-semibold text-[14px] text-[#737373] w-[469px] text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex flex-row gap-12 max-[1100px]:flex-col ">
                    <AboutUsCard />
                    <AboutUsCard />
                    <AboutUsCard />
                </div>
            </div>
            <div className="flex flex-col items-center bg-[#FAFAFA] pt-20 gap-10">
                <h2 className="font-bold text-[40px] text-[#252B42] max-[1115px]:w-[287px] max-[1115px]:text-center">Big Companies Are Here</h2>
                <p className="font-semibold text-[14px] text-[#737373] w-[547px] text-center max-[1115px]:w-[328px] max-[1115px]:text-center">Problems trying to resolve the conflict between <br className="max-[1115px]:hidden"/>the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="h-[175px] bg-[#FAFAFA] flex flex-row justify-center items-center max-[1115px]:h-[1100px] max-[1115px]:flex-col max-[1115px]:gap-17 max-[1115px]:justify-start">
                    <button className="bg-[url(./assets/brand-1.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 max-[1115px]:scale-120"></button>
                    <button className="bg-[url(./assets/brand-2.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 max-[1115px]:scale-120"></button>
                    <button className="bg-[url(./assets/brand-3.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 max-[1115px]:scale-120"></button>
                    <button className="bg-[url(./assets/brand-4.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 max-[1115px]:scale-120"></button>
                    <button className="bg-[url(./assets/brand-5.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 max-[1115px]:scale-120"></button>
                    <button className="bg-[url(./assets/brand-6.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 max-[1115px]:scale-120"></button>
                </div>
            </div>
            <div className="flex flex-row h-[636px]">
                <div className="flex flex-col bg-[#2A7CC7] w-[60%] gap-10 justify-center pl-105 max-[1700px]:pl-0 max-[1700px]:items-center max-[1201px]:w-[100%] max-[1440px]:text-center">
                    <h5 className="font-bold text-[16px] text-white">WORK WITH US</h5>
                    <h2 className="font-bold text-[40px] text-white max-[1440px]:w-[274px]">Now Let’s grow Yours</h2>
                    <p className="font-medium text-[14px] text-white w-[440px] max-[1440px]:w-[257px]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                    <button className="w-[130px] h-[52px] rounded-lg bg-[#2A7CC7] border-1 border-white text-white text-[14px] font-bold">Button</button>
                </div>
                <div className="bg-[url(./assets/aboutus-3.jpg)] bg-cover bg-no-repeat w-[40%] max-[1201px]:w-[0%]"></div>
            </div>
        </div>
    )
}