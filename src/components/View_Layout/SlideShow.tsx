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
   <div className="bg-gray-50 text-[#333] w-full rounded font-[sans-serif] overflow-hidden">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
    <div className="lg:col-span-2 py-10 px-6">
      <h1 className="text-3xl font-bold">Master the Art of Programming and Unlock Possibilities!</h1>
      <p className="mt-4 text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
        et
        tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
        ultrices, non consequat mauris tincidunt.</p>
      <button type="button" className="px-6 py-3 mt-10 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">Get
        the Free Guide</button>
    </div>
    <img src="https://im.uniqlo.com/global-cms/spa/resae01763d908ee9f850be71a2ce13d575fr.jpg" className="w-full h-full object-cover shrink-0" />
  </div>
</div>


  )
}

export default SlideShow