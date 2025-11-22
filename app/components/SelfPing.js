'use client';

import { useEffect, useRef } from 'react';

export default function SelfPing() {
  const timerRef = useRef(null);

  useEffect(() => {
    const ping = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      try {
        await fetch('/api/ping', { method: 'GET', cache: 'no-store', signal: controller.signal });
      } catch (_) {
      } finally {
        clearTimeout(timeoutId);
      }
    };

    ping();
    timerRef.current = setInterval(ping, 14 * 60 * 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return null;
}