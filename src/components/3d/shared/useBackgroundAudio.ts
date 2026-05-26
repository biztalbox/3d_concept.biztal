"use client";

import { useEffect, useRef } from "react";

type UseBackgroundAudioOptions = {
  src: string;
  volume?: number;
  loop?: boolean;
};

/**
 * Attempts autoplay on mount. If the browser blocks it, retries on the
 * first user interaction (click / key / touch).
 */
export function useBackgroundAudio({
  src,
  volume = 0.45,
  loop = true,
}: UseBackgroundAudioOptions) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;
    audioRef.current = audio;

    const tryPlay = () => {
      if (unlockedRef.current) return;
      void audio.play().then(() => {
        unlockedRef.current = true;
        removeUnlockListeners();
      }).catch(() => {
        /* blocked until user gesture */
      });
    };

    const unlock = () => tryPlay();

    const removeUnlockListeners = () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
    window.addEventListener("touchstart", unlock, { passive: true });

    tryPlay();

    return () => {
      removeUnlockListeners();
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [src, volume, loop]);
}
