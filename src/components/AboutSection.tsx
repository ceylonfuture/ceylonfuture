import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export const AboutSection = () => {
  const values = ['Client-focused approach', 'Innovative solutions', 'Quality and reliability', 'Timely delivery', 'Technical excellence', 'Continuous improvement'];
  return <section id="about" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Our Team" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="lg:w-1/2 animate-on-scroll opacity-0" style={{
          transitionDelay: '200ms'
        }}>
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] mb-4">
              About CeylonFuture
            </h2>
            <div className="w-20 h-1 bg-[#4CAF50] mb-6"></div>
            <p className="text-gray-700 mb-6">
              Founded in 2015, CeylonFuture has been at the forefront of digital
              transformation, helping businesses across multiple industries
              leverage technology to achieve their goals.
            </p>
            <p className="text-gray-700 mb-8">
              Our team of experienced developers, designers, and project
              managers work collaboratively to deliver exceptional software
              solutions that drive business growth and innovation.
            </p>
            <h3 className="text-xl font-bold font-[Poppins] mb-4">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, index) => <div key={index} className="flex items-center">
                  <CheckCircleIcon size={20} className="text-[#4CAF50] mr-2" />
                  <span>{value}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};