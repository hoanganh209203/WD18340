import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorFormProduct } from '~/types/ErrorForm'
import { FormProduct } from '~/types/FormProduct'
import productValidate from '~/validations/products'
import axios from 'axios'

const AddProduct = () => {
  const navgate = useNavigate()
  const [addForm,setAddForm] = useState<FormProduct>({
    title: '',
    description:'',
    price: 0,
    discountPercentage: 0,
    rating:0,
    stock: 0,
    brand: '',
    category:'',
    thumbnail:'',
    images:[]
  })
  const [errorForm , setErrorForm] = useState<ErrorFormProduct>({})

  const handlChange =(
    e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) =>{
    const {name , value} = e.target;
    setAddForm({
      ...addForm,
      [name]:value
    })

  }
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {

    e.preventDefault()
    const {errorMessage } = productValidate(addForm);

    if (errorMessage) {
      setErrorForm(errorMessage);
      return;
    }

   axios.post('http://localhost:3000/products',addForm)
    .then(()=>{
      alert("Created product successfully");
        navgate("/admin/listpro");
    }).catch((error)=>{
      console.log(error);
    })
  };
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-full">
  <div className="p-16">
    <div className="w-full px-4 py-6">
      <h1 className="text-5xl font-semibold text-gray-800 mb-2">Thêm Sản phẩm mới</h1>
      <form onSubmit={onSubmit} method="POST" className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tiêu đề</label>
          <input 
          onChange={handlChange} type="text" name="title" id="title" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
          {errorForm?.title && (
            <span className="text-sm text-red-400">* {errorForm.title}</span>
          )}
        </div>
        <div>
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Ảnh đại diện</label>
          <input 
          onChange={handlChange} type="text" name="thumbnail" id="thumbnail" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
          {errorForm?.thumbnail && (
            <span className="text-sm text-red-400">* {errorForm.thumbnail}</span>
          )}
        </div>
        
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Giá</label>
          <input 
          onChange={handlChange} type="number" name="price" id="price" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
          {errorForm?.price && (
            <span className="text-sm text-red-400">* {errorForm.price}</span>
          )}
        </div>
        <div>
          <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">Phần trăm giảm giá</label>
          <input 
          onChange={handlChange} type="number" name="discountPercentage" id="discountPercentage" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
         {errorForm?.discountPercentage && (
            <span className="text-sm text-red-400">* {errorForm.discountPercentage}</span>
          )}
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Đánh giá</label>
          <input 
          onChange={handlChange} type="number" name="rating" id="rating" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
         {errorForm?.rating && (
            <span className="text-sm text-red-400">* {errorForm.rating}</span>
          )}
        </div>
        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Tồn kho</label>
          <input 
          onChange={handlChange} type="number" name="stock" id="stock" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
         {errorForm?.stock && (
            <span className="text-sm text-red-400">* {errorForm.stock}</span>
          )}
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Thương hiệu</label>
          <input 
          onChange={handlChange} type="text" name="brand" id="brand" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
         {errorForm?.brand && (
            <span className="text-sm text-red-400">* {errorForm.brand}</span>
          )}
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Danh mục</label>
          <input 
          onChange={handlChange} type="text" name="category" id="category" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
         {errorForm?.category && (
            <span className="text-sm text-red-400">* {errorForm.category}</span>
          )}
        </div>
        <div>
          <label htmlFor="image[]" className="block text-sm font-medium text-gray-700">Image</label>
          <input multiple
          onChange={handlChange} type="file" name="image[]" id="image" 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
          {errorForm?.images && (
              <span className="text-sm text-red-400">* {errorForm.images}</span>
            )}
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả</label>
          <textarea 
          onChange={handlChange} name="description" id="description" rows={3} 
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" defaultValue={""} />
         {errorForm?.description && (
            <span className="text-sm text-red-400">* {errorForm.description}</span>
          )}
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Thêm sản phẩm</button>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default AddProduct