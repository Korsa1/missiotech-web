'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/MissioTech Logo.jpeg" 
            alt="MissioTech Logo" 
            width={50} 
            height={50}
            className="rounded"
          />
          <span className="text-xl font-bold text-[#003B4F]">MissioTech</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-[#1A2A33] hover:text-[#0A6E8A] font-medium transition-colors">Home</Link>
          <Link href="/about" className="text-[#1A2A33] hover:text-[#0A6E8A] font-medium transition-colors">About</Link>
          <Link href="/services" className="text-[#1A2A33] hover:text-[#0A6E8A] font-medium transition-colors">Services</Link>
          <Link href="/dashboard" className="text-[#1A2A33] hover:text-[#0A6E8A] font-medium transition-colors">Dashboard</Link>
          <Link href="/contact" className="text-[#1A2A33] hover:text-[#0A6E8A] font-medium transition-colors">Contact</Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button 
            className="text-[#1A2A33] hover:text-[#0A6E8A]" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 항목 */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="flex flex-col space-y-3">
            <li><Link href="/" className="block text-[#1A2A33] hover:text-[#0A6E8A]">Home</Link></li>
            <li><Link href="/about" className="block text-[#1A2A33] hover:text-[#0A6E8A]">About</Link></li>
            <li><Link href="/services" className="block text-[#1A2A33] hover:text-[#0A6E8A]">Services</Link></li>
            <li><Link href="/dashboard" className="block text-[#1A2A33] hover:text-[#0A6E8A]">Dashboard</Link></li>
            <li><Link href="/contact" className="block text-[#1A2A33] hover:text-[#0A6E8A]">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
