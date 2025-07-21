import { Lock, Mail, Users, Clock } from "lucide-react";
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
      id: 'social-engineering',
      title: 'Social Engineering',
      description: 'Experience common social engineering tactics and learn defense strategies.',
      duration: 20,
      riskLevel: 'MEDIUM RISK',
      riskColor: 'bg-orange-100 text-orange-700',
      icon: Users,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100'
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6 mb-8">
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
