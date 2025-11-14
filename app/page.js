'use client';

import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import YouTubeConverter from './components/YouTubeConverter';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(new Set());

  const toggleFAQ = (id) => {
    const newOpenFAQ = new Set(openFAQ);
    if (newOpenFAQ.has(id)) {
      newOpenFAQ.delete(id);
    } else {
      newOpenFAQ.add(id);
    }
    setOpenFAQ(newOpenFAQ);
  };

  const faqData = [
    {
      id: 1,
      question: "Is this YouTube to MP3 converter free?",
      answer: "Yes! Our converter is completely free to use. Convert unlimited YouTube videos to MP3 without any charges, subscriptions, or hidden fees."
    },
    {
      id: 2,
      question: "What audio quality do I get?",
      answer: "Our converter provides high-quality 128kbps MP3 files that maintain excellent audio clarity while keeping file sizes manageable."
    },
    {
      id: 3,
      question: "Do I need to install software?",
      answer: "No installation required! Our converter works entirely in your web browser. Simply visit our website and start converting instantly."
    },
    {
      id: 4,
      question: "Is it legal to convert YouTube videos?",
      answer: "Converting YouTube videos for personal use is generally acceptable. However, please respect copyright laws and only convert content you have permission to use."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 pt-28">
        <div className='relative z-99 w-full'>
          <div className="absolute w-60 h-60 bg-(--primary-color) rounded-full blur-[120px] opacity-20 bottom-10 right-20 animate-[pulse_5s_ease-in-out_infinite]"></div>
          <div className="absolute w-48 h-48 bg-(--primary-color) rounded-ull blur-[90px] opacity-15 top-1/3 right-1/3 animate-[pulse_5s_ease-in-out_infinite]"></div>
          <div className="absolute w-24 h-24 bg-(--primary-color) rounded-full blur-[60px] opacity-10 top-1/2 left-1/4 animate-[bounce_10s_ease-in-out_infinite]"></div>

          {/* Hero Section */}
          <header className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              <span className='text-(--primary-color)'>ConverterBox</span> - YouTube to <span className='text-(--primary-color) underline underline-offset-8'>MP3 Converter</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              <strong>ConverterBox</strong> is the best free YouTube to MP3 converter online. Convert YouTube videos to high-quality MP3 files instantly at <span className='font-semibold text-(--primary-color)'>converterbox.online</span>.
              Fast, secure, and completely free.
            </p>

            {/* Key features */}
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-12">
              <span className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">Free Forever <Check className='text-(--primary-color)' /></span>
              <span className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">High Quality <Check className='text-(--primary-color)' /></span>
              <span className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">No Registration <Check className='text-(--primary-color)' /></span>
              <span className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">Secure & Private <Check className='text-(--primary-color)' /></span>
            </div>
          </header>
          <YouTubeConverter />

        </div>

        {/* Features Section */}
        <section id="features" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Why Choose ConverterBox?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ConverterBox offers simple, fast, and reliable YouTube to MP3 conversion with no compromises. Experience the best converter at converterbox.online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-[#fba363] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Convert videos to MP3 in seconds with our optimized processing engine.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-[#fba363] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                High Quality Audio
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get crystal-clear 128kbps MP3 files that preserve original audio quality.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-[#fba363] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                100% Secure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No data stored, completely private. Your files are processed securely.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-[#fba363] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                All Devices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Works perfectly on desktop, mobile, and tablet. No installation required.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section id="how-to" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              How to Convert YouTube to MP3
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to convert any YouTube video to MP3 format.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fba363] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-black mb-2">Copy URL</h3>
              <p className="text-sm text-gray-600">Copy the YouTube video URL you want to convert</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#fba363] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-black mb-2">Paste URL</h3>
              <p className="text-sm text-gray-600">Paste the URL into the converter above</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#fba363] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-black mb-2">Wait</h3>
              <p className="text-sm text-gray-600">Wait for automatic conversion to complete</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#fba363] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-black mb-2">Download</h3>
              <p className="text-sm text-gray-600">Click download to save your MP3 file</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our YouTube to MP3 converter.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqData.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-orange-200 transition-colors duration-200">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="shrink-0">
                    {openFAQ.has(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 pt-12 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600 mb-2">
            © 2025 <strong>ConverterBox</strong> - Best Free YouTube to MP3 Converter Online | converterbox.online
          </p>
          <p className="text-xs text-gray-500">
            ConverterBox is for personal use only. Please respect copyright laws and terms of service.
          </p>
        </footer>
      </div>
    </div>
  );
}
