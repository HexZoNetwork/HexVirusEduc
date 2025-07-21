import { useState, useEffect } from "react";
import { Network, Info, Globe, FileX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MazeRansomwareProps {
  onExit: () => void;
}

export default function MazeRansomware({ onExit }: MazeRansomwareProps) {
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [phase, setPhase] = useState("infiltration");
  const [filesStolen, setFilesStolen] = useState(0);
  const [leakProgress, setLeakProgress] = useState(0);
  const [showLeakSite, setShowLeakSite] = useState(false);

  useEffect(() => {
    // Data theft simulation
    const stealTimer = setInterval(() => {
      if (phase === "infiltration" && filesStolen < 15000) {
        setFilesStolen(prev => prev + Math.floor(Math.random() * 200) + 100);
        console.log("📊 MAZE STEALING DATA: Exfiltrating sensitive company information before encryption!");
      }
    }, 600);

    // Phase transitions
    setTimeout(() => {
      if (phase === "infiltration") {
        setPhase("encryption");
        console.log("🔒 MAZE ENCRYPTION: Beginning file encryption after data theft!");
      }
    }, 12000);

    setTimeout(() => {
      if (phase === "encryption") {
        setPhase("extortion");
        setShowLeakSite(true);
        console.log("🌐 MAZE LEAK SITE: Publishing stolen data on dark web leak site!");
      }
    }, 20000);

    // Leak site progress
    if (phase === "extortion") {
      const leakTimer = setInterval(() => {
        setLeakProgress(prev => {
          if (prev >= 100) {
            clearInterval(leakTimer);
            return 100;
          }
          return prev + 3;
        });
      }, 500);
    }

    return () => {
      clearInterval(stealTimer);
    };
  }, [phase]);

  return (
    <div className="mb-8">
      <div className="bg-purple-800 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <Network className="w-5 h-5 mr-3 text-purple-200 animate-pulse" />
          <span className="font-semibold">MAZE RANSOMWARE SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-purple-800 hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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
        {showLeakSite ? (
          <div className="p-8">
            {/* Maze Leak Site */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-purple-600 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-purple-400 mb-4">MAZE NEWS</h1>
              <p className="text-purple-200">Corporate Data Leak Portal</p>
            </div>

            <div className="bg-purple-900 border border-purple-500 p-6 rounded-lg mb-8">
              <h2 className="text-2xl text-yellow-300 font-bold mb-4">🏢 LATEST VICTIM: [COMPANY NAME]</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-purple-300 font-bold mb-3">STOLEN DATA PREVIEW:</h3>
                  <div className="text-purple-200 text-sm space-y-2">
                    <div>• Financial records and accounting data</div>
                    <div>• Employee personal information & SSNs</div>
                    <div>• Customer database with payment info</div>
                    <div>• Trade secrets and intellectual property</div>
                    <div>• Executive email communications</div>
                    <div>• Legal documents and contracts</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-purple-300 font-bold mb-3">LEAK STATUS:</h3>
                  <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                    <div 
                      className="bg-purple-500 h-4 rounded-full transition-all animate-pulse"
                      style={{ width: `${leakProgress}%` }}
                    />
                  </div>
                  <div className="text-purple-200 text-sm">
                    <div>Files published: <span className="text-white">{Math.floor(leakProgress * 150 / 100)}</span> / 15,000</div>
                    <div>Data size: <span className="text-yellow-400">847 GB</span></div>
                    <div>Upload progress: <span className="text-purple-400">{leakProgress}%</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-red-500 p-6 rounded-lg mb-8">
              <h3 className="text-red-400 font-bold text-xl mb-4">⚠️ RANSOM NOTICE ⚠️</h3>
              <div className="text-red-200 space-y-3 text-sm">
                <p>To the management of [COMPANY NAME]:</p>
                <p>Your network has been compromised and all sensitive data has been downloaded to our secure servers.</p>
                <p>We have also encrypted your files to ensure you cannot operate without our decryption tools.</p>
                <p><strong>DOUBLE EXTORTION STRATEGY:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Pay to decrypt your files AND prevent data publication</li>
                  <li>If you refuse to pay, all stolen data will be published on this site</li>
                  <li>Your customers, partners, and competitors will have access</li>
                  <li>Regulatory fines and lawsuits will follow the breach disclosure</li>
                  <li>Your company reputation will be permanently damaged</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 border border-purple-500 p-4 rounded">
                <h3 className="text-purple-400 font-bold mb-3">PAYMENT TERMS</h3>
                <div className="text-purple-200 text-sm space-y-2">
                  <div className="text-green-400 font-bold text-xl">$4.7 Million USD</div>
                  <div>Payment method: Monero (XMR)</div>
                  <div>Deadline: <span className="text-red-400">96 hours</span></div>
                  <div>Late fee: <span className="text-red-400">+100%</span></div>
                  <div>Leak prevention: <span className="text-yellow-400">Additional $2M</span></div>
                </div>
              </div>

              <div className="bg-gray-800 border border-purple-500 p-4 rounded">
                <h3 className="text-purple-400 font-bold mb-3">PROOF OF BREACH</h3>
                <div className="text-purple-200 text-sm space-y-2">
                  <div>Sample files available for download</div>
                  <div>Employee records: <span className="text-yellow-400">25 samples</span></div>
                  <div>Financial data: <span className="text-yellow-400">12 documents</span></div>
                  <div>Customer info: <span className="text-yellow-400">500 records</span></div>
                  <div className="text-red-400 mt-2">Full dataset: 15,000+ files</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-lg mb-6">
                <h4 className="text-red-300 font-bold mb-2">PUBLIC COUNTDOWN TO DATA RELEASE</h4>
                <div className="text-red-400 text-3xl font-mono animate-pulse">
                  71:42:18
                </div>
                <p className="text-red-200 text-sm mt-2">Hours remaining before full data publication</p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75"
                  disabled
                  onClick={() => alert("EDUCATIONAL ONLY: Never communicate with ransomware operators!")}
                >
                  <FileX className="w-4 h-4 inline mr-2" />
                  Download Samples (FAKE)
                </button>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold cursor-not-allowed opacity-75"
                  disabled
                  onClick={() => alert("EDUCATIONAL ONLY: Contacting ransomware groups confirms your willingness to pay!")}
                >
                  Contact for Payment (FAKE)
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 font-mono">
            {phase === "infiltration" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Network className="w-16 h-16 mx-auto text-purple-400 animate-pulse mb-4" />
                  <h2 className="text-3xl text-purple-400 mb-4">MAZE INFILTRATION PHASE</h2>
                  <p className="text-purple-200">Data exfiltration in progress - stealing before encryption</p>
                </div>

                <div className="bg-purple-900 p-6 rounded-lg">
                  <h3 className="text-xl text-yellow-300 mb-4">Data Theft Operation</h3>
                  <div className="space-y-4">
                    <div className="text-purple-200">
                      Sensitive files stolen: <span className="text-white font-bold animate-pulse">{filesStolen.toLocaleString()}</span>
                    </div>
                    <div className="text-purple-200">
                      Estimated data size: <span className="text-yellow-400 font-bold">{Math.floor(filesStolen * 0.056)} GB</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black p-4 rounded-lg text-green-400 text-sm">
                  <div className="space-y-1 animate-pulse">
                    <div>📊 Accessing financial databases...</div>
                    <div>👥 Downloading HR records...</div>
                    <div>💼 Copying trade secrets...</div>
                    <div>📧 Exfiltrating email archives...</div>
                    <div>💳 Stealing customer payment data...</div>
                    <div>🔐 Copying encryption keys...</div>
                  </div>
                </div>
              </div>
            )}

            {phase === "encryption" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl text-purple-400 mb-4">MAZE ENCRYPTION PHASE</h2>
                  <p className="text-purple-200">Data theft complete - now encrypting remaining files</p>
                </div>

                <div className="bg-purple-900 p-6 rounded-lg">
                  <h3 className="text-xl text-yellow-300 mb-4">Double Extortion Strategy</h3>
                  <div className="text-purple-200 space-y-2 text-sm">
                    <div>✅ Phase 1: Data theft complete ({filesStolen.toLocaleString()} files stolen)</div>
                    <div className="animate-pulse">🔒 Phase 2: File encryption in progress...</div>
                    <div className="text-gray-400">⏳ Phase 3: Leak site preparation...</div>
                  </div>
                </div>

                <div className="bg-black p-4 rounded-lg text-red-400 text-sm">
                  <div className="space-y-1 animate-pulse">
                    <div>🔒 Encrypting remaining system files...</div>
                    <div>🗂️ Adding .maze extensions...</div>
                    <div>📝 Creating ransom notes...</div>
                    <div>🌐 Preparing leak site infrastructure...</div>
                    <div>⚡ Disabling recovery options...</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          MAZE SIMULATION
        </div>
      </div>

      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Maze Ransomware - Double Extortion Pioneer:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Innovation in Cybercrime:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• First major ransomware to steal data before encryption</li>
                <li>• Operates public "leak sites" on dark web</li>
                <li>• Threatens to publish stolen data if not paid</li>
                <li>• Targets high-value corporate victims</li>
                <li>• Uses multiple extortion pressure points</li>
                <li>• Often negotiates ransom amounts</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">Defense Strategy:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data loss prevention (DLP) systems</li>
                <li>• Network traffic monitoring</li>
                <li>• Data classification and protection</li>
                <li>• Incident response planning</li>
                <li>• Legal breach notification preparation</li>
                <li>• Cyber insurance coverage review</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <p className="text-sm text-gray-800">
              <strong>Legacy Impact:</strong> Maze pioneered the "double extortion" model that became standard 
              for modern ransomware groups. They shut down in 2020 but inspired dozens of copycat operations 
              using similar tactics.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}