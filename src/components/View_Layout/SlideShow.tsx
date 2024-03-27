import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '200px',
  textAlign: 'center',
  background: '#364d79',
};

const SlideShow: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img className='w-full h-full' src="https://intphcm.com/data/upload/banner-la-gi.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='w-full h-full' src="https://intphcm.com/data/upload/mau-banner-duong.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='w-full h-full' src="https://vinasite.com.vn/wp-content/uploads/2022/04/thiet-ke-banner.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='w-full h-full' src="https://www.shutterstock.com/image-vector/flash-sale-promotion-banner-25-600nw-2159885029.jpg" alt="" /></h3>
    </div>
  </Carousel>
);

export default SlideShow;