import React  from 'react'
import './Breadcrum.css'



const Breadcrum =(props) => {
    const {product} = props
    console.log(product);
   
    
  return (
    <div className='breadcrum'>
        Home <i classNameName="fa-solid fa-chevron-right"></i> SHOP <i classNameName="fa-solid fa-chevron-right"></i> {product?.category} <i classNameName="fa-solid fa-chevron-right"></i> {product.name}
    </div>
  )
}

export default Breadcrum
