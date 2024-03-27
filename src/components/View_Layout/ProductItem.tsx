import React from 'react'
import { NavLink } from 'react-router-dom'
import { productsCoreType } from '~/types/Product'

type Props = {
    product: productsCoreType
}

const ProductItem = (props: Props) => {
    return (
        <div className="group relative" key={props.product._id}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <NavLink to={`detail/${props.product._id}`}>
                    <img src={props.product.thumbnail} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-xl" />
                </NavLink>

            </div><div className="mt-4 flex justify-between">
                <NavLink to={`detail/${props.product._id}`}>


                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{props.product.title}</h2>
                </NavLink>

                <div>
                    <h3 className="text-sm text-gray-700">
                        <NavLink to={`detail/${props.product._id}`}>
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {props.product.category?.name}
                        </NavLink>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{props.product.discountPercentage}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{props.product.price}</p>
            </div>
        </div>
    )
}

export default ProductItem