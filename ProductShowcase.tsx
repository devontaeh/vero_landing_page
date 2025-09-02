'use client';

import React from 'react';

const ProductShowcase: React.FC = () => {
    const metrics = [
        { label: 'Total Users', value: '12,345', change: '+12%', trend: 'up' },
        { label: 'Revenue', value: '$45,678', change: '+8%', trend: 'up' },
        { label: 'Conversion', value: '3.2%', change: '+0.5%', trend: 'up' },
        { label: 'Active Sessions', value: '8,901', change: '-2%', trend: 'down' },
    ];

    const tableData = [
        { page: 'Homepage', visitors: '4,523', bounce: '42%', conversion: '2.3%' },
        { page: 'Products', visitors: '3,234', bounce: '38%', conversion: '3.1%' },
        { page: 'About', visitors: '1,876', bounce: '45%', conversion: '1.8%' },
        { page: 'Contact', visitors: '987', bounce: '52%', conversion: '2.7%' },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Powerful Analytics Dashboard
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get insights into your business performance with our comprehensive analytics tools.
                        Track metrics, monitor trends, and make data-driven decisions.
                    </p>
                </div>

                {/* Dashboard Container */}
                <div className="relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-xl"></div>

                    {/* Main Dashboard */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
                        {/* Dashboard Header */}
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Business Overview
                                </h3>
                                <p className="text-gray-600">Last 30 days performance</p>
                            </div>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200">
                                Export Report
                            </button>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {metrics.map((metric, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-xs font-normal text-gray-500 uppercase tracking-wider">
                                            {metric.label}
                                        </p>
                                        <span className={`text-xs font-medium ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                                            }`}>
                                            {metric.change}
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {metric.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Chart Section */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="text-lg font-semibold text-gray-900">Traffic Overview</h4>
                                <div className="flex space-x-4 text-sm">
                                    <span className="text-gray-600">Last 7 days</span>
                                </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div className="h-80 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 font-medium">Interactive Chart</p>
                                    <p className="text-sm text-gray-400">Click to view detailed analytics</p>
                                </div>
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Page
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Visitors
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Bounce Rate
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Conversion
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {tableData.map((row, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {row.page}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {row.visitors}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {row.bounce}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {row.conversion}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
