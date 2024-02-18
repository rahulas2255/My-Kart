import React from 'react'
import './Admin.css'
import AddProduct from '../../AdminComponent/AddProduct/AddProduct'
import ListProduct from '../../AdminComponent/ListProduct/ListProduct'
const Admin = () => {
  return (
    <div className='admin'>
        <AddProduct/>
        <ListProduct/>
    </div>
  )
}

export default Admin