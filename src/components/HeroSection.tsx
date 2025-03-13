import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section id="home" className="bg-gradient-to-r from-blue-50 to-blue-100 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll opacity-0 transition-all duration-700 ease-in-out" style={{
        transform: 'translateY(20px)'
      }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Poppins] mb-6 leading-tight">
            Innovative{' '}
            <span className="text-[#1E88E5]">Software Solutions</span> for Your
            Business
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            We transform your ideas into powerful digital products with
            cutting-edge technology and exceptional user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-8 py-3 rounded-md transition-all duration-300 font-medium text-center flex items-center justify-center gap-2 hover:gap-3">
              Get Started <ArrowRightIcon size={20} />
            </a>
            <a href="#services" className="border-2 border-[#1E88E5] text-[#1E88E5] hover:bg-blue-50 px-8 py-3 rounded-md transition-all duration-300 font-medium text-center">
              Our Services
            </a>
          </div>
        </div>
        <div className="md:w-1/2 animate-on-scroll opacity-0 transition-all duration-700 delay-300 ease-in-out" style={{
        transform: 'translateY(20px)'
      }}>
          <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" alt="Software Development" className="w-full h-auto rounded-lg shadow-xl" />
        </div>
      </div>
    </section>;
};