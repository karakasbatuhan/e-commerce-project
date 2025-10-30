import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

export default function Slider() {
    return(
        <div className="bg-[#23856D] w-full h-[44.5rem] flex flex-row justify-between items-center font-montserrat overflow-hidden max-2xl:h-[1300px] max-2xl:justify-center ">
            <BsChevronLeft size={60} className="btn-prev min-w-[60px] min-h-[60px] text-white ml-5 cursor-pointer flex hover:scale-130 transition-all duration-300 max-md:hidden"/>
            <div className="flex flex-row h-[44.5rem] items-center mt-4 max-xl:flex-col max-xl:h-[1300px] max-xl:mt-113">
                <div className="flex flex-col max-w-[31.8rem] h-[27rem] text-white justify-around max-xl:items-center max-2xl:mt-5 max-xl:gap-7">
                    <h4 className="font-semibold text-xl tracking-wide  max-2xl:text-center">SUMMER 2020</h4>
                    <h1 className="font-bold text-6xl leading-20 max-2xl:text-center max-xl:text-4xl max-xl:max-w-[246px] max-xl:leading-15">Vita Classic Product</h1>
                    <p className="font-semibold text-lg max-w-[23rem] tracking-wide max-2xl:text-center max-xl:w-[291px]">We know how large objects will act, but things on a small scale.</p>
                    <div className="flex flex-row items-center gap-10 max-xl:flex-col max-xl:gap-5">
                        <span className="font-bold text-2xl tracking-wide">$16.48</span>
                        <div className="flex flex-row gap-7">
                            <BsChevronLeft size={60} className="btn-prev min-w-[60px] min-h-[60px] text-white ml-5 cursor-pointer flex hover:scale-130 transition-all duration-300 md:hidden"/>
                            <button className="bg-[#2DC071] font-bold text-sm py-5 px-14 rounded-lg tracking-wide hover:scale-105 transition-all duration-300">ADD TO CART</button>
                            <BsChevronRight size={60} className="btn-next min-w-[60px] min-h-[60px] text-white mr-5 cursor-pointer flex hover:scale-130 transition-all duration-300 md:hidden"/>

                        </div>
                    </div>
                </div>
                <div className="flex gap-0.5 mt-150 max-2xl:hidden">
                    <button className="w-15.5 h-2.5 bg-white cursor-pointer" aria-current="true"></button>
                    <button className="w-15.5 h-2.5 bg-white opacity-60 cursor-pointer" aria-current="true"></button>        
                </div>
                <div className="bg-[url(./assets/slider-man.png)] bg-contain bg-no-repeat w-[27.7rem] h-[42.8rem] mt-25 max-xl:h-[681px] max-xl:bg-cover max-xl:mt-30"></div>
            </div>
            <BsChevronRight size={60} className="btn-next min-w-[60px] min-h-[60px] text-white mr-5 cursor-pointer flex hover:scale-130 transition-all duration-300 max-md:hidden"/>
        </div>
    );}