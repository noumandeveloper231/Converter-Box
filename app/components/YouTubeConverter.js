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

  // 🔑 RapidAPI Keys & URLs
  const RAPIDAPI_KEY = 'f03f2706afmshe9113049e8cf17dp19a386jsnb6f5a5ed0652';
  const RAPIDAPI_MP3 = 'https://youtube-mp36.p.rapidapi.com/dl';

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
  }, [url, extractVideoId]);

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
    <div className="max-w-3xl mx-auto p-8">
      {/* 🔗 URL Input */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
        <label className="block text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
          YouTube URL
        </label>
        <div className="flex gap-3">
          <input
            ref={inputRef}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            disabled={loading || downloading}
          />
          <button
            onClick={handleReset}
            disabled={loading || downloading}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white rounded-lg font-semibold"
          >
            {(loading || downloading) ? (
              <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
            ) : (
              'Clear'
            )}
          </button>
        </div>

        {error && (
          <p className="mt-3 text-red-600 dark:text-red-400 font-medium">{error}</p>
        )}
      </div>

      {/* 🔄 Loading */}
      {loading && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="animate-spin mx-auto w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            Processing video...
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Please wait while we fetch and convert your video.
          </p>
        </div>
      )}

      {/* 🎧 Video Info */}
      {videoInfo && !loading && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden">
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
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {videoInfo.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                by {videoInfo.author}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p>
                  <strong>Duration:</strong> {formatDuration(videoInfo.duration)}
                </p>
                <p>
                  <strong>File Size:</strong>{' '}
                  {videoInfo.filesize
                    ? (videoInfo.filesize / 1024 / 1024).toFixed(2) + ' MB'
                    : 'N/A'}
                </p>
              </div>
              {videoInfo.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {videoInfo.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold flex items-center gap-2"
            >
              {downloading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Downloading...
                </>
              ) : (
                'Download MP3'
              )}
            </button>
            <button
              onClick={handleReset}
              disabled={downloading}
              className="px-8 py-3 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white rounded-lg font-semibold"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* 🌟 Footer Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
        {[
          {
            title: 'Fast Conversion',
            text: 'Convert videos to MP3 in seconds using optimized RapidAPI endpoints.',
            icon: '⚡',
          },
          {
            title: 'High Quality',
            text: 'Get clean, high-quality 128kbps MP3 files instantly.',
            icon: '🎵',
          },
          {
            title: 'Secure & Private',
            text: 'All conversions are handled securely — no data stored.',
            icon: '🔒',
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
