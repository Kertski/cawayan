import React from 'react';
import BestSellerContainer from './BestSellerContainer';

function BestSellers () {

    return (
      <div>
        <div>
          <h2 className="text-center bestsellers h1">★ B E S T - S E L L E R S ★</h2>
        </div>
          <section>
            <div id="carousel-containerb" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel-containerb" data-bs-slide-to="0" aria-current="true" className="active actvbtn"></button>
                <button class="crsbtn" type="button" data-bs-target="#carousel-containerb" data-bs-slide-to="1" ></button>
                <button class="crsbtn" type="button" data-bs-target="#carousel-containerb" data-bs-slide-to="2" ></button>
              </div>
            <div className="container py-5 carousel-inner justify-content-center mb-5">
                <div className="carousel-item active">
                    <BestSellerContainer category="BestSeller1"/>
                </div>
                <div className="carousel-item">
                    <BestSellerContainer category="BestSeller2"/>
                </div>
                <div className="carousel-item">
                    <BestSellerContainer category="BestSeller3"/>
                </div>
            </div>   
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-containerb" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel-containerb" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
          </section>
      </div>
    )
    }

export default BestSellers
