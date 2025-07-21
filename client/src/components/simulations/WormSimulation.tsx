import { useState, useEffect } from "react";
import { Network, AlertTriangle, Info, Wifi, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WormSimulationProps {
  onExit: () => void;
}

export default function WormSimulation({ onExit }: WormSimulationProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [infectionProgress, setInfectionProgress] = useState(0);
  const [infectedSystems, setInfectedSystems] = useState<string[]>([]);
  const [currentPhase, setCurrentPhase] = useState("scanning");

  const networkSystems = [
    "DESKTOP-PC001", "LAPTOP-HR002", "SERVER-DB01", "PRINTER-01",
    "DESKTOP-PC002", "LAPTOP-FIN003", "NAS-STORAGE", "ROUTER-MAIN"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentPhase === "scanning") {
        setInfectionProgress(prev => {
          if (prev >= 30) {
            setCurrentPhase("spreading");
            return 30;
          }
          return prev + 2;
        });
      } else if (currentPhase === "spreading") {
        setInfectionProgress(prev => {
          if (prev >= 100) {
            setCurrentPhase("complete");
            return 100;
          }
          
          if (prev % 15 === 0 && infectedSystems.length < networkSystems.length) {
            const nextSystem = networkSystems[infectedSystems.length];
            setInfectedSystems(current => [...current, nextSystem]);
          }
          
          return prev + 1;
        });
      }
    }, 300);

    return () => clearInterval(timer);
  }, [currentPhase, infectedSystems.length]);

  const getPhaseText = () => {
    switch (currentPhase) {
      case "scanning":
        return "Scanning network for vulnerabilities...";
      case "spreading":
        return "Propagating across network...";
      case "complete":
        return "Network infection complete";
      default:
        return "Initializing worm...";
    }
  };

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Network className="w-5 h-5 mr-3 text-green-200" />
          <span className="font-semibold">NETWORK WORM SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-green-600 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      {/* Worm Activity Dashboard */}
      <div className="bg-black text-green-400 rounded-b-xl overflow-hidden relative font-mono">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">CONFICKER WORM v3.2</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Wifi className="w-4 h-4 mr-1" />
                <span className="text-sm">Network Active</span>
              </div>
              <div className="flex items-center">
                <HardDrive className="w-4 h-4 mr-1" />
                <span className="text-sm">{infectedSystems.length} Systems</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">{getPhaseText()}</span>
              <span className="text-sm">{infectionProgress}%</span>
            </div>
            <div className="bg-gray-800 rounded-full h-3">
              <div 
                className="bg-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${infectionProgress}%` }}
              />
            </div>
          </div>

          {/* Network Map */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-green-300 mb-3 flex items-center">
                <Network className="w-4 h-4 mr-2" />
                Network Topology
              </h4>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {networkSystems.map((system, index) => (
                    <div 
                      key={system}
                      className={`p-2 rounded flex items-center justify-between ${
                        infectedSystems.includes(system) 
                          ? 'bg-red-900 text-red-300' 
                          : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      <span>{system}</span>
                      {infectedSystems.includes(system) && (
                        <AlertTriangle className="w-3 h-3" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-green-300 mb-3">Activity Log</h4>
              <div className="bg-gray-900 p-4 rounded-lg h-48 overflow-y-auto text-xs">
                {currentPhase === "scanning" && (
                  <>
                    <div>[09:23:15] Scanning subnet 192.168.1.0/24</div>
                    <div>[09:23:16] Found 8 active hosts</div>
                    <div>[09:23:17] Checking for SMB vulnerabilities</div>
                    <div>[09:23:18] Testing RDP connections</div>
                    <div>[09:23:19] Enumerating shares and services</div>
                  </>
                )}
                {currentPhase === "spreading" && (
                  <>
                    <div>[09:23:20] Exploitation phase initiated</div>
                    {infectedSystems.map((system, index) => (
                      <div key={index} className="text-red-400">
                        [09:23:{21 + index}] {system} - INFECTED
                      </div>
                    ))}
                    <div>[09:23:{21 + infectedSystems.length}] Payload deployed</div>
                    <div>[09:23:{22 + infectedSystems.length}] Creating backdoor</div>
                  </>
                )}
                {currentPhase === "complete" && (
                  <>
                    <div className="text-red-400">[09:24:05] NETWORK COMPROMISED</div>
                    <div>[09:24:06] Establishing C&C communication</div>
                    <div>[09:24:07] Awaiting further instructions</div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-6 grid grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900 p-3 rounded">
              <div className="text-lg font-bold text-green-400">{infectedSystems.length}</div>
              <div className="text-xs text-gray-400">Infected Systems</div>
            </div>
            <div className="bg-gray-900 p-3 rounded">
              <div className="text-lg font-bold text-yellow-400">2.3GB</div>
              <div className="text-xs text-gray-400">Data Exfiltrated</div>
            </div>
            <div className="bg-gray-900 p-3 rounded">
              <div className="text-lg font-bold text-red-400">15</div>
              <div className="text-xs text-gray-400">Vulnerabilities</div>
            </div>
            <div className="bg-gray-900 p-3 rounded">
              <div className="text-lg font-bold text-purple-400">Active</div>
              <div className="text-xs text-gray-400">Status</div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          WORM SIMULATION
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Understanding Network Worms:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">How Worms Spread:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Self-replicating across networks</li>
                <li>• Exploit system vulnerabilities</li>
                <li>• No human interaction required</li>
                <li>• Use network protocols (SMB, RDP)</li>
                <li>• Create backdoors for remote access</li>
                <li>• Can consume network bandwidth</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Prevention Strategies:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keep systems patched and updated</li>
                <li>• Use network segmentation</li>
                <li>• Deploy intrusion detection systems</li>
                <li>• Disable unnecessary network services</li>
                <li>• Monitor network traffic anomalies</li>
                <li>• Regular vulnerability assessments</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}