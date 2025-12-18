import ProductCard from "./ProductCard";

export default  function ProductCategoryList({categories}) {

    return (
        <div className="flex flex-col w-full items-center h-[900px] font-montserrat gap-20 mt-20 overflow-hidden max-xl:h-[5350px]">
            <div className="flex flex-col items-center gap-3.5">                
                <h4 className="font-medium text-xl text-[#737373]">Featured Products</h4>
                <h3 className="font-bold text-2xl text-[#252B42]">BESTSELLER CATEGORIES</h3>
                <p className="font-medium text-sm text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>
            <div className="flex flex-row gap-13 max-xl:flex-col max-2xl:justify-center max-2xl:gap-15">
                {categories.map((category) => (<ProductCard key={category.id} data={category}/>))}                
            </div>
        </div>
    );
}