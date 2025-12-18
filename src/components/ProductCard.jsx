import { NavLink, Link } from "react-router-dom";

export default function ProductCard({data}) {

let gender = "";
if(data.gender === "k"){
     gender = "Woman";
}else if(data.gender === "e"){
     gender = "Man";
}

    return(
         <div className="flex flex-col items-center font-montserrat gap-4 overflow-hidden hover:scale-105 transition-all duration-200">
            <Link to="/product-detail"><div className={"w-[15rem] h-[26.7rem] cursor-pointer bg-cover bg-center "} style={{ backgroundImage: `url(${data.img})` }}></div></Link>
            <div className="flex flex-col items-center gap-3">
                <h5 className="font-bold text-base text-[#252B42] cursor-pointer"><Link to="/product-detail">{data.title}</Link></h5>
                <Link className="font-bold text-sm text-[#737373]" to="/product-detail">{gender}</Link>               
            </div>
        </div>
    );}