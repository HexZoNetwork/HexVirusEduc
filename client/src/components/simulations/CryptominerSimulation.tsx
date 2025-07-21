import { useState, useEffect } from "react";
import { Cpu, TrendingUp, AlertTriangle, Info, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CryptominerSimulationProps {
  onExit: () => void;
}

export default function CryptominerSimulation({ onExit }: CryptominerSimulationProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [hashRate, setHashRate] = useState(1247.5);
  const [cpuUsage, setCpuUsage] = useState(98);
  const [temperature, setTemperature] = useState(87);
  const [earnings, setEarnings] = useState(0.00247);
  const [runtime, setRuntime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHashRate(prev => prev + (Math.random() * 20) - 10);
      setCpuUsage(prev => Math.max(85, Math.min(100, prev + (Math.random() * 4) - 2)));
      setTemperature(prev => {
        const newTemp = Math.max(75, Math.min(95, prev + (Math.random() * 6) - 3));
        // Create temperature warnings
        if (newTemp > 90) {
          console.log("🔥 OVERHEATING WARNING: CPU temperature critical!");
        }
        return newTemp;
      });
      setEarnings(prev => prev + 0.000001 + (Math.random() * 0.000002));
      setRuntime(prev => prev + 1);
    }, 1000);

    // Simulate system slowdown effects
    const slowdownTimer = setInterval(() => {
      console.log("⚠️ System extremely slow... Applications not responding...");
    }, 3000);

    // Simulate fan noise
    const fanTimer = setInterval(() => {
      if (temperature > 85) {
        console.log("💨 *LOUD FAN NOISE* Computer struggling to cool down!");
      }
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(slowdownTimer);
      clearInterval(fanTimer);
    };
  }, [temperature]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-orange-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Cpu className="w-5 h-5 mr-3 text-orange-200" />
          <span className="font-semibold">CRYPTOMINER MALWARE SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-orange-600 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      {/* Cryptominer Interface */}
      <div className="bg-gray-900 text-white rounded-b-xl overflow-hidden relative">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-orange-400">CoinHive Miner v3.1</h3>
            <div className="flex items-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${cpuUsage > 95 ? 'bg-red-500' : 'bg-green-500'} animate-pulse`}></div>
              <span className="text-sm">Mining Active</span>
            </div>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <Cpu className="w-6 h-6 mx-auto mb-2 text-orange-400" />
              <div className="text-2xl font-bold text-red-400">{cpuUsage}%</div>
              <div className="text-sm text-gray-400">CPU Usage</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-red-400" />
              <div className="text-2xl font-bold text-red-400">{temperature}°C</div>
              <div className="text-sm text-gray-400">CPU Temp</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold text-green-400">{hashRate.toFixed(1)}</div>
              <div className="text-sm text-gray-400">H/s</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-xl mb-1">💰</div>
              <div className="text-2xl font-bold text-yellow-400">{earnings.toFixed(6)}</div>
              <div className="text-sm text-gray-400">BTC Earned</div>
            </div>
          </div>

          {/* Mining Progress */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3 text-orange-400">Mining Progress</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Current Block</span>
                  <span className="text-sm text-gray-400">{((runtime * 1.7) % 100).toFixed(1)}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-orange-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${((runtime * 1.7) % 100).toFixed(1)}%` }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Runtime:</span>
                  <div className="text-white font-mono">{formatTime(runtime)}</div>
                </div>
                <div>
                  <span className="text-gray-400">Shares:</span>
                  <div className="text-white font-mono">{Math.floor(runtime / 30)}</div>
                </div>
                <div>
                  <span className="text-gray-400">Pool:</span>
                  <div className="text-white font-mono">pool.minergate.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Impact */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-orange-400">System Impact</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Performance Loss</span>
                  <span className="text-red-400 font-semibold">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Power Consumption</span>
                  <span className="text-red-400 font-semibold">+340W</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fan Speed</span>
                  <span className="text-red-400 font-semibold">4200 RPM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Hardware Stress</span>
                  <span className="text-red-400 font-semibold">CRITICAL</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-orange-400">Mining Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Algorithm</span>
                  <span className="text-green-400">CryptoNight</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Difficulty</span>
                  <span className="text-green-400">1.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Network Rate</span>
                  <span className="text-green-400">847 MH/s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Block Reward</span>
                  <span className="text-green-400">2.15 XMR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Console Output */}
          <div className="mt-6 bg-black p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-orange-400">Miner Console</h4>
            <div className="font-mono text-xs space-y-1 h-32 overflow-y-auto">
              <div className="text-green-400">[{new Date().toLocaleTimeString()}] Miner started</div>
              <div className="text-blue-400">[{new Date().toLocaleTimeString()}] Connected to pool.minergate.com:4444</div>
              <div className="text-yellow-400">[{new Date().toLocaleTimeString()}] Using algorithm: CryptoNight</div>
              <div className="text-white">[{new Date().toLocaleTimeString()}] CPU threads: 8</div>
              <div className="text-green-400">[{new Date().toLocaleTimeString()}] Share accepted (1/{Math.floor(runtime / 30 + 1)})</div>
              <div className="text-orange-400">[{new Date().toLocaleTimeString()}] Hashrate: {hashRate.toFixed(1)} H/s</div>
              {temperature > 90 && (
                <div className="text-red-400">[{new Date().toLocaleTimeString()}] WARNING: High CPU temperature!</div>
              )}
              <div className="text-blue-400">[{new Date().toLocaleTimeString()}] Mining to wallet: 4A7C2B...</div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          CRYPTOMINER SIMULATION
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Understanding Cryptominer Malware:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Signs of Cryptominer Infection:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Extremely high CPU usage (90-100%)</li>
                <li>• Slow system performance</li>
                <li>• Overheating and loud fan noise</li>
                <li>• High electricity bills</li>
                <li>• Browser-based mining scripts</li>
                <li>• Unexpected network traffic</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Prevention & Removal:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use ad blockers and script blockers</li>
                <li>• Monitor system resource usage</li>
                <li>• Keep antivirus software updated</li>
                <li>• Avoid suspicious websites and downloads</li>
                <li>• Check browser extensions regularly</li>
                <li>• Use network monitoring tools</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-800">
              <strong>Impact:</strong> Cryptominers can severely damage hardware through overheating and reduce system lifespan. 
              They steal computing resources for profit while making systems unusable for legitimate purposes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}