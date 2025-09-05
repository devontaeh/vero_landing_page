'use client';

import React from 'react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* Desktop Layout: Logo + Social on left, Copyright + Privacy on right */}
                <div className="hidden sm:flex items-center justify-between">
                    {/* Left side: Logo + Social links */}
                    <div className="flex items-center space-x-6">
                        <Logo size="xl" showText={false} />
                        <div className="flex items-center space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 p-1"
                                aria-label="X (formerly Twitter)"
                            >
                                <XIcon className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 p-1"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right side: Copyright + Privacy */}
                    <div className="flex items-center space-x-6">
                        <div className="text-sm text-gray-500">
                            © {currentYear} Vero. All rights reserved.
                        </div>
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                            aria-label="Privacy Policy"
                        >
                            Privacy
                        </a>
                    </div>
                </div>

                {/* Mobile Layout: Stacked vertically */}
                <div className="flex flex-col items-center space-y-4 sm:hidden">
                    {/* Logo */}
                    <Logo size="xl" showText={false} />

                    {/* Social links */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 p-1"
                            aria-label="X (formerly Twitter)"
                        >
                            <XIcon className="w-4 h-4" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 p-1"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Copyright + Privacy */}
                    <div className="text-sm text-gray-500 text-center">
                        © {currentYear} Vero. All rights reserved. •
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 transition-colors duration-200 ml-1"
                            aria-label="Privacy Policy"
                        >
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;