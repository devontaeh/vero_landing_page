'use client';

import React from 'react';
import WaitlistForm from './src/components/WaitlistForm';

const CTA: React.FC = () => {
    return (
        <section className="w-full bg-gradient-to-br from-gray-50 to-white py-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    {/* Section Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Ready to Transform Your Trading?
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Join thousands of forex and futures traders who've elevated their performance through structured journaling and detailed trade analysis.
                    </p>

                    {/* Waitlist Form */}
                    <div className="mb-8">
                        <WaitlistForm variant="beside" />
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Free to join</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>No spam, ever</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Early access</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
