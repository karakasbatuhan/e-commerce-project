import FeaturedPostCard from "./FeaturedPostCard.jsx";

export default function FeaturedPost() {
    return(
        <div className="flex flex-col items-center font-montserrat mt-25 pb-40">
            <div className="flex flex-col items-center gap-4 max-xl:w-[310px]">
                <h6 className="font-bold text-[#23A6F0] leading-[24px]">Practice Advice</h6> 
                <h2 className="font-bold text-[#252B42] text-[2.5rem] leading-[50px] max-xl:hidden">Featured Posts</h2>
                <h2 className="font-bold text-[#252B42] text-[2.5rem] leading-[50px] max-xl:text-center xl:hidden">Featured Products</h2>
                <p className="font-semibold text-[#737373] leading-[20px] max-w-[35rem] text-center max-xl:hidden">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
                <p className="font-semibold text-[#737373] leading-[20px] max-w-[35rem] text-center xl:hidden">Problems trying to resolve the conflict between the two major</p>
            </div>
           <div className="flex flex-row flex-wrap mt-20 gap-2 max-xl:justify-around max-xl:gap-7">
            <FeaturedPostCard />
            <FeaturedPostCard />
            <FeaturedPostCard />
           </div>
        </div>
    );}