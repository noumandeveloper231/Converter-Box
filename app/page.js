'use client';

import { useState } from 'react';
import YouTubeConverter from './components/YouTubeConverter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* SEO-optimized header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            ConverterBox - Free YouTube to MP3 Converter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Convert YouTube videos to high-quality MP3 files instantly with ConverterBox. 
            Our free YouTube to MP3 converter is fast, secure, and requires no registration. 
            Download MP3 from YouTube in seconds with superior audio quality.
          </p>
          
          {/* Key features for SEO */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow">✓ Free Forever</span>
            <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow">✓ High Quality MP3</span>
            <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow">✓ No Registration</span>
            <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow">✓ Fast Conversion</span>
            <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow">✓ Secure & Private</span>
          </div>
        </header>
        
        <YouTubeConverter />
        
        {/* SEO Content Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Why Choose ConverterBox YouTube to MP3 Converter?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  🚀 Lightning Fast Conversion
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our advanced YouTube to MP3 converter processes videos in seconds. 
                  No waiting, no delays - just instant high-quality MP3 downloads.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  🎵 Superior Audio Quality
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get crystal-clear 128kbps MP3 files that preserve the original audio quality. 
                  Perfect for music, podcasts, and educational content.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  🔒 100% Safe & Secure
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your privacy matters. We don't store your files or personal data. 
                  All conversions happen securely without compromising your information.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  💻 Works on All Devices
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Access our YouTube MP3 converter from any device - desktop, mobile, or tablet. 
                  No software installation required.
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                How to Convert YouTube to MP3
              </h3>
              <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span>Copy the YouTube video URL you want to convert to MP3</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span>Paste the URL into our YouTube to MP3 converter above</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span>Wait for the conversion to complete automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span>Click "Download MP3" to save your converted audio file</span>
                </li>
              </ol>
            </div>
          </div>
        </section>
        
        {/* FAQ Section for SEO */}
        <section className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Is ConverterBox YouTube to MP3 converter free?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! ConverterBox is completely free to use. Convert unlimited YouTube videos to MP3 
                  without any charges, subscriptions, or hidden fees.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  What audio quality do I get with the MP3 conversion?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our YouTube to MP3 converter provides high-quality 128kbps MP3 files that maintain 
                  excellent audio clarity while keeping file sizes manageable.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Do I need to install software to convert YouTube to MP3?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No installation required! ConverterBox works entirely in your web browser. 
                  Simply visit our website and start converting YouTube videos to MP3 instantly.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Is it legal to convert YouTube videos to MP3?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Converting YouTube videos for personal use is generally acceptable. However, 
                  please respect copyright laws and only convert content you have permission to use.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm mb-2">
            © 2024 ConverterBox - Free YouTube to MP3 Converter. All rights reserved.
          </p>
          <p className="text-xs">
            For personal use only. Please respect copyright laws and terms of service.
          </p>
        </footer>
      </div>
    </div>
  );
}
