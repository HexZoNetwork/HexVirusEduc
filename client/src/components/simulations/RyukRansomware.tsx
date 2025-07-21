import { useState, useEffect } from "react";
import { Skull, Info, Building, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RyukRansomwareProps {
  onExit: () => void;
}

export default function RyukRansomware({ onExit }: RyukRansomwareProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [phase, setPhase] = useState("lateral");
  const [systems, setSystems] = useState(1);
  const [dataStolen, setDataStolen] = useState(0);
  const [encryptionProgress, setEncryptionProgress] = useState(0);

  useEffect(() => {
    // Lateral movement simulation
    const lateralTimer = setInterval(() => {
      if (phase === "lateral" && systems < 250) {
        setSystems(prev => prev + Math.floor(Math.random() * 15) + 5);
        console.log("🎯 RYUK LATERAL MOVEMENT: Compromising more enterprise systems!");
      }
    }, 800);

    // Data exfiltration
    const stealTimer = setInterval(() => {
      if (phase === "lateral" && dataStolen < 850) {
        setDataStolen(prev => prev + Math.floor(Math.random() * 30) + 20);
      }
    }, 1200);

    // Phase transitions
    setTimeout(() => {
      if (phase === "lateral") {
        setPhase("encryption");
        console.log("💀 RYUK DEPLOYMENT: Beginning network-wide encryption attack!");
      }
    }, 15000);

    // Encryption progress
    if (phase === "encryption") {
      const encryptTimer = setInterval(() => {
        setEncryptionProgress(prev => {
          if (prev >= 100) {
            clearInterval(encryptTimer);
            setPhase("ransom");
            return 100;
          }
          return prev + 2;
        });
      }, 300);
    }

    return () => {
      clearInterval(lateralTimer);
      clearInterval(stealTimer);
    };
  }, [phase]);

  return (
    <div className="mb-8">
      <div className="bg-black text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Skull className="w-5 h-5 mr-3 text-red-400 animate-pulse" />
          <span className="font-semibold">RYUK ENTERPRISE RANSOMWARE SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-black hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      <div className="bg-red-950 text-white rounded-b-xl overflow-hidden relative">
        {phase === "ransom" ? (
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="text-8xl mb-6">💀</div>
              <h1 className="text-4xl font-bold text-red-400 mb-4">
                RyuK
              </h1>
              <p className="text-2xl text-red-300">Your network has been pwned</p>
            </div>

            <div className="bg-black border-2 border-red-500 p-6 rounded-lg mb-8">
              <div className="text-red-200 space-y-4">
                <p>All your files have been encrypted with military-grade AES encryption.</p>
                <p>Your corporate network, servers, and workstations are completely compromised.</p>
                <p>We have also downloaded and stored a copy of your sensitive data.</p>
                <p>If you refuse to pay, we will leak this information publicly.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-900 border border-red-600 p-4 rounded">
                <h3 className="text-yellow-400 font-bold mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  ATTACK SUMMARY
                </h3>
                <div className="text-red-200 text-sm space-y-2">
                  <div>Systems compromised: <span className="text-white font-bold">{systems}</span></div>
                  <div>Data exfiltrated: <span className="text-yellow-300">{dataStolen} GB</span></div>
                  <div>Encryption: <span className="text-red-300">AES-256 + RSA-4096</span></div>
                  <div>Network access: <span className="text-red-400">FULL CONTROL</span></div>
                </div>
              </div>

              <div className="bg-black border border-red-600 p-4 rounded">
                <h3 className="text-yellow-400 font-bold mb-3 flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  RANSOM DEMAND
                </h3>
                <div className="text-red-200 text-sm space-y-2">
                  <div className="text-green-400 font-bold text-xl">$2.3 Million USD</div>
                  <div>Payment method: Bitcoin only</div>
                  <div>Deadline: <span className="text-red-400">72 hours</span></div>
                  <div>Late penalty: <span className="text-red-400">+50%</span></div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900 border border-yellow-500 p-6 rounded-lg mb-6">
              <h3 className="text-yellow-300 font-bold mb-3">DOUBLE EXTORTION WARNING</h3>
              <div className="text-yellow-200 space-y-2 text-sm">
                <p>• Customer databases, financial records, and trade secrets downloaded</p>
                <p>• Employee personal information and social security numbers captured</p>
                <p>• If ransom is not paid, all data will be published on our leak site</p>
                <p>• Your customers and partners will be notified of the breach</p>
                <p>• Regulatory authorities will be informed of the data exposure</p>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <p className="text-green-400">Bitcoin Address:</p>
                <p className="text-white">bc1q3x7m8n9k2l5p8r4t6w1y3z7c9v2b4n6m8q1w3e5r7t9y</p>
                <p className="text-gray-400 mt-2">Amount: 84.7 BTC</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold cursor-not-allowed opacity-75"
                disabled
                onClick={() => alert("EDUCATIONAL ONLY: Enterprise ransoms often demand millions - never pay!")}
              >
                Contact Us (FAKE)
              </button>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold cursor-not-allowed opacity-75 animate-pulse"
                disabled
                onClick={() => alert("EDUCATIONAL ONLY: Double extortion attacks threaten to leak stolen data!")}
              >
                Pay Ransom (FAKE)
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 font-mono">
            <div className="text-center mb-8">
              <Skull className="w-16 h-16 mx-auto text-red-400 animate-pulse mb-4" />
              <h2 className="text-3xl text-red-400 mb-4">RYUK ATTACK IN PROGRESS</h2>
              <p className="text-red-200">Advanced Persistent Threat targeting enterprise infrastructure</p>
            </div>

            {phase === "lateral" && (
              <div className="space-y-6">
                <div className="bg-red-900 p-6 rounded-lg">
                  <h3 className="text-xl text-yellow-300 mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    Lateral Movement & Data Exfiltration
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-red-200 mb-2">Systems Compromised:</div>
                        <div className="text-3xl text-white font-bold animate-pulse">{systems}</div>
                      </div>
                      <div>
                        <div className="text-red-200 mb-2">Data Stolen (GB):</div>
                        <div className="text-3xl text-yellow-400 font-bold animate-pulse">{dataStolen}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black p-4 rounded-lg text-green-400 text-sm">
                  <div className="space-y-1">
                    <div className="animate-pulse">📊 Accessing financial databases...</div>
                    <div className="animate-pulse">👥 Downloading employee records...</div>
                    <div className="animate-pulse">🏢 Compromising domain controllers...</div>
                    <div className="animate-pulse">💾 Accessing backup systems...</div>
                    <div className="animate-pulse">🔐 Stealing encryption keys...</div>
                  </div>
                </div>
              </div>
            )}

            {phase === "encryption" && (
              <div className="space-y-6">
                <div className="bg-red-900 p-6 rounded-lg">
                  <h3 className="text-xl text-yellow-300 mb-4">Network-Wide Encryption</h3>
                  <div className="w-full bg-gray-700 rounded-full h-6 mb-4">
                    <div 
                      className="bg-red-500 h-6 rounded-full transition-all animate-pulse"
                      style={{ width: `${encryptionProgress}%` }}
                    />
                  </div>
                  <div className="text-red-200">
                    Progress: <span className="text-white font-bold">{encryptionProgress}%</span> - Encrypting all systems simultaneously
                  </div>
                </div>

                <div className="bg-black p-4 rounded-lg text-red-400 text-sm">
                  <div className="space-y-1 animate-pulse">
                    <div>💻 Encrypting workstations... {systems} machines</div>
                    <div>🖥️ Encrypting servers... Database, Email, File servers</div>
                    <div>☁️ Encrypting cloud backups... Azure, AWS resources</div>
                    <div>📱 Targeting mobile devices... Corporate phones/tablets</div>
                    <div>🔒 Deploying .RYK file extensions...</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          RYUK SIMULATION
        </div>
      </div>

      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Ryuk Ransomware - Enterprise Threat:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Attack Characteristics:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Targets large organizations and enterprises</li>
                <li>• Demands millions in ransom payments</li>
                <li>• Uses lateral movement to spread</li>
                <li>• Double extortion - steals and encrypts</li>
                <li>• Often manually deployed by threat actors</li>
                <li>• Disables security tools and backups</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Enterprise Defense:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Network segmentation and zero trust</li>
                <li>• Privileged access management (PAM)</li>
                <li>• Endpoint detection and response (EDR)</li>
                <li>• Immutable offline backups</li>
                <li>• Incident response planning</li>
                <li>• Regular security assessments</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-black rounded-lg border-l-4 border-red-600 text-white">
            <p className="text-sm">
              <strong>High-Profile Victims:</strong> Ryuk has targeted hospitals, schools, and government agencies, 
              causing millions in damages. Notable attacks include Universal Health Services (2020) and 
              the Colonial Pipeline incident's precursor attacks.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}