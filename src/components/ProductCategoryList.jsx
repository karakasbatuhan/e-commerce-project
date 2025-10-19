import ProductCard from "./ProductCard";

export default  function ProductCategoryList() {
    return (
        <div className="flex flex-col w-full items-center h-[103.25rem] font-montserrat gap-20 mt-20 overflow-hidden">
            <div className="flex flex-col items-center gap-3.5">                
                <h4 className="font-medium text-xl text-[#737373]">Featured Products</h4>
                <h3 className="font-bold text-2xl text-[#252B42]">BESTSELLER PRODUCTS</h3>
                <p className="font-medium text-sm text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>
            <div className="flex flew-row flex-wrap gap-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="flex flew-row flex-wrap gap-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>

    );
}