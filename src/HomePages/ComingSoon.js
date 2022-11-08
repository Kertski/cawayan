import React from 'react'

function ComingSoon() {
    return (
        <section className="comingsoon">
            <div className="container py-5 text-center">
                <h2 className="h1 mb-4">C O M I N G + S O O N</h2>
                    <div className="row justify-content-center g-5">
                        <div className="col-md-8 col-lg-6 col-xl-4  d-flex">
                            <div className="card text-black">
                                <div className="cardcontent">
                                    <img src="assets\images\home\coming_soon\roundbag.jpg" className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h5 className="card-title">Rattan Beach Round Shoulder Bag</h5>
                                            <div>
                                                <button className="btn click-btn btn-default btnwl">Add to Wishlist</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-6 col-xl-4  d-flex">
                            <div className="card text-black">
                                <div className="cardcontent">
                                    <img src="assets\images\home\coming_soon\carvedeagle.jpg" className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h5 className="card-title">Mahogany Hand Carved Philippine Eagle</h5>
                                            <div>
                                                <button className="btn click-btn btn-default btnwl">Add to Wishlist</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-6 col-xl-4  d-flex">
                            <div className="card text-black">
                                <div className="cardcontent">
                                    <img src="assets\images\home\coming_soon\toycarabao.png" className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h5 className="card-title">Wood Carved Carabao Tamaraw Decor</h5>
                                            <div>
                                                <button className="btn click-btn btn-default btnwl">Add to Wishlist</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default ComingSoon
