import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ChalkTime } from "@/components/ChalkTime";
import { ProgressMeter } from "@/components/ProgressMeter";

export const Route = createFileRoute("/")({
  component: ScreensaverSo,
});

type OSType = "mac" | "windows";

function ScreensaverSo() {
  const [detectedOS, setDetectedOS] = useState<OSType>("windows");

  // Detect user's operating system
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      setDetectedOS("mac");
    } else {
      setDetectedOS("windows"); // Default to Windows for all other OS (including Linux)
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-stone-100/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="flex items-center space-x-2">
              <img
                src={"/logo.png"}
                alt="Screensaver.so"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-base sm:text-lg font-semibold text-gray-900">
                screensaver.so
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-full pt-20 pb-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Beautiful Screensavers
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Elegant, minimalist screensavers that turn your idle screen into
              something beautiful
            </p>
          </div>

          {/* Screensavers Grid */}
          <div className="space-y-8 lg:space-y-12">
            {/* ChalkTime */}
            <ChalkTime detectedOS={detectedOS} />

            {/* ProgressMeter */}
            <ProgressMeter />
          </div>

          {/* Credits Section */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Built with ❤️ in 🇰🇪 by{" "}
              <a
                href="https://twitter.com/davidamunga_"
                target="_blank"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                David Amunga
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-2 italic">
              Rated nothing yet, but my mum likes them. So I hope you do too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
