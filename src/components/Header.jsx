import { Link } from "react-router";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import {Phone} from "lucide-react";
import { Mail } from "lucide-react";
import { User } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { BsChevronDown } from 'react-icons/bs';

export default function Header() {
  return (
    <div className="font-montserrat overflow-hidden">
    <div className="bg-[#252B42] flex justify-between text-white p-3 w-full font-medium">
      <div className="ml-6 flex gap-10 text-sm">
        <h6 className="flex gap-2 items-center text-[12px]"><Phone size={15}/> (225) 555-0118</h6>
        <a href="" className="flex gap-2 items-center text-[12px]"><Mail size={15}/> michelle.rivera@example.com</a>
      </div>
      <h6 className="text-sm">Follow Us  and get a chance to win 80% off</h6>
      <div className="flex gap-3.5 mr-10 text-sm">
        <h6 className="text-[12px]">Follow Us : </h6>
        <a href=""><Instagram size={18}/></a>
        <a href=""><Youtube  size={18}/></a>
        <a href=""><Facebook size={18} /></a>
        <a href=""><Twitter  size={18}/></a>
      </div>
    </div>
    <div className="flex p-4"> 
      <h3 className="text-2xl font-bold ml-5">Bandage</h3>
      <div className="flex w-full overflow-hidden justify-between items-center ml-18">
        <nav>
          <ul className="flex ml-10">
            <li className="mr-4"><a href="" className="font-bold text-[#737373] hover:text-black text-sm transition-all duration-300">Home</a></li>
            <div className="group">
              <li className="mr-4"><a href="" className="font-bold text-[#737373] hover:text-black text-sm transition-all duration-300 justify-between items-center">Shop <BsChevronDown size={12} className="inline-block ml-1" /></a></li>
              <div className="scale-y-0 group-hover:scale-y-100 origin-top duration-300 absolute transition-all bg-white text-black p-4 flex flex-row gap-29">
                <div className="flex flex-col">
                  <a href="" className="mb-10 font-bold text-sm">Kadın</a>
                  <a href="" className="font-bold text-gray-500 hover:text-black text-sm transition-all duration-300">Bags</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">Belts</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">Cosmetics</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">Bags</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">Hats</a>
                </div>
                <div className="flex flex-col mr-27">
                  <a href="" className="mb-10 font-bold text-sm">Erkek</a>
                  <a href="" className="font-bold text-gray-500 hover:text-black text-sm transition-all duration-300">Bags</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">Belts</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">Cosmetics</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">Bags</a>
                  <a href="" className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">Hats</a>
                </div>
              </div>
            </div>
            <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black text-sm transition-all duration-300">About</a></li>
            <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black text-sm transition-all duration-300">Blog</a></li>
            <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black text-sm transition-all duration-300">Contact</a></li>
            <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black text-sm transition-all duration-300">Pages</a></li>
          </ul>
        </nav>
        <div className="flex text-[#23A6F0] mr-8">
          <a href="" className="mr-6 flex items-center gap-1 font-bold text-sm"><User size={18} className="mb-1"/> Login / Register</a>
          <a href="" className="mr-6 flex items-center hover:scale-120 transition-all duration-300"><Search size={18}/></a>
          <a href="" className="mr-6 flex items-center hover:scale-120 transition-all duration-300"><ShoppingCart size={18}/></a>
          <a href="" className="mr-5 flex items-center hover:scale-120 transition-all duration-300"><Heart size={18}/></a>
        </div>
      </div>
    </div>
    </div>
  )
}