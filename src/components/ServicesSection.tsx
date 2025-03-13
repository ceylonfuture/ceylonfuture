import React from 'react';
import { Code, Database, Layout, Smartphone, Globe, Server } from 'lucide-react';
export const ServicesSection = () => {
  const services = [{
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
    icon: <Code size={32} className="text-[#1E88E5]" />
  }, {
    title: 'Web Application Development',
    description: 'Responsive and scalable web applications with modern frameworks and technologies.',
    icon: <Layout size={32} className="text-[#4CAF50]" />
  }, {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: <Smartphone size={32} className="text-[#E53935]" />
  }, {
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure and migration services for optimal performance.',
    icon: <Server size={32} className="text-[#1E88E5]" />
  }, {
    title: 'Database Management',
    description: 'Efficient database design, optimization, and management for your data needs.',
    icon: <Database size={32} className="text-[#4CAF50]" />
  }, {
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms with secure payment integration and user-friendly interfaces.',
    icon: <Globe size={32} className="text-[#E53935]" />
  }];
  return <section id="services" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#1E88E5] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to
            help businesses thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-on-scroll opacity-0" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-[Poppins] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};