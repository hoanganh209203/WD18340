import React from 'react'
import SlideShow from '../components/View_Layout/SlideShow'
import Header from '~/components/View_Layout/Header'
import Footer from '~/components/View_Layout/Footer'
import { NavLink } from 'react-router-dom'
import { productsCoreType } from '~/types/Product'
type Props = {
    products:productsCoreType[]
}
const HomePage = ({products}:Props) => {
    
    return (
        // <div className="bg-white">
        // <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        //     <SlideShow />
        //     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        //             {products.map((product) => (
        //                  <div key={product._id}
        //                  className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        //            <NavLink to={`detail/${product._id}`}>
        //             <div className="flex items-center gap-2 px-3">
        //             <h3 className="text-xl text-[#333] font-extrabold flex-1">{product.title}</h3>
        //             <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] shrink-0" viewBox="0 0 64 64">
        //               <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
        //             </svg>
        //           </div>
        //            </NavLink>
                  
        //             <NavLink to={`detail/${product._id}`}>
        //             <img src={product.thumbnail} className="h-72 w-full lg:w-full rounded-xl" />
        //             </NavLink>
        //             <div className="px-6">
        //             <NavLink to={`detail/${product._id}`}>
                      
        //               <div className="mt-10 flex items-center flex-wrap gap-4">
        //                 <h3 className="text-xl text-[#333] font-bold flex-1">${product.price}</h3>
        //                 <button type="button"
        //                  className="px-6 py-2.5 rounded text-[#333] text-sm tracking-wider font-semibold border-2 border-[#333] hover:bg-gray-50 outline-none">
        //                   Order now
        //                   </button>
        //               </div>
        //               </NavLink>
        //             </div>
        //           </div>
                  
        //             ))}
        //         </div>
                 
        //    </div>
        // </div>

        <div className="font-[sans-serif] bg-gray-100">
  <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
  <SlideShow />
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Clothes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
    <NavLink to={`detail/${product._id}`}>
      <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
          </svg>
        </div>
        <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
          <img src={product.thumbnail} alt="Product 1" className="h-full w-full object-contain" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
          <p className="text-gray-500 text-sm mt-2">{product.category?.name}</p>
          <h4 className="text-lg text-gray-700 font-bold mt-4">${product.price}</h4>
        </div>
      </div>
      </NavLink>
      ))}
     
     
    </div>
  </div>
</div>

    )
}

export default HomePage
