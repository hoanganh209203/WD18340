import axios from 'axios'
import {Link, NavLink } from 'react-router-dom'
import { productsCoreType } from '~/types/Product'
import { Popconfirm } from "antd";
import { useState } from 'react';
type Props = {
  products:productsCoreType[]
}
const ListProducts = ({products}: Props) => {
  const [product, setProducts] = useState<productsCoreType[]>([])
  const deleteProduct = (id:string) =>{
    console.log(id);
    axios.delete(`https://nodejs-fe.vercel.app/products/${id}`)
    const filterProduct = product.filter((product) => product._id !== id)
    setProducts(filterProduct)
  }

  return (

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-3">
             STT
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
          {products.map((item, index) => (

            <tr key={item._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">
                {index+1}
              </td>
              <th scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img style={{ height: '150px',width:'100%' }} src={item.thumbnail} alt="" />
              </th>
              <td className="px-6 py-4">
                {item.title}
              </td>
              <td className="px-6 py-4">
                {item.price}
              </td>
              <td className="px-6 py-4">
                {item.category?.name}
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
              <Link to={`edit/${item._id}`}>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Edit
                  </button>
                </Link>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={() => deleteProduct(item._id)}
                  okText="Yes"
                  cancelText="No"
                  okType={"danger"}
                >
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </Popconfirm>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      {/* <div className="mt-10 text-center flex justify-between items-center ml-72 mr-72">
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => { setPage(page - 1) }}>Previous Page</button>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => { setPage(page + 1) }}>Next Page</button>
      </div> */}

    </div>





  )
}

export default ListProducts