'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="backdrop-blur-xs border-b border-gray-300 py-2 fixed w-full top-0 z-999">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <Image src={"/converterbox.svg"} width={200} height={100} alt='Converter Box' />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            href="/"
                            className="text-black hover:text-[#fba363] px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="#features"
                            className="text-black hover:text-[#fba363] px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-to"
                            className="text-black hover:text-[#fba363] px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            How to Use
                        </Link>
                        <Link
                            href="/privacy-policy"
                            className="text-gray-600 hover:text-[#fba363] px-4 py-2 text-sm transition-colors duration-200"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="text-gray-600 hover:text-[#fba363] px-4 py-2 text-sm transition-colors duration-200"
                        >
                            Terms
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black hover:text-[#fba363] focus:outline-none transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100">
                        <div className="py-2 space-y-1">
                            <Link
                                href="/"
                                className="block text-black hover:text-[#fba363] px-4 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#features"
                                className="block text-black hover:text-[#fba363] px-4 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#how-to"
                                className="block text-black hover:text-[#fba363] px-4 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How to Use
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="block text-gray-600 hover:text-[#fba363] px-4 py-3 text-sm transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="block text-gray-600 hover:text-[#fba363] px-4 py-3 text-sm transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
