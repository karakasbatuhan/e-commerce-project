import { Link, useParams } from "react-router-dom";
import {BsChevronRight, BsChevronLeft} from "react-icons/bs"
import { FaStar } from "react-icons/fa";
import ReactStars from "../components/ReactStars";
import { Heart} from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Eye } from "lucide-react";
import ProductCardProductDetail from "../components/ProductCardProductDetail.jsx";
import { slugify } from "../utils/slugify.js";
import { useSelector } from "react-redux";
import { fetchProductDetails } from "../store/actions/globalActions.js";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";



export default function ProductDetail() {

    const {productId} = useParams();
    const dispatch = useDispatch();
    const activeProduct = useSelector((state) => state.product?.activeProduct || {});
    const fetchState = useSelector((state) => state.product?.fetchState || "NOT_FETCHED");

    const [mainImageIndex, setMainImageIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchProductDetails(productId));
        window.scrollTo(0, 0);
    }, [dispatch, productId]);

    if (fetchState === "FETCHING" || !activeProduct || !activeProduct.name) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        );
    }

    const product = activeProduct;
    const mainImageUrl = product.images?.[mainImageIndex]?.url || "https://via.placeholder.com/500";

  return (
    <div className="flex flex-col font-montserrat">
        <div className="h-[92px] flex flex-row bg-[#FAFAFA] max-lg:justify-center">
            <div className="flex flex-row items-center gap-1 ml-108 max-lg:ml-0 max-[1487px]:ml-50">
                <Link to="/" className="font-bold text-[14px]">Home</Link>
                <BsChevronRight size={18} className="text-[#BDBDBD]"/>
                <h6 className="text-[#BDBDBD] font-bold text-[14px]">Shop</h6>
            </div>
        </div>
        <div className="flex flex-row bg-[#FAFAFA] pb-10 max-lg:flex-col max-lg:items-center max-xl:gap-8">
            <div className="flex flex-col gap-5 max-xl:gap-8">
                <div className="w-[506px] h-[450px] max-lg:w-[348px] max-lg:h-[277px] bg-cover bg-center flex flex-row justify-center items-center gap-90 ml-108 max-[1487px]:ml-50 max-lg:ml-0 max-lg:gap-50" style={{backgroundImage: `url(${mainImageUrl})`}}>
                    {product.images?.length > 1 && (
                     <>  
                    <BsChevronLeft size={50} className="text-white cursor-pointer hover:scale-105 transition-all duration-300" onClick={() => setMainImageIndex((prev) => (prev > 0 ? prev - 1 : product.images.length - 1))}/>
                    <BsChevronRight size={50} className="text-white cursor-pointer hover:scale-105 transition-all duration-300"/>
                    </>
                    )}
                </div>
                <div className="flex flex-row ml-108 cursor-pointer gap-5 max-[1487px]:ml-50 max-lg:ml-0">
                    {product.images?.map((image, index) => (
                        <div key={index} 
                        style={{backgroundImage: `url(${image.url})`}} 
                        className="bg-cover bg-center w-[100px] h-[75px] opacity-50 hover:opacity-100 transition-all duration-200" 
                        onClick={() => setMainImageIndex(index)}></div>))}
                </div>
            </div>
            <div className="flex flex-col gap-2 ml-10 mt-3 max-xl:ml-0 max-lg:w-[348px] max-lg:ml-15">
                <h4 className="font-semibold text-[20px] text-[#252B42]">{product.name}</h4>
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <ReactStars/>
                        <h6 className="font-bold text-[14px] text-[#737373] mb-1.5">{product.sell_count || 0} Reviews</h6>
                    </div>                    
                </div>
                <h3 className="font-bold text-2xl text-[#252B42] mt-4">${product.price?.toLocaleString()}</h3>
                <h6 className="text-[#737373] font-bold text-[14px]">Availability : <span className="text-[#23A6F0]">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span></h6>
                <p className="max-w-[464px] font-semibold text-[14px] text-[#858585] mt-5 max-sm:w-[271px]">{product.description}</p>
                <hr className="border-1 w-[465px] border-[#E6E6E6] mx-auto max-xl:w-[283px] mt-4"/>
                <div className="flex flex-row gap-3 mt-4">
                    <button className="w-[30px] h-[30px] rounded-2xl bg-[#23A6F0] cursor-pointer hover:scale-105 transition-all duration-250"></button>
                    <button className="w-[30px] h-[30px] rounded-2xl bg-[#2DC071] cursor-pointer hover:scale-105 transition-all duration-250"></button>
                    <button className="w-[30px] h-[30px] rounded-2xl bg-[#E77C40] cursor-pointer hover:scale-105 transition-all duration-250"></button>
                    <button className="w-[30px] h-[30px] rounded-2xl bg-[#252B42] cursor-pointer hover:scale-105 transition-all duration-250"></button>
                </div>
                <div className="flex flex-row gap-3 mt-15">
                    <button className="w-[148px] h-[44px] bg-[#23A6F0] text-white rounded-lg font-semibold text-[14px] cursor-pointer hover:scale-102 transition-all duration-250">Select Options</button>
                    <button className="w-[40px] h-[40px] rounded-3xl bg-[#FFFFFF] border-[1px] border-[#E8E8E8] cursor-pointer hover:scale-105 transition-all duration-250"><Heart size={22} className="ml-2"/></button>
                    <button className="w-[40px] h-[40px] rounded-3xl bg-[#FFFFFF] border-[1px] border-[#E8E8E8] cursor-pointer hover:scale-105 transition-all duration-250"><ShoppingCart size={22} className="ml-2"/></button>
                    <button className="w-[40px] h-[40px] rounded-3xl bg-[#FFFFFF] border-[1px] border-[#E8E8E8] cursor-pointer hover:scale-105 transition-all duration-250"><Eye size={22} className="ml-2"/></button>
                </div>
            </div>
        </div>
        <div>
            <div className="h-[91px] flex flex-row items-center justify-center gap-15 max-[635px]:gap-5">
                <Link to="/" className="font-semibold text-[14px] text-[#737373] hover:scale-102 transition-shadow duration-450 group">Description <hr className="scale-0 group-hover:scale-100 origin-center duration-450" /></Link>
                <Link to="/" className="font-semibold text-[14px] text-[#737373] hover:scale-102 transition-shadow duration-450 group">Additional Information <hr className="scale-0 group-hover:scale-100 origin-center duration-450" /></Link>
                <Link to="/" className="font-semibold text-[14px] text-[#737373] hover:scale-102 transition-shadow duration-450 group">Reviews <span className="text-[#23856D]">(0)</span><hr className="scale-0 group-hover:scale-100 origin-center duration-450" /></Link>
            </div>
            <hr className="border-1 w-[1080px] border-[#E6E6E6] mx-auto max-xl:hidden"/>
        </div>
        <div className="flex flex-row justify-center gap-13 mt-12 max-[1170px]:flex-col max-[1170px]:items-center max-[1170px]:gap-5 max-[1170px]:h-[1356px] max-[1170px]:mt-0">
            <div className="bg-[url(./assets/productdetail-3.jpg)] w-[316px] h-[372px] bg-cover bg-center rounded-lg shadow-[10px_10px_rgba(196,_196,_196,_0.2)] "></div>
            <div className="flex flex-col max-w-[332px] h-[440px] gap-5 max-[1170px]:mt-10">
                <h3 className="font-bold text-2xl text-[#252B42]">the quick fox jumps over </h3>
                <div className="flex flex-col gap-4">
                        <p className="font-semibold text-[14px] text-[#737373] mt-4">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>                    
                        <p className="font-semibold text-[14px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>                    
                        <p className="font-semibold text-[14px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>                    
                </div>                
             </div>
             <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 max-[1170px]:mr-7">
                        <h3 className="font-bold text-2xl text-[#252B42] ml-1">the quick fox jumps over </h3>
                        <h6 className="flex flex-row items-center gap-4 font-bold text-[14px] text-[#737373] mt-4"><BsChevronRight size={20}/> the quick fox jumps over the lazy dog</h6>
                        <h6 className="flex flex-row items-center gap-4 font-bold text-[14px] text-[#737373]"><BsChevronRight size={20}/> the quick fox jumps over the lazy dog</h6>
                        <h6 className="flex flex-row items-center gap-4 font-bold text-[14px] text-[#737373]"><BsChevronRight size={20}/> the quick fox jumps over the lazy dog</h6>
                        <h6 className="flex flex-row items-center gap-4 font-bold text-[14px] text-[#737373]"><BsChevronRight size={20}/> the quick fox jumps over the lazy dog</h6>
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                        <h3 className="font-bold text-2xl text-[#252B42] ml-1">the quick fox jumps over </h3>
                        <h6 className="flex flex-row items-center gap-4 font-bold text-[14px] text-[#737373] mt-4"><BsChevronRight size={20}/> the quick fox jumps over the lazy dog</h6>
                        <h6 className="flex flex-row items-center gap-4 font-bold text-[14px] text-[#737373]"><BsChevronRight size={20}/> the quick fox jumps over the lazy dog</h6>
                        <h6 className="flex flex-row items-center gap-4 font-bold text-[14px] text-[#737373]"><BsChevronRight size={20}/> the quick fox jumps over the lazy dog</h6>                        
                    </div>
                </div>                
        </div>
        <div className="flex flex-col bg-[#FAFAFA] h-[1150px] gap-2 max-[1487px]:items-center max-[1170px]:h-[2622px]">
            <h3 className="font-bold text-2xl text-[#252B42] ml-108 mt-20 max-[1487px]:ml-0 ">BESTSELLER PRODUCTS</h3>
            <hr className="border-1 w-[1057px] border-[#E6E6E6] mx-auto max-xl:w-[347px] mt-4"/>
            <div className="flex flex-col">
                <div className="flex flex-row gap-9 items-center justify-center mt-10 max-[1170px]:flex-col max-[1170px]:h-[2622px] max-[1170px]:mt-5 max-[1170px]:justify-start">
                    <ProductCardProductDetail/>
                    <ProductCardProductDetail/>
                    <ProductCardProductDetail/>
                    <ProductCardProductDetail/>
                </div>
                <div className="flex flex-row gap-9 items-center justify-center mt-10 max-[1170px]:hidden">
                    <ProductCardProductDetail/>
                    <ProductCardProductDetail/>
                    <ProductCardProductDetail/>
                    <ProductCardProductDetail/>
                </div>
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
    </div>
  );
}