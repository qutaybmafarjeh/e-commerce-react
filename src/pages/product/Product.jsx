import React from 'react'
import Filter from '../../component/filter/Filter'
import { Box } from '@mui/material'
import PhonesSection from '../../component/phone/PhonesSection'
import GamingSection from '../../component/gaming/GamingSection'
import TvProduct from '../../component/tvProduct/TvProduct'

export default function Product() {
  return (
    <>

      <Filter />
      <PhonesSection />
      <GamingSection />
      <TvProduct />
    </>

  )
}
