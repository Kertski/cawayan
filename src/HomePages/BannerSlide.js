import React from 'react'

function BannerSlide() {
    return (
                <div id="carousel-container" className="carousel slide bg-dark" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel-container" data-bs-slide-to="0" aria-current="true" className="active"></button>
                        <button type="button" data-bs-target="#carousel-container" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carousel-container" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner d-block">
                        <div className="carousel-item active first-slide">
                            <img src="\assets\images\home\carousel\carousel_main2.png" className="d-block" alt=''/>         
                    </div>
                        <div className="carousel-item">
                            <img src="assets\images\home\carousel\second.png" className="d-block img2" alt=''/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets\images\home\carousel\third.png" className="d-block img3" alt=''/>
                        </div>
                    </div>
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel-container" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carousel-container" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
    )
}

export default BannerSlide
