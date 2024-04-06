import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Login from './layouts/Users/Login'
import Register from './layouts/Users/Register'
import NotFound from './components/NotFound'
import DetailProduct from './pages/DetailProduct'
import Layout from './layouts/Layout'
import AdminPage from './layouts/AdminPage'
import ListProducts from './pages/Admins/ListProducts'
import Dashboard from './pages/Admins/Dashboard'
// import AddProduct from './pages/Admins/AddProduct'
// import UpateProduct from './pages/Admins/UpateProduct'
import ListCategory from './pages/Admins/ListCategory'
import { useEffect, useState } from 'react'

import AddProduct_Demon from './pages/Admins/AddProduct_Demon'
import { FormProduct } from './types/FormProduct'
import { createProduct, updateProduct } from './Apis/Products'
import { productsCoreType } from './types/Product'
import UpdateProduct_Demon from './pages/Admins/UpdateProduct_Demo'
import { userType } from './types/User'
import {onRegister } from './Apis/User'
import axios from 'axios'
import PrivateRouter from './PrivateRouter'
function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<productsCoreType[]>([])
  const [users, setUsers] = useState<userType[]>([])
  useEffect(() => {
      axios.get(`https://nodejs-fe.vercel.app/products`)
      .then((response) =>{
        setProducts(response.data)
      })
  }, [])

  const handleAddProduct = (data: FormProduct) => {
    (async () => {
      const newProduct = await createProduct(data);
      setProducts([...products, newProduct]);
      navigate("/admin/listpro");
    })();
  };
  const handleEditProduct = (data: FormProduct) => {
    (async () => {
      const product = await updateProduct(data);
      setProducts(
        products.map((item) => (item._id === product._id ? product : item))
      );
      navigate("/admin/listpro");
    })();
  };
  const handleRegister = (user: userType) => {
    (async () => {
      const data = await onRegister(user);
      setUsers([...users,data]);
    })();
  };

  let userLogin = false;
  let userinfo = sessionStorage.getItem("user")
    userinfo = JSON.parse(userinfo as any) 
    console.log(userinfo);     
    if (userinfo===null) {
      userLogin = false
    }
    else {
      userLogin = true
    }
  return (
    <Routes>
      
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage products={products}/>} />
        <Route path='detail/:id' element={<DetailProduct />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register onSignUp={handleRegister} />} />
      </Route>
        <Route path="*" element={<NotFound />} />
        
      <Route path='admin' element={<PrivateRouter user={userLogin}><AdminPage/></PrivateRouter> }>
      <Route index element={<Dashboard/>}/>
      <Route path='listpro' element={<ListProducts products={products}/>}/>
      <Route path='listpro/add' element={<AddProduct_Demon onAdd={handleAddProduct}/>}/>
      <Route path="listpro/edit/:id" element={<UpdateProduct_Demon onEdit={handleEditProduct} />}/>
      {/* <Route path='listpro/add' element={<AddProduct/>}/>
      <Route path='listpro/edit/:id' element={<UpateProduct/>}/> */}
      <Route path='listcate' element={<ListCategory/>}/>
      </Route>
    </Routes>

  )
}

export default App


