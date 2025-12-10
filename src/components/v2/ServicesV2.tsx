import React from 'react';
import Link from 'next/link';

const ServiceCard = ({ title, description, icon, link, index }) => {
    return (
        <div
            className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A6E8A] to-[#00B8D4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl origin-left"></div>

            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-2xl bg-[#E6F7FA] text-[#0A6E8A] group-hover:bg-[#0A6E8A] group-hover:text-white transition-colors duration-300">
                <div className="w-8 h-8">
                    {icon}
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-[#1A2A33] group-hover:text-[#0A6E8A] transition-colors">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed bg-clip-text">{description}</p>

            <Link href={link} className="inline-flex items-center text-[#0A6E8A] font-semibold tracking-wide group-hover:gap-2 transition-all">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>
    );
};

const ServicesV2 = () => {
    return (
        <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00B8D4]/5 rounded-full blur-3xl -translate-x-1/2"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#003B4F]/5 rounded-full blur-3xl translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#00B8D4] font-bold tracking-wider uppercase text-sm">What We Do</span>
                    <h2 className="text-4xl font-bold mt-2 mb-6 text-[#1A2A33]">Transformative Technology Services</h2>
                    <p className="text-xl text-gray-600">
                        We provide comprehensive solutions to help you navigate the digital landscape and achieve your mission.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        index={0}
                        title="AI Integration"
                        description="Leverage the power of Artificial Intelligence to automate complex processes, predict trends, and optimize operations for maximum efficiency."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                        link="/services#ai-integration"
                    />

                    <ServiceCard
                        index={1}
                        title="VR/XR Training"
                        description="Revolutionize learning with immersive virtual reality experiences that improve retention rates and safety in high-risk training scenarios."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        }
                        link="/services#vr-xr-training"
                    />

                    <ServiceCard
                        index={2}
                        title="Strategic Consulting"
                        description="Expert guidance to align your technology investments with business goals, ensuring a roadmap for sustainable growth and innovation."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        }
                        link="/services#consulting"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesV2;
