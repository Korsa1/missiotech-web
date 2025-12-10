import React from 'react';
import Link from 'next/link';

const CallToActionV2 = () => {
    return (
        <section className="relative py-24 bg-[#003B4F] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0A6E8A] rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B8D4] rounded-full blur-[100px] opacity-20 translate-y-1/3 -translate-x-1/3"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8D4] to-[#E6F7FA]">Revolutionize</span> Your Future?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Partner with MissioTech today and unlock the full potential of your organization through our bespoke technology solutions.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-[#00B8D4] text-[#003B4F] font-bold rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all duration-300"
                    >
                        Start Your Journey
                    </Link>
                    <Link
                        href="/services"
                        className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
                    >
                        See What We Do
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToActionV2;
