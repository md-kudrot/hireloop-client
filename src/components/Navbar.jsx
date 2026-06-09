'use client';

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed  top-5 left-0 right-0 z-50 ">
          
            <div className="mx-auto max-w-7xl px-4">
                <div className="
                    flex h-20 items-center justify-between
                    rounded-2xl
                    border border-white/10
                    bg-black/30
                    
                    px-6
                    backdrop-blur-xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                ">

                    {/* Left */}
                    <div className="flex items-center gap-4">

                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Logo */}
                        <Link href="/" className="text-3xl font-bold">
                            <span className="text-sky-500">hire</span>
                            <span className="text-orange-500">loop</span>
                        </Link>
                    </div>

                    <div className="flex gap-4">
                        {/* Center Nav */}
                        <ul className="hidden md:flex items-center gap-10">
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Browse Jobs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Company
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>

                        {/* Right */}
                        <div className="hidden md:flex items-center gap-5">
                            <div className="h-6 w-px bg-white/20" />

                            <Link
                                href="/signin"
                                className="text-violet-400 hover:text-violet-300"
                            >
                                Sign In
                            </Link>

                            <Button
                                radius="lg"
                                className="
                                bg-violet-600
                                px-6
                                text-white
                                font-medium
                                hover:bg-violet-500
                            "
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="
                        mt-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/50
                        backdrop-blur-xl
                        p-5
                        md:hidden
                    ">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="#">Browse Jobs</Link>
                            </li>

                            <li>
                                <Link href="#">Company</Link>
                            </li>

                            <li>
                                <Link href="#">Pricing</Link>
                            </li>

                            <li>
                                <Link href="#">Sign In</Link>
                            </li>

                            <Button
                                color="secondary"
                                className="mt-2 w-full"
                            >
                                Get Started
                            </Button>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;