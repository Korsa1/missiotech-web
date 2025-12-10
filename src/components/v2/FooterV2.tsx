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
                            Empowering organizations with next-gen technology solutions. We bridge the gap between mission and innovation.
                        </p>
                        <div className="flex gap-4">
                            {['twitter', 'linkedin', 'github'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00B8D4] hover:text-white transition-all duration-300">
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Partners', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-[#00B8D4] transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services#ai" className="hover:text-[#00B8D4] transition-colors">AI Integration</Link></li>
                            <li><Link href="/services#vr" className="hover:text-[#00B8D4] transition-colors">VR/XR Training</Link></li>
                            <li><Link href="/services#consulting" className="hover:text-[#00B8D4] transition-colors">Strategic Consulting</Link></li>
                            <li><Link href="/services#data" className="hover:text-[#00B8D4] transition-colors">Data Analytics</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#00B8D4] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>missiotechadm@gmail.com</span>
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
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV2;
