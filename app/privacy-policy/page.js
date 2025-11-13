export const metadata = {
  title: "Privacy Policy - ConverterBox YouTube to MP3 Converter",
  description: "Privacy policy for ConverterBox YouTube to MP3 converter. Learn how we protect your privacy and handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              ConverterBox does not collect, store, or process any personal information. We do not require registration, 
              and we do not track users across sessions.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              How We Use Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We only process YouTube URLs temporarily to provide the conversion service. No URLs or converted files 
              are stored on our servers.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use third-party APIs to process YouTube videos. These services may have their own privacy policies.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@converterbox.online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
