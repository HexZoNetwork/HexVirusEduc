import { useState, useEffect } from "react";
import { AlertTriangle, Info, Clock, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WannaCryRansomwareProps {
  onExit: () => void;
}

export default function WannaCryRansomware({ onExit }: WannaCryRansomwareProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [countdown, setCountdown] = useState(259200); // 3 days in seconds
  const [filesEncrypted, setFilesEncrypted] = useState(0);
  const [spreading, setSpreading] = useState(true);
  const [infectedMachines, setInfectedMachines] = useState(1);

  useEffect(() => {
    // File encryption simulation
    const encryptionTimer = setInterval(() => {
      if (filesEncrypted < 50000) {
        setFilesEncrypted(prev => prev + Math.floor(Math.random() * 100) + 50);
      }
    }, 500);

    // Network spreading simulation  
    const spreadTimer = setInterval(() => {
      if (spreading && infectedMachines < 300000) {
        setInfectedMachines(prev => prev + Math.floor(Math.random() * 1000) + 500);
        console.log("🦠 WANNACRY SPREADING: Infecting more machines across the network!");
      }
    }, 2000);

    // Countdown timer
    const countTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countTimer);
          clearInterval(encryptionTimer);
          clearInterval(spreadTimer);
          alert("💀 FILES DELETED FOREVER! WannaCry would have destroyed everything! This shows why patching systems is critical!");
          onExit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Stop spreading after 30 seconds
    setTimeout(() => {
      setSpreading(false);
      console.log("🛑 NETWORK PATCHED: WannaCry spreading stopped by emergency patches!");
    }, 30000);

    return () => {
      clearInterval(encryptionTimer);
      clearInterval(spreadTimer);
      clearInterval(countTimer);
    };
  }, [onExit]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="mb-8">
      <div className="bg-red-900 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <AlertTriangle className="w-5 h-5 mr-3 text-yellow-200 animate-pulse" />
          <span className="font-semibold">WANNACRY RANSOMWARE SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-red-900 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      <div className="bg-red-800 text-white rounded-b-xl overflow-hidden relative">
        <div className="p-8">
          {/* WannaCry Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4 animate-pulse">
              Wana Decrypt0r 2.0
            </h1>
            <p className="text-xl text-red-200">
              Ooops, your files have been encrypted!
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Panel */}
            <div className="space-y-6">
              {/* What Happened */}
              <div className="bg-red-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">What happened to your computer?</h3>
                <div className="text-sm text-red-100 space-y-2">
                  <p>Your important files are encrypted. Many of your documents, photos, videos, databases and other files are no longer accessible because they have been encrypted.</p>
                  <p>Maybe you are busy looking for a way to recover your files, but do not waste your time. Nobody can recover your files without our decryption service.</p>
                </div>
              </div>

              {/* File Status */}
              <div className="bg-red-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">File Encryption Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Files Encrypted:</span>
                    <span className="text-yellow-400 font-bold animate-pulse">{filesEncrypted.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network Status:</span>
                    <span className={`font-bold ${spreading ? 'text-red-300 animate-pulse' : 'text-green-400'}`}>
                      {spreading ? 'SPREADING...' : 'CONTAINED'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Infected Machines:</span>
                    <span className="text-orange-400 font-bold">{infectedMachines.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Timer */}
              <div className="bg-black p-6 rounded-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-red-400 mr-2" />
                  <h3 className="text-2xl font-bold text-red-400">Time Left</h3>
                </div>
                <div className="text-3xl font-mono text-yellow-400 mb-4 animate-pulse">
                  {formatTime(countdown)}
                </div>
                <p className="text-red-300 text-sm">
                  Your files will be lost forever if you don't pay within this time!
                </p>
              </div>

              {/* Payment Info */}
              <div className="bg-red-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">How can you recover your files?</h3>
                <div className="text-sm text-red-100 space-y-3">
                  <p>You can recover your files safely and easily. But you have not so enough time.</p>
                  <p>You can decrypt some of your files for free. Try now by clicking <span className="text-yellow-400">&lt;Decrypt&gt;</span>.</p>
                  <p>If you want to decrypt all your files, you need to pay.</p>
                  <div className="bg-black p-4 rounded mt-4">
                    <p className="text-green-400 font-bold">Payment: $300 in Bitcoin</p>
                    <p className="text-gray-300 text-xs mt-2">Bitcoin Address: 13AM4VW2dhxYgXeQepoHkHSQuy6NgaEb94</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button 
              className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-3 rounded font-bold cursor-not-allowed opacity-75"
              disabled
              onClick={() => alert("EDUCATIONAL ONLY: Never pay ransoms! Restore from backups instead!")}
            >
              About WannaDecrypt
            </button>
            <button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75"
              disabled
              onClick={() => alert("EDUCATIONAL ONLY: Free decryption is a lie - they want payment!")}
            >
              Decrypt (FAKE)
            </button>
            <button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75 animate-pulse"
              disabled
              onClick={() => alert("EDUCATIONAL ONLY: Never pay Bitcoin ransoms!")}
            >
              Pay Now (FAKE)
            </button>
          </div>

          {/* Network Activity */}
          {spreading && (
            <div className="mt-6 bg-red-900 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Wifi className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
                <h4 className="text-lg font-bold text-red-300">Network Worm Activity</h4>
              </div>
              <p className="text-red-200 text-sm animate-pulse">
                🦠 Exploiting SMB vulnerability (MS17-010)... Spreading to more machines...
              </p>
            </div>
          )}
        </div>

        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          WANNACRY SIMULATION
        </div>
      </div>

      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">WannaCry Attack (2017):</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Historic Impact:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Infected 300,000+ computers worldwide</li>
                <li>• Hit hospitals, banks, and government systems</li>
                <li>• Exploited Windows SMB vulnerability (EternalBlue)</li>
                <li>• Demanded $300-600 Bitcoin payment</li>
                <li>• Spread automatically via network worm</li>
                <li>• Caused billions in damages globally</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Prevention:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Install security patches immediately</li>
                <li>• Keep Windows updated automatically</li>
                <li>• Backup files regularly offline</li>
                <li>• Use endpoint protection software</li>
                <li>• Segment networks properly</li>
                <li>• Train staff on security awareness</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
            <p className="text-sm text-gray-800">
              <strong>Legacy:</strong> WannaCry showed how quickly unpatched systems can be compromised. 
              The attack was stopped by a security researcher who found a kill switch domain.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}