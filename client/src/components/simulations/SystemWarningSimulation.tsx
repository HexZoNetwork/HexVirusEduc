import { useState, useEffect } from "react";
import { AlertTriangle, Info, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SystemWarningSimulationProps {
  onExit: () => void;
}

export default function SystemWarningSimulation({ onExit }: SystemWarningSimulationProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const [showFakeBlueScreen, setShowFakeBlueScreen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500); // Faster blinking for more urgency

    // Simulate fake blue screen after 15 seconds
    const blueScreenTimer = setTimeout(() => {
      setShowFakeBlueScreen(true);
      console.log("💀 FAKE BLUE SCREEN: System appears to crash! (This is fake - for education only)");
    }, 15000);

    return () => {
      clearInterval(timer);
      clearTimeout(blueScreenTimer);
    };
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

      {/* Main Simulation Content */}
      <div className="relative">
        {/* Fake Blue Screen of Death */}
        {showFakeBlueScreen ? (
          <div className="bg-blue-600 text-white rounded-b-xl p-8 min-h-96 font-mono">
            <div className="text-center">
              <div className="text-8xl mb-4">:(</div>
              <h2 className="text-3xl font-bold mb-6">Your PC ran into a problem and needs to restart.</h2>
              <p className="text-lg mb-4">We're just collecting some error info, and then we'll restart for you.</p>
              <p className="text-xl font-bold mb-8">25% complete</p>
              
              <div className="text-left bg-blue-800 p-4 rounded text-sm">
                <p>If you call a support person, give them this info:</p>
                <p className="font-bold mt-2">Stop code: CRITICAL_PROCESS_DIED</p>
                <p>What failed: csrss.exe</p>
              </div>
              
              <div className="mt-8 text-yellow-300 animate-pulse">
                <p>⚠️ FAKE CRASH SCREEN - THIS IS EDUCATIONAL SIMULATION ONLY! ⚠️</p>
              </div>
            </div>
          </div>
        ) : (
          /* Fake Windows Security Warning */
          <div className="bg-white border-x border-b border-gray-300 rounded-b-xl overflow-hidden relative"
               style={{ filter: isBlinking ? 'brightness(1.3) saturate(1.5)' : 'brightness(1)' }}>
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
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 font-bold mr-2">⚠️</span>
                    Trojan.Win32.Generic (C:\Windows\System32\svchost.exe)
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 font-bold mr-2">⚠️</span>
                    Adware.BrowserHijacker (Browser Extension)
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 font-bold mr-2">⚠️</span>
                    Spyware.Keylogger (Background Process)
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 font-bold mr-2">⚠️</span>
                    Rootkit.ZeroAccess (System Files)
                  </li>
                </ul>
              </div>

              {/* Fake System Info */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 text-sm">
                  <strong>IP Address:</strong> 192.168.1.105 | <strong>Location:</strong> Jakarta, Indonesia<br/>
                  <strong>ISP:</strong> Telkom Indonesia | <strong>Status:</strong> COMPROMISED
                </p>
              </div>

              {/* Fake Urgency Message */}
              <div className="mb-6">
                <p className="text-red-600 font-bold text-lg mb-2">
                  IMMEDIATE ACTION REQUIRED!
                </p>
                <p className="text-gray-700 text-sm">
                  Your personal information, banking details, and passwords are at risk.<br/>
                  Call our certified Windows technicians immediately to secure your system.
                </p>
              </div>

              {/* Fake Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold cursor-not-allowed opacity-75 animate-pulse"
                  disabled
                  onClick={() => alert("SCAM ALERT! Never call numbers from pop-up warnings!")}
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
              <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded animate-pulse">
                <p className="text-red-700 font-bold">
                  Time remaining before system shutdown: <span className="text-2xl animate-bounce">05:47</span>
                </p>
              </div>
              
              {/* Fake system sounds simulation */}
              <div className="mt-4 text-center">
                <div className="text-red-600 text-sm animate-pulse">
                  🔊 *URGENT BEEPING SOUNDS* 🔊
                </div>
              </div>
            </div>
          </div>
        )}

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