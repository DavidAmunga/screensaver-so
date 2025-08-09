import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight, Apple, MonitorSpeaker } from "lucide-react";

export const Route = createFileRoute("/")({
  component: ScreensaverSo,
});

function ScreensaverSo() {
  const currentDate = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = days[currentDate.getDay()];
  const day = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  return (
    <div className="h-screen bg-stone-100 overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-stone-100/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={"/logo.png"} alt="Screensaver.so" className="w-6 h-6" />
              <span className="text-lg font-semibold text-gray-900">
                screensaver.so
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Single Screen Layout */}
      <div className="h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-12">
            {/* Left Column - Product Info */}
            <div className="space-y-8 w-1/3">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                  ChalkTime
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Elegant chalk-style clock screensaver for Mac
                </p>
              </div>

              {/* Features - Compact */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <MonitorSpeaker className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Chalk-style typography</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Live date & time updates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <Apple className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700">
                    Native macOS integration
                  </span>
                </div>
              </div>

              {/* Download Button */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/files/ChalkTime-macOS.saver.zip";
                    link.download = "ChalkTime-macOS.saver.zip";
                    link.click();
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download for Mac
                </Button>
                <p className="text-sm text-gray-500">
                  Free download • No registration required • macOS 10.12+
                </p>
              </div>

              {/* Credits */}
              <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
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
            <div className="relative flex-1 ">
              <div
                className="aspect-[4/3]  relative  mx-auto w-full"
                style={{
                  backgroundImage: "url(/background.jpg)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Chalk overlay content */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-white"
                  style={{ fontFamily: "Comic Sans MS, cursive" }}
                >
                  <div className="text-center">
                    <div className="text-xl md:text-4xl font-bold mb-3 opacity-90">
                      {dayName} {day} {monthName}, {year}
                    </div>
                    <div className="text-4xl relative md:text-[250px] font-bold mb-2">
                      <div className="text-4xl md:text-[190px] font-bold mb-2">
                        {displayHours}:{minutes}
                      </div>
                      <div className="absolute top-8 -right-10 text-2xl md:text-5xl font-bold opacity-90">
                        {ampm}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
