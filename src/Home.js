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

function Home({handleClick, cart, warning}) {


  return (
    <div>
      
      <Header size={cart.length} cart={cart}/>
      
      <BannerSlide/>
      <NewArrivals handleClick={handleClick}/>
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
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