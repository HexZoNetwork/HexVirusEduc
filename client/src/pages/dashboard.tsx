import { useState } from "react";
import Navigation from "@/components/Navigation";
import SafetyBanner from "@/components/SafetyBanner";
import RansomwareSimulation from "@/components/simulations/RansomwareSimulation";
import PhishingSimulation from "@/components/simulations/PhishingSimulation";
import WindowsUpdateSimulation from "@/components/simulations/WindowsUpdateSimulation";
import SystemWarningSimulation from "@/components/simulations/SystemWarningSimulation";
import PowerShellRansomwareSimulation from "@/components/simulations/PowerShellRansomwareSimulation";
import WannaCryRansomware from "@/components/simulations/WannaCryRansomware";
import PetyadRansomware from "@/components/simulations/PetyadRansomware";
import LockyRansomware from "@/components/simulations/LockyRansomware";
import RyukRansomware from "@/components/simulations/RyukRansomware";
import MazeRansomware from "@/components/simulations/MazeRansomware";
import WormSimulation from "@/components/simulations/WormSimulation";
import BotnetSimulation from "@/components/simulations/BotnetSimulation";
import CryptominerSimulation from "@/components/simulations/CryptominerSimulation";
import TrojanSimulation from "@/components/simulations/TrojanSimulation";
import SpywareSimulation from "@/components/simulations/SpywareSimulation";
import AdwareSimulation from "@/components/simulations/AdwareSimulation";

