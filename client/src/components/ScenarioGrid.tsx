import { Lock, Mail, Users, Clock, Monitor, AlertTriangle, Download, Terminal, Network, Bot, Cpu, Eye, Search, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScenarioGridProps {
  onStartSimulation: (type: string) => void;
}

export default function ScenarioGrid({ onStartSimulation }: ScenarioGridProps) {
  const scenarios = [
    {
      id: 'ransomware',
      title: 'Ransomware Attack',
      description: 'Learn to identify and respond to ransomware attacks through a safe, controlled simulation.',
      duration: 15,
      riskLevel: 'HIGH RISK',
      riskColor: 'bg-red-100 text-red-700',
      icon: Lock,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100'
    },
    {
      id: 'phishing',
      title: 'Phishing Email',
      description: 'Practice identifying suspicious emails and social engineering attempts.',
      duration: 10,
      riskLevel: 'MEDIUM RISK',
      riskColor: 'bg-yellow-100 text-yellow-700',
      icon: Mail,
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100'
    },
    {
      id: 'windows-update',
      title: 'Fake Windows Update',
      description: 'Experience a realistic fake Windows update and learn to identify malicious software.',
      duration: 8,
      riskLevel: 'HIGH RISK',
      riskColor: 'bg-blue-100 text-blue-700',
      icon: Monitor,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      id: 'system-warning',
      title: 'Fake System Warning',
      description: 'Learn to recognize and handle fake security warnings and tech support scams.',
      duration: 12,
      riskLevel: 'HIGH RISK',
      riskColor: 'bg-red-100 text-red-700',
      icon: AlertTriangle,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100'
    },
    {
      id: 'powershell-ransomware',
      title: 'PowerShell Ransomware',
      description: 'Experience a realistic PowerShell-based ransomware attack simulation.',
      duration: 18,
      riskLevel: 'CRITICAL',
      riskColor: 'bg-purple-100 text-purple-700',
      icon: Terminal,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      id: 'worm',
      title: 'Network Worm',
      description: 'See how worms spread across networks and compromise multiple systems.',
      duration: 15,
      riskLevel: 'HIGH RISK',
      riskColor: 'bg-green-100 text-green-700',
      icon: Network,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100'
    },
    {
      id: 'botnet',
      title: 'Botnet Control',
      description: 'Understand how botnets are controlled and used for malicious activities.',
      duration: 20,
      riskLevel: 'CRITICAL',
      riskColor: 'bg-purple-100 text-purple-700',
      icon: Bot,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      id: 'cryptominer',
      title: 'Cryptominer Malware',
      description: 'Experience how cryptominers hijack system resources for cryptocurrency mining.',
      duration: 12,
      riskLevel: 'HIGH RISK',
      riskColor: 'bg-orange-100 text-orange-700',
      icon: Cpu,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100'
    },
    {
      id: 'trojan',
      title: 'Trojan Horse',
      description: 'Learn how trojans disguise themselves and provide remote access to attackers.',
      duration: 16,
      riskLevel: 'HIGH RISK',
      riskColor: 'bg-red-100 text-red-700',
      icon: Eye,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100'
    },
    {
      id: 'spyware',
      title: 'Spyware Surveillance',
      description: 'Understand how spyware monitors and collects personal information.',
      duration: 14,
      riskLevel: 'HIGH RISK',
      riskColor: 'bg-indigo-100 text-indigo-700',
      icon: Search,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100'
    },
    {
      id: 'adware',
      title: 'Adware Infection',
      description: 'See how adware injects unwanted advertisements and affects browsing.',
      duration: 8,
      riskLevel: 'MEDIUM RISK',
      riskColor: 'bg-yellow-100 text-yellow-700',
      icon: MousePointer,
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
      {scenarios.map((scenario) => {
        const IconComponent = scenario.icon;
        return (
          <div key={scenario.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${scenario.iconBg} rounded-lg flex items-center justify-center`}>
                  <IconComponent className={`${scenario.iconColor} w-6 h-6`} />
                </div>
                <span className={`${scenario.riskColor} px-2 py-1 rounded-full text-xs font-medium`}>
                  {scenario.riskLevel}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{scenario.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{scenario.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {scenario.duration} minutes
                </span>
                <Button
                  onClick={() => onStartSimulation(scenario.id)}
                  className="bg-edu-blue hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium"
                >
                  Start Simulation
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
