'use client';

import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-24 sm:pt-28 pb-20">
                <div className="text-center flex flex-col items-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                        Become a Confident,{' '}
                        <span className="text-[#015FFC]">Consistently Profitable </span> Trader
                    </h1>

                    {/* Supporting Paragraph */}
                    <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-2xl mb-10">
                    Transform your trading with intelligent journaling. Track performance, identify patterns, and build the discipline that separates winners from losers.

                    </p>

                    {/* CTA Button */}
                    <button className="bg-[#015FFC] text-white px-8 py-3 rounded-md font-medium text-base hover:opacity-90 hover:scale-105 transition-all duration-200">
                        Start Free Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