export default function Dashboard() {
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  const handleStartSimulation = (type: string) => {
    setActiveSimulation(type);
  };

  const handleExitSimulation = () => {
    setActiveSimulation(null);
  };

  return (
    <div className="bg-edu-bg font-inter antialiased min-h-screen">
      <Navigation 
        isTeacherMode={isTeacherMode}
        onToggleTeacherMode={() => setIsTeacherMode(!isTeacherMode)}
      />
      <SafetyBanner />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Student!</h2>
                <p className="text-gray-600">Continue your cybersecurity education journey with interactive simulations and hands-on learning.</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-edu-blue">75%</div>
                  <div className="text-xs text-gray-500">Progress</div>
                </div>
                <div className="w-16 h-16 bg-edu-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A-</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Simulation */}
        {activeSimulation === 'ransomware' && (
          <RansomwareSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'phishing' && (
          <PhishingSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'windows-update' && (
          <WindowsUpdateSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'system-warning' && (
          <SystemWarningSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'powershell-ransomware' && (
          <PowerShellRansomwareSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'worm' && (
          <WormSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'botnet' && (
          <BotnetSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'cryptominer' && (
          <CryptominerSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'trojan' && (
          <TrojanSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'spyware' && (
          <SpywareSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'adware' && (
          <AdwareSimulation onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'wannacry' && (
          <WannaCryRansomware onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'petya' && (
          <PetyadRansomware onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'locky' && (
          <LockyRansomware onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'ryuk' && (
          <RyukRansomware onExit={handleExitSimulation} />
        )}
        {activeSimulation === 'maze' && (
          <MazeRansomware onExit={handleExitSimulation} />
        )}

        {/* Scenario Selection Grid - Displayed directly */}
        {!activeSimulation && (
          <div className="space-y-8">
            {/* Ransomware Simulations */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-danger-red rounded-full mr-3"></span>
                Ransomware Simulations
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <button
                  onClick={() => handleStartSimulation('ransomware')}
                  className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 rounded-lg hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🔐</div>
                  <h4 className="font-bold text-lg mb-2">Basic Ransomware</h4>
                  <p className="text-red-100 text-sm">Classic file encryption attack</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('powershell-ransomware')}
                  className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 rounded-lg hover:from-blue-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">💻</div>
                  <h4 className="font-bold text-lg mb-2">PowerShell Ransomware</h4>
                  <p className="text-blue-100 text-sm">Script-based encryption attack</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('wannacry')}
                  className="bg-gradient-to-br from-red-600 to-red-800 text-white p-6 rounded-lg hover:from-red-700 hover:to-red-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🦠</div>
                  <h4 className="font-bold text-lg mb-2">WannaCry</h4>
                  <p className="text-red-100 text-sm">Global worm ransomware (2017)</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('petya')}
                  className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">💀</div>
                  <h4 className="font-bold text-lg mb-2">Petya/NotPetya</h4>
                  <p className="text-purple-100 text-sm">Boot record destructor</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('locky')}
                  className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-6 rounded-lg hover:from-orange-700 hover:to-orange-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🔒</div>
                  <h4 className="font-bold text-lg mb-2">Locky</h4>
                  <p className="text-orange-100 text-sm">Email-spread file locker</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('ryuk')}
                  className="bg-gradient-to-br from-gray-800 to-black text-white p-6 rounded-lg hover:from-gray-900 hover:to-gray-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🏢</div>
                  <h4 className="font-bold text-lg mb-2">Ryuk</h4>
                  <p className="text-gray-100 text-sm">Enterprise-targeted ransomware</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('maze')}
                  className="bg-gradient-to-br from-purple-700 to-purple-900 text-white p-6 rounded-lg hover:from-purple-800 hover:to-purple-950 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🌐</div>
                  <h4 className="font-bold text-lg mb-2">Maze</h4>
                  <p className="text-purple-100 text-sm">Double extortion pioneer</p>
                </button>
              </div>
            </div>

            {/* Other Malware Simulations */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-warning-orange rounded-full mr-3"></span>
                Other Malware & Threats
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <button
                  onClick={() => handleStartSimulation('worm')}
                  className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-lg hover:from-green-700 hover:to-green-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🐛</div>
                  <h4 className="font-bold text-lg mb-2">Network Worm</h4>
                  <p className="text-green-100 text-sm">Self-replicating network threat</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('botnet')}
                  className="bg-gradient-to-br from-gray-600 to-gray-800 text-white p-6 rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🤖</div>
                  <h4 className="font-bold text-lg mb-2">Botnet Command</h4>
                  <p className="text-gray-100 text-sm">Zombie network control</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('cryptominer')}
                  className="bg-gradient-to-br from-yellow-600 to-orange-700 text-white p-6 rounded-lg hover:from-yellow-700 hover:to-orange-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">⛏️</div>
                  <h4 className="font-bold text-lg mb-2">Cryptominer</h4>
                  <p className="text-yellow-100 text-sm">Hidden cryptocurrency mining</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('trojan')}
                  className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-6 rounded-lg hover:from-indigo-700 hover:to-indigo-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🐎</div>
                  <h4 className="font-bold text-lg mb-2">Trojan Horse</h4>
                  <p className="text-indigo-100 text-sm">Disguised malicious software</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('spyware')}
                  className="bg-gradient-to-br from-pink-600 to-pink-800 text-white p-6 rounded-lg hover:from-pink-700 hover:to-pink-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">👁️</div>
                  <h4 className="font-bold text-lg mb-2">Spyware</h4>
                  <p className="text-pink-100 text-sm">Privacy surveillance malware</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('adware')}
                  className="bg-gradient-to-br from-teal-600 to-teal-800 text-white p-6 rounded-lg hover:from-teal-700 hover:to-teal-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">📢</div>
                  <h4 className="font-bold text-lg mb-2">Adware</h4>
                  <p className="text-teal-100 text-sm">Unwanted advertising injection</p>
                </button>
              </div>
            </div>

            {/* Social Engineering */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-edu-blue rounded-full mr-3"></span>
                Social Engineering & Scams
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <button
                  onClick={() => handleStartSimulation('phishing')}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🎣</div>
                  <h4 className="font-bold text-lg mb-2">Email Phishing</h4>
                  <p className="text-blue-100 text-sm">Fake email recognition training</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('system-warning')}
                  className="bg-gradient-to-br from-red-600 to-orange-700 text-white p-6 rounded-lg hover:from-red-700 hover:to-orange-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">⚠️</div>
                  <h4 className="font-bold text-lg mb-2">Fake System Warning</h4>
                  <p className="text-red-100 text-sm">Tech support scam simulation</p>
                </button>

                <button
                  onClick={() => handleStartSimulation('windows-update')}
                  className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl mb-3">🔄</div>
                  <h4 className="font-bold text-lg mb-2">Fake Windows Update</h4>
                  <p className="text-blue-100 text-sm">Malicious update simulation</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Learning Progress & Tips - Only show when not in simulation */}
        {!activeSimulation && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Progress</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-safe-green mb-2">12</div>
                  <div className="text-sm text-gray-600">Simulations Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-edu-blue mb-2">85%</div>
                  <div className="text-sm text-gray-600">Quiz Average</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning-orange mb-2">47</div>
                  <div className="text-sm text-gray-600">Threats Identified</div>
                </div>
              </div>
            </div>

            {/* Security Tip */}
            <div className="bg-gradient-to-r from-safe-green to-edu-blue text-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">💡 Today's Security Tip</h3>
              <p className="text-green-100">
                Always keep your operating system and antivirus software updated. 
                Many ransomware attacks exploit known vulnerabilities that have already been patched!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
