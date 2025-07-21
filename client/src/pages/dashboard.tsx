import { useState } from "react";
import Navigation from "@/components/Navigation";
import SafetyBanner from "@/components/SafetyBanner";
import RansomwareSimulation from "@/components/simulations/RansomwareSimulation";
import PhishingSimulation from "@/components/simulations/PhishingSimulation";
import WindowsUpdateSimulation from "@/components/simulations/WindowsUpdateSimulation";
import SystemWarningSimulation from "@/components/simulations/SystemWarningSimulation";
import PowerShellRansomwareSimulation from "@/components/simulations/PowerShellRansomwareSimulation";
import WormSimulation from "@/components/simulations/WormSimulation";
import BotnetSimulation from "@/components/simulations/BotnetSimulation";
import CryptominerSimulation from "@/components/simulations/CryptominerSimulation";
import TrojanSimulation from "@/components/simulations/TrojanSimulation";
import SpywareSimulation from "@/components/simulations/SpywareSimulation";
import AdwareSimulation from "@/components/simulations/AdwareSimulation";
import ScenarioGrid from "@/components/ScenarioGrid";
import ProgressSection from "@/components/ProgressSection";
import QuickQuiz from "@/components/QuickQuiz";
import TeacherDashboard from "@/components/TeacherDashboard";
import SecurityTip from "@/components/SecurityTip";

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

        {/* Scenario Selection Grid */}
        <ScenarioGrid onStartSimulation={handleStartSimulation} />

        {/* Progress and Quiz Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <ProgressSection />
          <QuickQuiz />
        </div>

        {/* Teacher Dashboard */}
        {isTeacherMode && <TeacherDashboard />}

        {/* Security Tips */}
        <SecurityTip />
      </div>
    </div>
  );
}
