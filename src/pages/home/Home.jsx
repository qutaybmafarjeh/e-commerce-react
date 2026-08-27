import React from 'react'
import Categoires from '../../component/categoires/Categoires'
import Products from '../../component/products/Products'
import DesignSlider from '../../component/imageSliders/DesignSlider'
import NewProducts from '../../component/newProduct/NewProducts'
import PhonesSection from '../../component/phone/PhonesSection'
import GamingSection from '../../component/gaming/GamingSection'
import TvProduct from '../../component/tvProduct/TvProduct'




export default function Home() {
  return (
    <>
    <DesignSlider/>
    <Categoires /> 
    <NewProducts/>
    <Products />
    <PhonesSection/>
    <GamingSection/>
    <TvProduct/>
    </>
  )
}
