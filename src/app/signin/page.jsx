'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeSlash, Envelope, Lock, LogoWindows } from '@gravity-ui/icons';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Calculate password strength
    const getPasswordStrength = (pwd) => {
        if (!pwd) return { level: 0, label: '', color: '' };

        let strength = 0;
        if (pwd.length >= 8) strength++;
        if (pwd.length >= 12) strength++;
        if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
        if (/\d/.test(pwd)) strength++;
        if (/[^a-zA-Z\d]/.test(pwd)) strength++;

        const levels = [
            { level: 0, label: '', color: '' },
            { level: 1, label: 'Weak', color: 'bg-red-500' },
            { level: 2, label: 'Fair', color: 'bg-yellow-500' },
            { level: 3, label: 'Good', color: 'bg-blue-500' },
            { level: 4, label: 'Strong', color: 'bg-green-500' },
            { level: 5, label: 'Very Strong', color: 'bg-green-600' }
        ];

        return levels[strength];
    };

    const passwordStrength = getPasswordStrength(password);

    // Get strength color class
    const getStrengthColorClass = () => {
        if (passwordStrength.color === 'bg-red-500') return 'text-red-500';
        if (passwordStrength.color === 'bg-yellow-500') return 'text-yellow-500';
        if (passwordStrength.color === 'bg-blue-500') return 'text-blue-500';
        if (passwordStrength.color === 'bg-green-500') return 'text-green-500';
        if (passwordStrength.color === 'bg-green-600') return 'text-green-600';
        return 'text-gray-400';
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        const fromData = new FormData(e.currentTarget);
        const user = Object.fromEntries(fromData.entries());
        console.log(user);

        const { data, error } = await authClient.signIn.email({
            email: user.email, 
            password: user.password, 
        });

        if (error) {
            console.error('Sign-in error:', error);
            alert('Failed to sign in. Please check your credentials and try again.');
        } else {
            console.log('Sign-in successful:', data);
            alert('Sign-in successful! Welcome back.');
            redirect('/'); 
        }

    };

    return (
        <div className="min-h-screen w-full absolute z-20  bg-black flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">

                {/* Logo Section */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold">
                        <span className="text-blue-500">hire</span>
                        <span className="text-pink-500">loop</span>
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">
                        The AI-native career platform
                    </p>
                </div>

                {/* Welcome Text */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Welcome back
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Sign in to access your career opportunities
                    </p>
                </div>

                {/* Form Container */}
                <form onSubmit={handleSignUp} className="space-y-5 mb-6">

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Envelope
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                            <input
                                id="email"
                                type="email"
                                name='email'
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-800 hover:border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg px-4 pl-10 py-3 text-white placeholder-gray-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-white">
                                Password
                            </label>
                            {password && (
                                <span className={`text-xs font-semibold ${getStrengthColorClass()}`}>
                                    {passwordStrength.label}
                                </span>
                            )}
                        </div>

                        <div className="relative mb-2">
                            <Lock
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-800 hover:border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg px-4 pl-10 pr-10 py-3 text-white placeholder-gray-500 transition-colors"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    <EyeSlash size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {/* Password Strength Indicator */}
                        {password && (
                            <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                                    style={{
                                        width: `${(passwordStrength.level / 5) * 100}%`
                                    }}
                                ></div>
                            </div>
                        )}
                    </div>

                    {/* Forgot Password Link */}
                    <div className="text-right">
                        <Link
                            href="#"
                            className="text-sm text-blue-500 hover:text-blue-400 transition-colors font-medium"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 mt-6"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 bg-gray-800 h-px"></div>
                    <span className="text-gray-500 text-sm">or</span>
                    <div className="flex-1 bg-gray-800 h-px"></div>
                </div>

                {/* Continue with Google Button */}
                <button
                    type="button"
                    className="w-full bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                    <LogoWindows size={20} />
                    <span>Continue with Google</span>
                </button>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        New to HireLoop?{' '}
                        <Link
                            href="/signup"
                            className="text-blue-500 hover:text-blue-400 font-semibold transition-colors"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>

                {/* Terms & Privacy */}
                <div className="mt-6 text-center text-xs text-gray-500">
                    <p>
                        By signing in, you agree to our{' '}
                        <Link href="#" className="text-blue-500 hover:text-blue-400">
                            Terms of Service
                        </Link>
                        {' '}and{' '}
                        <Link href="#" className="text-blue-500 hover:text-blue-400">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}