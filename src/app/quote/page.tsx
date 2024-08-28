import React from "react";

const Pricing = () => {
  // const boxStyles = (box: string) => ({
  //   borderRadius: "0px 50px 0px 50px",
  //   backgroundColor:"white",
  //   color:"black",
  // });
  return (
    <div className="py-12">
          {/* <!-- Image on the right and slightly higher --> */}
    <div className="absolute right-0 mt-[-48px]">
        <img
          src="./Ellipse 17.png"
          alt="Decorative"
          className="object-contain h-[752px]"
        />
      </div>
  <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl px-4">
    {/* <!-- Reusable Card with top-right border radius of 30px --> */}
<div className="relative flex flex-col bg-white shadow-md w-full p-8 rounded-tr-30 bg-gray-200">
  {/* Rest of your content */}
  
  <div className="">
    {/* Main Heading */}
    <h1 className="text-4xl font-bold text-left text-black mb-4">Meet and Greet</h1>

    {/* Sub Heading */}
    <h3 className="text-lg font-semibold text-left text-gray-700 mt-6">Silver Heading</h3>

    {/* Price Heading */}
    <h1 className="text-4xl font-bold text-left text-black mt-4">$140</h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-6 text-black mt-8">
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
          
        <p className="text-base">5 team members</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">200+ components</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full bg-green border-green" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">40+ built-in pages</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">1 year free updates</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">Lifetime technical support</p>
      </li>
    </ul>
  </div>
  <div className="flex gap-1 mt-7 items-center text-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
    </div>      
    <div className="mt-12">
    <button className="bg-orange-500 ml-[30%] text-white py-3.5 px-7 w-50 text-sm font-bold uppercase rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] focus:scale-[1.02] active:scale-100 text-blue-gray-900 block">
      Buy Now
    </button>
  </div>
</div>

    {/* <!-- Repeat the above structure for other cards -->
    <!-- Card 2 --> */}
        {/* <!-- Reusable Card with top-right border radius of 30px --> */}
<div className="relative flex flex-col bg-white shadow-md w-full p-8 rounded-tr-30 bg-gray-200">
  {/* Rest of your content */}
  
  <div className="">
    {/* Main Heading */}
    <h1 className="text-4xl font-bold text-left text-black mb-4">Meet and Greet</h1>

    {/* Sub Heading */}
    <h3 className="text-lg font-semibold text-left text-gray-700 mt-6">Silver Heading</h3>

    {/* Price Heading */}
    <h1 className="text-4xl font-bold text-left text-black mt-4">$140</h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-6 text-black mt-8">
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
          
        <p className="text-base">5 team members</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">200+ components</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full bg-green border-green" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">40+ built-in pages</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">1 year free updates</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">Lifetime technical support</p>
      </li>
    </ul>
  </div>
  <div className="flex gap-1 mt-7 items-center text-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
    </div>      
    <div className="mt-12">
    <button className="bg-orange-500 ml-[30%] text-white py-3.5 px-7 w-50 text-sm font-bold uppercase rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] focus:scale-[1.02] active:scale-100 text-blue-gray-900 block">
      Buy Now
    </button>
  </div>
</div>


    {/* <!-- Card 3 --> */}
    {/* <!-- Reusable Card with top-right border radius of 30px --> */}
    <div className="relative flex flex-col bg-white shadow-md w-full p-8 rounded-tr-30 bg-gray-200">
  {/* Rest of your content */}
  
  <div className="">
    {/* Main Heading */}
    <h1 className="text-4xl font-bold text-left text-black mb-4">Meet and Greet</h1>

    {/* Sub Heading */}
    <h3 className="text-lg font-semibold text-left text-gray-700 mt-6">Silver Heading</h3>

    {/* Price Heading */}
    <h1 className="text-4xl font-bold text-left text-black mt-4">$140</h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-6 text-black mt-8">
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
          
        <p className="text-base">5 team members</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">200+ components</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full bg-green border-green" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">40+ built-in pages</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">1 year free updates</p>
      </li>
      <li className="flex items-center gap-6">
        <span className="p-1 border rounded-full" style={{backgroundColor: "green", border: "green"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </span>
        <p className="text-base">Lifetime technical support</p>
      </li>
    </ul>
  </div>
  <div className="flex gap-1 mt-7 items-center text-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927C11.282 2.316 12.018 2.316 12.251 2.927l1.04 3.234a1.5 1.5 0 001.417.974h3.423c.969 0 1.371 1.24.588 1.81l-2.779 2.019a1.5 1.5 0 00-.54 1.7l1.04 3.234c.233.61-.206 1.273-.817 1.273a1.5 1.5 0 00-.892-.306l-3.52-.001a1.5 1.5 0 00-1.417.974L11.049 18.7a1.5 1.5 0 01-2.734-1.5l1.04-3.234a1.5 1.5 0 00-.54-1.7l-2.779-2.019c-.783-.57-.38-1.81.588-1.81h3.423a1.5 1.5 0 001.417-.974l1.04-3.234z"/>
      </svg>
    </div>      
    <div className="mt-12">
    <button className="bg-orange-500 ml-[30%] text-white py-3.5 px-7 w-50 text-sm font-bold uppercase rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] focus:scale-[1.02] active:scale-100 text-blue-gray-900 block">
      Buy Now
    </button>
  </div>
</div>
  </div>
    </div>
  );
};

export default Pricing;
