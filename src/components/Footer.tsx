import React from 'react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-[Poppins] mb-4">
              CeylonFuture
            </h3>
            <p className="text-gray-400 mb-6">
              Innovative software solutions for businesses of all sizes. We help
              transform your ideas into reality.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => <a key={platform} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5"></div>
                  </a>)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold font-[Poppins] mb-4">Services</h3>
            <ul className="space-y-3">
              {['Custom Software Development', 'Web Application Development', 'Mobile App Development', 'Cloud Solutions', 'Database Management', 'E-commerce Solutions'].map(service => <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold font-[Poppins] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[{
              name: 'Home',
              href: '#home'
            }, {
              name: 'About Us',
              href: '#about'
            }, {
              name: 'Services',
              href: '#services'
            }, {
              name: 'Portfolio',
              href: '#portfolio'
            }, {
              name: 'Contact',
              href: '#contact'
            }, {
              name: 'Privacy Policy',
              href: '#'
            }].map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold font-[Poppins] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Business Avenue, Colombo 04, Sri Lanka</li>
              <li>+94 11 234 5678</li>
              <li>info@ceylonfuture.com</li>
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CeylonFuture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};