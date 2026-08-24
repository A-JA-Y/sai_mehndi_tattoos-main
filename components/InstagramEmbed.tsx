"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/**
 * Renders a real Instagram reel/post via Instagram's own embed widget, locked
 * into a portrait frame.
 *
 * The widget sizes its iframe itself, so an embed's natural height depends on
 * the post — square and landscape posts come back short and wide and break the
 * row. `.ig-portrait` (app/globals.css) pins the injected iframe to a 9:16 box
 * so every embed on the page reads as a portrait card whatever was posted; the
 * overflow it clips is Instagram's own footer chrome.
 */
export default function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process();
    if (window.instgrm) {
      process();
      return;
    }
    const existing = document.getElementById("instagram-embed-script");
    if (existing) {
      existing.addEventListener("load", process);
      return () => existing.removeEventListener("load", process);
    }
    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);
  }, [url]);

  return (
    <div className="ig-portrait">
      <blockquote
        ref={ref}
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%", minWidth: "unset" }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View on Instagram
        </a>
      </blockquote>
    </div>
  );
}
