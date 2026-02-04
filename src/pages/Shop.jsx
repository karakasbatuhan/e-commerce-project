import {BsChevronLeft, BsChevronRight, BsChevronDown} from "react-icons/bs"
import { LayoutGrid } from "lucide-react"   
import { ListChecks } from "lucide-react"
import ProductCardShop from "../components/ProductCardShop.jsx"
import { Link, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../store/actions/globalActions.js";
import { setTotal } from "../store/actions/productActions.js";

export default function Shop() {

const { categoryId } = useParams();
const [filterText, setFilterText] = useState("");
const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
const [sortOption, setSortOption] = useState("");


const dispatch = useDispatch();
const productsObject = useSelector((state) => state.product.productList);
const allProducts = productsObject.products;
const total = productsObject.total;
const fetchState = useSelector((state) => state.product.fetchState);

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 12;

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const totalPage = Math.ceil(total / itemsPerPage);

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
};

const getPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPage, currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

useEffect(() => {
    const timer = setTimeout(() => {
        setDebouncedFilterText(filterText);        
    }, 500);
    return () => clearTimeout(timer);
},[filterText]);

useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage;    
    const params = {
    category: categoryId,
    filter: debouncedFilterText,
    sort: sortOption,
    limit: itemsPerPage,
    offset: offset}; 

    console.log("Current Params:", params);
    dispatch(getProduct(params));
}, [categoryId, debouncedFilterText, sortOption, currentPage, dispatch]);

useEffect(() => {
    setCurrentPage(1);
}, [categoryId, debouncedFilterText, sortOption]);

useEffect(() => { 
  dispatch(setTotal(productsObject.total));
  console.log("Fetched products:", productsObject);
  console.log("Total products:", total);
  console.log("Total Page:", totalPage);
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
                    <div className="flex flex-row h-[98px] justify-center gap-70 items-center max-xl:flex-col max-xl:h-[202px] max-xl:gap-10 max-xl:mt-10">
                        <h6 className="font-bold text-[14px] leading-6 tracking-wide text-[#737373]">Showing all {itemsPerPage} results</h6>
                        <div className="flex flex-row items-center gap-3">
                            <h6>Views: </h6>
                            <div className="w-[46px] h-[46px] border-1 border-[#ECECEC] rounded-lg flex justify-center items-center text-[#252B42] cursor-pointer hover:scale-110 transition-all duration-300"> <LayoutGrid size={20} className="inline-block" /></div>
                            <div className="w-[46px] h-[46px] border-1 border-[#ECECEC] rounded-lg flex justify-center items-center text-[#252B42] cursor-pointer hover:scale-110 transition-all duration-300"> <ListChecks size={20} className="inline-block" /></div>
                        </div>
                        <div className="flex max-xl:flex-row gap-5">
                            <input 
                                type="text"
                                placeholder="Search Products"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                                className="border border-gray-300 p-2 rounded w-[150px] focus:outline-none"
                                />
                            <div className="group">                                
                                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}
                                className="w-[141px] h-[50px] border-1 border-[#DDDDDD] bg-gray-100 rounded-lg text-center  leading-4 tracking-wide text-[#737373] cursor-pointer">Popularity<BsChevronDown size={15} className="inline-block ml-1" />
                                        <option value="" className="hover:scale-102 transition-all duration-350">Select a Filter</option>
                                        <option value="price:asc" className="hover:scale-102 transition-all duration-350">Fiyat: Düşükten Yükseğe</option>
                                        <option value="price:desc" className="hover:scale-102 transition-all duration-350">Fiyat: Yüksekten Düşüğe</option>
                                        <option value="rating:asc" className="hover:scale-102 transition-all duration-350">Puan: Düşükten Yükseğe</option>
                                        <option value="rating:desc" className="hover:scale-102 transition-all duration-350">Puan: Yüksekten Düşüğe</option>
                                </select>    
                            </div>    
                        </div>
                    </div>
                    {fetchState === "FETCHING" && (
                        <div className="flex justify-center my-20">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                        </div>
                    )}
                    {fetchState === "FETCHED" && (
                        <div className="mt-15 flex flex-col h-[1778px] max-[1076px]:h-[2350px] max-[1025px]:h-[4100px] max-[697px]:h-[7800px] items-center gap-27">
                            <div className="flex flex-row flex-wrap max-w-[1100px] max-lg:gap-15 gap-10 gap-y-20 max-xl:justify-center">
                                {allProducts?.map((allProducts) => (
                                    <ProductCardShop key={allProducts.id} products={allProducts} />
                                ))}
                            </div> 
                            {totalPage > 1 && (                   
                            <div className="font-bold">
                                <button className="border-1 border-gray-300 text-[#23A6F0] p-3 py-5 rounded-bl-lg rounded-tl-lg cursor-pointer"
                                onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>   
                                                             
                                {getPageNumbers().map((number) => (
                                    <button key={number} onClick={() => handlePageChange(number)}
                                    className={`border-1 border-gray-300 p-3 py-5 text-[#23A6F0] cursor-pointer 
                                    ${currentPage === number ? 'bg-[#23A6F0] text-white' : 'text-[#23A6F0] hover:text-white hover:bg-[#23A6F0]'}`}>
                                    {number}
                                </button> 
                                ))}     
                                                 
                                <button onClick={() => handlePageChange(currentPage + 1)}
                                className="border-1 border-gray-300 p-3 py-5 text-[#23A6F0] hover:text-white hover:bg-[#23A6F0] cursor-pointer rounded-br-lg rounded-tr-lg">Next</button>
                            </div>
                            )}
                        </div>
                )}
                
                <div className="h-[175px] bg-[#FAFAFA] flex flex-row justify-center items-center max-xl:flex-wrap max-lg:gap-17 max-[1025px]:h-[250px] max-[690px]:h-[500px] max-[440px]:h-[950px]">
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
