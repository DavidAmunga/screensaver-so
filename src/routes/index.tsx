import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import logo from "@/logo.svg";

export const Route = createFileRoute("/")({
  component: ScreensaverSo,
});

function ScreensaverSo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="Screensaver.so" className="w-16 h-16 mr-3" />
            <h1 className="text-4xl font-bold text-black">screensaver.so</h1>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Beautiful Desktop Screensavers. Download premium screensavers for
            Mac & PC.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        {/* ChalkTime Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-8">ChalkTime</h2>
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <img
              src="/chalktime-screen.png"
              alt="ChalkTime Screensaver Preview"
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Elegant chalk-style clock. Transform your idle screen into a
            minimalist timepiece.
          </p>
          <div className="space-y-4 text-sm text-gray-500 mb-8">
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
              <div>
                <div className="font-medium text-black">Platform</div>
                <div>macOS</div>
              </div>
              <div>
                <div className="font-medium text-black">Style</div>
                <div>Minimalist</div>
              </div>
              <div>
                <div className="font-medium text-black">Size</div>
                <div>494 KB</div>
              </div>
            </div>
          </div>
          <Button
            className="bg-black cursor-pointer text-white hover:bg-gray-800 px-8 py-3"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/files/ChalkTime-macOS.saver.zip";
              link.download = "ChalkTime-macOS.saver.zip";
              link.click();
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download for Mac (Apple Silicon)
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center pt-16 border-t border-gray-200">
          <p className="text-gray-500 mb-2">
            Built with ❤️ by{" "}
            <a
              href="https://twitter.com/davidamunga_"
              target="_blank"
              className="text-blue-500 hover:text-blue-600"
            >
              David Amunga
            </a>
          </p>
          <p className="text-gray-500 mb-2">More screensavers coming soon!</p>
          <p className="text-sm text-gray-400">© 2025 screensaver.so</p>
        </div>
      </main>
    </div>
  );
}
