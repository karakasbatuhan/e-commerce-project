import {BsChevronLeft, BsChevronRight, BsChevronDown} from "react-icons/bs"
import { LayoutGrid } from "lucide-react"   
import { ListChecks } from "lucide-react"
import ProductCardShop from "../components/ProductCardShop.jsx"
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../store/actions/globalActions.js";
import { setTotal } from "../store/actions/productActions.js";

export default function Shop() {

const dispatch = useDispatch();
const productsObject = useSelector((state) => state.product.productList);
const allProducts = productsObject.products;

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 12;

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

const totalPage = Math.ceil(allProducts.length / itemsPerPage);

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
};

useEffect(() => { 
  dispatch(getProduct());
  dispatch(setTotal(productsObject.total));
  console.log("Fetched products:", productsObject);
  console.log("Total products:", productsObject.total);
}, []);

    return (
            <div className="flex flex-col items-center font-montserrat">
                <div className="flex flex-col text-[#252B42] bg-[#FAFAFA] pb-12">
                    <div className="flex flex-row h-[92px] justify-around items-center max-lg:h-[202px] max-lg:flex-col max-lg:justify-center max-lg:gap-15">
                        <h3 className="font-bold text-2xl">Shop</h3>
                        <div className="flex flex-row items-center gap-2">
                            <Link to="/" className="font-bold">Home</Link>
                            <BsChevronRight size={20} className="text-[#BDBDBD]"/>
                            <h6 className="font-bold text-[#BDBDBD]">Shop</h6>
                        </div>
                    </div>
                    <div className="flex flex-row max-xl:flex-wrap items-center justify-center gap-5">
                        <div className="bg-[url('/src/assets/shop-bg.jpg')] bg-cover bg-center leading-6 text-white tracking-widest cursor-pointer">
                            <div className="flex flex-col items-center justify-center w-[204px] h-[223px] backdrop-brightness-80 max-lg:w-[331px] max-lg:h-[300px]">
                                <h5 className="font-bold text-[16px]">CLOTHS</h5>
                                <p>5 Items</p>
                            </div>
                        </div>
                        <div className="bg-[url('/src/assets/shop-bg.jpg')] bg-cover bg-center leading-6 text-white tracking-widest cursor-pointer">
                            <div className="flex flex-col items-center justify-center w-[204px] h-[223px] backdrop-brightness-80 max-lg:w-[331px] max-lg:h-[300px]">
                                <h5 className="font-bold text-[16px]">CLOTHS</h5>
                                <p>5 Items</p>
                            </div>
                        </div>
                        <div className="bg-[url('/src/assets/shop-bg.jpg')] bg-cover bg-center leading-6 text-white tracking-widest cursor-pointer">
                            <div className="flex flex-col items-center justify-center w-[204px] h-[223px] backdrop-brightness-80 max-lg:w-[331px] max-lg:h-[300px]">
                                <h5 className="font-bold text-[16px]">CLOTHS</h5>
                                <p>5 Items</p>
                            </div>
                        </div>
                        <div className="bg-[url('/src/assets/shop-bg.jpg')] bg-cover bg-center leading-6 text-white tracking-widest cursor-pointer">
                            <div className="flex flex-col items-center justify-center w-[204px] h-[223px] backdrop-brightness-80 max-lg:w-[331px] max-lg:h-[300px]">
                                <h5 className="font-bold text-[16px]">CLOTHS</h5>
                                <p>5 Items</p>
                            </div>
                        </div>
                        <div className="bg-[url('/src/assets/shop-bg.jpg')] bg-cover bg-center leading-6 text-white tracking-widest cursor-pointer">
                            <div className="flex flex-col items-center justify-center w-[204px] h-[223px] backdrop-brightness-80 max-lg:w-[331px] max-lg:h-[300px]">
                                <h5 className="font-bold text-[16px]">CLOTHS</h5>
                                <p>5 Items</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-row h-[98px] justify-center gap-70 items-center max-lg:flex-col max-lg:h-[202px] max-lg:gap-10 max-lg:mt-10">
                        <h6 className="font-bold text-[14px] leading-6 tracking-wide text-[#737373]">Showing all {itemsPerPage} results</h6>
                        <div className="flex flex-row items-center gap-3">
                            <h6>Views: </h6>
                            <div className="w-[46px] h-[46px] border-1 border-[#ECECEC] rounded-lg flex justify-center items-center text-[#252B42] cursor-pointer hover:scale-110 transition-all duration-300"> <LayoutGrid size={20} className="inline-block" /></div>
                            <div className="w-[46px] h-[46px] border-1 border-[#ECECEC] rounded-lg flex justify-center items-center text-[#252B42] cursor-pointer hover:scale-110 transition-all duration-300"> <ListChecks size={20} className="inline-block" /></div>
                        </div>
                        <div className="flex max-xl:flex-row gap-5">
                            <div className="group">
                                <div className="w-[141px] h-[50px] border-1 border-[#DDDDDD] bg-gray-100 rounded-lg text-center p-3.5 leading-4 tracking-wide text-[#737373] cursor-pointer">Popularity<BsChevronDown size={15} className="inline-block ml-1" />
                                    <div className="flex flex-col gap-3 bg-gray-100 px-5 py-4 mt-4 border-1 border-[#ECECEC] rounded-lg shadow-lg cursor-pointer scale-y-0 group-hover:scale-y-100 origin-top duration-400 absolute transition-all">
                                        <span className=" hover:scale-102 transition-all duration-350">Option 1</span>
                                        <span className=" hover:scale-102 transition-all duration-350">Option 2</span>
                                        <span className=" hover:scale-102 transition-all duration-350">Option 3</span>
                                        <span className=" hover:scale-102 transition-all duration-350">Option 4</span>
                                        <span className=" hover:scale-102 transition-all duration-350">Option 5</span>
                                    </div>
                                </div>    
                            </div>                        
                            <button className="bg-[#23A6F0] text-white rounded-lg px-5 font-semibold text-[14px] cursor-pointer hover:scale-110 transition-all duration-300">Filter</button>
                        </div>
                    </div>
                <div className="mt-15 flex flex-col h-[1778px] max-lg:h-[2750px] items-center gap-27">
                    <div className="flex flex-row flex-wrap max-w-[1100px] max-lg:gap-15 gap-10 gap-y-20">
                        {currentProducts?.map((currentProduct) => (<ProductCardShop products={currentProduct} />))}
                    </div>                    
                    <div className="font-bold">
                        <button className="border-1 border-gray-300 text-[#23A6F0] p-3 py-5 rounded-bl-lg rounded-tl-lg cursor-pointer"
                        onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
                        {Array.from({ length: totalPage }, (_, index) => index + 1).map((number) => (
                            <button key={number} onClick={() => handlePageChange(number)}
                            className={`border-1 border-gray-300 p-3 py-5 text-[#23A6F0] cursor-pointer 
                            ${currentPage === number ? 'bg-[#23A6F0] text-white' : 'text-[#23A6F0] hover:text-white hover:bg-[#23A6F0]'}`}>
                            {number}
                        </button> 
                        ))}                       
                        <button onClick={() => handlePageChange(currentPage + 1)}
                        className="border-1 border-gray-300 p-3 py-5 text-[#23A6F0] hover:text-white hover:bg-[#23A6F0] cursor-pointer rounded-br-lg rounded-tr-lg">Next</button>
                    </div>
                </div>
                <div className="h-[175px] bg-[#FAFAFA] flex flex-row justify-center items-center max-lg:h-[1173px] max-lg:flex-col max-lg:gap-17">
                    <button className="bg-[url(./assets/brand-1.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300"></button>
                    <button className="bg-[url(./assets/brand-2.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300"></button>
                    <button className="bg-[url(./assets/brand-3.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300"></button>
                    <button className="bg-[url(./assets/brand-4.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300"></button>
                    <button className="bg-[url(./assets/brand-5.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300"></button>
                    <button className="bg-[url(./assets/brand-6.png)] w-[185px] h-[100px] bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300"></button>
                </div>
                <hr className="border-1 w-[1057px] border-[#E6E6E6] mx-auto max-xl:hidden"/>
            </div>
    )
}