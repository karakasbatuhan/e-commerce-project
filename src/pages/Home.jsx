import { useState } from 'react'
import CategoryPick from '../components/CategoryPick.jsx'
import ProductCategoryList from '../components/ProductCategoryList.jsx'
import Slider from '../components/Slider.jsx'
import C2a from '../components/C2a.jsx'
import FeaturedPost from '../components/FeaturedPost.jsx'
import HeroSlider from '../components/HeroSlider.jsx'

export default function Home() {
    return(
    <>
        <HeroSlider />
        <CategoryPick />
        <ProductCategoryList />
        <Slider />
        <C2a />
        <FeaturedPost />
    </>
    )
}