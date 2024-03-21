import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { productType } from "~/types/Cart";
import { productsCoreType } from "~/types/Product";

// type Props = {
//     // products: productsCoreType[]
// }

const Products = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        const url = `http://localhost:3000/products?_page=${page}&_limit=10`
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data)
            })
    }, [page])
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product:productsCoreType) => (
                        <div className="group relative" key={product.id}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <NavLink to={`detail/${product.id}`}>
                                    <img src={product.thumbnail} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </NavLink>

                            </div><div className="mt-4 flex justify-between">
                                <NavLink to={`detail/${product.id}`}>


                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{product.title}</h2>
                                </NavLink>

                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <NavLink to={`detail/${product.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {product.category}
                                        </NavLink>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.discountPercentage}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={() => { setPage(page - 1) }}>Previous Page</button>
                <button onClick={() => { setPage(page + 1) }}>Next Page</button>
            </div>
        </div>

    )
}
export default Products