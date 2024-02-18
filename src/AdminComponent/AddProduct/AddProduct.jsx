import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import {useShopContext} from '../../Context/ShopContext'
import { useAdminContext } from '../../Context/AdminContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SERVER_URL} from '../../serverURL'

const AddProduct = () => {
    const {getAllProduct} = useShopContext()
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
    console.log("Inside Add Product");
    const {getAllAdminProduct} = useAdminContext()

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch(`${SERVER_URL}/upload`,{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=> resp.json()).then((data)=>{responseData=data});
        
        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch(`${SERVER_URL}/addproduct`,{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type' : 'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                setProductDetails({name:"",
                image:"",
                category:"women",
                new_price:"",
                old_price:""})
                setImage(false)
                data.success?toast.success("Product Added"):toast.warning("Failed")
                getAllAdminProduct()
                getAllProduct()

            })

        }
    }
  return (
    <div className='add-product'>
        <h1 style={{marginBottom:'15px'}}>Add Products</h1>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler}  name="category" className='add-product-selecter'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>

            </select>
        </div>
        <div className="addproduct-itemfield">
            <label className="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
                <input onChange={imageHandler} type="file" name='image' id='file_input' hidden />

            </label>
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>
            Add
        </button>
        <ToastContainer />
    </div>
  )
}

export default AddProduct