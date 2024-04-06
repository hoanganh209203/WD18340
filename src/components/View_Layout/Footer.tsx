import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <NavLink to={'/'} className=" gap-6 mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://static.ybox.vn/2023/10/4/1696481102579-thao29o9x4co-avatar.png" className="h-28 w-full" alt="Flowbite Logo" />
                <span className="self-center text-xl font-bold whitespace-nowrap text-black">Anhlthph29890</span>
            </NavLink>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/shop" className="hover:underline me-4 md:me-6">Shop</a>
                </li>
                <li>
                    <a href="/login" className="hover:underline me-4 md:me-6">Login</a>
                </li>
                <li>
                    <a href="/register" className="hover:underline">Register</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer
