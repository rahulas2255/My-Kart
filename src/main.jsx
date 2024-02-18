import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import AdminContext from './Context/AdminContext.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdminContext>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </AdminContext>
);
