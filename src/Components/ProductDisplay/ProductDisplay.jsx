import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { SERVER_URL } from '../../serverURL';

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
    console.log("Product",product.image);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
               <img src={`${SERVER_URL}/images/${product.image}`} alt="" />
               <img src={`${SERVER_URL}/images/${product.image}`} alt="" />
               <img src={`${SERVER_URL}/images/${product.image}`} alt="" />
               <img src={`${SERVER_URL}/images/${product.image}`} alt="" />
            </div>
            <div className="productdisplay-img">
              <img className='productdisplay-main-img' src={`${SERVER_URL}/images/${product.image}`} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_dull_icon} alt="" />
               <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-price-old">${product.old_price}</div>
              <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Made From Natural Fibers, Sourced From The Cotton Plant. This Natural Composition Makes It Highly Breathable And Comfortable To Wear, Especially In Warm Weather.
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-sizes">
                <div className="">S</div>
                <div className="">M</div>
                <div className="">L</div>
                <div className="">X</div>
                <div className="">XXl</div>
              </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern Latest</p>

        </div>
    </div>
  )
}

export default ProductDisplay