import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
<div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
  <div className="max-md:max-w-lg mx-auto">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Latest Blog Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src="https://readymadeui.com/cardImg.webp" alt="Blog Post 1" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum Dolor</h3>
          <p className="text-sm opacity-75">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
          <a href="javascript:void(0);" className="mt-4 inline-block text-blue-200 text-sm hover:underline">Read More</a>
        </div>
      </div>
      <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src="https://readymadeui.com/hotel-img.webp" alt="Blog Post 2" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">Consectetur Adipiscing</h3>
          <p className="text-sm opacity-75">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
          <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>
        </div>
      </div>
      <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src="https://readymadeui.com/team-image.webp" alt="Blog Post 3" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum Sit Amet</h3>
          <p className="text-sm opacity-75">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
          <a href="javascript:void(0);" className="mt-4 inline-block text-green-200 text-sm hover:underline">Read More</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About