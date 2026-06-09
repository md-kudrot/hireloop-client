'use client';

import Link from 'next/link';
import { MapPin, Briefcase, CircleDollar, ArrowRight } from '@gravity-ui/icons';

export default function JobsSection() {
    // Jobs data - easy to update and maintain
    const jobsData = {
        badge: 'SMART JOB DISCOVERY',
        heading: "The roles you'd never",
        headingHighlight: 'find by searching',
        jobs: [
            {
                id: 1,
                title: 'Frontend Developer',
                description: 'Showcase your commitment to diversity and inclusion by highlighting initiatives.',
                location: 'New York, USA',
                type: 'Hybrid',
                salary: '€25-€40/hour',
                icon: '💼'
            },
            {
                id: 2,
                title: 'Frontend Developer',
                description: 'Showcase your commitment to diversity and inclusion by highlighting initiatives.',
                location: 'New York, USA',
                type: 'Hybrid',
                salary: '€25-€40/hour',
                icon: '💼'
            },
            {
                id: 3,
                title: 'Frontend Developer',
                description: 'Showcase your commitment to diversity and inclusion by highlighting initiatives.',
                location: 'New York, USA',
                type: 'Hybrid',
                salary: '€25-€40/hour',
                icon: '💼'
            },
            {
                id: 4,
                title: 'Frontend Developer',
                description: 'Showcase your commitment to diversity and inclusion by highlighting initiatives.',
                location: 'New York, USA',
                type: 'Hybrid',
                salary: '€25-€40/hour',
                icon: '💼'
            },
            {
                id: 5,
                title: 'Frontend Developer',
                description: 'Showcase your commitment to diversity and inclusion by highlighting initiatives.',
                location: 'New York, USA',
                type: 'Hybrid',
                salary: '€25-€40/hour',
                icon: '💼'
            },
            {
                id: 6,
                title: 'Frontend Developer',
                description: 'Showcase your commitment to diversity and inclusion by highlighting initiatives.',
                location: 'New York, USA',
                type: 'Hybrid',
                salary: '€25-€40/hour',
                icon: '💼'
            }
        ]
    };

    return (
        <section className="w-full py-20 px-6 bg-black">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-400 tracking-widest uppercase">
                            {jobsData.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                        {jobsData.heading}
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {jobsData.headingHighlight}
                        </span>
                    </h2>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {jobsData.jobs.map((job) => (
                        <div
                            key={job.id}
                            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:bg-gray-900/70 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            {/* Top Section - Title & Description */}
                            <div className="mb-6">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                                    {job.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {job.description}
                                </p>
                            </div>

                            {/* Middle Section - Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {/* Location */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                                    <MapPin size={14} className="text-gray-500" />
                                    <span className="text-xs text-gray-300">{job.location}</span>
                                </div>

                                {/* Job Type */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                                    <Briefcase size={14} className="text-gray-500" />
                                    <span className="text-xs text-gray-300">{job.type}</span>
                                </div>
                            </div>

                            {/* Salary Section */}
                            <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-800">
                                <CircleDollar size={16} className="text-yellow-500" />
                                <span className="text-sm font-semibold text-gray-300">{job.salary}</span>
                            </div>

                            {/* Apply Button */}
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300"
                            >
                                Apply Now
                                <ArrowRight
                                    size={16}
                                    className="text-gray-400 group-hover:text-white transition-colors"
                                />
                            </Link>

                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center">
                    <Link
                        href="/jobs"
                        className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-900 bg-white font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                    >
                        View all job open
                    </Link>
                </div>
            </div>
        </section>
    );
}