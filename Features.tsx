'use client';

import React from 'react';

const Features: React.FC = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: 'Analytics & Insights',
            description: 'Get comprehensive analytics and insights into your business performance with real-time data visualization and detailed reporting.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Goal Tracking',
            description: 'Set, track, and achieve your business goals with our intelligent goal tracking system that provides actionable insights and progress monitoring.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Smart Automation',
            description: 'Automate repetitive tasks and streamline your workflow with our intelligent automation tools that learn and adapt to your business needs.'
        }
    ];

    return (
        <section className="w-full bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            {/* Icon Container */}
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200 group">
                                <div className="text-[#015FFC] group-hover:scale-110 transition-transform duration-200">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Feature Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            {/* Feature Description */}
                            <p className="text-base leading-relaxed text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
