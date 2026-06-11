'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeSlash, Envelope, Lock, CircleCheck } from '@gravity-ui/icons';
import { authClient } from '@/lib/auth-client';

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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

    const passwordStrength = getPasswordStrength(formData.password);
    const passwordsMatch = formData.password === formData.confirmPassword && formData.password !== '';

    // Get strength color class
    const getStrengthColorClass = () => {
        if (passwordStrength.color === 'bg-red-500') return 'text-red-500';
        if (passwordStrength.color === 'bg-yellow-500') return 'text-yellow-500';
        if (passwordStrength.color === 'bg-blue-500') return 'text-blue-500';
        if (passwordStrength.color === 'bg-green-500') return 'text-green-500';
        if (passwordStrength.color === 'bg-green-600') return 'text-green-600';
        return 'text-gray-400';
    };

    const handleSignUp =async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        const fromData = new FormData(e.currentTarget);
        const user = Object.fromEntries(fromData.entries());
        console.log(user);

        const { data, error } = await authClient.signUp.email({
            name: user.firstName + ' ' + user.lastName, // required
            email: user.email, // required
            password: user.password, // required
        });

        if(data){
            console.log('signup success ');
        }

        if(error){
            console.log('signup error ', error);
        }

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.currentTarget);
    //     const user = Object.fromEntries(formData.entries());
    //     console.log(user);

    //     const { data, error } = await authClient.signUp.email({
    //         email: user.email,
    //         password: user.password,
    //         name: user.name,
    //         image: user.image
    //     })
    //     // console.log(error, data);

    //     if (data) {
    //         toast.success('Account created successfully!');
    //         redirect('/')
    //     }

    //     if (error) {
    //         toast.error(error.message)
    //     }

    // }

    return (
        <div className="min-h-screen w-full absolute z-20 bg-black flex items-center justify-center px-6 py-12">
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
                        Join HireLoop
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Start your journey to find your dream job
                    </p>
                </div>

                {/* Form Container */}
                <form onSubmit={handleSignUp} className="space-y-4 mb-6">

                    {/* Name Fields Row */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full bg-gray-900 border border-gray-800 hover:border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg px-4 py-2.5 text-white placeholder-gray-500 transition-colors text-sm"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full bg-gray-900 border border-gray-800 hover:border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg px-4 py-2.5 text-white placeholder-gray-500 transition-colors text-sm"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Envelope
                                width={18}
                                height={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-900 border border-gray-800 hover:border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg px-4 pl-10 py-2.5 text-white placeholder-gray-500 transition-colors text-sm"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="password" className="block text-sm font-semibold text-white">
                                Password
                            </label>
                            {formData.password && (
                                <span className={`text-xs font-semibold ${getStrengthColorClass()}`}>
                                    {passwordStrength.label}
                                </span>
                            )}
                        </div>

                        <div className="relative mb-2">
                            <Lock
                                width={18}
                                height={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-gray-900 border border-gray-800 hover:border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg px-4 pl-10 pr-10 py-2.5 text-white placeholder-gray-500 transition-colors text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    <EyeSlash width={18} height={18} />
                                ) : (
                                    <Eye width={18} height={18} />
                                )}
                            </button>
                        </div>

                        {/* Password Strength Indicator */}
                        {formData.password && (
                            <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden mb-2">
                                <div
                                    className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                                    style={{
                                        width: `${(passwordStrength.level / 5) * 100}%`
                                    }}
                                ></div>
                            </div>
                        )}
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white mb-2">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <Lock
                                width={18}
                                height={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full bg-gray-900 border border-gray-800 hover:border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg px-4 pl-10 pr-10 py-2.5 text-white placeholder-gray-500 transition-colors text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                            >
                                {showConfirmPassword ? (
                                    <EyeSlash width={18} height={18} />
                                ) : (
                                    <Eye width={18} height={18} />
                                )}
                            </button>
                        </div>
                        {formData.confirmPassword && (
                            <div className="flex items-center gap-2 mt-2">
                                {passwordsMatch ? (
                                    <>
                                        <CircleCheck width={16} height={16} className="text-green-500" />
                                        <span className="text-xs text-green-500 font-medium">Passwords match</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-4 h-4 rounded-full border border-red-500"></div>
                                        <span className="text-xs text-red-500 font-medium">Passwords don't match</span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="flex items-start gap-3 pt-2">
                        <input
                            id="terms"
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                            className="mt-1 w-4 h-4 rounded border-gray-700 bg-gray-900 border text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                            I agree to the{' '}
                            <Link href="#" className="text-blue-500 hover:text-blue-400 font-medium">
                                Terms of Service
                            </Link>
                            {' '}and{' '}
                            <Link href="#" className="text-blue-500 hover:text-blue-400 font-medium">
                                Privacy Policy
                            </Link>
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        // disabled={!agreeTerms || !passwordsMatch || !formData.firstName || !formData.lastName || !formData.email}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors duration-300 mt-6"
                    >
                        Create Account
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
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span>Sign up with Google</span>
                </button>

                {/* Sign In Link */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        Already have an account?{' '}
                        <Link
                            href="/signin"
                            className="text-blue-500 hover:text-blue-400 font-semibold transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}