'use client';

import React from 'react';
import HeroHeadline from '../src/components/hero/HeroHeadline';
import { scrollToWaitlist } from '../src/utils/scrollToWaitlist';

const Hero: React.FC = () => {
    return (
        <section className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Heading */}
                <HeroHeadline />

                {/* Supporting Paragraph */}
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                    Transform your trading with intelligent journaling. Track performance, identify patterns, and build the discipline that separates winners from losers.
                </p>

                {/* CTA Button */}
                <button
                    onClick={scrollToWaitlist}
                    className="bg-[#015FFC] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:opacity-90 hover:scale-105 transition-all duration-200 w-full sm:w-auto min-h-[44px] touch-manipulation"
                >
                    Join the Waitlist
                </button>
            </div>
        </section>
    );
};

export default Hero;
