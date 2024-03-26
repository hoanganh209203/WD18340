import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { productsCoreType } from '~/types/Product'

type Props = {}

const ListProducts = (props: Props) => {
  const [poducts, setProducts] = useState<productsCoreType[]>([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch(`http://localhost:3000/products?_page=${page}&_limit=5`)
      .then(response => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, [page])

  return (

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
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
              <NavLink to={'add'}><button type="button" className="text-white rounded-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Product</button></NavLink>
            </th>
          </tr>
        </thead>
        <tbody>
          {poducts.map((item) => (

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">
                {item.id}
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img style={{ height: '150px' }} src={item.thumbnail} alt="" />
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
      <div className="mt-10 text-center flex justify-between items-center ml-72 mr-72">
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => { setPage(page - 1) }}>Previous Page</button>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => { setPage(page + 1) }}>Next Page</button>
      </div>

    </div>





  )
}

export default ListProducts