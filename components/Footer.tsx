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
    return (
        <footer className="py-12 px-6 lg:px-8 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-3">
                        <Logo size="lg" showText={false} />
                        <div className="text-sm text-gray-500">
                            © 2025 Vero. All rights reserved.
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                            aria-label="Privacy Policy"
                        >
                            Privacy
                        </a>

                        <div className="flex items-center space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110"
                                aria-label="X (formerly Twitter)"
                            >
                                <XIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;