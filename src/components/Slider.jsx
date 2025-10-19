import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

export default function Slider() {
    return(
        <div className="bg-[#23856D] w-full h-[44.5rem] flex flex-row justify-around items-center gap-70 font-montserrat overflow-hidden">
            <BsChevronLeft size={60} className="btn-prev min-w-[60px] min-h-[60px] text-white ml-5 cursor-pointer flex hover:scale-130 transition-all duration-300"/>
            <div className="flex flex-row items-center gap-5">
                <div className="flex flex-col w-[31.8rem] h-[27rem] text-white  justify-around">
                    <h4 className="font-semibold text-xl tracking-wide">SUMMER 2020</h4>
                    <h1 className="font-bold text-6xl leading-20">Vita Classic Product</h1>
                    <p className="font-semibold text-sm w-[23rem] tracking-wide">We know how large objects will act, We know how are objects will act, We know</p>
                    <div className="flex flex-row gap-3 items-center gap-10">
                        <span className="font-bold text-2xl tracking-wide">$16.48</span>
                        <button className="bg-[#2DC071] font-bold text-sm py-5 px-14 rounded-lg tracking-wide hover:scale-105 transition-all duration-300">ADD TO CART</button>
                    </div>
                </div>
                <div className="flex gap-0.5 mt-150">
                    <button className="w-15.5 h-2.5 bg-white cursor-pointer" aria-current="true"></button>
                    <button className="w-15.5 h-2.5 bg-white opacity-60 cursor-pointer" aria-current="true"></button>        
                </div>
                <div className="bg-[url(./assets/slider-man.png)] bg-contain bg-no-repeat w-[27.7rem] h-[42.8rem] mt-25"></div>
            </div>
            <BsChevronRight size={60} className="btn-next min-w-[60px] min-h-[60px] text-white mr-5 cursor-pointer flex hover:scale-130 transition-all duration-300"/>
        </div>
    );}