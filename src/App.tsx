import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import About from './pages/About'
import Login from './layouts/Users/Login'
import Register from './layouts/Users/Register'
import NotFound from './components/NotFound'
import DetailProduct from './pages/DetailProduct'
import Layout from './layouts/Layout'
import AdminPage from './layouts/AdminPage'
import ListProducts from './pages/Admins/ListProducts'
import Dashboard from './pages/Admins/Dashboard'
import AddProduct from './pages/Admins/AddProduct'
import UpateProduct from './pages/Admins/UpateProduct'
import ListCategory from './pages/Admins/ListCategory'

function App() {

  return (

    <Routes>
      
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='shop/' element={<Shop />} />
        <Route path='detail/:id' element={<DetailProduct />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
        <Route path="*" element={<NotFound />} />
      <Route path='admin' element={<AdminPage/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='listpro' element={<ListProducts/>}/>
      <Route path='listpro/add' element={<AddProduct/>}/>
      <Route path='listpro/edit/:id' element={<UpateProduct/>}/>
      <Route path='listcate' element={<ListCategory/>}/>
      </Route>
    </Routes>

  )
}

export default App


