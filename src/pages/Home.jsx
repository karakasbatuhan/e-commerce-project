import { use, useState } from 'react'
import CategoryPick from '../components/CategoryPick.jsx'
import ProductCategoryList from '../components/ProductCategoryList.jsx'
import Slider from '../components/Slider.jsx'
import C2a from '../components/C2a.jsx'
import FeaturedPost from '../components/FeaturedPost.jsx'
import HeroSlider from '../components/HeroSlider.jsx'
import { useSelector } from 'react-redux';

export default function Home() {

    const categories = useSelector((state) => state.product.categories);
    const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

    return(
    <>
        <HeroSlider />
        <CategoryPick />
        <ProductCategoryList categories={topCategories}/>
        <Slider />
        <C2a />
        <FeaturedPost />
    </>
    )
}