import { TrendingUp } from "lucide-react";

export default function ProgressSection() {
  const progressItems = [
    { name: 'Ransomware Defense', percentage: 85, color: 'bg-safe-green' },
    { name: 'Phishing Recognition', percentage: 92, color: 'bg-safe-green' },
    { name: 'Windows Update Scams', percentage: 75, color: 'bg-safe-green' },
    { name: 'Fake System Warnings', percentage: 68, color: 'bg-warning-orange' },
    { name: 'PowerShell Security', percentage: 72, color: 'bg-safe-green' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <TrendingUp className="w-5 h-5 text-edu-blue mr-2" />
        Learning Progress
      </h3>
      <div className="space-y-4">
        {progressItems.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
              <span className="text-sm text-gray-500">{item.percentage}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className={`${item.color} rounded-full h-2 transition-all duration-300`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
