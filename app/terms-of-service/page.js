export const metadata = {
  title: "Terms of Service - ConverterBox YouTube to MP3 Converter",
  description: "Terms of service for ConverterBox YouTube to MP3 converter. Read our terms and conditions for using our free service.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              By using ConverterBox, you agree to these terms of service. If you do not agree, please do not use our service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              Service Description
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              ConverterBox provides a free YouTube to MP3 conversion service. We convert publicly available YouTube videos to MP3 format for personal use only.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
              <li>Use the service only for personal, non-commercial purposes</li>
              <li>Respect copyright laws and intellectual property rights</li>
              <li>Do not attempt to overload or abuse our service</li>
              <li>Only convert content you have permission to use</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              ConverterBox is provided "as is" without warranties. We are not responsible for any copyright violations by users.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For questions about these terms, contact us at legal@converterbox.online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
