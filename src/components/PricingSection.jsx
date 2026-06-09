'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CircleCheck, ArrowRight } from '@gravity-ui/icons';

export default function PricingSection() {
    // Toggle state for Monthly/Yearly
    const [isYearly, setIsYearly] = useState(false);

    // Pricing data - easy to update
    const pricingData = {
        badge: 'PRICING',
        heading: 'Pay for the leverage,',
        headingContinue: 'not the listings',
        plans: [
            {
                id: 1,
                name: 'Starter',
                icon: '👑',
                monthlyPrice: 0,
                yearlyPrice: 0,
                description: 'Start building your insights hub:',
                features: [
                    'Daily AI match brief (top 5)',
                    'Verified salary bands',
                    'Company insight dashboards',
                    '1-click apply, unlimited'
                ],
                highlighted: false
            },
            {
                id: 2,
                name: 'Growth',
                icon: '📊',
                monthlyPrice: 17,
                yearlyPrice: 17 * 12 * 0.75, // 25% discount
                description: 'Start building your insights hub:',
                features: [
                    'Daily AI match brief (top 5)',
                    'Verified salary bands',
                    'Company insight dashboards',
                    '1-click apply, unlimited'
                ],
                highlighted: false
            },
            {
                id: 3,
                name: 'Premium',
                icon: '⚡',
                monthlyPrice: 99,
                yearlyPrice: 99 * 12 * 0.75, // 25% discount
                description: 'Start building your insights hub:',
                features: [
                    'Everything in Pro',
                    'Multi-profile career portfolios',
                    'Shared talent rooms',
                    'Recruiter view (read-only)'
                ],
                highlighted: false
            }
        ]
    };

    return (
        <section className="w-full py-20 px-6 bg-black">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-400 tracking-widest uppercase">
                            {pricingData.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                        {pricingData.heading}
                        <br />
                        {pricingData.headingContinue}
                    </h2>

                    {/* Toggle Section */}
                    <div className="flex items-center justify-center gap-3">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${!isYearly
                                    ? 'bg-white text-black'
                                    : 'bg-gray-900 text-gray-400 hover:text-gray-300'
                                }`}
                        >
                            Monthly
                        </button>

                        {/* Yearly with Badge */}
                        <div className="relative">
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${isYearly
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-gray-900 text-gray-400 hover:text-gray-300'
                                    }`}
                            >
                                Yearly
                            </button>

                            {/* 25% Badge */}
                            {isYearly && (
                                <span className="absolute -top-3 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    25%
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pricingData.plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 rounded-lg p-8 transition-all duration-300 hover:bg-gray-900/70 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col"
                        >
                            {/* Top Section - Icon & Name & Price */}
                            <div className="mb-6">
                                {/* Icon */}
                                <div className="text-3xl mb-3">{plan.icon}</div>

                                {/* Plan Name */}
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        ${isYearly ? Math.round(plan.yearlyPrice) : plan.monthlyPrice}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        /{isYearly ? 'year' : 'month'}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-400 mb-6">
                                {plan.description}
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CircleCheck
                                            size={18}
                                            className="text-green-500 flex-shrink-0 mt-0.5"
                                        />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <Link
                                href="#"
                                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${plan.id === 2
                                        ? 'bg-white text-black hover:bg-gray-100'
                                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                                    }`}
                            >
                                Choose This Plan
                                <ArrowRight size={18} />
                            </Link>

                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}