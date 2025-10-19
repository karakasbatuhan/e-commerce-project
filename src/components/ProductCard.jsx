export default function ProductCard() {
    return(
        <div className="flex flex-col items-center font-montserrat gap-4 overflow-hidden">
            <div className="bg-[url(./assets/productcard-1.jpg)] w-[15rem] h-[26.7rem]"></div>
            <div className="flex flex-col items-center gap-3">
                <h5 className="font-bold text-base text-[#252B42]">Graphic Design</h5>
                <a href="" className="font-bold text-sm text-[#737373]">English Department</a>
                <div className="flex flex-row gap-3">
                    <span className="font-bold text-base text-[#BDBDBD]">$16.48</span>
                    <span className="font-bold text-base text-[#23856D]">$6.48</span>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <button className="w-4 h-4 bg-[#23A6F0] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-100"></button>
                <button className="w-4 h-4 bg-[#23856D] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-100"></button>
                <button className="w-4 h-4 bg-[#E77C40] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-100"></button>
                <button className="w-4 h-4 bg-[#252B42] rounded-2xl cursor-pointer hover:scale-105 transition-all duration-100"></button>
            </div>
        </div>
    );}