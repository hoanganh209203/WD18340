import React from 'react'

const SlideShow = () => {
    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">

            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                <div className=" duration-700 ease-in-out" data-carousel-item>
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

            </div>
        </div>
    )
}
export default SlideShow
