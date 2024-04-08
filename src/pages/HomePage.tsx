import SlideShow from '../components/View_Layout/SlideShow'
import { NavLink } from 'react-router-dom'
import { productsCoreType } from '~/types/Product'
type Props = {
    products:productsCoreType[]
}
const HomePage = ({products}:Props) => {
    
    return (
        <div className="font-[sans-serif] bg-gray-100">
  <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
  <SlideShow />
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Clothes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
    <NavLink to={`detail/${product._id}`}>
      <div className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
          </svg>
        </div>
        <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
          <img src={product.thumbnail} alt="Product 1" className="h-full w-full object-contain" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 truncate text-container w-48 overflow-hidden whitespace-nowrap">{product.title}</h3>
          <p className="text-gray-500 text-sm mt-2">{product.category?.name}</p>
          <h4 className="text-lg text-gray-700 font-bold mt-4">${product.price}</h4>
        </div>
      </div>
      </NavLink>
      ))}
    </div>
    <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
  <div className="max-md:order-1 max-md:text-center">
    <h3 className="md:text-3xl text-2xl md:leading-10">Prompt Delivery and Enjoyable Dining Experience.</h3>
    <p className="mt-4 text-sm">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
    <button type="button" className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-[#333] hover:bg-[#333] hover:text-white transition-all duration-300">Explore</button>
  </div>
  <div className="md:h-[450px]">
    <img src="https://im.uniqlo.com/global-cms/spa/res0d5fe8756560fa629a01bb80729197f5fr.jpg" className="w-full h-full md:object-contain" />
  </div>
</div>
      {/* <CateProduct/> */}
  </div>
</div>

    )
}

export default HomePage
