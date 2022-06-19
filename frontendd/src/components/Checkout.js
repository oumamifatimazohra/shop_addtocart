import React from 'react';
import { Card,CardBody,Button,CardHeader,Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Checkout.css";



function calculateTotalPrice(list) {
  let totalPrice = 0;
  list.map((item) => (
    totalPrice += item.amount * item.price
  ));
  return totalPrice;
}


function Checkout({ cart }) {

  const totalPrice = calculateTotalPrice(cart);


  return (
   
    <div className='Checkout-top justify-center'>
    <div className='checkout py-4'>
    <div className='container'>
    <Card className='Card'>
    <CardHeader>
      Basic Information
    </CardHeader>
    <CardBody>
      <div className='row'>
         <div className='col-md-6'>
           <div className='form-group mb-3'>
            <label> First Name :</label>
            <input type="text" name="firstname" className="form-control" />
           </div>
         </div>

         <div className='col-md-6'>
         <div className='form-group mb-3'>
          <label> Last Name :</label>
          <input type="text" name="lastname" className="form-control" />
         </div>
       </div>

       <div className='col-md-6'>
       <div className='form-group mb-3'>
        <label> Phone Number :</label>
        <input type="text" name="phonenumber" className="form-control" />
       </div>
     </div>

     <div className='col-md-6'>
     <div className='form-group mb-3'>
      <label> Email Address :</label>
      <input type="text" name="email" className="form-control" />
     </div>
   </div>

   <div className='col-md-12'>
   <div className='form-group mb-3'>
    <label> Full Address :</label>
    <textarea rows="3" className="form-control" />
   </div>
 </div>

 <div className='col-md-6'>
 <div className='form-group mb-3'>
  <label> City :</label>
  <input type="text" name="city" className="form-control" />
 </div>
</div>

<div className='col-md-6'>
<div className='form-group mb-3'>
<label> State :</label>
<input type="text" name="state" className="form-control" />
</div>
</div>


<div className='col-md-6'>
<div className='form-group mb-3'>
<label> Zip Code :</label>
<input type="text" name="zipcode" className="form-control" />
</div>
</div>
      </div>
      <div className=' col-md-12'>
      <Table bordered>
        <thead>
          <tr>
            <th  width="70%" className='p-12'>Product</th>
            <th>Price</th>
            <th>qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
              <td>{item.amount * item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>


      <p>Total Price of your Cart: {totalPrice} $</p>
    </div>
    <br/>
      <Button  >
        Place Order
      </Button>
    </CardBody>
   
  </Card>
    </div>

    </div>
     
   
      </div>
     
    
    
  )
}

export default Checkout;
