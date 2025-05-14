'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ServicesPage = () => {
  return (
    <main>
      <Header />
      <div className="pt-20 pb-12 bg-[#E6F7FA]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Discover how MissioTech can help your organization achieve its mission through innovative technology solutions.
          </p>
        </div>
      </div>

      {/* AI Integration Section */}
      <section id="ai-integration" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">AI Integration</h2>
              <p className="text-gray-600 mb-6">
                Our AI integration services help organizations harness the power of artificial intelligence to enhance efficiency, automate processes, and gain valuable insights from their data.
              </p>
              <p className="text-gray-600 mb-6">
                We work closely with your team to identify areas where AI can create the most impact, develop custom solutions tailored to your specific needs, and ensure seamless integration with your existing systems.
              </p>
              <h3 className="text-xl font-bold mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">
                    ✅
                  </div>
                  <p className="text-gray-600">Custom AI solution development tailored to your organization's needs</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">
                    ✅
                  </div>
                  <p className="text-gray-600">Seamless integration with existing systems and workflows</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">
                    ✅
                  </div>
                  <p className="text-gray-600">Advanced data analytics and predictive modeling</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">
                    ✅
                  </div>
                  <p className="text-gray-600">Comprehensive training and ongoing support</p>
                </li>
              </ul>
              <a href="https://missiotech-web.vercel.app/contact">
                <button className="btn-primary">Request a Consultation</button>
              </a>
            </div>
            <div className="bg-[#E6F7FA] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Success Story</h3>
              <p className="text-gray-600 mb-4 italic">
                "MissioTech's AI integration services have revolutionized our data analysis capabilities. We've seen a 40% increase in efficiency and gained valuable insights that were previously hidden in our data."
              </p>
              <p className="font-bold">- John Doe, CEO, TechInnovate</p>
              {/* Progress bars remain unchanged */}
            </div>
          </div>
        </div>
      </section>

      {/* VR/XR Training Section */}
      <section id="vr-xr-training" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-[#E6F7FA] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Success Story</h3>
              <p className="text-gray-600 mb-4 italic">
                "The VR training solutions developed by MissioTech have transformed our employee onboarding process. Training completion rates are up by 85%, and knowledge retention has significantly improved."
              </p>
              <p className="font-bold">- Jane Smith, Training Director, EduFuture</p>
              {/* Progress bars remain unchanged */}
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">VR/XR Training</h2>
              <p className="text-gray-600 mb-6">
                Our VR/XR training solutions create immersive learning experiences that enhance engagement, improve knowledge retention, and accelerate skill development.
              </p>
              <p className="text-gray-600 mb-6">
                We design and develop custom virtual and extended reality training programs that simulate real-world scenarios, allowing your team to practice skills in a safe and controlled environment.
              </p>
              <h3 className="text-xl font-bold mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">✅</div>
                  <p className="text-gray-600">Custom VR/XR training program development</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">✅</div>
                  <p className="text-gray-600">Realistic simulation of complex scenarios and environments</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">✅</div>
                  <p className="text-gray-600">Interactive learning with real-time feedback</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">✅</div>
                  <p className="text-gray-600">Comprehensive analytics and performance tracking</p>
                </li>
              </ul>
              <a href="https://missiotech-web.vercel.app/metaversesolution">
                <button className="btn-primary">Explore VR/XR Solutions</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Consulting Section */}
      <section id="consulting" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Consulting</h2>
              <p className="text-gray-600 mb-6">
                Our strategic consulting services help organizations navigate the complex digital landscape, develop technology roadmaps, and align their technology initiatives with their core mission and objectives.
              </p>
              <p className="text-gray-600 mb-6">
                We work closely with your leadership team to understand your organization's unique challenges and opportunities, and develop customized strategies that drive meaningful results.
              </p>
              <h3 className="text-xl font-bold mb-3">Key Features:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">✅</div>
                  <p className="text-gray-600">Comprehensive technology assessment and gap analysis</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">✅</div>
                  <p className="text-gray-600">Custom technology roadmap development</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">✅</div>
                  <p className="text-gray-600">Digital transformation strategy and implementation</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#0A6E8A] mr-3 mt-1">✅</div>
                  <p className="text-gray-600">Technology vendor selection and management</p>
                </li>
              </ul>
              <a href="https://missiotech-web.vercel.app/contact">
                <button className="btn-primary">Schedule a Strategy Session</button>
              </a>
            </div>
            <div className="bg-[#E6F7FA] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Success Story</h3>
              <p className="text-gray-600 mb-4 italic">
                "MissioTech's strategic consulting helped us navigate our digital transformation journey. Their roadmap was clear, actionable, and has positioned us as a leader in our industry."
              </p>
              <p className="font-bold">- Robert Johnson, CTO, GlobalSolutions</p>
              {/* Progress bars remain unchanged */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;
