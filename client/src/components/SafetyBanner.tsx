import { GraduationCap, Lock } from "lucide-react";

export default function SafetyBanner() {
  return (
    <div className="bg-safe-green text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <GraduationCap className="w-5 h-5 mr-3" />
          <span className="text-sm font-medium">
            SAFE LEARNING ENVIRONMENT - All simulations are educational and contain no malicious code
          </span>
          <Lock className="w-5 h-5 ml-3" />
        </div>
      </div>
    </div>
  );
}
