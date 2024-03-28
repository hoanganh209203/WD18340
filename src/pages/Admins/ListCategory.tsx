import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CategoryType } from '~/types/Cart';

type Props = {}

const ListCategory = (props: Props) => {
    const [category , setCategory] = useState<CategoryType[]>()
    useEffect(()=>{
      axios.get(`https://nodejs-fe.vercel.app/category`)
      .then((response) =>{
        setCategory(response.data)
        console.log(response.data);
      })
      
    },[]);
    
  return (
    

<div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Category Id
        </th>
        
        <th scope="col" className="px-6 py-3">
          Category Name
        </th>
        
      </tr>
    </thead>
    <tbody>
        {category?.map((cate) =>(

      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {cate._id}
        </th>
        <td className="px-6 py-4">
          {cate.name}
        </td>
        
      </tr>
        ))}
      
    </tbody>
  </table>
</div>


  )
}

export default ListCategory