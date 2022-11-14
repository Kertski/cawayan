
import AdminHeader from './Admin/AdminHeader'
import Footer from './HomePages/Footer'
import React from 'react';




function OrderList() {

 

  return (

    <div>
        <AdminHeader/>
     
        <h1 className='text-center mt-4'>Contact Keeper</h1>
       
       
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            
                <tr >
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
   
          </tbody>
   

        <Footer/>
    
    </div>
    )
  }
  
  export default OrderList