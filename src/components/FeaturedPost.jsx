import FeaturedPostCard from "./FeaturedPostCard.jsx";

export default function FeaturedPost() {
    return(
        <div className="flex flex-col items-center font-montserrat mt-30">
            <div className="flex flex-col items-center gap-4">
                <h6 className="font-bold text-[#23A6F0] leading-[24px]">Practice Advice</h6> 
                <h2 className="font-bold text-[#252B42] text-[2.5rem] leading-[50px]">Featured Posts</h2>
                <p className="font-semibold text-[#737373] leading-[20px] w-[35rem] text-center">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
           <div className="flex flex-row flex-wrap mt-20 gap-2">
            <FeaturedPostCard />
            <FeaturedPostCard />
            <FeaturedPostCard />
           </div>
        </div>
    );}