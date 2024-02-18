import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
import { useShopContext } from '../../Context/ShopContext'
import { useAdminContext } from '../../Context/AdminContext'
import {SERVER_URL} from '../../serverURL'

const ListProduct = () => {

  const {setAll_Product} =  useShopContext()


  const {allAdminProducts,setAllAdminProducts} = useAdminContext()

  const fetchInfo = async()=>{
    await fetch(`${SERVER_URL}/allproducts`).then((res)=>res.json()).then((data)=>{
      setAllAdminProducts(data)
      setAll_Product(data)
    });
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
     
    await fetch(`${SERVER_URL}/removeproduct`,{

      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }


  return (
    <div className='list-product'>
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
          <hr />
          {allAdminProducts.map((product,index)=>{
            return <div key={index}> 
            <div  className="listproduct-format-main listproduct-format">
               <img src={`${SERVER_URL}/images/${product.image}`}  alt="" className="listproduct-product-icon" />
               <p>{product.name}</p>
               <p>${product.old_price}</p>
               <p>${product.new_price}</p>
               <p>{product.category}</p>
               <img onClick={()=>{remove_product(product.id)}} className='listproduct-removeicon' src={cross_icon} alt="" />

            </div>
            <hr />
            </div>
          })}
        </div>
    </div>
  )
}

export default ListProduct