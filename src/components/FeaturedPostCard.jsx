import {BsChevronRight} from "react-icons/bs"
import {Clock} from "lucide-react"
import { ChartArea } from "lucide-react";

export default function FeaturedPostCard() {
    return(
        <div>
            <div className="flex flex-col max-w-[21.9rem] max-h-[40rem] border-1 border-[#0000001A] shadow-md gap-4 font-montserrat">
                <div className="bg-[url(./assets/featured-bg.jpg)] w-[21.75rem] h-[18.8rem] p-4">
                    <span className="bg-[#E74040] text-white px-2.5 py-0.5 font-semibold leading-[24px] rounded-sm">NEW</span>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-3 ml-5">
                        <p className="text-[#8EC2F2] hover:scale-101 transition-all duration-300 cursor-pointer">Google</p>
                        <p className="text-[#737373] hover:scale-101 transition-all duration-300 cursor-pointer">Trending</p>
                        <p className="text-[#737373] hover:scale-101 transition-all duration-300 cursor-pointer">New</p>
                    </div>
                    <h4 className="ml-5 text-[#252B42] text-xl font-semibold">Loudest à la Madison #1 <br /> (L'integral)</h4>
                    <p className="ml-5 text-[#737373]">We focus on ergonomics and meeting <br /> you where you work. It's only a <br /> keystroke away.</p>
                    <div className="flex flex-row gap-20 ml-5">
                        <span className="text-[#737373]"><Clock className="inline-block mr-1 mb-1 size-4 text-[#23A6F0]" /> 22 April 2021</span>
                        <span className="text-[#737373]"><ChartArea className="inline-block  mb-1 size-4 text-[#23856D]" /> 10 comments</span>
                    </div>
                    <button className="font-bold leading-[14px] text-[#737373] text-left ml-5 mb-10 hover:scale-101 transition-all duration-300 cursor-pointer">Learn More <BsChevronRight className="inline-block text-xl text-[#23A6F0]" /></button>
                </div>
            </div>
        </div>
    );}