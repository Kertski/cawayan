import React from 'react'
import Footer from './HomePages/Footer'
import Header from './HomePages/Header'


function CheckoutPage({size}) {

  return (
    <div>
        <Header size={size}/>
           <div>
                <div className='py-3 bg-warning'>
                    <div className='container'>
                        <h6>Checkout</h6>
                    </div>
                </div>
                <div className="py-4">
                    <div className="container">
                        <div className="row">
                            <div className='col-md-7'>
                                <div className='card'>
                                    <div className="card-header">
                                        <h4>Basic Information</h4>

                                    </div>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>First Name</label>
                                                    <input type="text" name="firstname" className='form-control'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>Last Name</label>
                                                    <input type="text" name="lastname" className='form-control'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>Phone Number</label>
                                                    <input type="number" name="contactnumber" className='form-control'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>Delivery Address</label>
                                                    <input type="text" name="firstname" className='form-control'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th width="50%">Product</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        <Footer/>
    </div>
  )
}

export default CheckoutPage
