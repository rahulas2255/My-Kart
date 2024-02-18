import {createContext,useContext,useEffect,useState} from 'react'
import { SERVER_URL } from '../serverURL';


 const AdminCreateContext = createContext(null);

 export const useAdminContext=() => {
   return useContext(AdminCreateContext)
 }

const AdminContext = ({children}) => {
    const [isAdmin,setIsAdmin] = useState(false)
    const [allAdminProducts,setAllAdminProducts] = useState([]);


    useEffect(()=>{
      localStorage.admin?setIsAdmin(true):setIsAdmin(false)
    },[])

    



    const getAllAdminProduct =()=>{
      fetch(`${SERVER_URL}/allproducts`)
      .then((response)=>response.json())
      .then((data)=>setAllAdminProducts(data))

  }


   
  return (
    <>
    <AdminCreateContext.Provider value={{isAdmin,setIsAdmin,getAllAdminProduct,allAdminProducts,setAllAdminProducts}}>
        {children}
    </AdminCreateContext.Provider>
    
    </>
  )
}

export default AdminContext