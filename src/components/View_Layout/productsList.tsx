import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { productsCoreType } from "~/types/Product";
import ProductItem from "./ProductItem";

// type Props = {
//     // products: productsCoreType[]
// }

const Products = () => {
    const [products, setProducts] = useState([])
    // const [page, setPage] = useState(1)
    useEffect(() => {
        const url = `http://localhost:5000/products`
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    return (

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                    {products.map((product: productsCoreType) => (
                        <ProductItem product={product} />
                    ))}
                </div>
                

    )
}
export default Products