import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { productType } from "~/types/Cart";
import { productsCoreType } from "~/types/Product";
import ProductItem from "./ProductItem";

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
                        <ProductItem product={product}/>
                    ))}
                </div>

                <button onClick={() => { setPage(page - 1) }}>Previous Page</button>
                <button onClick={() => { setPage(page + 1) }}>Next Page</button>
            </div>
        </div>

    )
}
export default Products