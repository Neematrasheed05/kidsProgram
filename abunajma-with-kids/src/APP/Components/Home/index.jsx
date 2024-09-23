import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../LandingPage/Navbar';
import kids from "../../assets/openArms.jpg"; // Ensure the correct path for your image
import bg from "../../assets/bg.jpg"; // Ensure the correct path for your background image

const letters = [
  { char: 'A', color: 'text-red-500' },
  { char: 'B', color: 'text-yellow-500' },
  { char: 'U', color: 'text-green-500' },
  { char: 'N', color: 'text-blue-500' },
  { char: 'A', color: 'text-purple-500' },
  { char: 'J', color: 'text-pink-500' },
  { char: 'M', color: 'text-orange-500' },
  { char: 'A', color: 'text-indigo-500' },
  { char: ' ', color: '' },
  { char: 'W', color: 'text-red-500' },
  { char: 'I', color: 'text-yellow-500' },
  { char: 'T', color: 'text-green-500' },
  { char: 'H', color: 'text-blue-500' },
  { char: ' ', color: '' },
  { char: 'K', color: 'text-purple-500' },
  { char: 'I', color: 'text-pink-500' },
  { char: 'D', color: 'text-orange-500' },
  { char: 'S', color: 'text-indigo-500' },
];

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative w-full">
        <div 
          className="relative bg-cover bg-center h-full" 
          style={{ backgroundImage: `url(${bg})` }} // Set the background image
        >
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7 relative z-10"> {/* Relative z-index to bring content above overlay */}
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl md:text-5xl lg:w-10/12">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className={letter.color}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      data-aos-duration="500"
                    >
                      {letter.char}
                    </span>
                  ))}
                </h1>
                <p className="mt-8 text-gray-100 lg:w-10/12">
                  Sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                <img 
                  src={kids} 
                  className="relative" 
                  alt="kids illustration" 
                  loading="lazy" 
                  width="4500" 
                  height="4500" 
                  data-aos="zoom-in" // Add AOS attribute for image animation
                  data-aos-duration="500" // Duration of image animation
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
