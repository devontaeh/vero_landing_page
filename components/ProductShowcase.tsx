'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProductShowcase: React.FC = () => {
    const metrics = [
        { label: 'DAILY P&L', value: '$1,847', change: '+12%', trend: 'up' },
        { label: 'WIN RATE', value: '68.4%', change: '+8%', trend: 'up' },
        { label: 'AVG HOLD TIME', value: '2.4h', change: '-0.3h', trend: 'down' },
        { label: 'RISK/REWARD', value: '1:5.3', change: '+1.1%', trend: 'UP' },
    ];

    const equityData = [
        { date: 'Jan 1', balance: 50000 },
        { date: 'Jan 15', balance: 51200 },
        { date: 'Feb 1', balance: 50800 },
        { date: 'Feb 15', balance: 52400 },
        { date: 'Mar 1', balance: 53100 },
        { date: 'Mar 15', balance: 52600 },
        { date: 'Apr 1', balance: 54200 },
        { date: 'Apr 15', balance: 55800 },
        { date: 'May 1', balance: 54900 },
        { date: 'May 15', balance: 56700 },
        { date: 'Jun 1', balance: 58200 },
        { date: 'Jun 15', balance: 57400 },
        { date: 'Jul 1', balance: 59100 },
        { date: 'Jul 15', balance: 60800 },
        { date: 'Aug 1', balance: 61900 },
        { date: 'Aug 15', balance: 63200 },
    ];

    // Calculate Y-axis domain with equal standard deviation padding and clean formatting
    const balances = equityData.map(d => d.balance);
    const minBalance = Math.min(...balances);
    const maxBalance = Math.max(...balances);
    const mean = balances.reduce((sum, val) => sum + val, 0) / balances.length;
    const variance = balances.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / balances.length;
    const standardDeviation = Math.sqrt(variance);

    // Round to nice even numbers
    const padding = Math.ceil(standardDeviation / 1000) * 1000; // Round to nearest 1000
    const yAxisMin = Math.max(0, Math.floor((minBalance - padding) / 1000) * 1000);
    const yAxisMax = Math.ceil((maxBalance + padding) / 1000) * 1000;

    const yAxisDomain = [yAxisMin, yAxisMax];



    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        See Your Progress At A Glance
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Clean, intuitive dashboard that shows what matters most for your trading success.
                    </p>
                </div>

                {/* Dashboard Container */}
                <div className="relative">
                    {/* Decorative Elements - Hidden on mobile for cleaner look */}
                    <div className="hidden sm:block absolute -top-12 -left-12 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
                    <div className="hidden sm:block absolute -bottom-8 -right-8 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-xl"></div>

                    {/* Main Dashboard */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 relative z-10">
                        {/* Dashboard Header */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-2 sm:space-y-0">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                                    Trading Dashboard
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600">March 2025 • 47 Trading Days</p>
                            </div>
                            {/* <button
                                className="bg-[#015FFC] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 text-sm sm:text-base w-full sm:w-auto"
                            >
                                Add Trade
                            </button> */}
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                            {metrics.map((metric, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-xs font-normal text-gray-500 uppercase tracking-wider">
                                            {metric.label}
                                        </p>
                                        <span className={`text-xs font-medium ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                                            }`}>
                                            {metric.change}
                                        </span>
                                    </div>
                                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                        {metric.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Account Equity Curve */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4 sm:mb-6">
                            <div className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-b border-gray-200">
                                <h4 className="font-medium text-gray-900 text-sm sm:text-base">Account Equity Curve</h4>
                            </div>
                            <div className="p-3 sm:p-6">
                                <div className="h-64 sm:h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={equityData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                            <XAxis
                                                dataKey="date"
                                                stroke="#9ca3af"
                                                fontSize={10}
                                                tickLine={false}
                                                axisLine={false}
                                                interval="preserveStartEnd"
                                            />
                                            <YAxis
                                                stroke="#9ca3af"
                                                fontSize={10}
                                                tickLine={false}
                                                axisLine={false}
                                                domain={yAxisDomain}
                                                tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
                                                ticks={[40000, 45000, 50000, 55000, 60000, 65000, 70000]}
                                            />
                                            <Tooltip
                                                formatter={(value) => [`$${value.toLocaleString()}`, 'Account Balance']}
                                                labelStyle={{ color: '#374151', fontSize: '12px' }}
                                                contentStyle={{
                                                    backgroundColor: 'white',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                                    fontSize: '12px'
                                                }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="balance"
                                                stroke="#015FFC"
                                                strokeWidth={2}
                                                dot={false}
                                                activeDot={{ r: 4, fill: '#015FFC' }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        {/* Recent Trades */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            <div className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-b border-gray-200">
                                <h4 className="font-medium text-gray-900 text-sm sm:text-base">Recent Trades</h4>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[600px]">
                                    <thead className="bg-gray-50">
                                        <tr className="text-left text-xs text-gray-600 uppercase tracking-wider">
                                            <th className="px-3 sm:px-4 py-2 sm:py-3">Symbol</th>
                                            <th className="px-3 sm:px-4 py-2 sm:py-3">Type</th>
                                            <th className="px-3 sm:px-4 py-2 sm:py-3">Entry</th>
                                            <th className="px-3 sm:px-4 py-2 sm:py-3">Exit</th>
                                            <th className="px-3 sm:px-4 py-2 sm:py-3">P&L</th>
                                            <th className="px-3 sm:px-4 py-2 sm:py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="text-xs sm:text-sm">
                                            <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium">EUR/USD</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">Long</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">1.0850</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">1.0920</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-green-600">+$875.00</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">
                                                <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                                    Closed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="text-xs sm:text-sm">
                                            <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium">GBP/JPY</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">Short</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">185.40</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">183.95</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-green-600">+$1,220.00</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">
                                                <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                                    Closed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="text-xs sm:text-sm">
                                            <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium">NQ</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">Long</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">16,850</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">—</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-blue-600">+$450.00</td>
                                            <td className="px-3 sm:px-4 py-2 sm:py-3">
                                                <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                                    Open
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
