import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SERVER_URL } from "../../serverURL";


const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount,clearCart } =
    useContext(ShopContext);
    const [zipError,setZipError] = useState(false)

const [userAddress,setUserAddress]= useState({
      name:"",
      email:"",
      country:"",
      state:"",
      zipcode:""
    })



    const handleCheckout = ()=>{
      if(
        !userAddress.name || 
        !userAddress.email ||
        !userAddress.country ||
        !userAddress.state ||
        !userAddress.zipcode 
      ){
        return toast.error("Please fill the form")
      }
      clearCart()
      setUserAddress({
        name:"",
        email:"",
        country:"",
        state:"",
        zipcode:""
      })
      toast.success("Order Placed Successfully!!!")
     }


    const zipcodeValidation = (e)=>{
      if(!e.target.value.match(/\d{6}/)){
        setZipError(true)
      }else{
        setZipError(false)
      }
      setUserAddress({...userAddress,zipcode:e.target.value})
    } 
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e,index) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={index}>
              <div className="cartitems-format cartitems-format-main">
                <img src={`${SERVER_URL}/images/${e.image}`} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      
      <div className="cartitems-down">
      <div className="checkout">
        <h1>Billing Details</h1>
        <form className="address">
          <div className="address1">
            <label htmlFor="">First & Last Name</label>
            <input onChange={(e)=>setUserAddress({...userAddress,name:e.target.value})} value={userAddress.name} type="text" />
          </div>
          <div className="address1">
            <label htmlFor="">Email</label>
            <input onChange={(e)=>setUserAddress({...userAddress,email:e.target.value})} value={userAddress.email}  type="text" />
          </div>
          <div className="address1">
            <label htmlFor="">Country</label>
            <input onChange={(e)=>setUserAddress({...userAddress,country:e.target.value})} value={userAddress.country}  type="text" />
          </div>
          <div>
            <div className="address1">
              <label htmlFor="">State</label>
              <input onChange={(e)=>setUserAddress({...userAddress,state:e.target.value})} value={userAddress.state} state type="text" />
            </div>
            <div className="address1">
              <label htmlFor="">Zip code</label>
              <input onChange={zipcodeValidation} value={userAddress.zipcode}  type="text" />
              {
                zipError &&
                <p>Enter Valid Zip</p>
              }
            </div>
          </div>
        </form>
      </div>
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()} </p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
         

          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <ToastContainer />


      </div>
    </div>
  );
};

export default CartItems;
