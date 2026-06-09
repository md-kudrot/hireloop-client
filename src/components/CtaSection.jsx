'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
    // CTA data - easy to update
    const ctaData = {
        heading: 'Your next role is',
        headingContinue: 'already looking for you',
        description: 'Build a profile in three minutes. The matches start arriving tomorrow morning',
        buttons: [
            {
                id: 1,
                label: 'Create a free account',
                href: '#',
                style: 'primary' // white button
            },
            {
                id: 2,
                label: 'View pricing',
                href: '#',
                style: 'secondary' // transparent button
            }
        ]
    };

    return (
        <section className="relative w-full py-24 px-6 overflow-hidden bg-black">

            {/* Background Gradient Image */}
            <div className="absolute inset-0 w-full h-full z-2">
                <Image
                    src="/images/gradient.png" // Gradient background
                    alt="Gradient background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Background Net/Grid Image - Overlay on top of gradient */}
            <div className="absolute inset-0 w-full h-full z-1 opacity-80">
                <Image
                    src="/images/cta-bg.png" // Net design overlay
                    alt="Network design"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/30 z-2"></div>

            {/* Content Container - Positioned above backgrounds */}
            <div className="relative z-10 max-w-3xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {ctaData.heading}
                    <br />
                    {ctaData.headingContinue}
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                    {ctaData.description}
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {ctaData.buttons.map((button) => (
                        <Link
                            key={button.id}
                            href={button.href}
                            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center ${button.style === 'primary'
                                    ? 'bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl'
                                    : 'border-2 border-gray-400 text-white hover:border-white hover:bg-white/10'
                                }`}
                        >
                            {button.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}