import Image from 'next/image';
import officeImage from '../public/office.png'; // Import your image here

const AboutUs = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white rounded-xl overflow-hidden">
        
        {/* <!-- Left Section with Image --> */}
        <div className="relative w-full lg:w-[40%] h-[85vh] lg:ml-[50px] mb-6 lg:mb-0 lg:mr-[30px]">
          <div className="absolute top-[-10%] left-[-10%] w-full h-full">
            <img
              src="/Ellipse 18.png"
              alt="Decorative"
              className="object-contain h-full w-full"
            />
          </div>
          <Image src={"/office.png"} layout='fill' className='rounded-xl' objectFit="cover" alt="Office" />
        </div>
        
        {/* <!-- Right Section with Text --> */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center p-4 space-y-6 lg:space-y-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Us</h1>
          
          <div className='space-y-4'>
            <div className='mb-4'>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Reliable & Secure Parking Solutions</h2>
              <p className="text-gray-700 text-sm md:text-base">
                At Budget Parking Heathrow, we prioritize your peace of mind with secure and convenient parking options. Our facilities are equipped with 24/7 CCTV, secure fencing, and regular patrols, ensuring your vehicle is safe while you travel.
              </p>
            </div>
            
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Affordable & Customer-Focused Services</h2>
              <p className="text-gray-700 text-sm md:text-base">
                We believe in providing budget-friendly parking without sacrificing quality. With options like Park and Ride and Meet and Greet, we cater to various needs and budgets, all backed by exceptional customer service to make your experience seamless from start to finish.
              </p>
            </div>
          </div>
          
          <button className="bg-[#F26922] w-full lg:w-[40%] text-white px-4 py-2 rounded-md">
            Our Parking Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
