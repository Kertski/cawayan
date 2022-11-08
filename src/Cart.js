import React from 'react'
import Header from './HomePages/Header'
import Footer from './HomePages/Footer'

function Cart() {
  return (
    <div>
        <Header/>
            <section className="pt-5 pb-5">
                <div className="container py-5">
                    <h1 className="carttext">My Cart (0)</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <button className="btn btn-warning" disabled>Check Out</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5 pb-5" >
                <div className="container py-5">
                    <h2 className="h1 wishlisttext">Wishlist (0)</h2>
                </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            </div>
                        </div>
                    </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Cart
