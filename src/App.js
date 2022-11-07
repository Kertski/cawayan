import React from 'react';
import './App.css';
import BannerSlide from './BannerSlide';
import BestSellers from './BestSellers';
import Header from './Header';
import NewArrivals from './NewArrivals';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSlide/>
      <NewArrivals/>
      <BestSellers/>
    </div>
  );
}

export default App;
