import React from 'react'
import Footer from './HomePages/Footer'
import Header from './HomePages/Header'

function CheckoutPage() {
  return (
    <div>
        <Header/>
            <section className="pt-5 pb-5 flex">
                <div className="container checkoutcontainer">
                    <h1 className="px-3">Checkout</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                    <form className="border p-5 pb-5 m-3 text-white rounded" action="https:/www.google.com" target="_blank" method="GET">
                        <fieldset>
                            <legend className="orderdetails">Order Details</legend>
                        <div className="container">
                            <table className="table table-striped table-hover text-white table-borderless">
                                <thead>
                                    <tr>
                                        <th className="itemdesc">Item Decription</th>
                                        <th className="itemqpa">Qty</th>
                                        <th className="itemqpa">Unit Price</th>
                                        <th className="itemqpa">Amount</th>
                                    </tr>
                                </thead>
                            <tbody>
                                <tr> 
                                    <td className='tableheight'><textarea className="inputdimension" name="Item1" maxlength="100" placeholder="Rattan Pendant Light" readonly></textarea></td>
                                    <td className='tableheight'><input className="inputdimension" name="Qty_1" type="number" maxlength="100" placeholder="2" readonly/></td>
                                    <td className='tableheight'><input className="inputdimension" name="UnitPrice_1" type="number" maxlength="100" placeholder="549" readonly/></td>
                                    <td className='tableheight'><input className="inputdimension" name="Amount_1"type="number" maxlength="100" placeholder="1098" readonly/></td>
                                </tr>
                                <tr>
                                    <td className='tableheight'><textarea className="inputdimension" name="Item2" maxlength="100" placeholder="Bamboo Fashion Aesthetic Bag" readonly></textarea></td>
                                    <td className='tableheight'><input className="inputdimension" name="Qty_2" type="number" maxlength="100" placeholder="1" readonly/></td>
                                    <td className='tableheight'><input className="inputdimension" name="UnitPrice_2" type="number" maxlength="100" placeholder="1999" readonly/></td>
                                    <td className='tableheight'><input className="inputdimension" name="Amount_2" type="number" maxlength="100" placeholder="1999" readonly/></td>
                                </tr>
                                <tr>
                                    <td className='tableheight'><textarea className="inputdimension" name="Item3" maxlength="100" placeholder="Rattan Egg Basket" readonly></textarea></td>
                                    <td className='tableheight'><input className="inputdimension" name="Qty_3" type="number" maxlength="100" placeholder="1" readonly/></td>
                                    <td className='tableheight'><input className="inputdimension" name="UnitPrice_3"type="number" maxlength="100" placeholder="349" readonly/></td>
                                    <td className='tableheight'><input className="inputdimension" name="Amount_3" type="number" maxlength="100" placeholder="349" readonly/></td>
                                </tr>

                                <tr>
                                    <td className="subtotal" colspan="3">Subtotal (₱)</td>
                                    <td  className="text-black tableheight">3446</td>
                                </tr>
                                
                                <tr>
                                    <td className="discount" colspan="3" >Discount (20%)</td>
                                    <td  className="text-black tableheight">689</td>
                                </tr>
                                <tr>
                                    <td className="shippingfee" colspan="3">Shipping Fee</td>
                                    <td className="text-black tableheight">Free</td>
                                </tr>
                                <tr>
                                    <td className="total" colspan="3">Total (₱)</td>
                                    <td  className="text-black tableheight">2757</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        </fieldset>
                        <fieldset className="pt-5">
                            <legend className="additionaldetails">Additional Details</legend>
                                <div className="row">
                                    <div className="col my-3">
                                    <label className="form-label paymentmethodlabel">Payment Method</label>
                                        <select className="form-select" name="payemnt_method">
                                            <option value="">--Select Payment Method</option>
                                            <option value="gcash">Gcash</option>
                                            <option value="credit">Credit Card</option>
                                            <option value="paypal">Paypal</option>
                                            <option value="cod">Cash On Delivery</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <input className="form-check-input" type="radio" name="radio" id="address_type"/>
                                        <label className="form-label me-3 addresstype">Home</label>             
                                        <input className="form-check-input" type="radio" name="radio" id="address_type"/>
                                        <label className="form-label me-3 addresstype">Office</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <label className="forl-label mb-2 addresslabel">Address</label>
                                        <textarea className="form-control" name="address" placeholder="Add address here"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                        </fieldset>
                    </form>
                </div>
                </div>
                </div>
            </section>
        <Footer/>
    </div>
  )
}

export default CheckoutPage
