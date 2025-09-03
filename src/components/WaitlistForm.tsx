'use client';

import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface WaitlistFormProps {
    className?: string;
    variant?: 'inside' | 'beside';
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ className = '', variant = 'beside' }) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setStatus('error');
            setErrorMessage('Please enter your email address');
            return;
        }

        if (!validateEmail(email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address');
            return;
        }

        setIsLoading(true);
        setStatus('idle');
        setErrorMessage('');

        try {
            // If Supabase is not configured, simulate success
            if (!supabase) {
                console.log('Supabase not configured, simulating waitlist signup for:', email);
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
                setStatus('success');
                setEmail('');
                return;
            }

            // Insert email into waitlist table
            const { error } = await supabase
                .from('waitlist')
                .insert([
                    { email: email.trim().toLowerCase() }
                ]);

            if (error) {
                if (error.code === '23505') { // Unique constraint violation
                    setStatus('error');
                    setErrorMessage('This email is already on our waitlist!');
                } else {
                    setStatus('error');
                    setErrorMessage('Something went wrong. Please try again.');
                }
            } else {
                setStatus('success');
                setEmail('');
            }
        } catch (error) {
            console.error('Waitlist signup error:', error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage('');
        }
    };

    const renderForm = () => {
        if (variant === 'inside') {
            return (
                <div className="relative">
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        disabled={isLoading}
                        className="w-full px-4 py-2 pr-20 text-base border border-gray-300 rounded-full focus:outline-none focus:border-[#015FFC] disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-describedby={status === 'error' ? 'error-message' : status === 'success' ? 'success-message' : undefined}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        aria-label="Join Waitlist"
                        aria-busy={isLoading}
                        className="absolute right-1 top-1 bottom-1 px-4 bg-[#015FFC] text-white font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#015FFC] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-none flex items-center justify-center gap-1 min-w-[80px]"
                        style={{
                            transform: 'none',
                            boxShadow: 'none',
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        <div className="w-3 h-3 flex items-center justify-center">
                            {isLoading && (
                                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            )}
                        </div>
                        <span className="text-sm">Join</span>
                    </button>
                </div>
            );
        }

        // Beside variant (default)
        return (
            <div className="flex w-full space-x-4 justify-center">
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    disabled={isLoading}
                    className="w-64 px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#015FFC] disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-describedby={status === 'error' ? 'error-message' : status === 'success' ? 'success-message' : undefined}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    aria-label="Join Waitlist"
                    aria-busy={isLoading}
                    className="flex items-center justify-center gap-2 min-w-[120px] h-[40px] rounded-lg bg-[#015FFC] px-6 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#015FFC] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-none whitespace-nowrap"
                    style={{
                        transform: 'none',
                        boxShadow: 'none',
                        border: 'none',
                        outline: 'none'
                    }}
                >
                    <div className="w-4 h-4 flex items-center justify-center">
                        {isLoading && (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}
                    </div>
                    <span>Join Waitlist</span>
                </button>
            </div>
        );
    };

    return (
        <div id="waitlist" className={`w-full max-w-md mx-auto ${className}`}>
            <form onSubmit={handleSubmit} className="space-y-3">
                {renderForm()}

                {/* Success Message */}
                {status === 'success' && (
                    <div
                        id="success-message"
                        role="alert"
                        className="text-sm text-green-600"
                    >
                        <span>You're on the waitlist! 🎉</span>
                    </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                    <div
                        id="error-message"
                        role="alert"
                        className="text-sm text-red-600"
                    >
                        <span>{errorMessage}</span>
                    </div>
                )}
            </form>
        </div>
    );
};

export default WaitlistForm;
