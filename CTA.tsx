'use client';

import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center flex flex-col items-center">
                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Ready to Get Started?
                    </h2>

                    {/* Section Description */}
                    <p className="text-lg text-gray-600 max-w-2xl mb-10">
                        Join thousands of businesses already using our platform to grow and succeed.
                        Start your journey today with our powerful tools and expert support.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-[#015FFC] text-white px-10 py-4 rounded-md font-medium text-base hover:opacity-90 hover:scale-105 transition-all duration-200">
                        Start Your Free Trial
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
