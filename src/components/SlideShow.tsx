import React from 'react'

const SlideShow = () => {
    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">

            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                <div className=" duration-700 ease-in-out" data-carousel-item>
                    <img src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

            </div>
        </div>
    )
}
export default SlideShow
