import { useState, useEffect } from "react";
import { Shield, AlertTriangle, Info, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SystemWarningSimulationProps {
  onExit: () => void;
}

export default function SystemWarningSimulation({ onExit }: SystemWarningSimulationProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-danger-red text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <AlertTriangle className="w-5 h-5 mr-3 text-yellow-200" />
          <span className="font-semibold">FAKE SYSTEM WARNING SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-danger-red hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      {/* Fake Windows Security Warning */}
      <div className="bg-white border-x border-b border-gray-300 rounded-b-xl overflow-hidden relative">
        {/* Browser-like Header */}
        <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-white rounded px-3 py-1 text-sm text-gray-600 flex-1 ml-4">
              https://windows-security-alert.suspicious-domain.com
            </div>
          </div>
        </div>

        {/* Fake Warning Content */}
        <div className="p-8 text-center bg-gradient-to-b from-red-50 to-white">
          {/* Warning Header */}
          <div className="mb-6">
            <div className={`w-20 h-20 mx-auto mb-4 ${isBlinking ? 'bg-red-500' : 'bg-red-600'} rounded-full flex items-center justify-center transition-colors`}>
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-red-600 mb-2">CRITICAL SECURITY ALERT</h2>
            <p className="text-xl text-red-500 font-semibold">Your Computer Has Been Infected!</p>
          </div>

          {/* Fake Virus List */}
          <div className="bg-white border-2 border-red-200 rounded-lg p-6 mb-6 text-left">
            <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Detected Threats:
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Trojan.Generic.KD.12345678</span>
                <span className="text-red-600 font-semibold">HIGH RISK</span>
              </div>
              <div className="flex justify-between">
                <span>Adware.Win32.BrowseFox</span>
                <span className="text-red-600 font-semibold">HIGH RISK</span>
              </div>
              <div className="flex justify-between">
                <span>Spyware.Password.Stealer</span>
                <span className="text-red-600 font-semibold">CRITICAL</span>
              </div>
              <div className="flex justify-between">
                <span>Ransomware.Locky.Variant</span>
                <span className="text-red-600 font-semibold">CRITICAL</span>
              </div>
            </div>
          </div>

          {/* Fake Urgency Message */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-gray-800 font-semibold">
              ⚠️ IMMEDIATE ACTION REQUIRED ⚠️
            </p>
            <p className="text-sm text-gray-700 mt-2">
              Your personal information, banking details, and passwords are at risk. 
              Contact our certified technicians immediately to secure your system.
            </p>
          </div>

          {/* Fake Contact Information */}
          <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">Microsoft Support</h3>
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 mr-3" />
              <span className="text-2xl font-bold">1-800-FAKE-SCAM</span>
            </div>
            <p className="text-blue-200 text-sm">
              Call now! Our technicians are standing by 24/7 to help secure your computer.
            </p>
          </div>

          {/* Fake Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold cursor-not-allowed opacity-75"
              disabled
              onClick={() => alert("SCAM ALERT! Never call numbers from pop-ups. This is a common tech support scam!")}
            >
              CALL NOW (FAKE)
            </button>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold cursor-not-allowed opacity-75"
              disabled
              onClick={() => alert("SCAM ALERT! Never download software from suspicious websites!")}
            >
              DOWNLOAD FIX (FAKE)
            </button>
          </div>

          {/* Fake Timer */}
          <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded">
            <p className="text-red-700 font-bold">
              Time remaining before system shutdown: <span className="text-2xl">05:47</span>
            </p>
          </div>
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          FAKE SCAM - EDUCATIONAL ONLY
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">How to Spot Tech Support Scams:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Red Flags:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pop-ups with urgent security warnings</li>
                <li>• Claims your computer is infected</li>
                <li>• Requests to call a phone number</li>
                <li>• Fake countdown timers creating urgency</li>
                <li>• Claims to be from Microsoft/Apple</li>
                <li>• Asks for remote access to your computer</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">What to Do:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Close the browser tab/window</li>
                <li>• Never call numbers from pop-ups</li>
                <li>• Run legitimate antivirus software</li>
                <li>• Contact official tech support directly</li>
                <li>• Report scam websites to authorities</li>
                <li>• Educate others about these scams</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}