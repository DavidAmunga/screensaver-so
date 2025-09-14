import { Button } from "@/components/ui/button";
import { ChevronRight, MonitorSpeaker } from "lucide-react";
import { FaApple, FaWindows } from "react-icons/fa6";

type OSType = "mac" | "windows";

interface ChalkTimeProps {
  detectedOS: OSType;
}

export function ChalkTime({ detectedOS }: ChalkTimeProps) {
  // OS-specific configuration for ChalkTime
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
      screenshot: "/chalktime-screen-mac.png",
      productName: "Elegant chalk-style clock screensaver for Mac",
      icon: <FaApple />,
    },
    windows: {
      downloadFile: "/files/ChalkTime-Windows-Portable.zip",
      downloadName: "ChalkTime-Windows-Portable.zip",
      buttonText: "Download for Windows",
      description: "Free download • No registration required • Windows 10+",
      screenshot: "/chalktime-screen-windows.png",
      productName: "Elegant chalk-style clock screensaver for Windows",
      icon: <FaWindows />,
    },
  };

  const currentConfig = osConfig[detectedOS];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Column - Product Info */}
        <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              ChalkTime
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              {currentConfig.productName}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
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
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base rounded-full transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => {
                const link = document.createElement("a");
                link.href = currentConfig.downloadFile;
                link.download = currentConfig.downloadName;
                link.click();
              }}
            >
              {currentConfig.icon}
              <span className="ml-2">{currentConfig.buttonText}</span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-500">
              {currentConfig.description}
            </p>
          </div>
        </div>

        {/* Right Column - Screenshot */}
        <div className="relative flex-1 w-full max-w-lg mx-auto lg:mx-0">
          <div className="aspect-[4/3] relative">
            <img
              src={currentConfig.screenshot}
              alt={`ChalkTime screensaver on ${detectedOS === "mac" ? "Mac" : "Windows"}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
