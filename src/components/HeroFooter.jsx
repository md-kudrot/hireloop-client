'use client';

import Image from 'next/image';
import { Briefcase, OfficeBadge, Person, Star } from '@gravity-ui/icons';

export default function StatsSection() {
    const statsData = {
        heading: 'Assisting over 15,000 job seekers',
        subheading: 'find their dream positions.',
        stats: [
            { icon: Briefcase, value: '50K', label: 'Active Jobs' },
            { icon: OfficeBadge, value: '12K', label: 'Companies' },
            { icon: Person, value: '2M', label: 'Job Seekers' },
            { icon: Star, value: '97%', label: 'Satisfaction Rate' }
        ]
    };

    return (
        <section className="relative w-full py-20 px-6 bg-slate-950  overflow-hidden">

            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/globe.png"
                    alt="Global network"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-slate/40"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">

                <div className="text-center mb-16 sm:mb-24">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                        {statsData.heading}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300">
                        {statsData.subheading}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {statsData.stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative bg-black/60 backdrop-blur-md border border-gray-800 hover:border-gray-700 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:bg-black/80"
                            >
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-900/50 group-hover:bg-blue-600/20 transition-colors">
                                    <Icon width={24} height={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                                </div>

                                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>

                                <div className="text-sm sm:text-base text-gray-400">
                                    {stat.label}
                                </div>

                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}