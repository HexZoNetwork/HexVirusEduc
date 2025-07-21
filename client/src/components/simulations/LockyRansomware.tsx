import { useState, useEffect } from "react";
import { Lock, Info, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LockyRansomwareProps {
  onExit: () => void;
}

export default function LockyRansomware({ onExit }: LockyRansomwareProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [encryptionPhase, setEncryptionPhase] = useState("scanning");
  const [filesFound, setFilesFound] = useState(0);
  const [filesEncrypted, setFilesEncrypted] = useState(0);
  const [currentFile, setCurrentFile] = useState("");

  const fileTypes = [
    ".doc", ".docx", ".pdf", ".jpg", ".png", ".mp4", ".mp3", ".xlsx", ".ppt", ".txt", ".zip", ".rar"
  ];

  const fileNames = [
    "Family_Photos.jpg", "Work_Presentation.pptx", "Bank_Statements.pdf", 
    "Vacation_Video.mp4", "Password_List.txt", "Budget_2024.xlsx",
    "Wedding_Photos.zip", "Music_Collection.mp3", "Resume.docx"
  ];

  useEffect(() => {
    // File scanning phase
    if (encryptionPhase === "scanning") {
      const scanTimer = setInterval(() => {
        setFilesFound(prev => {
          const newCount = prev + Math.floor(Math.random() * 50) + 20;
          if (newCount >= 2847) {
            clearInterval(scanTimer);
            setEncryptionPhase("encrypting");
            console.log("🔍 LOCKY SCAN COMPLETE: Found 2,847 files to encrypt!");
            return 2847;
          }
          return newCount;
        });
      }, 200);

      return () => clearInterval(scanTimer);
    }

    // File encryption phase
    if (encryptionPhase === "encrypting") {
      const encryptTimer = setInterval(() => {
        if (filesEncrypted < filesFound) {
          setFilesEncrypted(prev => prev + Math.floor(Math.random() * 10) + 5);
          setCurrentFile(fileNames[Math.floor(Math.random() * fileNames.length)]);
          
          // Log encryption progress
          if (filesEncrypted % 100 === 0) {
            console.log(`🔒 LOCKY ENCRYPTING: ${filesEncrypted} files encrypted - adding .locky extension!`);
          }
        } else {
          clearInterval(encryptTimer);
          setEncryptionPhase("complete");
          setTimeout(() => {
            alert("💀 ALL FILES ENCRYPTED! Locky has locked 2,847 files with .locky extension. This shows why email security is crucial!");
            onExit();
          }, 3000);
        }
      }, 100);

      return () => clearInterval(encryptTimer);
    }
  }, [encryptionPhase, filesFound, filesEncrypted, onExit]);

  return (
    <div className="mb-8">
      <div className="bg-orange-600 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Lock className="w-5 h-5 mr-3 text-orange-200 animate-pulse" />
          <span className="font-semibold">LOCKY RANSOMWARE SIMULATION</span>
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

      <div className="bg-gray-900 text-white rounded-b-xl overflow-hidden relative">
        {encryptionPhase === "complete" ? (
          /* Locky Ransom Note */
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-600 rounded-full flex items-center justify-center">
                <Lock className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-orange-400 mb-4">
                !!! IMPORTANT INFORMATION !!!!
              </h1>
            </div>

            <div className="bg-orange-900 border-2 border-orange-500 p-6 rounded-lg mb-8">
              <h2 className="text-2xl text-yellow-300 font-bold mb-4 text-center">
                Your files are encrypted!
              </h2>
              <div className="text-orange-100 space-y-3">
                <p>All your files have been protected by strong encryption with RSA-2048.</p>
                <p>More information about the encryption keys using RSA-2048 can be found here:</p>
                <p className="text-blue-300">https://en.wikipedia.org/wiki/RSA_(cryptosystem)</p>
                <p>What does this mean?</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>You cannot decrypt your files without the private key</li>
                  <li>Nobody can help you without knowing this key</li>
                  <li>If you shut down your PC or try to close this program, the price will be doubled</li>
                  <li>You have 7 days to make the payment. After that the price will be doubled</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black border border-orange-500 p-4 rounded">
                <h3 className="text-orange-400 font-bold mb-3">ENCRYPTION DETAILS</h3>
                <div className="text-orange-200 text-sm space-y-2">
                  <div>Files encrypted: <span className="text-white font-bold">{filesFound}</span></div>
                  <div>File extension: <span className="text-yellow-300">.locky</span></div>
                  <div>Encryption: <span className="text-red-300">RSA-2048 + AES-256</span></div>
                  <div>Personal ID: <span className="text-green-400">7C4A9E2D</span></div>
                </div>
              </div>

              <div className="bg-black border border-orange-500 p-4 rounded">
                <h3 className="text-orange-400 font-bold mb-3">PAYMENT INSTRUCTIONS</h3>
                <div className="text-orange-200 text-sm space-y-2">
                  <div>Amount: <span className="text-green-400 font-bold">0.5 Bitcoin</span></div>
                  <div>Current value: <span className="text-yellow-300">~$380</span></div>
                  <div>Tor Browser required for payment site</div>
                  <div>Payment deadline: <span className="text-red-400">7 days</span></div>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl text-yellow-300 mb-4">How to buy bitcoins?</h3>
              <div className="bg-gray-800 p-4 rounded-lg text-left text-sm text-gray-300">
                <p>1. Go to localbitcoins.com or coinbase.com</p>
                <p>2. Create an account and verify your identity</p>
                <p>3. Buy 0.5 Bitcoin (~$380)</p>
                <p>4. Send Bitcoin to address: <span className="text-green-400">1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</span></p>
                <p>5. Download Tor Browser and visit our payment site</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75"
                disabled
                onClick={() => alert("EDUCATIONAL ONLY: Never download Tor for ransomware payments!")}
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download Tor (FAKE)
              </button>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75"
                disabled
                onClick={() => alert("EDUCATIONAL ONLY: This would check if payment was received - never pay!")}
              >
                Check Payment (FAKE)
              </button>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75 animate-pulse"
                disabled
                onClick={() => alert("EDUCATIONAL ONLY: Never pay Bitcoin ransoms!")}
              >
                Pay Now (FAKE)
              </button>
            </div>

            <div className="mt-6 bg-red-900 p-4 rounded-lg text-center">
              <p className="text-red-200 text-sm">
                <strong>Warning:</strong> Do not rename encrypted files or try to decrypt them yourself. 
                This may result in permanent data loss!
              </p>
            </div>
          </div>
        ) : (
          /* Encryption Process */
          <div className="p-8 font-mono">
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 mx-auto text-orange-400 animate-spin mb-4" />
              <h2 className="text-3xl text-orange-400 mb-4">LOCKY ENCRYPTION IN PROGRESS</h2>
              <p className="text-gray-300">Please wait while your files are being processed...</p>
            </div>

            {encryptionPhase === "scanning" && (
              <div className="space-y-6">
                <div className="bg-orange-900 p-6 rounded-lg">
                  <h3 className="text-xl text-yellow-300 mb-4">Scanning File System...</h3>
                  <div className="space-y-2">
                    <div className="text-orange-200">Looking for target file types:</div>
                    <div className="text-gray-300 text-sm">
                      {fileTypes.join(", ")}
                    </div>
                    <div className="mt-4">
                      <div className="text-orange-200">Files found: <span className="text-white font-bold animate-pulse">{filesFound}</span></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black p-4 rounded-lg text-green-400 text-sm">
                  <div>Scanning C:\Users\Documents\... ✓</div>
                  <div>Scanning C:\Users\Desktop\... ✓</div>
                  <div>Scanning C:\Users\Pictures\... ✓</div>
                  <div>Scanning D:\Projects\... ✓</div>
                  <div className="animate-pulse">Scanning network drives...</div>
                </div>
              </div>
            )}

            {encryptionPhase === "encrypting" && (
              <div className="space-y-6">
                <div className="bg-red-900 p-6 rounded-lg">
                  <h3 className="text-xl text-yellow-300 mb-4">Encrypting Files...</h3>
                  <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                    <div 
                      className="bg-orange-500 h-4 rounded-full transition-all animate-pulse"
                      style={{ width: `${(filesEncrypted / filesFound) * 100}%` }}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-orange-200">
                      Progress: <span className="text-white font-bold">{filesEncrypted}</span> / {filesFound} files
                    </div>
                    <div className="text-gray-300 text-sm">
                      Currently encrypting: <span className="text-yellow-300">{currentFile}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black p-4 rounded-lg text-red-400 text-sm">
                  <div className="animate-pulse space-y-1">
                    <div>Encrypting: {currentFile} → {currentFile}.locky</div>
                    <div>RSA-2048 key generation... ✓</div>
                    <div>AES-256 file encryption... ✓</div>
                    <div>Original file deletion... ✓</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          LOCKY SIMULATION
        </div>
      </div>

      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Locky Ransomware:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Attack Vector:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Spread primarily via email attachments</li>
                <li>• JavaScript files in ZIP attachments</li>
                <li>• Microsoft Office macros</li>
                <li>• Exploit kits on compromised websites</li>
                <li>• Adds .locky extension to encrypted files</li>
                <li>• Uses strong RSA-2048 + AES-256 encryption</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Prevention:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Never open suspicious email attachments</li>
                <li>• Disable macros in Office documents</li>
                <li>• Keep software updated</li>
                <li>• Use email security filtering</li>
                <li>• Regular offline backups</li>
                <li>• User security awareness training</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
            <p className="text-sm text-gray-800">
              <strong>Timeline:</strong> Locky first appeared in 2016 and infected millions of computers worldwide. 
              It was distributed by the Necurs botnet and demanded Bitcoin payments of 0.5-1 BTC.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}