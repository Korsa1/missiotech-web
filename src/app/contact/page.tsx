'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactPage = () => {
  return (
    <main>
      <Header />
      <div className="pt-20 pb-12 bg-[#E6F7FA]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Get in touch with our team to discuss how MissioTech can help your organization achieve its mission through innovative technology solutions.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info (좌측) 그대로 유지 */}

            <div>
              <form 
                action="https://formspree.io/f/meogvobo"
                method="POST"
                className="card p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E8A]" 
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E8A]" 
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E8A]" 
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E8A]" 
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and learn how MissioTech can help your organization achieve its mission through innovative technology solutions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
