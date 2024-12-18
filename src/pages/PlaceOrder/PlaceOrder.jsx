import { useContext } from 'react'
import './place-order.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="placeorder-left">
        <p className='title'>Delivary Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First Nmae' id="" />
          <input type="text" placeholder='Last Nmae' id="" />
        </div>
        <input type="email" placeholder='Email Address' id="" />
        <input type="text" placeholder='Street'/>
        <div className="multi-field">
          <input type="text" placeholder='City' id="" />
          <input type="text" placeholder='State' id="" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zipcode' id="" />
          <input type="text" placeholder='Country' id="" />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivary fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
            <hr />
          </div>
          <button>PREOCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
