'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="pt-20 pb-12 bg-[#E6F7FA]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">About MissioTech</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Learn about our mission, vision, and the team behind MissioTech's innovative technology solutions.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At MissioTech, our mission is to empower organizations through innovative technology solutions that align with their core values and objectives. We believe that technology should serve a greater purpose beyond efficiency and profit—it should help organizations fulfill their missions and create positive impact.
              </p>
              <p className="text-gray-600">
                We combine cutting-edge AI integration, immersive VR/XR training experiences, and strategic consulting to help our clients navigate the complex digital landscape and achieve meaningful results.
              </p>
            </div>
            <div className="bg-[#E6F7FA] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Innovation with Purpose</h4>
                    <p className="text-gray-600">We pursue technological innovation that serves meaningful objectives and creates lasting value.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Client-Centered Approach</h4>
                    <p className="text-gray-600">We prioritize understanding our clients' unique missions and tailoring solutions to their specific needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Measurable Impact</h4>
                    <p className="text-gray-600">We believe in delivering solutions with quantifiable results and demonstrable return on investment.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-[#0A6E8A] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SJ
              </div>
              <h3 className="text-xl font-bold mb-2">Steve Jun</h3>
              <p className="text-[#0A6E8A] font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-600">
                With over 15 years of experience in technology leadership, Steve founded MissioTech with a vision to create technology solutions that serve a greater purpose.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-[#0A6E8A] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                MA
              </div>
              <h3 className="text-xl font-bold mb-2">Molly AI</h3>
              <p className="text-[#0A6E8A] font-medium mb-3">CTO</p>
              <p className="text-gray-600">
                Molly leads our technical team with expertise in AI and machine learning, ensuring our solutions leverage cutting-edge technology to deliver exceptional results.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-[#0A6E8A] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SA
              </div>
              <h3 className="text-xl font-bold mb-2">Sara AI</h3>
              <p className="text-[#0A6E8A] font-medium mb-3">Head of Consulting</p>
              <p className="text-gray-600">
                Sara brings extensive experience in strategic consulting, helping organizations align their technology initiatives with their core mission and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 ml-6 border-l-2 border-[#0A6E8A] h-full"></div>
              
              <div className="relative mb-12 pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#0A6E8A] flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">2018: Foundation</h3>
                <p className="text-gray-600">
                  MissioTech was founded with a clear vision to develop technology solutions that help organizations fulfill their missions and create positive impact.
                </p>
              </div>
              
              <div className="relative mb-12 pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#0A6E8A] flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">2020: Expansion</h3>
                <p className="text-gray-600">
                  We expanded our service offerings to include VR/XR training solutions, helping organizations create immersive learning experiences for their teams.
                </p>
              </div>
              
              <div className="relative mb-12 pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#0A6E8A] flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">2022: AI Integration</h3>
                <p className="text-gray-600">
                  We launched our AI integration services, enabling clients to leverage artificial intelligence to enhance efficiency and gain valuable insights.
                </p>
              </div>
              
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-[#0A6E8A] flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Today: Global Impact</h3>
                <p className="text-gray-600">
                  Today, MissioTech serves clients across various industries, helping them harness the power of technology to achieve their missions and create meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
