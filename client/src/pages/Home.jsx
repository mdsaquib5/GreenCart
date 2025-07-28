import React from 'react'
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import BestSeller from '../components/BestSeller';
import BottomBanner from '../components/BottomBanner';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
        <div className='mt-10'>
          <Hero />
          <Categories />
          <BestSeller />
          <BottomBanner />
          <Newsletter />
        </div>
    </>
  )
}

export default Home;