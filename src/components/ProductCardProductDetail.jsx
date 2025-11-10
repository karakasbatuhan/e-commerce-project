import { NavLink, Link } from "react-router-dom";

export default function ProductCard() {
    return(
        <div className="flex flex-col items-start font-montserrat gap-4 overflow-hidden bg-white h-[442px] max-[1170px]:h-[589px]">
            <div className="bg-[url(./assets/productdetail-4.jpg)] w-[239px] h-[280px] bg-center bg-cover max-[1170px]:w-[348px] max-[1170px]:h-[427px]"></div>
            <div className="flex flex-col items-start gap-5 ml-5">
                <h5 className="font-bold text-base text-[#252B42]"><Link to="/product-detail">Graphic Design</Link></h5>
                <a href="" className="font-bold text-sm text-[#737373]"><Link to="/product-detail">English Department</Link></a>
                <div className="flex flex-row gap-3">
                    <span className="font-bold text-base text-[#BDBDBD]">$16.48</span>
                    <span className="font-bold text-base text-[#23856D]">$6.48</span>
                </div>
            </div>
        </div>
    );}