import { Lightbulb } from "lucide-react";

export default function SecurityTip() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
        Today's Security Tip
      </h3>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-edu-blue">
        <p className="text-gray-800 font-medium mb-2">Enable Multi-Factor Authentication (MFA)</p>
        <p className="text-gray-600 text-sm">
          Adding an extra layer of security beyond passwords can prevent up to 99.9% of automated attacks. 
          Set up MFA on all your important accounts today!
        </p>
      </div>
    </div>
  );
}
