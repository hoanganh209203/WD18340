import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { onLogin } from "~/Apis/User";
import { userType } from "~/types/User";




const Login = () => {
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const navigate = useNavigate()
  const handleSubmit = async (e:any)=>{

    e.preventDefault()
    try {
      const user = await onLogin({email, password});
      // console.log(user);
      
      if (user?.name==="AxiosError"){
        alert(user.response.data)
      }
      else {
        sessionStorage.setItem("user",JSON.stringify(user))
        console.log(user);
        
        alert('Đăng nhập thành công')
        if(user.user.role == 'member'){
          navigate('/')
        }else{
          navigate('/admin')
        }
      }
    } catch (error) {
      alert((error as Error)?.message);
    }
  };
  return (
    <div className="bg-gray-50 font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-40 mb-10" />
          </a>
          <h2 className="text-center text-3xl font-extrabold">
            Log in to your account
          </h2>
          <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                onChange={(e:any)=>{setEmail(e.target.value)}}
                name="email" type="email" autoComplete="email" required
                className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Email address" />
            </div>
            <div>
              <input
                onChange={(e:any)=>{setPassword(e.target.value)}}
                name="password" type="password" autoComplete="current-password" required
                className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Password" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center">
              
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a href="jajvascript:void(0);" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="!mt-10">
              <button type="submit" className="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Login