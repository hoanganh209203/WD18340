import React, { useEffect, useState } from 'react'
import { productsCoreType } from '~/types/Product'

type Props = {}

const ListProducts = (props: Props) => {
  const [poducts,setProducts] = useState<productsCoreType[]>([])
  useEffect(()=>{
    fetch(`http://localhost:3000/products`)
    .then(response => response.json())
    .then((data) =>{
      setProducts(data)      
    })
  },[])
  
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="px-3 py-3">
         ID
        </th>
        <th scope="col" className="px-6 py-3">
          Image
        </th>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
         Price
        </th>
        <th scope="col" className="px-6 py-3">
         Category
        </th>
        <th scope="col" className="px-6 py-3">
         Description
        </th>
        <th scope="col" className="px-6 py-3">
        Stock
        </th>
        <th scope="col" className="px-6 py-3">
        Rating
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {poducts.map((item)=>(

      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">
         {item.id}
        </td>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img style={{height:'150px'}} src={item.thumbnail} alt=""  />
        </th>
        <td className="px-6 py-4">
         {item.title}
        </td>
        <td className="px-6 py-4">
          {item.price}
        </td>
        <td className="px-6 py-4">
          {item.category}
        </td>
        <td className="px-6 py-4">
         {item.description}
        </td>
        <td className="px-6 py-4">
         {item.stock}
        </td>
        <td className="px-6 py-4">
         {item.rating}
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      ))}
  
    </tbody>
  </table>
</div>





  )
}

export default ListProducts