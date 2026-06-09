'use client';

import {
    FileMagnifier,
    ChartColumn,
    OfficeBadge,
    Bookmark,
    Thunderbolt,
    FileText,
    Target,
    ChartLineArrowUp
} from '@gravity-ui/icons';

export default function FeaturesSection() {
    // Features data - easy to update and maintain
    const featuresData = {
        badge: 'FEATURES JOB',
        heading: 'Everything you need',
        headingContinue: 'to succeed',
        features: [
            {
                id: 1,
                icon: FileMagnifier,
                title: 'Smart Search',
                description: 'Find your ideal job with advanced filters.'
            },
            {
                id: 2,
                icon: ChartColumn,
                title: 'Salary Insights',
                description: 'Get real salary data to negotiate confidently.'
            },
            {
                id: 3,
                icon: OfficeBadge,
                title: 'Top Companies',
                description: 'Apply to vetted companies that are hiring.'
            },
            {
                id: 4,
                icon: Bookmark,
                title: 'Saved Jobs',
                description: 'Manage apps & favorites on your dashboard.'
            },
            {
                id: 5,
                icon: Thunderbolt,
                title: 'One-Click Apply',
                description: 'Simplify your job applications for an easier process!'
            },
            {
                id: 6,
                icon: FileText,
                title: 'Resume Builder',
                description: 'Create professional resumes with modern templates.'
            },
            {
                id: 7,
                icon: Target,
                title: 'Skill-Based Matching',
                description: 'Discover jobs that match your skills and experience.'
            },
            {
                id: 8,
                icon: ChartLineArrowUp,
                title: 'Career Growth Resources',
                description: 'Boost your career with quick interview tips.'
            }
        ]
    };

    return (
        <section className="w-full py-20 px-6 bg-gray-950">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-400 tracking-widest uppercase">
                            {featuresData.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight">
                        {featuresData.heading}
                        <br />
                        {featuresData.headingContinue}
                    </h2>
                </div>

                {/* Features Grid - 2x2 on desktop, 1x1 on mobile, 2x1 on tablet */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuresData.features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 rounded-lg p-6 transition-all duration-300 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                            >
                                {/* Icon Container */}
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800/50 group-hover:bg-blue-600/20 transition-colors">
                                    <Icon width={24} height={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                                </div>

                                {/* Title */}
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>

                                {/* Subtle glow effect on hover */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}