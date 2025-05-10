import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="section bg-gradient-to-r from-[#003B4F] to-[#0A6E8A] text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Partner with MissioTech to leverage cutting-edge technology solutions that align with your mission and drive meaningful results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="btn-primary inline-block text-center">
            Contact Us Today
          </Link>
          <Link href="/services" className="btn-secondary inline-block text-center">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
