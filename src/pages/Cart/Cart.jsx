import { useContext } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../components/Context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCard, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item" key={item._id}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCard(item._id)} className="close">
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
          return null; // Ensure nothing is rendered for items not in the cart
        })}
      </div>
      <div className="cart-bottom">
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
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <hr />
          </div>
          <button onClick={() => navigate('/order')}>PREOCEED TO CHECKOUT</button>
        </div>
        <div className="card-promocode">
          <div>
            <p>If you have a promocode, enter it here</p>
            <div className="card-promocode-input">
              <input type="text" placeholder="promo code" id="" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
