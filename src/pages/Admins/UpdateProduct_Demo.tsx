import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getProduct } from "~/Apis/Products";
import { joiResolver } from "@hookform/resolvers/joi";
import { FormProduct } from '~/types/FormProduct'
import Joi from "joi";
import { getCategory } from "~/Apis/Category";
import { CategoryType } from "~/types/Cart";

type Props = {
  onEdit: (data: FormProduct) => void
}
const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  thumbnail: Joi.string().required(),
  discountPercentage: Joi.number().required(),
  stock: Joi.number().required(),
  brand: Joi.string().required(),
  rating: Joi.number().required(),
  category: Joi.string().required(),
  images: Joi.string().required(),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, ""),
});
const UpdateProduct_Demon = ({ onEdit }: Props) => {
  const { id } = useParams();
  console.log(id);
  //
  const [category , setCategory] = useState<CategoryType[]>()
  useEffect(() => {
    (async () => {
      const data = await getCategory();
      setCategory(data);
    })();
  }, []);
//
  const [product, setProduct] = useState<FormProduct | null>(null);
  const { register, handleSubmit, formState: { errors }, } = useForm<FormProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit: SubmitHandler<FormProduct> = (data) => {
    onEdit({ ...data, id })
  };
  useEffect(() => {
    (async () => {
      const data = await getProduct(`${id}`);
      setProduct(data);
    })();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-full">
      <div className="p-16">
        <div className="w-full px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tiêu đề</label>
              <input
                defaultValue={product?.title}
                {...register("title", { required: true })} type="text" name="title" id="title"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errors.title && (
            <span className="text-sm text-red-400">{errors.title.message}</span>
          )}
            </div>
            <div>
              <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Ảnh đại diện</label>
              <input
                 defaultValue={product?.thumbnail}
                 {...register("thumbnail", { required: true })}
                type="text" name="thumbnail" id="thumbnail"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
               {errors.thumbnail && (
            <span className="text-sm text-red-400">{errors.thumbnail.message}</span>
          )}
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Giá</label>
              <input
                 defaultValue={product?.price as number}
                 {...register("price", { required: true })} type="number" name="price" id="price"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errors.price && (
                <span className="text-sm text-red-400">* {errors.price.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">Phần trăm giảm giá</label>
              <input
                 defaultValue={product?.discountPercentage}
                 {...register("discountPercentage", { required: true })} type="number" name="discountPercentage" id="discountPercentage"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errors.discountPercentage && (
                <span className="text-sm text-red-400">* {errors.discountPercentage.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Đánh giá</label>
              <input
                defaultValue={product?.rating as number}
                {...register("rating", { required: true })} type="number" name="rating" id="rating"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errors.rating && (
                <span className="text-sm text-red-400">* {errors.rating.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Tồn kho</label>
              <input
                defaultValue={product?.stock as number}
                {...register("stock", { required: true })} type="number" name="stock" id="stock"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errors.stock && (
                <span className="text-sm text-red-400">* {errors.stock.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Thương hiệu</label>
              <input
                defaultValue={product?.brand}
                {...register("brand", { required: true })} type="text" name="brand" id="brand"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errors.brand && (
                <span className="text-sm text-red-400">* {errors.brand.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Danh mục</label>
              <select
                {...register("category", { required: true })}
                defaultValue={product?.category}
                name="category"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                {category?.map((cate) => (
                  <option key={cate._id} value={cate._id}>{cate.name}</option>
                ))}
              </select>
              {errors.category && (
                <span className="text-sm text-red-400">* {errors.category.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <textarea
                defaultValue={product?.images?.join('\n')} // Chuyển đổi mảng thành một chuỗi, mỗi phần tử cách nhau bởi dấu xuống dòng
                {...register("images", { required: true })}
                id="images"
                name="images"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-vl border-gray-300 rounded-md"
              ></textarea>
              {errors.images && (
                <span className="text-sm text-red-400">* {errors.images.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả</label>
              <textarea
                defaultValue={product?.description}
                {...register("description", { required: true })} name="description" id="description" rows={3}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errors.description && (
                <span className="text-sm text-red-400">* {errors.description.message}</span>
              )}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Sửa sản phẩm</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default UpdateProduct_Demon