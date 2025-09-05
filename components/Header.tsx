'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { scrollToWaitlist } from '../src/utils/scrollToWaitlist';

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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center h-14 sm:h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo - positioned at left edge */}
                <div className="flex-shrink-0">
                    <Logo size="xl" showText={false} />
                </div>

                {/* Navigation Links - Desktop Only */}
                <nav className="hidden md:flex space-x-8 flex-1 justify-center">
                    {/* Navigation links can be added here if needed */}
                </nav>

                {/* CTA Button - Desktop and Mobile */}
                <div className="flex items-center">
                    <button
                        onClick={scrollToWaitlist}
                        className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 lg:px-6 lg:py-2 bg-[#015FFC] text-white text-xs sm:text-sm lg:text-base font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
                    >
                        Join Waitlist
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
