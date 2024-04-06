import { FormProduct } from "~/types/FormProduct";
import instance from ".";

export const createProduct = async (product : FormProduct) => {
    try {
        const {data } = await instance.post(`/products`,product)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const getProducts = async () => {
    try {
        const {data } = await instance.post(`/products`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const updateProduct = async (product: FormProduct) => {
    try {
      const { data } = await instance.put(`/products/${product.id}`, product);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  export const getProduct = async (_id: string) => {
    try {
      const { data } = await instance.get(`/products/${_id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };