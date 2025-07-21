import { useState, useEffect } from "react";
import { TriangleAlert, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import EducationalPanel from "./EducationalPanel";

interface RansomwareSimulationProps {
  onExit: () => void;
}

export default function RansomwareSimulation({ onExit }: RansomwareSimulationProps) {
  const [countdown, setCountdown] = useState(167);
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [encryptionProgress] = useState(45);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Show completion message
          alert("Simulation Complete! In a real attack, never pay the ransom. Always restore from backups and report to authorities.");
          onExit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onExit]);

  const handleExit = () => {
    onExit();
  };

  return (
    <div className="mb-8">
      <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border-4 border-danger-red">
        {/* Educational Overlay */}
        <div className="bg-danger-red text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <TriangleAlert className="w-5 h-5 mr-3 text-yellow-300" />
            <span className="font-semibold">EDUCATIONAL SIMULATION IN PROGRESS</span>
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
              onClick={handleExit}
              className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 text-sm font-medium"
            >
              Exit Simulation
            </Button>
          </div>
        </div>

        {/* Ransomware UI Simulation */}
        <div className="p-8 text-center bg-black text-white relative">
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-red-500 mb-4 font-mono animate-pulse">HexZo Ransomware</h3>
            <p className="text-xl text-orange-400 font-mono">Your files have been encrypted!</p>
          </div>

          {/* Progress Bar Animation */}
          <div className="mb-6">
            <div className="bg-gray-700 rounded-full h-4 mb-2 overflow-hidden">
              <div 
                className="bg-red-500 h-full animate-pulse" 
                style={{ width: `${encryptionProgress}%` }}
              />
            </div>
            <p className="text-orange-300 font-mono text-sm">Encryption Progress: {encryptionProgress}%</p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-6">
            <div className="text-6xl font-bold text-orange-400 font-mono mb-2">{countdown}</div>
            <p className="text-red-400 font-mono">SECONDS UNTIL FILES ARE PERMANENTLY DELETED</p>
          </div>

          {/* Fake Bitcoin Address */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6 font-mono">
            <p className="text-orange-400 mb-2">Send 0.5 BTC to recover your files:</p>
            <p className="text-white text-sm break-all">1BoatSLRHtKNngkdXEeobR76b53LETtpyT</p>
          </div>

          {/* Fake Buttons (Non-functional) */}
          <div className="flex justify-center space-x-4">
            <button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-mono font-bold cursor-not-allowed opacity-75"
              disabled
            >
              PAY RANSOM
            </button>
            <button 
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded font-mono cursor-not-allowed opacity-75"
              disabled
            >
              DECRYPT FILES
            </button>
          </div>

          {/* Educational Note Overlay */}
          <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
            <Info className="w-4 h-4 inline mr-1" />
            SIMULATION ONLY
          </div>
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && <EducationalPanel />}
    </div>
  );
}
