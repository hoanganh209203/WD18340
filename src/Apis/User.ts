import { userType } from "~/types/User";
import instance from ".";

export const onRegister = async (user:userType) => {
    try {
        const {data } = await instance.post(`/user/signup`,user)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const onLogin = async (user:userType) => {
    try {
        const {data } = await instance.post(`/user/signin`,user)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const getAuth = async (_id: string) => {
    try {
      const { data } = await instance.get(`/auth/${_id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };