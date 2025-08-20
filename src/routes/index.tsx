import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {  ChevronRight, MonitorSpeaker } from "lucide-react";
import { useState, useEffect } from "react";
import { FaApple, FaWindows } from "react-icons/fa6";

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

  // OS-specific configuration
  const osConfig: Record<
    OSType,
    {
      downloadFile: string;
      downloadName: string;
      buttonText: string;
      description: string;
      screenshot: string;
      productName: string;
      icon: React.ReactNode;
    }
  > = {
    mac: {
      downloadFile: "/files/ChalkTime-v1.0.1.2.zip",
      downloadName: "ChalkTime-v1.0.1.2.zip",
      buttonText: "Download for Mac",
      description: "Free download • No registration required • macOS 11.7.10+",
      screenshot: "/screen-mac.png",
      productName: "Elegant chalk-style clock screensaver for Mac",
      icon: <FaApple />,
    },
    windows: {
      downloadFile: "/files/ChalkTime-Windows-Portable.zip",
      downloadName: "ChalkTime-Windows-Portable.zip",
      buttonText: "Download for Windows",
      description: "Free download • No registration required • Windows 10+",
      screenshot: "/screen-windows.png",
      productName: "Elegant chalk-style clock screensaver for Windows",
      icon: <FaWindows />,
    },
  };

  const currentConfig = osConfig[detectedOS];

  return (
    <div className="h-screen bg-stone-100 overflow-hidden">
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

      {/* Main Content - Responsive Layout */}
      <div className="h-full flex items-center pt-16 sm:pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex md:flex-col flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column - Product Info */}
            <div className="space-y-6 lg:space-y-8 w-full lg:w-1/3 text-center lg:text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                  ChalkTime
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6">
                  {currentConfig.productName}
                </p>
              </div>

              {/* Features - Compact */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <MonitorSpeaker className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Chalk-style typography
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Live date & time updates
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span>😎</span>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Just looks cool
                  </span>
                </div>
              </div>

              {/* Download Button */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = currentConfig.downloadFile;
                    link.download = currentConfig.downloadName;
                    link.click();
                  }}
                >
                  {currentConfig.icon}
                  {currentConfig.buttonText}
                </Button>
                <p className="text-xs sm:text-sm text-gray-500">
                  {currentConfig.description}
                </p>
                <p className="pt-2 italic text-xs sm:text-sm text-gray-500">
                  Rated nothing yet , but my mum likes it. so i hope you do too.
                </p>
              </div>

              {/* Credits */}
              <div className="text-xs sm:text-sm text-gray-500 pt-5 border-t border-gray-200">
                <p>
                  Built with ❤️ in 🇰🇪 by{" "}
                  <a
                    href="https://twitter.com/davidamunga_"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    David Amunga
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column - ChalkTime Preview */}
            <div className="relative flex-1 w-full max-w-2xl mx-auto lg:mx-0 md:mx-auto">
              <div className="aspect-[4/3] relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
                <img
                  src={currentConfig.screenshot}
                  alt={`ChalkTime screensaver on ${detectedOS === "mac" ? "Mac" : "Windows"}`}
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
