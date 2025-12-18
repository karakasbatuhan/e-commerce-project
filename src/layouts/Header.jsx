import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import {Phone} from "lucide-react";
import { Mail } from "lucide-react";
import { User } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { BsChevronDown } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "lucide-react";
import { setUser } from "../store/actions/clientActions";
import { toast } from "react-toastify";
import md5 from "md5";
import { useEffect } from "react";
import { getCategories } from "../store/actions/globalActions";

export default function Header() {

const userInfo = useSelector((state) => state.client.user);
const dispatch = useDispatch();
const categories = useSelector((state) => state.product.categories);
const categoriesMan = categories.filter(category => category.gender === 'e');
const categoriesWoman = categories.filter(category => category.gender === 'k');

useEffect(() => {
  //console.log("Fetched categories in Header:", categories);
  //console.log("Fetched categories code:", categories.code);
  console.log("Fetched man categories in Header:", categoriesMan);
  console.log("Fetched woman categories in Header:", categoriesWoman);
  dispatch(getCategories());  
}, []);

const handleLogout = () => {
    console.log("Logout is working");
    dispatch(setUser({}));
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    delete axios.defaults.headers.common['Authorization'];   
    toast.success("Logout successful!"); 
};

const gravatarUrl = userInfo.email
  ? `https://www.gravatar.com/avatar/${md5(userInfo.email.trim().toLowerCase())}?s=200&d=identicon`
  : "";

  return (
    <div className="font-montserrat overflow-hidden">
      <div className="bg-[#252B42] flex justify-between flex-wrap text-white p-3 w-full font-medium max-lg:hidden">
        <div className="ml-6 flex gap-10 text-sm">
          <h6 className="flex gap-2 items-center text-[12px]"><Phone size={15}/> (225) 555-0118</h6>
          <a href="" className="flex gap-2 items-center text-[12px]"><Mail size={15}/> michelle.rivera@example.com</a>
        </div>
        <h6 className="text-sm">Follow Us and get a chance to win 80% off</h6>
        <div className="flex gap-3.5 mr-10 text-sm">
          <h6 className="text-[12px]">Follow Us : </h6>
          <a href=""><Instagram size={18}/></a>
          <a href=""><Youtube  size={18}/></a>
          <a href=""><Facebook size={18} /></a>
          <a href=""><Twitter  size={18}/></a>
        </div>
      </div>
      <div className="flex p-4 max-lg:flex-row max-lg:justify-center"> 
        <h3 className="text-2xl font-bold ml-5">Bandage</h3>
        <div className="flex w-full overflow-hidden justify-between items-center ml-10 max-lg:justify-end max-lg:mt-1 max-lg:ml-2">
          <nav className="max-md:hidden">
            <ul className="flex ml-10">
              <li className="mr-4"><Link to="/" className="font-bold text-[#737373] hover:text-black text-sm transition-all duration-300">Home</Link></li>
              <div className="group">
                <li className="mr-4"><Link to="/shop" className="font-bold text-[#737373] hover:text-black text-sm transition-all duration-300 justify-between items-center">Shop <BsChevronDown size={12} className="inline-block ml-1" /></Link></li>
                <div className="scale-y-0 group-hover:scale-y-100 origin-top duration-300 absolute transition-all bg-white text-black p-4 flex flex-row gap-29">
                  <div className="flex flex-col">
                    <a href="" className="font-bold text-sm">Kadın</a>
                    {categoriesWoman?.map((category) => (
                       <Link to={`/shop/kadin/${category.code.slice(2)}/${category.id}`} className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">
                        {category.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col mr-27">
                    <a href="" className="font-bold text-sm">Erkek</a>
                    {categoriesMan?.map((category) => (
                       <Link to={`/shop/erkek/${category.code.slice(2)}/${category.id}`} className="font-bold text-gray-500 mt-5 hover:text-black text-sm transition-all duration-300">
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>            
              <li className="mr-4"><Link to="/about-us" className="font-bold text-[#737373]  hover:text-black text-sm transition-all duration-300">About</Link></li>
              <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black text-sm transition-all duration-300">Blog</a></li>
              <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black text-sm transition-all duration-300">Contact</a></li>
              <li className="mr-4"><a href="" className="font-bold text-[#737373]  hover:text-black text-sm transition-all duration-300">Pages</a></li>
            </ul>
          </nav>       
          <div className="flex text-[#23A6F0] mr-8 max-lg:text-[#3C403D]">
            <div className="mr-3 flex items-center gap-1 font-bold text-sm hover:scale-105 hover:transition-all duration-300">
              {userInfo.name ? (
                <div className="flex flex-row gap-2 items-center">
                  <img src={gravatarUrl} alt="Gravatar" className="w-6 h-6 rounded-full"/>
                  <span>{userInfo.name}</span>
                  <LogOut size={18} className="cursor-pointer hover:text-red-600" onClick={handleLogout} title="Logout"/>
                </div>
              ) 
              : 
              (
                <div className="mr-3 flex items-center gap-1 font-bold text-sm hover:scale-105 transition-all duration-300 max-lg:hidden"><User size={18} className="mb-1"/>
                  <Link to={{ pathname: "/login", state: { referrer: location.pathname } }}> Login / Register</Link>
                </div>
              )}          

            </div>
            <a href="" className="mr-6 flex items-center gap-1 font-bold text-sm hover:scale-120 transition-all duration-300 lg:hidden"><User size={18} className="mb-1"/></a>
            <a href="" className="mr-6 flex items-center hover:scale-120 transition-all duration-300"><Search size={18}/></a>
            <a href="" className="mr-6 flex items-center hover:scale-120 transition-all duration-300"><ShoppingCart size={18}/></a>
            <a href="" className="mr-5 flex items-center hover:scale-120 transition-all duration-300"><Heart size={18}/></a>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
            <nav className="md:hidden flex flex-row justify-center">
                <ul className="text-[#737373] font-bold text-2xl flex flex-col my-15 justify-center items-center gap-9">
                  <Link to="/" className="hover:font-medium transition-all duration-300">Home</Link>
                  <Link to="/product" className="hover:font-medium transition-all duration-300">Product</Link>
                  <Link to="/pricing" className="hover:font-medium transition-all duration-300">Pricing</Link>
                  <Link to="/contact" className="hover:font-medium transition-all duration-300">Contact</Link>
                </ul>
            </nav>
        </div>
    </div>
  )
}