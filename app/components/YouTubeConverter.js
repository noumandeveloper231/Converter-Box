'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';

export default function YouTubeConverter() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const [error, setError] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [downloading, setDownloading] = useState(false);
  const inputRef = useRef(null);
  const videoInfoRef = useRef(null);

  // 🔑 RapidAPI Keys & URLs
  const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
  const RAPIDAPI_MP3 = process.env.NEXT_PUBLIC_RAPIDAPI_MP3;

  // ✅ URL & ID validation (memoized for performance)
  const extractVideoId = useCallback((url) => {
    const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  }, []);

  const validateYouTubeURL = useCallback((url) =>
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/.test(url), []);

  // ⚡ Auto-fetch on valid URL
  useEffect(() => {
    if (!url.trim()) {
      setVideoInfo(null);
      setDownloadUrl('');
      setError('');
      return;
    }
    if (validateYouTubeURL(url)) {
      const timer = setTimeout(() => fetchVideoData(), 200);
      return () => clearTimeout(timer);
    }
  }, [url]);

  // 🎯 Auto-scroll to video info when data loads
  useEffect(() => {
    if (videoInfo && !loading && videoInfoRef.current) {
      const timer = setTimeout(() => {
        videoInfoRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }, 500); // Increased delay to ensure DOM is fully rendered
      
      return () => clearTimeout(timer);
    }
  }, [videoInfo, loading]);

  // 🎥 Fetch video info + MP3 link (memoized for performance)
  const fetchVideoData = useCallback(async () => {
    const videoId = extractVideoId(url);
    if (!videoId) return setError('Invalid YouTube URL');

    setLoading(true);
    setError('');
    setVideoInfo(null);
    setDownloadUrl('');

    try {
      // 1️⃣ Get video info using YouTube oEmbed API
      const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
      const oembedData = await oembedRes.json();

      // 2️⃣ Get MP3 link from RapidAPI
      const mp3Res = await fetch(`${RAPIDAPI_MP3}?id=${videoId}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
        },
      });
      const mp3 = await mp3Res.json();

      if (!mp3.link) throw new Error('Conversion failed. Please try again.');

      // Generate thumbnail URL
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

      setVideoInfo({
        title: oembedData.title || mp3.title || 'YouTube Video',
        author: oembedData.author_name || 'Unknown',
        thumbnail: thumbnailUrl,
        duration: mp3.duration || 0,
        viewCount: 0, // oEmbed doesn't provide view count
        description: '', // oEmbed doesn't provide description
        filesize: mp3.filesize || 0,
      });

      setDownloadUrl(mp3.link);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to fetch video info.');
    } finally {
      setLoading(false);
    }
  }, [url, extractVideoId, RAPIDAPI_KEY, RAPIDAPI_MP3]);

  // 💾 Download handler
  const handleDownload = () => {
    if (!downloadUrl) return;

    setDownloading(true);

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${videoInfo?.title?.replace(/[^a-zA-Z0-9]/g, '_')}.mp3`;
    link.click();

    // Reset downloading state after a short delay
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  // 🔄 Reset
  const handleReset = () => {
    setUrl('');
    setVideoInfo(null);
    setError('');
    setDownloadUrl('');
    setDownloading(false);
    inputRef.current?.focus();
  };

  // ⏱ Duration formatter
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-3xl mx-auto relative ">
      {/* URL Input */}
      <div className="bg-white/50 border border-gray-300 rounded-xl p-4 sm:p-6 md:p-8">
        <label className="block text-lg font-semibold mb-4 text-black">
          Enter <span className='text-(--primary-color)'>YouTube</span> URL
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            ref={inputRef}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="sm:flex-1 w-full min-w-0 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fba363] focus:outline-none transition-colors duration-200 text-black placeholder-gray-400"
            disabled={loading || downloading}
          />
          <button
            onClick={handleReset}
            disabled={loading || downloading}
            className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-lg font-medium transition-colors duration-200"
          >
            {(loading || downloading) ? (
              <div className="animate-spin w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"></div>
            ) : (
              'Clear'
            )}
          </button>
        </div>

        {error && (
          <p className="mt-4 text-red-600 font-medium">{error}</p>
        )}
      </div>

      {/* Loading */}
      {loading && (
        <div className="mt-5 bg-white border border-gray-200 rounded-xl p-8 text-center">
          <div className="animate-spin mx-auto w-8 h-8 border-3 border-[#fba363] border-t-transparent rounded-full mb-4"></div>
          <h2 className="text-lg font-semibold text-black mb-2">
            Processing video...
          </h2>
          <p className="text-gray-600">
            Please wait while we fetch and convert your video.
          </p>
        </div>
      )}

      {/* Video Info */}
      {videoInfo && !loading && (
        <div ref={videoInfoRef} className="bg-white border border-gray-200 rounded-xl p-8 mt-5 ">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={videoInfo.thumbnail}
                alt={`${videoInfo.title} - YouTube Video Thumbnail`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-bold text-black leading-tight">
                {videoInfo.title}
              </h2>
              <p className="text-gray-600">
                by {videoInfo.author}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-500 block">Duration</span>
                  <span className="font-semibold text-black">{formatDuration(videoInfo.duration)}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-500 block">File Size</span>
                  <span className="font-semibold text-black">
                    {videoInfo.filesize
                      ? (videoInfo.filesize / 1024 / 1024).toFixed(2) + ' MB'
                      : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-8 py-4 bg-[#fba363] hover:bg-[#f59542] disabled:bg-gray-300 disabled:text-gray-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
            >
              {downloading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download MP3
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              disabled={downloading}
              className="px-6 py-4 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-lg font-medium transition-colors duration-200"
            >
              Convert Another
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
