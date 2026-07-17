import React from 'react';
import Link from 'next/link';

const FooterV2 = () => {
    return (
        <footer className="bg-[#1A2A33] text-gray-400 pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="text-2xl font-bold text-white tracking-tight">MissioTech</div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Researching, teaching, and building at the intersection of Christian mission, theological education, AI, and immersive technology.
                        </p>
                        <Link href="/contact" className="inline-flex items-center font-semibold text-[#00B8D4] hover:text-white transition-colors">
                            Start a conversation <span aria-hidden="true" className="ml-2">→</span>
                        </Link>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="hover:text-[#00B8D4] transition-colors">About Us</Link></li>
                            <li><Link href="/dashboard" className="hover:text-[#00B8D4] transition-colors">Dashboard</Link></li>
                            <li><Link href="/metaverseSolution" className="hover:text-[#00B8D4] transition-colors">Metaverse Solutions</Link></li>
                            <li><Link href="/contact" className="hover:text-[#00B8D4] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services#missionary-ai-training" className="hover:text-[#00B8D4] transition-colors">Missionary AI Training</Link></li>
                            <li><Link href="/services#theological-education" className="hover:text-[#00B8D4] transition-colors">Theological Education</Link></li>
                            <li><Link href="/services#mission-research" className="hover:text-[#00B8D4] transition-colors">AI &amp; XR Research</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#00B8D4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <a href="mailto:missiotechadm@gmail.com" className="hover:text-[#00B8D4] transition-colors">missiotechadm@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#00B8D4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Teheran-ro 70-gil, Gangnam-gu, Seoul, Republic of Korea</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <div>&copy; {new Date().getFullYear()} MissioTech. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV2;
