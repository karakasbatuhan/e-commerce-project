export default function C2a() {
    return(
        <div className="flex flex-row justify-center w-full h-[42.625rem] font-montserrat max-xl:h-[999px] max-xl:flex-col-reverse max-xl:items-center max-xl:gap-10">
            <div className="w-[41.75rem] h-[42.65rem] bg-[url(./assets/slider-couple.png)] bg-cover bg-center mr-35 max-xl:mr-20"></div>
            <div className="flex flex-col flex-wrap justify-center gap-5 mr-30 max-xl:items-center max-xl:mr-0 max-xl:w-[300px] max-xl:mt-30 max-xl:gap-7">
                <h5 className="font-bold text-base text-[#BDBDBD]">SUMMER 2020</h5>
                <h2 className="font-bold text-[40px] max-w-[24.315rem] leading-[50px] max-xl:text-center">Part of the Neural Universe</h2>
                <p className="font-medium text-xl text-[#737373] max-w-[24.315rem] max-xl:w-[252px] max-xl:text-center">We know how large objects will act, but thing on a small scale.</p>
                <div className="flex flex-row gap-3 max-xl:flex-col max-xl:gap-6 max-xl:items-center">
                    <button className="bg-[#2DC071] text-white px-8 py-3 rounded-lg border-2 border-[#2DC071] font-bold hover:scale-105 transition-all duration-300 max-xl:bg-[#23A6F0] max-xl:border-[#23A6F0] max-xl:w-[170px]">BUY NOW</button>
                    <button className="border-2 border-[#2DC071] text-[#2DC071] px-11 py-3 rounded-lg hover:scale-105  font-bold transition-all duration-300 max-xl:border-[#23A6F0] max-xl:text-[#23A6F0]">READ MORE</button>
                </div>
            </div>
        </div>
    );
}