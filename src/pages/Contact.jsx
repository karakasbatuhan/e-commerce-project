import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { PiArrowBendRightDown } from "react-icons/pi";




export default function Contact() {
    return (
        <div className="flex flex-col font-montserrat">
            <div className="flex flex-row justify-center h-[740px] max-[1300px]:flex-col max-[1300px]:h-[1460px] max-[900px]:h-[1060px] max-[1300px]:gap-20 max-[1300px]:items-center max-[1300px]:justify-start max-[1300px]:mt-15">
                <div className="flex flex-col gap-8 justify-center pl-[15%] max-[1300px]:items-center w-[50%]  max-[1300px]:w-[100%] max-[1300px]:pl-0">
                    <h5 className="font-bold text-[16px] text-[#252B42]">CONTACT US</h5>
                    <h1 className="font-bold text-[58px] text-[#252B42] max-[900px]:text-[40px] max-[1300px]:text-center">Get in touch <br /> today!</h1>
                    <h4 className="font-medium text-[20px] text-[#737373] w-[376px] leading-[30px] max-[1300px]:w-[277px] max-[1300px]:text-center">We know how large objects will act, but things on a small scale <span className="hidden max-[1300px]:inline">just do not act that way.</span></h4>
                    <h3 className="font-bold text-[24px] text-[#252B42]">Phone ; +451 215 215</h3>
                    <h3 className="font-bold text-[24px] text-[#252B42]">Fax ; +451 215 215</h3>
                    <div className="flex flex-row gap-7">
                        <FaTwitter size={24} className="cursor-pointer hover:scale-110 transition-all duration-300"/>
                        <ImFacebook2 size={24} className="cursor-pointer hover:scale-110 transition-all duration-300"/>
                        <FaInstagram size={24} className="cursor-pointer hover:scale-110 transition-all duration-300"/>
                        <FaLinkedin size={24} className="cursor-pointer hover:scale-110 transition-all duration-300"/>
                    </div> 
                </div>
                <div className="w-[50%]  max-[1300px]:w-[100%]">
                    <div className="h-[612px] flex flex-row max-[1300px]:justify-center max-[1100px]:w-[100%] max-[1300px]:h-[440px]">
                        <div className="bg-[url('/src/assets/contact-1.png')] bg-cover bg-center w-[571px] h-[668px] absolute max-[900px]:w-[375.73px] max-[900px]:h-[439.19px]"></div>
                        <div className="flex flex-col items-center gap-80 mt-10 max-[900px]:gap-60">
                            <div className="w-[77.39px] h-[77.39px] rounded-[50%] bg-[#FFE9EA] max-[900px]:w-[47.27px] max-[900px]:h-[47.27px]"></div>
                            <div className="w-[14.78px] h-[14.78px] rounded-[50%] bg-[#7dbef4] max-[900px]:w-[9.02px] max-[900px]:h-[9.02px]"></div>
                        </div>
                        <div className="w-[484.06px] h-[484.06px] rounded-[50%] bg-[#FFE9EA] mt-10 max-[900px]:w-[295.65px] max-[900px]:h-[295.65px]"></div>
                        <div className="flex flex-col w-[50px] items-center mt-45 ml-5 gap-25 max-[900px]:mt-30 max-[900px]:gap-15">
                            <div className="w-[14.78px] h-[14.78px] rounded-[50%] bg-[#977DF4] ml-5 max-[900px]:w-[9.02px] max-[900px]:h-[9.02px]"></div>
                            <div className="w-[30.25px] h-[30.25px] rounded-[50%] bg-[#FFE9EA] mr-5 max-[900px]:w-[18.48px] max-[900px]:h-[18.48px]"></div>
                        </div>
                    </div>                                       
                </div>                
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center">
                    <h6 className="font-bold text-[14px] text-[#252B42]">VISIT OUR OFFICE</h6>
                    <h2 className="font-bold text-[40px] text-[#252B42] w-[541px] text-center">We help small <br className="hidden max-[600px]:inline"/> businesses <br className="hidden max-[600px]:inline"/> with big ideas</h2>
                </div>
                <div className="flex flex-row gap-20 justify-center mt-20 mb-20 max-[950px]:flex-col max-[950px]:items-center max-[950px]:bg-[#FAFAFA]">
                    <div className="flex flex-col gap-5 items-center justify-center h-[403px] bg-white w-[328px]">
                        <CiPhone size={80} className="text-[#23A6F0]"/>
                        <div className="flex flex-col items-center gap-1">
                            <h6 className="font-bold text-[14px] text-[#252B42]">georgia.young@example.com</h6>
                            <h6 className="font-bold text-[14px] text-[#252B42]">georgia.young@ple.com</h6>
                        </div>
                        <button className="w-[193px] h-[54px] border-1 border-[#23A6F0] text-[#23A6F0] rounded-4xl font-bold text-[14px] hover:scale-103 transition-all cursor-pointer">Submit Request</button>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center w-[328px] h-[403px] bg-[#252B42]">
                        <IoLocationSharp size={80} className="text-[#23A6F0]"/>
                        <div className="flex flex-col items-center gap-1">
                            <h6 className="font-bold text-[14px] text-[#FFFFFF]">georgia.young@example.com</h6>
                            <h6 className="font-bold text-[14px] text-[#FFFFFF]">georgia.young@ple.com</h6>
                        </div>
                        <button className="w-[193px] h-[54px] border-1 border-[#23A6F0] text-[#23A6F0] rounded-4xl font-bold text-[14px] hover:scale-103 transition-all cursor-pointer">Submit Request</button>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-center h-[403px] bg-white w-[328px]">
                        <IoIosMail size={80} className="text-[#23A6F0]"/>
                        <div className="flex flex-col items-center gap-1">
                            <h6 className="font-bold text-[14px] text-[#252B42]">georgia.young@example.com</h6>
                            <h6 className="font-bold text-[14px] text-[#252B42]">georgia.young@ple.com</h6>
                        </div>
                        <button className="w-[193px] h-[54px] border-1 border-[#23A6F0] text-[#23A6F0] rounded-4xl font-bold text-[14px] hover:scale-103 transition-all cursor-pointer">Submit Request</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 mb-20 items-center">
                <div className="flex flex-col items-center">
                    <PiArrowBendRightDown size={80} className="text-[#23A6F0]"/>
                </div>
                    <h5 className="font-bold text-[16px] text-[#252B42]">WE Can't WAIT TO MEET YOU</h5>
                    <h1 className="font-bold text-[58px] text-[#252B42]">Let’s Talk</h1>
                    <button className="w-[186px] h-[52px] bg-[#23A6F0] font-semibold text-white text-[14px] rounded-lg hover:scale-103 transition-all">Try it free now</button>
            </div>
        </div>        
    )};