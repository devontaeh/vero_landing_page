'use client';

import React from 'react';
import HeroHeadline from '../src/components/hero/HeroHeadline';
import { scrollToWaitlist } from '../src/utils/scrollToWaitlist';

const Hero: React.FC = () => {
    return (
        <section className="pt-24 sm:pt-28 pb-20 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Heading */}
                <HeroHeadline />

                {/* Supporting Paragraph */}
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                    Transform your trading with intelligent journaling. Track performance, identify patterns, and build the discipline that separates winners from losers.

                </p>

                {/* CTA Button */}
                <button
                    onClick={scrollToWaitlist}
                    className="bg-[#015FFC] text-white px-8 py-3 rounded-md font-medium text-base hover:opacity-90 hover:scale-105 transition-all duration-200"
                >
                    Join the Waitlist
                </button>
            </div>
        </section>
    );
};

export default Hero;
