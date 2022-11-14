import React, {useState, useEffect} from 'react'
import Header from './HomePages/Header'
import Footer from './HomePages/Footer'

function Cart({cart, setCart, handleChange}) {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=> {
        let ans = 0;
        cart.map((item)=>(
            ans += item.Amount * item.Price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <div>
        <Header size={cart.length}/>
            <section className="pt-5 pb-5">
                <div className="container py-5">
                    <h1 className="carttext">Cart</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            cart.map((item)=> (
                                <div className="cart_box" key={item.id}>
                                <div className="cart_img">
                                    <img src={item.Image} alt="" />
                                    <p>{item.Description}</p>
                                </div>
                                <div>
                                    <button className='qtybtn' onClick={() => handleChange(item, 1)}> + </button>
                                    <button className='qtybtn'>{item.Amount}</button>
                                    <button className='qtybtn' onClick={() => handleChange(item, -1)}> - </button>
                                </div>
                                <div>
                                    <span>Php {item.Price*item.Amount}</span>
                                    <button onClick={()=>handleRemove(item.id)}>Remove</button>
                                </div>
                            </div>
                            ))
                        }
                         <div className='total'>
                            <span>Total: Php {price}</span>
                        </div>
                        
                        <div className="col-6">
                        <button className="btn btn-warning checkoutbtn" disabled>Check Out</button>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Cart
