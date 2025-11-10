
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";

export default function Footer(bg) {
    return (
        <footer className="overflow-hidden font-montserrat">
            <div className="w-full h-[142px] bg-[#FAFAFA] flex flex-col justify-around items-center font-montserrat pt-14 gap-10.5 max-xl:h-[173px] max-xl:pt-0 max-xl:items-start max-xl:pl-10">
                <div className="flex flex-row gap-210 items-center font-montserrat max-xl:flex-col max-xl:gap-5 max-xl:items-start">
                    <h3 className="font-bold text-2xl">Bandage</h3>
                    <div className="flex flex-row gap-5 text-[#23A6F0]">
                        <a href="" className="hover:scale-105 transition-all duration-250"><Facebook size={20}></Facebook></a>
                        <a href="" className="hover:scale-105 transition-all duration-250"><Instagram size={20}></Instagram></a>
                        <a href="" className="hover:scale-105 transition-all duration-250"><Twitter size={20}></Twitter></a>
                    </div>
                </div>
                <hr className="border-1 w-[1057px] border-[#E6E6E6] mx-auto max-xl:hidden"/>
            </div>            
            <div className="w-full h-[272px] flex flex-row justify-center items-start mt-15 gap-18 font-montserrat max-xl:h-[1071px] max-xl:flex-col max-xl:gap-10 max-xl:mb-5 max-xl:ml-10">
                <div className="flex flex-col gap-5">
                    <h5 className="font-bold">Company Info</h5>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">About Us</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Career</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">We are hiring</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Blog</a>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="font-bold">Legal</h5>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">About Us</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Career</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">We are hiring</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Blog</a>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="font-bold">Features</h5>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Business Marketing</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">User Analytic</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Live Chat</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Unlimited Support</a>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="font-bold">Resources</h5>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">IOS & Android</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Watch a Demo</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">Customers</a>
                    <a href="" className="font-bold text-sm text-[#737373] hover:scale-105 transition-all duration-250">API</a>
                </div>
                <div className="flex flex-col">
                    <h5 className="font-bold  mb-[20px]">Get In Touch</h5>
                    <div className="border-1 border-gray-300 rounded-lg mb-2.5 bg-[#F9F9F9]">
                        <input type="text" placeholder="Your email" className="w-[180px] h-10 pl-3 focus:outline-none font-semibold ml-2"/>
                        <button className="w-[117px] h-[58px] bg-[#23A6F0] text-white p-2.5 rounded-tr-lg rounded-br-lg font-medium cursor-pointer">Subscribe</button>                        
                    </div>
                    <span className="text-[#737373] font-semibold text-[12px]">Lore imp sum dolor Amit</span>
                </div>
            </div>
            <div className="w-full h-[74px] bg-[#FAFAFA] flex flex-row justify-center items-center">
                <div className="flex flex-row w-[1100px] max-xl:w-[200px] max-xl:text-center">
                    <h6 className="font-bold text-sm text-[#737373]">Made With Love By Finland All Right Reserved</h6>
                </div>
            </div>
        </footer>
    );
}