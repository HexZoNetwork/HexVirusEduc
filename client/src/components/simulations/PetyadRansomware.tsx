import { useState, useEffect } from "react";
import { AlertTriangle, Info, HardDrive, Skull } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PetyadRansomwareProps {
  onExit: () => void;
}

export default function PetyadRansomware({ onExit }: PetyadRansomwareProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [bootPhase, setBootPhase] = useState("corrupting");
  const [progress, setProgress] = useState(0);
  const [showRansomNote, setShowRansomNote] = useState(false);

  useEffect(() => {
    // Simulate boot record corruption
    const corruptionTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(corruptionTimer);
          setBootPhase("rebooting");
          setTimeout(() => {
            setBootPhase("failed");
            setTimeout(() => {
              setShowRansomNote(true);
            }, 3000);
          }, 2000);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Simulate disk destruction
    const destructionTimer = setInterval(() => {
      if (bootPhase === "corrupting") {
        const files = ["boot.ini", "ntldr", "bootmgr", "winload.exe", "hal.dll"];
        const randomFile = files[Math.floor(Math.random() * files.length)];
        console.log(`💀 PETYA DESTROYING: ${randomFile} - BOOT SYSTEM CORRUPTED!`);
      }
    }, 800);

    return () => {
      clearInterval(corruptionTimer);
      clearInterval(destructionTimer);
    };
  }, [bootPhase]);

  return (
    <div className="mb-8">
      <div className="bg-purple-900 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Skull className="w-5 h-5 mr-3 text-purple-200 animate-pulse" />
          <span className="font-semibold">PETYA/NOTPETYA RANSOMWARE SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-purple-900 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      <div className="bg-black text-white rounded-b-xl overflow-hidden relative min-h-96">
        {!showRansomNote ? (
          <div className="p-8 font-mono">
            {/* Boot Corruption Phase */}
            {bootPhase === "corrupting" && (
              <div className="text-center">
                <div className="mb-6">
                  <HardDrive className="w-16 h-16 mx-auto text-red-500 animate-pulse mb-4" />
                  <h2 className="text-2xl text-red-500 mb-4">PETYA BOOT RECORD INFECTION</h2>
                </div>
                
                <div className="bg-red-900 p-6 rounded-lg mb-6">
                  <h3 className="text-xl text-yellow-400 mb-4">Corrupting Master Boot Record...</h3>
                  <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                    <div 
                      className="bg-red-500 h-4 rounded-full transition-all animate-pulse"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-red-300">{progress}% - Overwriting boot sectors</p>
                </div>

                <div className="bg-gray-900 p-4 rounded text-left text-sm">
                  <h4 className="text-red-400 mb-2">System Files Being Destroyed:</h4>
                  <div className="text-green-400 space-y-1">
                    <div>C:\Windows\System32\boot.ini ........... CORRUPTED</div>
                    <div>C:\Windows\System32\ntldr ............. CORRUPTED</div>
                    <div>C:\Windows\System32\bootmgr ........... CORRUPTED</div>
                    <div>C:\Windows\System32\winload.exe ........ CORRUPTED</div>
                    <div className="text-red-500 animate-pulse">Master Boot Record .................. DESTROYED</div>
                  </div>
                </div>
              </div>
            )}

            {/* Reboot Phase */}
            {bootPhase === "rebooting" && (
              <div className="text-center">
                <h2 className="text-2xl text-yellow-400 mb-8">System Rebooting...</h2>
                <div className="animate-spin w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto"></div>
                <p className="text-gray-400 mt-4">Preparing to restart system...</p>
              </div>
            )}

            {/* Boot Failure */}
            {bootPhase === "failed" && (
              <div className="text-center">
                <div className="text-6xl text-red-500 mb-6">💀</div>
                <h2 className="text-3xl text-red-500 mb-4">BOOT FAILURE</h2>
                <div className="bg-red-900 p-6 rounded-lg">
                  <p className="text-red-300 text-lg">Operating System Not Found</p>
                  <p className="text-red-200 text-sm mt-2">Master Boot Record has been corrupted</p>
                  <p className="text-yellow-400 text-sm mt-4 animate-pulse">Loading recovery message...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Petya Ransom Note */
          <div className="p-8 font-mono text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">💀</div>
              <h1 className="text-4xl text-red-500 font-bold mb-4 animate-pulse">
                YOUR HARD DRIVE HAS BEEN ENCRYPTED!
              </h1>
            </div>

            <div className="bg-red-900 border-2 border-red-500 p-6 rounded-lg mb-8">
              <h2 className="text-2xl text-yellow-400 mb-4">PETYA RANSOMWARE</h2>
              <div className="text-red-200 space-y-3 text-sm">
                <p>Your entire hard drive has been encrypted using military-grade encryption.</p>
                <p>All your files, documents, photos, databases are no longer accessible.</p>
                <p>The only way to recover your data is with our special decryption key.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black border border-red-500 p-4 rounded">
                <h3 className="text-yellow-400 font-bold mb-3">WHAT HAPPENED?</h3>
                <div className="text-red-200 text-sm space-y-2">
                  <p>• Master Boot Record encrypted</p>
                  <p>• File system destroyed</p>
                  <p>• Operating system corrupted</p>
                  <p>• Recovery impossible without key</p>
                </div>
              </div>

              <div className="bg-black border border-red-500 p-4 rounded">
                <h3 className="text-yellow-400 font-bold mb-3">PAYMENT REQUIRED</h3>
                <div className="text-red-200 text-sm space-y-2">
                  <p className="text-green-400 font-bold">$300 in Bitcoin</p>
                  <p>Personal ID: 3F2C9A8E7B1D</p>
                  <p>Email: recover@petya-pay.onion</p>
                  <p className="text-yellow-400">Time limit: 7 days</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900 border border-yellow-500 p-4 rounded-lg mb-6">
              <h3 className="text-yellow-300 font-bold mb-2">⚠️ WARNING ⚠️</h3>
              <p className="text-yellow-200 text-sm">
                Do not attempt to restore your files using third party software. 
                This will result in permanent data loss!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75"
                disabled
                onClick={() => alert("EDUCATIONAL ONLY: Petya destroys data even after payment!")}
              >
                Check Payment (FAKE)
              </button>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75 animate-pulse"
                disabled
                onClick={() => alert("EDUCATIONAL ONLY: Never pay ransoms - Petya often destroys data anyway!")}
              >
                Pay Bitcoin (FAKE)
              </button>
            </div>

            <div className="mt-6 text-red-300 text-xs">
              <p>Recovery Key: 3F2C9A8E7B1D4K5M8P9Q2R7S1T6Y8U3V</p>
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          PETYA SIMULATION
        </div>
      </div>

      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Petya/NotPetya Ransomware:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Unique Features:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Encrypts Master Boot Record (MBR)</li>
                <li>• Prevents system from booting</li>
                <li>• More destructive than file-only ransomware</li>
                <li>• NotPetya variant was purely destructive</li>
                <li>• Spreads via network vulnerabilities</li>
                <li>• Often destroyed data even after payment</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Protection:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Boot from secure external media</li>
                <li>• Regular full system backups</li>
                <li>• Enable Secure Boot features</li>
                <li>• Network segmentation</li>
                <li>• Endpoint protection with behavior analysis</li>
                <li>• Patch management for SMB vulnerabilities</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <p className="text-sm text-gray-800">
              <strong>Impact:</strong> NotPetya (2017) caused over $10 billion in damages worldwide, 
              targeting Ukraine initially but spreading globally. Many experts consider it a state-sponsored cyber weapon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}