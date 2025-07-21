import { useState, useEffect } from "react";
import { Bot, Globe, AlertTriangle, Info, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BotnetSimulationProps {
  onExit: () => void;
}

export default function BotnetSimulation({ onExit }: BotnetSimulationProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [botCount, setBotCount] = useState(1247);
  const [activeBots, setActiveBots] = useState(856);
  const [currentTask, setCurrentTask] = useState("Idle");
  const [dataStolen, setDataStolen] = useState(15.7);

  const botnetActivities = [
    { task: "DDoS Attack", target: "banking-site.com", description: "Overwhelming target with traffic" },
    { task: "Crypto Mining", target: "Bitcoin Pool", description: "Mining cryptocurrency using bot resources" },
    { task: "Data Harvesting", target: "User Credentials", description: "Collecting login information" },
    { task: "Spam Campaign", target: "Email Lists", description: "Sending malicious emails" },
    { task: "Click Fraud", target: "Ad Networks", description: "Generating fake ad clicks" }
  ];

  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate bot count fluctuation with dramatic increases
      setBotCount(prev => {
        const newCount = prev + Math.floor(Math.random() * 15) - 2;
        if (newCount > prev + 10) {
          console.log(`📈 BOTNET GROWING: ${newCount - prev} new infected devices!`);
        }
        return newCount;
      });
      setActiveBots(prev => Math.min(botCount, prev + Math.floor(Math.random() * 12) - 2));
      setDataStolen(prev => {
        const increase = Math.random() * 0.5;
        const newTotal = prev + increase;
        if (increase > 0.3) {
          console.log(`💰 BIG HAUL: ${increase.toFixed(2)}GB of sensitive data stolen!`);
        }
        return newTotal;
      });
      
      // Cycle through activities with alerts
      const prevActivity = currentActivity;
      setCurrentActivity(prev => (prev + 1) % botnetActivities.length);
      const newActivity = botnetActivities[(prevActivity + 1) % botnetActivities.length];
      setCurrentTask(newActivity.task);
      
      // Alert for dangerous activities
      if (newActivity.task === "DDoS Attack") {
        console.log("🚨 DDOS ATTACK LAUNCHED: Target website under assault!");
      } else if (newActivity.task === "Data Harvesting") {
        console.log("🕵️ HARVESTING CREDENTIALS: Banking logins being stolen!");
      }
    }, 2500); // Faster updates for more excitement

    return () => clearInterval(timer);
  }, [botCount, currentActivity]);

  const currentActivityData = botnetActivities[currentActivity];

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-purple-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Bot className="w-5 h-5 mr-3 text-purple-200" />
          <span className="font-semibold">BOTNET COMMAND CENTER SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-purple-600 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      {/* Botnet Control Panel */}
      <div className="bg-gray-900 text-white rounded-b-xl overflow-hidden relative">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-purple-400">MIRAI BOTNET v2.1</h3>
            <div className="flex items-center space-x-2 text-green-400">
              <Activity className="w-4 h-4" />
              <span className="text-sm">C&C Server Online</span>
            </div>
          </div>

          {/* Statistics Dashboard */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">{botCount.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Total Bots</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">{activeBots.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Active Bots</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-400">{dataStolen.toFixed(1)} GB</div>
              <div className="text-sm text-gray-400">Data Stolen</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">24/7</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>

          {/* Current Operation */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-400" />
              Current Operation
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Task:</div>
                <div className="text-white font-semibold">{currentActivityData.task}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Target:</div>
                <div className="text-white font-semibold">{currentActivityData.target}</div>
              </div>
              <div className="col-span-2">
                <div className="text-sm text-gray-400 mb-1">Description:</div>
                <div className="text-gray-300">{currentActivityData.description}</div>
              </div>
            </div>
            <div className="mt-4 bg-gray-900 p-3 rounded">
              <div className="flex justify-between items-center">
                <span className="text-sm">Progress:</span>
                <span className="text-sm">78%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-2 mt-1">
                <div className="bg-purple-500 h-2 rounded-full animate-pulse" style={{ width: '78%' }} />
              </div>
            </div>
          </div>

          {/* Bot Geographic Distribution */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-purple-400">Geographic Distribution</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>🇺🇸 United States</span>
                  <span className="text-blue-400">342 bots</span>
                </div>
                <div className="flex justify-between">
                  <span>🇨🇳 China</span>
                  <span className="text-blue-400">287 bots</span>
                </div>
                <div className="flex justify-between">
                  <span>🇷🇺 Russia</span>
                  <span className="text-blue-400">198 bots</span>
                </div>
                <div className="flex justify-between">
                  <span>🇧🇷 Brazil</span>
                  <span className="text-blue-400">156 bots</span>
                </div>
                <div className="flex justify-between">
                  <span>🇮🇳 India</span>
                  <span className="text-blue-400">134 bots</span>
                </div>
                <div className="flex justify-between">
                  <span>🌍 Others</span>
                  <span className="text-blue-400">130 bots</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-purple-400">Bot Types</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>IoT Devices</span>
                  <span className="text-green-400">45%</span>
                </div>
                <div className="flex justify-between">
                  <span>Home Routers</span>
                  <span className="text-green-400">28%</span>
                </div>
                <div className="flex justify-between">
                  <span>Desktop PCs</span>
                  <span className="text-green-400">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Mobile Devices</span>
                  <span className="text-green-400">8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Servers</span>
                  <span className="text-green-400">4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Command Log */}
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-purple-400">Recent Commands</h4>
            <div className="bg-black p-3 rounded font-mono text-xs space-y-1">
              <div className="text-green-400">[14:23:15] DDOS_START target=banking-site.com duration=3600</div>
              <div className="text-yellow-400">[14:22:48] CRYPTO_MINE pool=btc.pool.com intensity=medium</div>
              <div className="text-blue-400">[14:21:32] DATA_HARVEST type=credentials browsers=all</div>
              <div className="text-red-400">[14:20:17] SPAM_BLAST template=phishing_bank count=50000</div>
              <div className="text-purple-400">[14:19:45] UPDATE_BOT version=2.1.3 silent=true</div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          BOTNET SIMULATION
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Understanding Botnets:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Botnet Capabilities:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Distributed Denial of Service (DDoS)</li>
                <li>• Cryptocurrency mining</li>
                <li>• Data theft and credential harvesting</li>
                <li>• Spam and phishing campaigns</li>
                <li>• Click fraud and ad manipulation</li>
                <li>• Remote command execution</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Protection Measures:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keep all devices updated</li>
                <li>• Change default IoT device passwords</li>
                <li>• Use network monitoring tools</li>
                <li>• Deploy endpoint protection</li>
                <li>• Monitor unusual network traffic</li>
                <li>• Implement network segmentation</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}