'use client';

import React, { useState, useEffect } from 'react';

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">V</span>
                            </div>
                            <span className="ml-2 text-gray-900 font-medium text-sm sm:text-base">
                                Vero
                            </span>
                        </div>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <nav className="hidden md:flex space-x-8">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-900 font-medium text-sm sm:text-base hover:opacity-90 transition-opacity duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center space-x-4">
                        <button className="hidden sm:inline-flex items-center px-4 py-2 sm:px-6 sm:py-2 bg-gray-900 text-white text-sm sm:text-base font-medium rounded-lg hover:opacity-90 transition-opacity duration-200">
                            Get Started
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
            </div>
        </header>
    );
};

export default Header;
