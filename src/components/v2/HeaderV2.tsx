'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

const HeaderV2 = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const solidHeader = scrolled || (pathname !== '/' && pathname !== '/v2');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMobileMenuOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solidHeader ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                        <Image
                            src="/MissioTech Logo.jpeg"
                            alt="MissioTech"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className={`text-xl font-bold tracking-tight transition-colors ${solidHeader ? 'text-[#003B4F]' : 'text-white'
                        }`}>
                        MissioTech
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-medium text-sm tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00B8D4] after:transition-all hover:after:w-full ${solidHeader ? 'text-[#1A2A33] hover:text-[#0A6E8A]' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95 ${solidHeader
                                ? 'bg-[#0A6E8A] text-white hover:bg-[#003B4F]'
                                : 'bg-white text-[#003B4F] hover:bg-[#E6F7FA]'
                            }`}
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden p-2 rounded-lg"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-controls="mobile-navigation"
                    aria-expanded={mobileMenuOpen}
                >
                    <div className={`w-6 h-0.5 mb-1.5 rounded-full transition-all ${solidHeader ? 'bg-[#1A2A33]' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 mb-1.5 rounded-full transition-all ${solidHeader ? 'bg-[#1A2A33]' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 rounded-full transition-all ${solidHeader ? 'bg-[#1A2A33]' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div id="mobile-navigation" className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <nav className="flex flex-col p-6 space-y-4" aria-label="Mobile navigation">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-lg font-medium text-[#1A2A33] hover:text-[#0A6E8A]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="w-full text-center py-3 bg-[#0A6E8A] text-white rounded-lg font-semibold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default HeaderV2;
