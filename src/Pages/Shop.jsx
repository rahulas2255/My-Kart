import React, { useEffect } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/Newcolletions/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import { useAdminContext } from '../Context/AdminContext'

function Shop() {

  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop