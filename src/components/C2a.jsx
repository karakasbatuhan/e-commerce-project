export default function C2a() {
    return(
        <div className="flex flex-row flex-wrap justify-center w-full h-[42.625rem] font-montserrat">
            <div className="w-[41.75rem] h-[42.65rem] bg-[url(./assets/slider-couple.png)] bg-cover bg-center mr-35"></div>
            <div className="flex flex-col flex-wrap justify-center gap-5 mr-30">
                <h5 className="font-bold text-base text-[#BDBDBD]">SUMMER 2020</h5>
                <h2 className="font-bold text-[40px] max-w-[24.315rem] leading-[50px]">Part of the Neural Universe</h2>
                <p className="font-medium text-xl text-[#737373] max-w-[24.315rem]">We know how large objects will act, but thing on a small scale.</p>
                <div className="flex flex-row gap-3">
                    <button className="bg-[#2DC071] text-white px-8 py-3 rounded-lg border-2 border-[#2DC071] font-bold hover:scale-105 transition-all duration-300">BUY NOW</button>
                    <button className="border-2 border-[#2DC071] text-[#2DC071] px-11 py-3 rounded-lg hover:scale-105  font-bold transition-all duration-300">READ MORE</button>
                </div>
            </div>
        </div>
    );
}