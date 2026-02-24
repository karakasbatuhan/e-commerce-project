import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { slugify } from "../utils/slugify";

export default function ProductCard({products}) {   

    let gender = "kadin";
    let categoryName = "tisort";
    let productNameSlug = slugify(products.name);
    let detailUrl = `/shop/${gender}/${categoryName}/${products.category_id}/${productNameSlug}/${products.id}`;

    return(        
        <div className="flex flex-col items-center font-montserrat gap-4 overflow-hidden">            
            <div className="w-[239px] h-[300px] max-lg:w-[318px] max-lg:h-[427px] bg-center bg-cover" style={{ backgroundImage: `url(${products.images[0].url})` }}></div>
            <div className="flex flex-col items-center gap-3">
                <h5 className="font-bold text-base text-[#252B42]"><Link to={detailUrl}>{products.name}</Link></h5>
                <a href="" className="font-bold text-sm text-[#737373]"><Link to={detailUrl}>English Department</Link></a>
                <div className="flex flex-row gap-3">
                    <span className="font-bold text-base text-[#BDBDBD]">${products.price}</span>
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
    );
}