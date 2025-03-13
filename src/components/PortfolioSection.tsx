import React, { useState } from 'react';
export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'E-commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A comprehensive e-commerce solution with inventory management.'
  }, {
    id: 2,
    title: 'Healthcare Management App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Mobile application for patient management and scheduling.'
  }, {
    id: 3,
    title: 'Financial Dashboard',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Real-time analytics dashboard for financial data visualization.'
  }, {
    id: 4,
    title: 'Logistics Tracking System',
    category: 'enterprise',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Enterprise solution for tracking shipments and inventory.'
  }, {
    id: 5,
    title: 'Social Networking App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Mobile application for connecting professionals.'
  }, {
    id: 6,
    title: 'CRM System',
    category: 'enterprise',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Customer relationship management system with analytics.'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  const filters = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'web',
    label: 'Web Applications'
  }, {
    id: 'mobile',
    label: 'Mobile Apps'
  }, {
    id: 'enterprise',
    label: 'Enterprise Solutions'
  }];
  return <section id="portfolio" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] mb-4">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and discover how we've helped businesses
            transform their digital presence.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-on-scroll opacity-0">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === filter.id ? 'bg-[#E53935] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {filter.label}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="relative overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm bg-[#E53935] px-3 py-1 rounded-full uppercase">
                      {project.category === 'web' ? 'Web Application' : project.category === 'mobile' ? 'Mobile App' : 'Enterprise Solution'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-[Poppins] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};