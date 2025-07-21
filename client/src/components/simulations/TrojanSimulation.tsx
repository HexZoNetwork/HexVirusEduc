import { useState, useEffect } from "react";
import { Eye, Download, AlertTriangle, Info, Camera, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrojanSimulationProps {
  onExit: () => void;
}

export default function TrojanSimulation({ onExit }: TrojanSimulationProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("installation");
  const [progress, setProgress] = useState(0);
  const [dataCollected, setDataCollected] = useState(0);
  const [keystrokes, setKeystrokes] = useState(0);

  const phases = [
    { name: "installation", label: "Installing Trojan...", duration: 3000 },
    { name: "hiding", label: "Hiding from detection...", duration: 2000 },
    { name: "collecting", label: "Collecting user data...", duration: 8000 },
    { name: "transmitting", label: "Transmitting data...", duration: 4000 },
    { name: "complete", label: "Remote access established", duration: 0 }
  ];

  useEffect(() => {
    const currentPhaseData = phases.find(p => p.name === currentPhase);
    if (!currentPhaseData) return;

    if (currentPhase === "complete") return;

    // Add realistic installation sounds and effects
    if (currentPhase === "installation") {
      // Simulate computer working sounds
      const workingSounds = setInterval(() => {
        console.log("💻 *Computer processing sounds*");
      }, 800);
      setTimeout(() => clearInterval(workingSounds), currentPhaseData.duration);
    }

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          const currentIndex = phases.findIndex(p => p.name === currentPhase);
          const nextPhase = phases[currentIndex + 1];
          if (nextPhase) {
            setCurrentPhase(nextPhase.name);
            // Alert user when trojan becomes active
            if (nextPhase.name === "complete") {
              setTimeout(() => {
                alert("🚨 CRITICAL: Your system is now completely compromised! The attacker has full remote access. This simulation shows why you should never install unknown software!");
              }, 1000);
            }
          }
          return 0;
        }
        return prev + 3; // Faster progress for more tension
      });
    }, currentPhaseData.duration / 33);

    return () => clearInterval(timer);
  }, [currentPhase]);

  useEffect(() => {
    if (currentPhase === "collecting") {
      const dataTimer = setInterval(() => {
        setDataCollected(prev => prev + Math.floor(Math.random() * 3) + 1);
        setKeystrokes(prev => prev + Math.floor(Math.random() * 5) + 1);
      }, 500);

      return () => clearInterval(dataTimer);
    }
  }, [currentPhase]);

  const getCurrentPhaseLabel = () => {
    return phases.find(p => p.name === currentPhase)?.label || "";
  };

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-red-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Eye className="w-5 h-5 mr-3 text-red-200" />
          <span className="font-semibold">TROJAN HORSE MALWARE SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-red-600 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      {/* Trojan Interface */}
      <div className="bg-gray-900 text-white rounded-b-xl overflow-hidden relative">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-red-400">DarkComet RAT v5.4</h3>
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Connected</span>
            </div>
          </div>

          {/* Installation Progress */}
          {currentPhase !== "complete" && (
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{getCurrentPhaseLabel()}</span>
                <span className="text-sm text-gray-400">{progress}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-red-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Remote Access Dashboard */}
          {currentPhase === "complete" && (
            <>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <Download className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-blue-400">{dataCollected}</div>
                  <div className="text-sm text-gray-400">Files Stolen</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-xl mb-1">⌨️</div>
                  <div className="text-2xl font-bold text-yellow-400">{keystrokes}</div>
                  <div className="text-sm text-gray-400">Keystrokes</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <Camera className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <div className="text-2xl font-bold text-green-400">ON</div>
                  <div className="text-sm text-gray-400">Webcam</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <Mic className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <div className="text-2xl font-bold text-purple-400">REC</div>
                  <div className="text-sm text-gray-400">Microphone</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* System Information */}
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-red-400">Victim System Info</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">OS:</span>
                      <span>Windows 11 Pro</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">User:</span>
                      <span>john.doe</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">IP:</span>
                      <span>192.168.1.105</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Privileges:</span>
                      <span className="text-green-400">Administrator</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Antivirus:</span>
                      <span className="text-red-400">Disabled</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Firewall:</span>
                      <span className="text-red-400">Bypassed</span>
                    </div>
                  </div>
                </div>

                {/* Available Commands */}
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-red-400">Remote Commands</h4>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600 text-sm">
                      📷 Capture Screenshot
                    </button>
                    <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600 text-sm">
                      🎥 Start Webcam Stream
                    </button>
                    <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600 text-sm">
                      📁 Browse File System
                    </button>
                    <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600 text-sm">
                      🔑 Capture Keystrokes
                    </button>
                    <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600 text-sm">
                      💻 Remote Desktop
                    </button>
                    <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600 text-sm">
                      🔓 Password Harvesting
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="mt-6 bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-red-400">Live Activity</h4>
                <div className="bg-black p-3 rounded font-mono text-xs h-32 overflow-y-auto">
                  <div className="text-green-400">[15:42:33] Connection established</div>
                  <div className="text-blue-400">[15:42:34] System information gathered</div>
                  <div className="text-yellow-400">[15:42:35] Keylogger activated</div>
                  <div className="text-purple-400">[15:42:36] Password database located</div>
                  <div className="text-red-400">[15:42:37] Antivirus bypassed</div>
                  <div className="text-green-400">[15:42:38] Webcam access granted</div>
                  <div className="text-blue-400">[15:42:39] File system access confirmed</div>
                  <div className="text-orange-400">[15:42:40] User typing: "password123"</div>
                  <div className="text-yellow-400">[15:42:41] Banking site visited</div>
                  <div className="text-red-400">[15:42:42] Credentials harvested</div>
                </div>
              </div>
            </>
          )}

          {/* Fake Download Progress for Initial Disguise */}
          {currentPhase === "installation" && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Download className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-semibold">Downloading: PhotoEditor_v2.1.exe</span>
              </div>
              <p className="text-blue-700 text-sm">
                Your free photo editing software is installing. Please wait...
              </p>
            </div>
          )}
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          TROJAN SIMULATION
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Understanding Trojan Horse Malware:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Trojan Capabilities:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Remote access to infected systems</li>
                <li>• Keylogging and password theft</li>
                <li>• Webcam and microphone surveillance</li>
                <li>• File theft and system manipulation</li>
                <li>• Banking credential harvesting</li>
                <li>• Installing additional malware</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Protection Strategies:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Never download software from untrusted sources</li>
                <li>• Use reputable antivirus with real-time scanning</li>
                <li>• Keep operating system and software updated</li>
                <li>• Be cautious with email attachments</li>
                <li>• Use application whitelisting</li>
                <li>• Regular system scans and monitoring</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-800">
              <strong>Key Learning:</strong> Trojans disguise themselves as legitimate software to trick users into installation. 
              Once installed, they provide attackers with complete remote access to the infected system.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}