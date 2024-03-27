// import React from 'react';
// import { Carousel } from 'antd';

// const contentStyle: React.CSSProperties = {
//   height: '400px',
//   color: '#fff',
//   lineHeight: '200px',
//   textAlign: 'center',
//   background: '#364d79',
// };

// const SlideShow: React.FC = () => (
//   <Carousel autoplay>
//     <div>
//       <h3 style={contentStyle}><img className='w-full h-full' src="https://ik.imagekit.io/tvlk/blog/2023/07/canh-dep-thien-nhien-Viet-Nam-11-1024x576.jpg" alt="" /></h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}><img className='w-full h-full' src="https://images.vietnamtourism.gov.vn/vn//images/2022/thang_9/tamcocc.jpg" alt="" /></h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}><img className='w-full h-full' src="https://pantravel.vn/wp-content/uploads/2023/11/ruong-bac-thang-kiet-tac-thien-nhien-vi-dai-tu-ban-tay-con-nguoi.jpg" alt="" /></h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}><img className='w-full h-full' src="https://img.pikbest.com/origin/09/41/85/916pIkbEsTzRC.jpg!w700wp" alt="" /></h3>
//     </div>
//   </Carousel>
// );

// export default SlideShow;

import React from 'react'

type Props = {}

const SlideShow = (props: Props) => {
  return (
    <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
  <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
  <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
    <h2 className="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
    <p className="text-lg text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
    <a href="javascript:void(0)" className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
      Book Now
    </a>
  </div>
</div>

  )
}

export default SlideShow