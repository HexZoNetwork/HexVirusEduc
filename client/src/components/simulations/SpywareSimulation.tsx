import { useState, useEffect } from "react";
import { Search, MapPin, AlertTriangle, Info, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpywareSimulationProps {
  onExit: () => void;
}

export default function SpywareSimulation({ onExit }: SpywareSimulationProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [trackedData, setTrackedData] = useState({
    websites: 247,
    locations: 156,
    keystrokes: 89234,
    screenshots: 342,
    contacts: 89,
    messages: 1247
  });

  const recentActivity = [
    { time: "14:23", activity: "Visited: online-banking.com", type: "web" },
    { time: "14:20", activity: "Location: 123 Main St, City", type: "location" },
    { time: "14:18", activity: "Typed: credit card number", type: "keystroke" },
    { time: "14:15", activity: "Screenshot captured", type: "screenshot" },
    { time: "14:12", activity: "SMS sent to John Doe", type: "message" },
    { time: "14:10", activity: "Contact added: Jane Smith", type: "contact" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTrackedData(prev => ({
        websites: prev.websites + Math.floor(Math.random() * 3),
        locations: prev.locations + Math.floor(Math.random() * 2),
        keystrokes: prev.keystrokes + Math.floor(Math.random() * 50),
        screenshots: prev.screenshots + Math.floor(Math.random() * 2),
        contacts: prev.contacts + Math.floor(Math.random() * 2),
        messages: prev.messages + Math.floor(Math.random() * 5)
      }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-indigo-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Search className="w-5 h-5 mr-3 text-indigo-200" />
          <span className="font-semibold">SPYWARE SURVEILLANCE SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-indigo-600 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      {/* Spyware Dashboard */}
      <div className="bg-gray-900 text-white rounded-b-xl overflow-hidden relative">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-indigo-400">FlexiSpy Mobile v2.8</h3>
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Monitoring Active</span>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <Globe className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold text-blue-400">{trackedData.websites}</div>
              <div className="text-sm text-gray-400">Websites Visited</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-red-400" />
              <div className="text-2xl font-bold text-red-400">{trackedData.locations}</div>
              <div className="text-sm text-gray-400">Locations Tracked</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-xl mb-1">⌨️</div>
              <div className="text-2xl font-bold text-yellow-400">{trackedData.keystrokes.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Keystrokes</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-xl mb-1">📱</div>
              <div className="text-2xl font-bold text-green-400">{trackedData.messages}</div>
              <div className="text-sm text-gray-400">Messages</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-xl mb-1">📷</div>
              <div className="text-2xl font-bold text-purple-400">{trackedData.screenshots}</div>
              <div className="text-sm text-gray-400">Screenshots</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-xl mb-1">👥</div>
              <div className="text-2xl font-bold text-orange-400">{trackedData.contacts}</div>
              <div className="text-sm text-gray-400">Contacts</div>
            </div>
          </div>

          {/* Real-time Activity */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-indigo-400">Recent Activity</h4>
              <div className="space-y-2">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{item.time}</span>
                    <span className="flex-1">{item.activity}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'web' ? 'bg-blue-500' :
                      item.type === 'location' ? 'bg-red-500' :
                      item.type === 'keystroke' ? 'bg-yellow-500' :
                      item.type === 'screenshot' ? 'bg-purple-500' :
                      item.type === 'message' ? 'bg-green-500' : 'bg-orange-500'
                    }`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-indigo-400">Target Device Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Device:</span>
                  <span>iPhone 15 Pro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">OS Version:</span>
                  <span>iOS 17.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Owner:</span>
                  <span>Sarah Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Seen:</span>
                  <span className="text-green-400">2 minutes ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Battery:</span>
                  <span>67%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Surveillance Features */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3 text-indigo-400">Active Surveillance Features</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>📍 GPS Location Tracking</span>
                  <span className="text-green-400">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>📞 Call Recording</span>
                  <span className="text-green-400">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>💬 Message Interception</span>
                  <span className="text-green-400">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>🌐 Web Activity Monitoring</span>
                  <span className="text-green-400">ACTIVE</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>📱 App Usage Tracking</span>
                  <span className="text-green-400">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>📧 Email Monitoring</span>
                  <span className="text-green-400">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>📷 Remote Camera Access</span>
                  <span className="text-yellow-400">STANDBY</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>🎤 Ambient Recording</span>
                  <span className="text-red-400">DISABLED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map View */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-indigo-400">Current Location</h4>
            <div className="bg-blue-900 p-4 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-red-400" />
              <div className="text-white font-semibold">Downtown Coffee Shop</div>
              <div className="text-gray-300 text-sm">123 Main Street, City Center</div>
              <div className="text-gray-400 text-xs mt-2">
                Lat: 40.7128° N, Lon: 74.0060° W
              </div>
              <div className="text-green-400 text-xs">
                Last updated: 30 seconds ago
              </div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          SPYWARE SIMULATION
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Understanding Spyware:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Spyware Capabilities:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GPS location tracking</li>
                <li>• Call and message interception</li>
                <li>• Web browsing history monitoring</li>
                <li>• Keylogging and password capture</li>
                <li>• Remote camera and microphone access</li>
                <li>• Social media account monitoring</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Protection Methods:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regular security scans</li>
                <li>• Install apps only from official stores</li>
                <li>• Review app permissions carefully</li>
                <li>• Keep devices updated</li>
                <li>• Use mobile security software</li>
                <li>• Monitor unusual battery drain/data usage</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
            <p className="text-sm text-gray-800">
              <strong>Privacy Impact:</strong> Spyware completely violates personal privacy by secretly monitoring all device activities. 
              It can be used for stalking, corporate espionage, and identity theft.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}