"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [os, setOs] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        setOs("ios");
      } else if (/Android/.test(userAgent)) {
        setOs("android");
      } else {
        setOs("other");
      }
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-center">Welcome to Tripenigma</h1>
      <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-2 sm:mb-4 max-w-xl">
        Discoverr more, stress less. Get the TripEnigma app today and simplify your travel plans!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:w-auto items-center justify-center">
        {os === "android" && (
          <a
            href="https://play.google.com/store/apps/details?id=com.tripenigma.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 transition-colors font-semibold w-full sm:w-auto"
          >
            <img src="/playstore.svg" alt="Play Store" className="w-6 h-6" />
            Download for Android
          </a>
        )}
        {os === "ios" && (
          <a
            href="https://apps.apple.com/app/tripenigma/id[APP_ID]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 transition-colors font-semibold w-full sm:w-auto"
          >
            <img src="/apple.svg" alt="Apple Store" className="w-6 h-6" />
            Download for iOS
          </a>
        )}
        {os === "other" && (
          <>
            <a
              href="https://play.google.com/store/apps/details?id=com.tripenigma.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 transition-colors font-semibold w-full sm:w-auto"
            >
              <img src="/playstore.svg" alt="Play Store" className="w-6 h-6" />
              Download for Android
            </a>
            <a
              href="https://apps.apple.com/app/tripenigma/id[APP_ID]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 transition-colors font-semibold w-full sm:w-auto"
            >
              <img src="/apple.svg" alt="Apple Store" className="w-6 h-6" />
              Download for iOS
            </a>
          </>
        )}
      </div>
    </main>
  );
}
