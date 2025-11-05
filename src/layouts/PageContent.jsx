import C2a from "./components/C2a";
import CategoryPick from "./components/CategoryPick";
import FeaturedPost from "./components/FeaturedPost";
import FeaturedPostCard from "./components/FeaturedPostCard";
import Header from "./Header";
import HeroSlider from "./components/HeroSlider";
import ProductCard from "./components/ProductCard";
import ProductCategoryList from "./components/ProductCategoryList";
import Slider from "./components/Slider";

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