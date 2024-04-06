import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userType } from "~/types/User";

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().required().min(6).max(255),
  confirmPassword: Joi.string().required()
});
type Props = {
  onSignUp: (data: userType) => void
}

const Register = ({ onSignUp }: Props) => {
  const navigate = useNavigate();
  const { register,
    handleSubmit,
    formState: { errors } } = useForm<userType>({
      resolver: joiResolver(registerSchema)
    })
  const onSubmit: SubmitHandler<userType> = (user) => {
    onSignUp(user)
    navigate('/login');
  };
  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
      <div className="text-center mb-16">
        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-52 inline-block" />
        </a>
        <h4 className="text-base font-semibold mt-3">Sign up into your account</h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label className="text-sm mb-2 block">Name</label>
            <input
              {...register('name', {
                required: true,
                minLength: 2,
                maxLength: 100,
              })}
              name="name" type="text" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter name" />
          </div>
          {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}

          <div>
            <label className="text-sm mb-2 block">Email Id</label>
            <input
              {...register('email', {
                required: true,
                minLength: 2,
                maxLength: 255,
              })}
              name="email" type="text" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter email" />
          </div>
          {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
          <div>
            <label className="text-sm mb-2 block">Password</label>
            <input
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 255,
              })}
              name="password" type="password" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter password" />
          </div>
          {errors.password && <p className="text-sm text-red-400">{errors.password.message}</p>}
          <div>
            <label className="text-sm mb-2 block">Confirm Password</label>
            <input
              {...register('confirmPassword', {
                required: true,
                minLength: 6,
                maxLength: 255,
              })}
              name="confirmPassword" type="password" 
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" 
              placeholder="Enter confirm password" />
          </div>
          {errors.confirmPassword && <p className="text-sm text-red-400">{errors.confirmPassword.message}</p>}
        </div>
        <div className="!mt-10">
          <button type="submit" className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
            Sign up
          </button>
        </div>
      </form>
    </div>

  )
}

export default Register