import C2a from "./C2a";
import CategoryPick from "./CategoryPick";
import FeaturedPost from "./FeaturedPost";
import FeaturedPostCard from "./FeaturedPostCard";
import Header from "./Header";
import HeroSlider from "./HeroSlider";
import ProductCard from "./ProductCard";
import ProductCategoryList from "./ProductCategoryList";
import Slider from "./Slider";

export default function Content() {
    return(
        <div className="w-full">
            <Header />
            <HeroSlider />
            <CategoryPick />
            <ProductCategoryList />
            <Slider />
            <C2a />
            <FeaturedPost />
        </div>
    );}