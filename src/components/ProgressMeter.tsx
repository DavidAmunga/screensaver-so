import { Button } from "@/components/ui/button";
import { ChevronRight, MonitorSpeaker, Battery } from "lucide-react";
import { FaApple } from "react-icons/fa6";

export function ProgressMeter() {
  const config = {
    downloadFile: "/files/ProgressMeter-v1.3.0.zip",
    downloadName: "ProgressMeter-v1.3.0.zip",
    buttonText: "Download for Mac",
    description: "Free download • No registration required • macOS 11.7.10+",
    screenshot: "/progressmeter-screen-mac.png",
    productName: "Motivational Progress bar screensaver for Mac",
    icon: <FaApple />,
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Column - Product Info */}
        <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              ProgressMeter
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              {config.productName}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Battery className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-sm sm:text-base text-gray-700">
                Daily progress tracking
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <MonitorSpeaker className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-sm sm:text-base text-gray-700">
                Switch between Full Day & Work Day
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                <ChevronRight className="w-3 h-3 text-purple-600" />
              </div>
              <span className="text-sm sm:text-base text-gray-700">
                Real-time percentage updates
              </span>
            </div>
          </div>

          {/* Download Button */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-6 sm:px-8 py-3 text-base rounded-full transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => {
                const link = document.createElement("a");
                link.href = config.downloadFile;
                link.download = config.downloadName;
                link.click();
              }}
            >
              {config.icon}
              <span className="ml-2">{config.buttonText}</span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-500">
              {config.description}
            </p>
            <p className="text-xs text-gray-400">
              Mac only • Windows version coming soon
            </p>
          </div>
        </div>

        {/* Right Column - Screenshot */}
        <div className="relative flex-1 w-full max-w-lg mx-auto lg:mx-0">
          <div className="aspect-[4/3] relative">
            <img
              src={config.screenshot}
              alt="ProgressMeter screensaver on Mac"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
