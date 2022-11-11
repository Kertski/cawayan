import React from 'react'
import BannerSlide from './HomePages/BannerSlide';
import BestSellers from './HomePages/BestSellers';
import ComingSoon from './HomePages/ComingSoon';
import CustomerReviews from './HomePages/CustomerReviews';
import FeaturedBlog from './HomePages/FeaturedBlog';
import Footer from './HomePages/Footer';
import NewArrivals from './HomePages/NewArrivals';
import Header from './HomePages/Header';
import ProductDetails from './Products/ProductDetails';

function Home() {
  return (
    <div>
      <Header/>
      <BannerSlide/>
      <NewArrivals/>
      <BestSellers/>
      <CustomerReviews/>
      <ComingSoon/>
      <FeaturedBlog/>
      <ProductDetails/>
      <Footer/>
    </div>
  )
}

export default Home;
