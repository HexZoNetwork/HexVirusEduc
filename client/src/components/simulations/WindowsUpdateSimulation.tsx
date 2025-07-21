import { useState, useEffect } from "react";
import { Monitor, AlertTriangle, Info, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WindowsUpdateSimulationProps {
  onExit: () => void;
}

export default function WindowsUpdateSimulation({ onExit }: WindowsUpdateSimulationProps) {
  const [progress, setProgress] = useState(0);
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("scanning");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentPhase("complete");
          return 100;
        }
        return prev + 2;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const getPhaseText = () => {
    switch (currentPhase) {
      case "scanning":
        return progress < 30 ? "Scanning for updates..." : progress < 70 ? "Downloading updates..." : "Installing updates...";
      case "complete":
        return "Updates installed successfully!";
      default:
        return "Preparing...";
    }
  };

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-edu-blue text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Monitor className="w-5 h-5 mr-3 text-blue-200" />
          <span className="font-semibold">FAKE WINDOWS UPDATE SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-edu-blue hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      {/* Fake Windows Update Screen */}
      <div className="bg-blue-600 text-white rounded-b-xl overflow-hidden relative" style={{ minHeight: '500px' }}>
        <div className="flex flex-col items-center justify-center h-full p-12">
          {/* Windows Logo Area */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-light text-center">Windows Update</h2>
          </div>

          {/* Progress Section */}
          <div className="w-full max-w-md">
            <div className="mb-6">
              <div className="w-full bg-blue-500 bg-opacity-50 rounded-full h-2 mb-4">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-lg text-center mb-2">{progress}% complete</p>
              <p className="text-sm text-center text-blue-200">{getPhaseText()}</p>
            </div>

            {/* Fake Warning Messages */}
            <div className="bg-blue-700 bg-opacity-50 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Important Notice</span>
              </div>
              <p className="text-xs text-blue-200">
                Do not turn off your computer during this process. Your system is being updated with critical security patches.
              </p>
            </div>

            {/* Fake System Info */}
            <div className="text-xs text-blue-200 space-y-1">
              <div>Installing feature update to Windows 11, version 23H2</div>
              <div>Downloaded: 2.1 GB of 2.1 GB</div>
              <div>This may take a while. We'll restart your PC when ready.</div>
            </div>
          </div>

          {/* Completion Actions */}
          {currentPhase === "complete" && (
            <div className="mt-8 space-y-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-semibold">Update Complete!</p>
                <p className="text-sm text-blue-200">Your system has been updated successfully.</p>
              </div>
              <Button
                onClick={() => {
                  console.log("🦠 MALWARE INSTALLING: Fake update deploying malicious payload...");
                  setTimeout(() => {
                    console.log("💀 SYSTEM COMPROMISED: Trojan backdoor installed!");
                    alert("💀 MALWARE INSTALLED! This fake update would install dangerous software! Always update through Windows Settings only!");
                  }, 2000);
                }}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 mx-auto block animate-pulse border-2 border-red-500"
              >
                Restart Now (JANGAN KLIK!)
              </Button>
            </div>
          )}
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          FAKE UPDATE - EDUCATIONAL ONLY
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">How to Spot Fake Updates:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Warning Signs:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pop-ups claiming urgent updates needed</li>
                <li>• Updates from unofficial sources</li>
                <li>• Requests to download files from websites</li>
                <li>• Poor spelling or grammar in messages</li>
                <li>• Updates that auto-start without permission</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Legitimate Updates:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Come through Windows Update settings</li>
                <li>• Download from official Microsoft servers</li>
                <li>• Show proper Microsoft certificates</li>
                <li>• Can be scheduled and controlled by user</li>
                <li>• Appear in Windows Update history</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}