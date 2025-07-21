import { Lightbulb } from "lucide-react";

export default function EducationalPanel() {
  return (
    <div className="bg-white rounded-b-xl shadow-sm p-6 border-l-4 border-safe-green">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
        What You're Learning
      </h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-semibold text-gray-800 mb-2">Ransomware Characteristics:</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Threatening countdown timers create urgency</li>
            <li>• Demands for cryptocurrency payments</li>
            <li>• Claims of encrypted files</li>
            <li>• Intimidating visual design</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-800 mb-2">Prevention Strategies:</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Regular automated backups</li>
            <li>• Keep software updated</li>
            <li>• Avoid suspicious email attachments</li>
            <li>• Use reputable antivirus software</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
