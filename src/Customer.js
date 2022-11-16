import React from 'react';
import AdminHeader from './Admin/AdminHeader'
import Footer from './HomePages/Footer'
import './App.css';



function Customer() {
  return (
 

    <div >
        <AdminHeader/>
        
<div class="container" >
  
<h1 className="px-3 contactustext "> List of Customers</h1>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

</div>


        <Footer/>
    
    </div>
  )
}
  
  export default Customer