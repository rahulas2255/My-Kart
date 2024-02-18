import React from 'react'
import './Admin.css'
import AddProduct from '../../AdminComponent/AddProduct/AddProduct'
import ListProduct from '../../AdminComponent/ListProduct/ListProduct'
const Admin = () => {
  return (
    <div className='admin'>
         <h1 style={{textAlign:"center",margin:'20px 0px'}}>Admin Panel</h1>
         <hr />
        <AddProduct/>
        <ListProduct/>
    </div>
  )
}

export default Admin