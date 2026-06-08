'use client';

import Link from 'next/link';
import { LogoFacebook, LogoLinkedin, LogoGithub } from '@gravity-ui/icons';

export default function Footer() {
    // Footer data - easy to maintain and update
    const footerData = {
        logo: {
            text: 'hireloop',
            tagline: 'The AI-native career platform. Built for people who take their work seriously.'
        },
        sections: [
            {
                title: 'Product',
                links: [
                    { label: 'Job discovery', href: '#' },
                    { label: 'Worker AI', href: '#' },
                    { label: 'Companies', href: '#' },
                    { label: 'Salary data', href: '#' }
                ]
            },
            {
                title: 'Navigations',
                links: [
                    { label: 'Help center', href: '#' },
                    { label: 'Career library', href: '#' },
                    { label: 'Contact', href: '#' }
                ]
            },
            {
                title: 'Resources',
                links: [
                    { label: 'Brand Guideline', href: '#' },
                    { label: 'Newsroom', href: '#' }
                ]
            }
        ],
        social: [
            { icon: LogoFacebook, href: '#', label: 'Facebook' },
            { icon: LogoGithub, href: '#', label: 'Pinterest' },
            { icon: LogoLinkedin, href: '#', label: 'LinkedIn' }
        ],
        bottom: {
            copyright: 'Copyright 2024 – Programming Hero',
            links: [
                { label: 'Terms & Policy', href: '#' },
                { label: 'Privacy Guideline', href: '#' }
            ]
        }
    };

    return (
        <footer className="bg-black text-gray-300 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Top Section: Logo + Tagline + Social Icons */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Logo & Tagline */}
                    <div className="col-span-1">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold">
                                <span className="text-blue-500">hire</span>
                                <span className="text-pink-500">loop</span>
                            </h2>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {footerData.logo.tagline}
                        </p>
                    </div>

                    {/* Footer Links Sections */}
                    {footerData.sections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-blue-400 font-semibold mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mb-8 border-t border-gray-800 pt-8">
                    {footerData.social.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                            <Link
                                key={idx}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors"
                            >
                                <Icon size={20} />
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom Section: Copyright & Legal Links */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        {footerData.bottom.copyright}
                    </p>
                    <div className="flex gap-4">
                        {footerData.bottom.links.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}