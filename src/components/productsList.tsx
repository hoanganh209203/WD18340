import React, { useEffect, useState } from "react";
import { productType } from "~/types/Cart";
import { productsCoreType } from "~/types/Product";

// type Props = {
//     // products: productsCoreType[]
// }

const Products = () => {
    const [products,setProducts] = useState([])    
    useEffect(()=>{
        fetch(`http://localhost:3000/products`)
        .then((response) => response.json())
        .then((data) =>{
            setProducts(data)
        })
    },[])


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product:productsCoreType) => (

                            <div className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={product.thumbnail} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div><div className="mt-4 flex justify-between">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{product.title}</h2>
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                {product.category}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.discountPercentage}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>

    )
}
export default Products