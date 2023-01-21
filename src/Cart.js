import React, {useState, useEffect} from 'react';
import Header from './HomePages/Header';
import Footer from './HomePages/Footer';

function Cart({cart, setCart, handleChange}) {
    const [price, setPrice] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [formFields, setFormFields] = useState(0);

    const handleTotal = () => {

        let sum = price + shipping - discount; 
        setTotal(sum);

    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        let id = formFields.id;
        let method = 'POST';
        fetch("https://cawayan-api.onrender.com/checkoutlists/" + id, 
        {method: method, 
        body: JSON.stringify(formFields),
        headers:{'Content-type': 'application/json; charset=UTF-8',},
        })
        .then(response => response.json())
        .then(data => {
            setFormFields(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    }

    const handleOnClick = () => {
        console.log('test'); 
        setFormFields({id:0, Price: 0, Shipping: 0, Discount: 0 ,  Total: 0});
    }

    const handlePrice = ()=> {
        let ans = 0;
        cart.map((item)=>(
            ans += item.Amount * item.Price
        ))
        setPrice(ans);
    }

    const handleShipping = () => {
        let sf = 0;
        cart.map((item)=>(
            sf += item.Amount * 100
          
        ))
        setShipping(sf >= 500 ? 0 : sf);
    }

    const handleDiscount = () => {
        let dc = 0;
        cart.map((item)=>(
            dc += item.Amount * 20
        ))
        setDiscount(dc >= 500 ? 500 : dc);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    useEffect(()=>{
        handlePrice();
    })

    useEffect(()=>{
        handleShipping();
    })

    useEffect(()=>{
        handleDiscount();
    })

    useEffect(()=>{
        handleTotal();
    })

  return (
    <div>
        <Header size={cart.length}/>
            <section className="pt-5 pb-5">
                <div className="container py-5">
                    <h1 className="carttext">Cart</h1>
                    <h5 className="cartpromo">Free Shipping! (minimum of 5 orders) <br/> Plus P20 discount each item (Capped at P500) :)</h5>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            cart.map((item)=> {
                                return (
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
                            )})
                        }
                        <form onSubmit={onHandleSubmit}>
                            <div className='subtotal'>
                                <span>Subtotal: ₱ {price.toFixed(1)}</span><input type="text" className="form-control" value={formFields.price} hidden/>
                            </div>
                            <div className='shippingfee'>
                                <span>Shipping Fee: ₱ {shipping.toFixed(1)}</span><input type="text" className="form-control" value={formFields.shipping} hidden/>
                            </div>
                            <div className='shippingfee'>
                                <span>Discount: ₱ {discount.toFixed(1)}</span><input type="text" className="form-control" value={formFields.discount} hidden/>
                            </div>
                            <div className='total'>
                                <span>Total: ₱ {total.toFixed(1)}</span><input type="text" className="form-control" value={formFields.total} hidden/>
                            </div>
                            
                            <div className="col-6">
                            <a href="./checkout"><button type="submit" className="btn btn-warning checkoutbtn" onClick={handleOnClick}>Check Out</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Cart
