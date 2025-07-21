import { useState, useEffect } from "react";
import { Terminal, AlertTriangle, Info, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PowerShellRansomwareSimulationProps {
  onExit: () => void;
}

export default function PowerShellRansomwareSimulation({ onExit }: PowerShellRansomwareSimulationProps) {
  const [countdown, setCountdown] = useState(200);
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [scriptLines, setScriptLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showRansomWindow, setShowRansomWindow] = useState(false);

  // Simulate PowerShell script execution
  const psScript = [
    "Add-Type -AssemblyName System.Windows.Forms",
    "Add-Type -AssemblyName System.Drawing", 
    "$currUser = [Security.Principal.WindowsIdentity]::GetCurrent()",
    "$adminRole = [Security.Principal.WindowsBuiltInRole]::Administrator",
    "Checking admin privileges...",
    "Requesting elevation...",
    "Downloading payload...",
    "Invoke-WebRequest -Uri 'https://files.catbox.moe/f9qen0.wav'",
    "Setting up persistence...",
    "$startupPath = \"$env:APPDATA\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\"",
    "Creating ransom window...",
    "$form = New-Object System.Windows.Forms.Form",
    "$form.Text = \"HexZo Ransom\"",
    "$form.BackColor = 'Black'",
    "Initializing UI components...",
    "Starting countdown timer...",
    "RANSOM WINDOW DISPLAYED"
  ];

  useEffect(() => {
    // Simulate script execution
    if (currentLineIndex < psScript.length) {
      const timer = setTimeout(() => {
        setScriptLines(prev => [...prev, psScript[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
        
        if (currentLineIndex === psScript.length - 1) {
          setTimeout(() => setShowRansomWindow(true), 1000);
        }
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  useEffect(() => {
    // Countdown timer for ransom window
    if (showRansomWindow) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            alert("Simulation Complete! Remember: Never pay ransoms, restore from backups!");
            onExit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showRansomWindow, onExit]);

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-purple-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Terminal className="w-5 h-5 mr-3 text-purple-200" />
          <span className="font-semibold">POWERSHELL RANSOMWARE SIMULATION</span>
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

      {/* PowerShell Console */}
      <div className="bg-blue-900 text-white rounded-b-xl overflow-hidden relative">
        {!showRansomWindow ? (
          <div className="p-6 font-mono text-sm">
            <div className="mb-4 flex items-center">
              <Terminal className="w-5 h-5 mr-2" />
              <span>Windows PowerShell</span>
              <span className="ml-auto text-blue-300">Administrator</span>
            </div>
            
            <div className="bg-blue-800 p-4 rounded-lg max-h-80 overflow-y-auto">
              <div className="text-blue-300 mb-2">PS C:\Users\Student&gt;</div>
              {scriptLines.map((line, index) => (
                <div key={index} className="mb-1">
                  <span className="text-green-400">[{new Date().toLocaleTimeString()}]</span>
                  <span className="ml-2">{line}</span>
                  {line.includes("Downloading") && (
                    <div className="ml-4 text-yellow-300">
                      <Volume2 className="w-4 h-4 inline mr-1" />
                      Audio payload downloaded
                    </div>
                  )}
                  {line.includes("persistence") && (
                    <div className="ml-4 text-red-300">
                      ⚠️ Registry keys modified
                    </div>
                  )}
                </div>
              ))}
              {currentLineIndex < psScript.length && (
                <div className="animate-pulse">
                  <span className="text-blue-300">Executing...</span>
                  <span className="ml-2 bg-blue-700 text-transparent">_</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* HexZo Ransom Window */
          <div className="bg-black text-white p-8 min-h-96">
            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-red-500 mb-4 font-mono animate-pulse">
                  El God HexZo Is Here
                </h2>
                
                <div className="bg-gray-800 rounded p-4 mb-6">
                  <div className="bg-gray-600 rounded-full h-4 mb-2 overflow-hidden">
                    <div className="bg-red-500 h-full animate-pulse" style={{ width: '45%' }} />
                  </div>
                  <p className="text-orange-300 text-sm">Encryption Progress: 45%</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-6xl font-bold text-orange-400 font-mono mb-2">
                  {countdown}
                </div>
                <p className="text-red-400 font-mono">ENCRYPTION BEGINS IN SECONDS</p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg mb-6 font-mono text-left">
                <p className="text-orange-400 mb-2">To recover your files, send 10 BTC to address:</p>
                <p className="text-white text-sm break-all bg-gray-900 p-2 rounded">
                  1BoatSLRHtKNngkdXEeobR76b53LETtpyT
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-mono font-bold cursor-not-allowed opacity-75"
                  disabled
                >
                  Exit With Death
                </button>
                <button 
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded font-mono cursor-not-allowed opacity-75"
                  disabled
                >
                  Pay Ransom
                </button>
              </div>

              <div className="mt-6 text-xs text-gray-400">
                <p>⚠️ Do not turn off your computer</p>
                <p>Your system is being encrypted...</p>
              </div>
            </div>
          </div>
        )}

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          EDUCATIONAL SIMULATION
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">PowerShell-Based Ransomware Analysis:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Attack Techniques:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Privilege escalation (Admin rights)</li>
                <li>• Persistence mechanisms (Startup folder)</li>
                <li>• Audio/visual intimidation</li>
                <li>• System registry manipulation</li>
                <li>• Network payload downloads</li>
                <li>• GUI-based ransom demands</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Defense Strategies:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Block PowerShell execution policies</li>
                <li>• Monitor startup folder changes</li>
                <li>• Network traffic analysis</li>
                <li>• Regular system backups</li>
                <li>• User privilege restrictions</li>
                <li>• Endpoint detection systems</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-800">
              <strong>Key Learning:</strong> This simulation shows how ransomware can use legitimate system tools like PowerShell to carry out attacks. 
              Always be cautious of script execution and maintain proper system security policies.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}