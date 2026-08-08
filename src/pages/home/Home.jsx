import React from 'react'
import Categoires from '../../component/categoires/Categoires'
import Products from '../../component/products/Products'
import DesignSlider from '../../component/imageSliders/DesignSlider'



export default function Home() {
  return (
    <>
    <DesignSlider/>
    <Categoires /> 
    <Products />
    </>
  )
}
