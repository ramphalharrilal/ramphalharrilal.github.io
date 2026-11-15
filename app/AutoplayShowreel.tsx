"use client";

import { useEffect, useRef, useState } from "react";

const narration = "Every business starts somewhere. An idea, a promise, and the determination to keep building. At SZARA, we believe technology should help people move forward, not hold them back. We create thoughtful websites, simplify everyday business systems, test what matters, and support the people behind the work. From your first website to the next stage of growth, we bring care, clarity, and practical solutions. Build. Grow. Run. With SZARA.";

export default function AutoplayShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    const video = videoRef.current;
    if (video) void video.play().catch(() => {});
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  const toggleNarration = () => {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(narration);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        controls
        muted
        playsInline
        preload="metadata"
        poster="/images/gallery/rh-tech-support-full-capabilities-v6.png"
        aria-label="SZARA project and capabilities showreel, original video muted"
      >
        <source src="/images/gallery/rh-tech-support-full-capabilities-v6.mp4" type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      <div style={{ padding: "14px 16px", background: "#171717", color: "#fff" }}>
        <button type="button" onClick={toggleNarration} disabled={!supported}
          style={{ padding: "11px 18px", borderRadius: "24px", border: "1px solid #fff", background: "#fff", color: "#171717", fontWeight: 700, cursor: "pointer" }}>
          {speaking ? "Stop narration" : "▶ Play SZARA narration"}
        </button>
        <details style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6 }}>
          <summary style={{ cursor: "pointer" }}>Read narration transcript</summary>
          <p>{narration}</p>
        </details>
        {!supported && <p>Speech playback is not available in this browser. You can read the transcript above.</p>}
      </div>
    </div>
  );
}
