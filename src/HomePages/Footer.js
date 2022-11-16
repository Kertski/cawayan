import React from 'react'

function Footer() {
    return (
        <footer className="site-footer" id="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                        <li><a href="#site-footer" rel="noopener">About Us</a></li>
                        <li><a href="#site-footer" rel="noopener">Contact Us</a></li>
                        <li><a href="#site-footer" rel="noopener">Privacy Policy</a></li>
                        <li><a href="#site-footer" rel="noopener">Return Policy</a></li>
                    </ul>
                    </div>
                    <div className="col">
                    <h6>Top Categories</h6>
                    <ul className="footer-links">
                        <li><a href="#site-footer" rel="noopener">Home Decor</a></li>
                        <li><a href="#site-footer" rel="noopener">Bag and Baskets</a></li>
                        <li><a href="#site-footer" rel="noopener">Gift Items</a></li>
                        <li><a href="#site-footer" rel="noopener">Rattan</a></li>
                        <li><a href="#site-footer" rel="noopener">Bamboo</a></li>
                      </ul>
                    </div>
                    <div className="col">
                    <h6>Resources</h6>
                    <ul className="footer-links">
                        <li><a href="#site-footer" rel="noopener">Vendor</a></li>
                        <li><a href="#site-footer" rel="noopener">Cart</a></li>
                    </ul>
                    </div>
                    <div className="col">
                    <h6>SUBSCRIBE TO OUR NEWS LETTER</h6>
                    <div class="row">
                        <div class="col-8">
                            <input className="form-control" name="EMAIL" placeholder="Your Email Address" required="" type="email"/>
                        </div>
                        <div class="col-4 m-0">
                            <button className="click-btn btn btn-default text-white subsbtn">Subscribe</button>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-12 text-white text-center">
                            <p className="color-white whattoget">You'll get an email about once a month. We'll never share your address.</p>
                            <p>Have queries? Write to us at: <a class="infoemail" href="mailto:info@cawayan.com" target="_top">info@cawayan.com</a> </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="copyright">
                        <p className="copyright-text">Copyright © 2022 All Rights Reserved by 
                        <a href="#site-footer">Cawayan</a>.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col sociallinks">
                        <a href="https://www.facebook.com" target="_blank" rel='noopener noreferrer'><img className="socialicons1" src="assets\images\icons\Facebook.png" alt=''/></a>
                        <a href="https://www.instagram.com" target="_blank" rel='noopener noreferrer'><img className="socialicons2" src="assets\images\icons\Instagram.png" alt=''/></a>
                        <a href="https://www.tiktok.com" target="_blank" rel='noopener noreferrer'><img className="socialicons3" src="assets\images\icons\Tiktok.png" alt=''/></a>
                        <a href="https://www.pinterest.com" target="_blank" rel='noopener noreferrer'><img className="socialicons3" src="assets\images\icons\Pinterest.png" alt=''/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
