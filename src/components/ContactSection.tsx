import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from 'lucide-react';
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  return <section id="contact" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#1E88E5] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Contact us today and let's discuss how we
            can help bring your ideas to life.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 animate-on-scroll opacity-0">
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold font-[Poppins] mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MapPinIcon size={24} className="text-[#1E88E5]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      123 Business Avenue, Colombo 04, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <PhoneIcon size={24} className="text-[#4CAF50]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-gray-600">+94 11 234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-50 p-3 rounded-full mr-4">
                    <MailIcon size={24} className="text-[#E53935]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-gray-600">info@ceylonfuture.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => <a key={platform} href="#" className="bg-gray-100 hover:bg-[#1E88E5] hover:text-white transition-colors duration-300 p-3 rounded-full">
                        <span className="sr-only">{platform}</span>
                        <div className="w-5 h-5"></div>
                      </a>)}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 animate-on-scroll opacity-0" style={{
          transitionDelay: '200ms'
        }}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold font-[Poppins] mb-6">
                Send Us a Message
              </h3>
              {submitStatus === 'success' && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 animate-fadeIn">
                  Your message has been sent successfully! We\'ll get back to
                  you soon.
                </div>}
              {submitStatus === 'error' && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 animate-fadeIn">
                  There was an error sending your message. Please try again.
                </div>}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Full Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent" placeholder="How can we help you?" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent" placeholder="Tell us about your project..." required></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className={`bg-[#1E88E5] hover:bg-[#1976D2] text-white px-8 py-3 rounded-md transition-all duration-300 font-medium flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? 'Sending...' : <>
                      Send Message <SendIcon size={18} className="ml-2" />
                    </>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};