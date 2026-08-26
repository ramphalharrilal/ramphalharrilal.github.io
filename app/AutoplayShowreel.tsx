"use client";

import { useEffect, useRef } from "react";

export default function AutoplayShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startPlayback = () => {
      video.muted = true;
      void video.play().catch(() => {
        // Browsers that block all autoplay still leave the controls available.
      });
    };

    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible" && video.paused) startPlayback();
    };

    startPlayback();
    video.addEventListener("canplay", startPlayback);
    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      video.removeEventListener("canplay", startPlayback);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      controls
      loop
      muted
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

