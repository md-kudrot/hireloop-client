'use client';

import { useState } from 'react';
import { Magnifier, MapPin, Briefcase } from '@gravity-ui/icons'; import Image from 'next/image';
;

export default function Hero() {
    // State for search inputs
    const [jobSearch, setJobSearch] = useState('');
    const [locationSearch, setLocationSearch] = useState('');

    // Hero data - easy to maintain
    const heroData = {
        badge: {
            icon: '🔥',
            text: '50,000+ NEW JOBS THIS MONTH'
        },
        heading: 'Find Your Dream Job Today',
        subheading: 'HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.',
        searchPlaceholders: {
            job: 'Job title, skill or company',
            location: 'Location or Remote'
        },
        trendingTags: [
            'Trending Position',
            'Product Designer',
            'AI Engineering',
            'Dev-ops Engineer'
        ]
    };

    return (
        <section className="bg-slate-950   flex items-center justify-center mt-10 px-6 relative overflow-hidden">
            {/* Animated Background Particles (Optional - subtle effect) */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute w-1 h-1 bg-blue-500 rounded-full top-20 left-20 animate-pulse"></div>
                <div className="absolute w-1 h-1 bg-purple-500 rounded-full top-40 right-32 animate-pulse delay-100"></div>
                <div className="absolute w-1 h-1 bg-blue-400 rounded-full bottom-32 left-1/4 animate-pulse delay-200"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto text-center relative z-10">

                {/* Badge */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600 transition-colors">
                        <span className="text-lg">{heroData.badge.icon}</span>
                        <span className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide">
                            {heroData.badge.text}
                        </span>
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {heroData.heading}
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {heroData.subheading}
                </p>

                {/* Search Bar */}
                <div className="mb-8 flex flex-col sm:flex-row gap-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">

                    {/* Job Search Input */}
                    <div className="flex-1 flex items-center gap-3 bg-gray-800/50 px-4 py-3 rounded-md">
                        <Magnifier size={18} className="text-gray-500 flex-shrink-0" />
                        <input
                            type="text"
                            value={jobSearch}
                            onChange={(e) => setJobSearch(e.target.value)}
                            placeholder={heroData.searchPlaceholders.job}
                            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm sm:text-base"
                        />
                    </div>

                    {/* Location Search Input */}
                    <div className="flex-1 flex items-center gap-3 bg-gray-800/50 px-4 py-3 rounded-md">
                        <MapPin size={18} className="text-gray-500 flex-shrink-0" />
                        <input
                            type="text"
                            value={locationSearch}
                            onChange={(e) => setLocationSearch(e.target.value)}
                            placeholder={heroData.searchPlaceholders.location}
                            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm sm:text-base"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-md flex items-center justify-center gap-2 font-semibold text-white flex-shrink-0 w-full sm:w-auto">
                        <Magnifier size={18} />
                        <span className="hidden sm:inline">Search</span>
                    </button>
                </div>

                {/* Trending Tags */}
                <div className="flex flex-wrap justify-center gap-3">
                    <span className="text-sm text-gray-500">Trending:</span>
                    {heroData.trendingTags.map((tag, idx) => (
                        <button
                            key={idx}
                            className="text-sm px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300 transition-all cursor-pointer bg-gray-900/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}