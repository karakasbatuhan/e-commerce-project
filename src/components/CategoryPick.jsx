export default function CategoryPick() {
    return (
        <div className="bg-[#FAFAFA] w-full h-[48rem] font-montserrat flex flex-col justify-center items-center gap-10 overflow-hidden">
            <div className="flex flex-col text-center gap-5">
                <h3 className="font-bold text-2xl">EDITOR'S PICK</h3>
                <p className="font-medium text-[14px] text-[#737373]">Problems trying to resolve the conflict between</p>
            </div>
            <div className="flex gap-9 flex-wrap">
                <div className="bg-[url(./assets/category-1.jpg)] flex items-end bg-cover bg-center w-[33.3rem] h-[31.3rem]">
                    <button className="bg-white text-black font-bold ml-5 mb-7 w-[10.63rem] h-12 cursor-pointer hover:scale-105 transition-all ">MEN</button>
                </div>
                <div className="bg-[url(./assets/category-2.jpg)] flex items-end bg-cover bg-center w-[15rem] h-[31.3rem]">
                    <button className="bg-white text-black font-bold ml-5 mb-7 w-[8.5rem] h-12 cursor-pointer hover:scale-105 transition-all ">WOMEN</button>
                </div>
                <div className="flex flex-col gap-5.5">
                    <div className="bg-[url(./assets/category-3.jpg)] flex items-end bg-cover bg-center w-[15rem] h-60">
                        <button className="bg-white text-black font-bold ml-4 mb-7 w-[10.63rem] h-12 cursor-pointer hover:scale-105 transition-all ">ACCESSORIES</button>
                    </div>
                    <div className="bg-[url(./assets/category-4.jpg)] flex items-end bg-cover bg-center w-[15rem] h-60">
                        <button className="bg-white text-black font-bold ml-4 mb-7 w-[7.5rem] h-12 cursor-pointer hover:scale-105 transition-all ">KIDS</button>
                    </div>
                </div>
            </div>
        </div>
    );
}