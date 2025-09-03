'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { scrollToWaitlist } from './src/utils/scrollToWaitlist';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center h-14 sm:h-16">
                {/* Logo - positioned at left edge */}
                <div className="flex-shrink-0 pl-4 sm:pl-6 lg:pl-8">
                    <Logo size="xl" showText={false} />
                </div>

                {/* Navigation Links - Desktop */}
                <nav className="hidden md:flex space-x-8 flex-1 justify-center">
                    {/* {navigationLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-900 font-medium text-sm sm:text-base hover:opacity-90 transition-opacity duration-200"
                        >
                            {link.name}
                        </a>
                    ))} */}
                </nav>

                {/* CTA Button - positioned at right edge */}
                <div className="flex items-center space-x-4 pr-4 sm:pr-6 lg:pr-8">
                    <button
                        onClick={scrollToWaitlist}
                        className="hidden sm:inline-flex items-center px-4 py-2 sm:px-6 sm:py-2 bg-[#015FFC] text-white text-sm sm:text-base font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
                    >
                        Join Waitlist
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-gray-900 hover:opacity-90 transition-opacity duration-200">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
