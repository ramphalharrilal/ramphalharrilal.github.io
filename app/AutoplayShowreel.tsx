"use client";

import { useEffect, useRef } from "react";

export default function AutoplayShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let initialAttempted = false;

    const startFirstPlay = () => {
      if (initialAttempted) return;
      initialAttempted = true;
      video.currentTime = 0;
      video.muted = false;

      void video.play().catch(() => {
        // Most browsers block unmuted autoplay for first-time visitors.
        video.muted = true;
        void video.play().catch(() => {
          // Controls remain available if the browser blocks all autoplay.
        });
      });
    };

    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible" && video.paused) {
        video.muted = true;
        void video.play().catch(() => {});
      }
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      startFirstPlay();
    } else {
      video.addEventListener("canplay", startFirstPlay, { once: true });
    }
    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      video.removeEventListener("canplay", startFirstPlay);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, []);

  const replayMuted = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.currentTime = 0;
    void video.play().catch(() => {});
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      controls
      muted
      onEnded={replayMuted}
      playsInline
      preload="auto"
      poster="/images/gallery/rh-tech-support-full-capabilities-v6.png"
      aria-label="RH Tech Support full capabilities promotional video"
    >
      <source
        src="/images/gallery/rh-tech-support-full-capabilities-v6.mp4"
        type="video/mp4"
      />
      Your browser does not support embedded video.
    </video>
  );
}

