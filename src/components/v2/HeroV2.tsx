import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroV2 = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#003B4F]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00B8D4] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0A6E8A] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00B8D4] text-sm font-medium border border-white/10 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B8D4] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B8D4]"></span>
                        </span>
                        Mission, Theology &amp; Emerging Technology
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                        Technology for Mission. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8D4] to-[#E6F7FA]">
                            Formation for the Future.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        MissioTech equips missionaries, ministry leaders, and theological educators to use AI and XR wisely—combining field experience, Reformed theological reflection, practical training, and collaborative research.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-[#00B8D4] text-[#003B4F] font-bold rounded-xl shadow-lg shadow-[#00B8D4]/20 hover:bg-[#E6F7FA] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Explore Our Work
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center gap-8 justify-center lg:justify-start text-gray-400 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#00B8D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>AI Mission Literacy</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#00B8D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>XR Theological Education</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#00B8D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>Missionary Workflows</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-[500px] w-full hidden lg:block perspective-[1000px]">
                    <div className="relative w-full h-full transform rotate-y-[-12deg] hover:rotate-y-0 transition-transform duration-700 ease-out">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl p-6 flex items-center justify-center">
                            <div className="relative w-full h-full bg-white/5 rounded-xl overflow-hidden shadow-inner">
                                {/* Placeholder for a cool dashboard or tech image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#003B4F] to-[#0A6E8A] opacity-80 mix-blend-multiply"></div>
                                <Image
                                    src="/MissioTech Logo.jpeg"
                                    alt="MissioTech mission and technology research"
                                    fill
                                    className="object-contain p-20 drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Floating cards */}
                        <div className="absolute -left-12 bottom-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                            <div className="w-10 h-10 bg-[#E6F7FA] rounded-full flex items-center justify-center text-[#0A6E8A]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-[#1A2A33]">Field-informed</div>
                                <div className="text-xs text-gray-500">Mission Research</div>
                            </div>
                        </div>

                        <div className="absolute -right-8 top-32 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow delay-700">
                            <div className="w-10 h-10 bg-[#E6F7FA] rounded-full flex items-center justify-center text-[#0A6E8A]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-[#1A2A33]">Theology + Practice</div>
                                <div className="text-xs text-gray-500">Responsible Innovation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#FFFFFF" opacity="0.1"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#FFFFFF" opacity="0.4"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFFFF"></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroV2;
