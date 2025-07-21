import { useState, useEffect } from "react";
import { MousePointer, AlertTriangle, Info, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdwareSimulationProps {
  onExit: () => void;
}

export default function AdwareSimulation({ onExit }: AdwareSimulationProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [popupCount, setPopupCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showPopups, setShowPopups] = useState(true);

  const adPopups = [
    { title: "CONGRATULATIONS!", text: "You've won $1000! Click here to claim!", type: "prize" },
    { title: "VIRUS ALERT!", text: "Your computer is infected! Download CleanerPro now!", type: "fake-antivirus" },
    { title: "Hot Singles in Your Area", text: "Meet attractive people near you tonight!", type: "dating" },
    { title: "Make Money Online", text: "Earn $500/day from home! No experience needed!", type: "money" },
    { title: "Your Browser is Out of Date", text: "Update now for better security!", type: "fake-update" },
    { title: "Free iPhone 15 Pro!", text: "Take our survey and get a free iPhone!", type: "survey-scam" }
  ];

  const [currentPopup, setCurrentPopup] = useState(0);

  useEffect(() => {
    if (!showPopups) return;

    const popupTimer = setInterval(() => {
      setPopupCount(prev => prev + 1);
      setCurrentPopup(prev => (prev + 1) % adPopups.length);
    }, 3000);

    return () => clearInterval(popupTimer);
  }, [showPopups]);

  const handleAdClick = () => {
    setClickCount(prev => prev + 1);
    alert("In a real scenario, this could lead to more malware installation or fraudulent websites!");
  };

  const closePopup = () => {
    setShowPopups(false);
    setTimeout(() => setShowPopups(true), 5000); // Popups return after 5 seconds
  };

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-yellow-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <MousePointer className="w-5 h-5 mr-3 text-yellow-200" />
          <span className="font-semibold">ADWARE INFECTION SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-yellow-600 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
          >
            <Info className="w-4 h-4 mr-1" />
            Learn More
          </Button>
          <Button
            onClick={onExit}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 text-sm font-medium"
          >
            Exit Simulation
          </Button>
        </div>
      </div>

      {/* Browser with Adware */}
      <div className="bg-white border-x border-b border-gray-300 rounded-b-xl overflow-hidden relative">
        {/* Browser Header */}
        <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-white rounded px-3 py-1 text-sm text-gray-600 flex-1 ml-4">
              https://news-site.com/article/breaking-news
            </div>
          </div>
        </div>

        {/* Main Content with Ads */}
        <div className="relative min-h-96">
          {/* Legitimate Content */}
          <div className="p-6 max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Breaking News Article</h2>
            <p className="text-gray-700 mb-4">
              This would normally be legitimate news content that the user wants to read. 
              However, the adware has injected multiple intrusive advertisements throughout the page.
            </p>
            <p className="text-gray-700 mb-4">
              The adware modifies web pages by inserting pop-ups, banner ads, and sponsored links 
              that weren't part of the original website. These ads often promote suspicious products 
              or services and may lead to malware downloads.
            </p>
          </div>

          {/* Injected Banner Ads */}
          <div className="bg-red-100 border-2 border-red-400 p-4 m-4 rounded-lg animate-pulse">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-red-700">🚨 URGENT SECURITY ALERT!</h3>
                <p className="text-sm text-red-600">Your Windows license expires today! Renew now!</p>
              </div>
              <button 
                onClick={handleAdClick}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                RENEW NOW
              </button>
            </div>
          </div>

          {/* Side Banner Ads */}
          <div className="absolute top-4 right-4 w-64 space-y-4">
            <div className="bg-blue-100 border-2 border-blue-400 p-3 rounded-lg">
              <h4 className="font-bold text-blue-700 text-sm">💰 Make $5000/Month!</h4>
              <p className="text-xs text-blue-600 mb-2">Work from home opportunity</p>
              <button 
                onClick={handleAdClick}
                className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
              >
                LEARN MORE
              </button>
            </div>

            <div className="bg-green-100 border-2 border-green-400 p-3 rounded-lg">
              <h4 className="font-bold text-green-700 text-sm">🎁 FREE GIFT CARD!</h4>
              <p className="text-xs text-green-600 mb-2">$500 Amazon gift card waiting</p>
              <button 
                onClick={handleAdClick}
                className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700"
              >
                CLAIM NOW
              </button>
            </div>
          </div>

          {/* Pop-up Ads */}
          {showPopups && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-md mx-4 relative animate-bounce">
                <button 
                  onClick={closePopup}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    {adPopups[currentPopup].title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {adPopups[currentPopup].text}
                  </p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={handleAdClick}
                      className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 flex items-center"
                    >
                      Click Here <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                    <button 
                      onClick={closePopup}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Statistics Overlay */}
          <div className="absolute bottom-4 left-4 bg-gray-800 text-white p-3 rounded-lg text-sm">
            <h4 className="font-semibold mb-2">Adware Activity</h4>
            <div className="space-y-1">
              <div>Popups Shown: <span className="text-yellow-400">{popupCount}</span></div>
              <div>Ad Clicks: <span className="text-red-400">{clickCount}</span></div>
              <div>Revenue Generated: <span className="text-green-400">${(clickCount * 0.05).toFixed(2)}</span></div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs z-40">
          <Info className="w-4 h-4 inline mr-1" />
          ADWARE SIMULATION
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Understanding Adware:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Adware Symptoms:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Excessive pop-up advertisements</li>
                <li>• Browser homepage changes</li>
                <li>• Unwanted toolbar installations</li>
                <li>• Slow browsing performance</li>
                <li>• Unexpected redirects to ad sites</li>
                <li>• New bookmarks appearing automatically</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Prevention & Removal:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use reputable ad blockers</li>
                <li>• Avoid clicking on suspicious ads</li>
                <li>• Download software from official sources</li>
                <li>• Regular malware scans</li>
                <li>• Check browser extensions regularly</li>
                <li>• Read installation prompts carefully</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-800">
              <strong>Business Model:</strong> Adware generates revenue through clicks and impressions. 
              While not always malicious, it degrades user experience and can serve as a gateway for more serious malware.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}