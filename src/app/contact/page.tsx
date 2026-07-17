'use client';

import React from 'react';
import Link from 'next/link';
import HeaderV2 from '@/components/v2/HeaderV2';
import FooterV2 from '@/components/v2/FooterV2';

const ContactPage = () => {
  return (
    <main>
      <HeaderV2 />
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
            <div className="space-y-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#0A6E8A] mb-3">Let&apos;s build with purpose</p>
                <h2 className="text-3xl font-bold mb-4">Tell us about your mission and challenge.</h2>
                <p className="text-gray-600 leading-relaxed">
                  We help mission-driven organizations explore practical uses of AI, immersive learning, and digital strategy. Share your context and we will identify a useful next step.
                </p>
              </div>
              <div className="space-y-4">
                <a href="mailto:missiotechadm@gmail.com" className="flex items-center gap-3 text-[#0A6E8A] font-semibold hover:underline">
                  <span aria-hidden="true">✉</span> missiotechadm@gmail.com
                </a>
                <p className="flex items-start gap-3 text-gray-600">
                  <span aria-hidden="true">⌖</span> Teheran-ro 70-gil, Gangnam-gu, Seoul, Republic of Korea
                </p>
              </div>
              <div className="rounded-xl bg-[#E6F7FA] p-6">
                <h3 className="font-bold text-lg mb-2">What happens next?</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>We review your message and ministry or organizational context.</li>
                  <li>We suggest a focused consultation or suitable service.</li>
                  <li>We agree on a practical first step, scope, and timeline.</li>
                </ol>
              </div>
            </div>

            <div id="contact-form" className="scroll-mt-24">
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
          <Link href="#contact-form" className="btn-primary inline-block">Schedule a Consultation</Link>
        </div>
      </section>

      <FooterV2 />
    </main>
  );
};

export default ContactPage;
