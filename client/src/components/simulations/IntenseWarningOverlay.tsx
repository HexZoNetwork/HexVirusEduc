import { useState, useEffect } from "react";
import { AlertTriangle, Skull, Zap } from "lucide-react";

interface IntenseWarningOverlayProps {
  show: boolean;
  warningText: string;
  dangerLevel: "high" | "critical" | "extreme";
}

export default function IntenseWarningOverlay({ show, warningText, dangerLevel }: IntenseWarningOverlayProps) {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    if (show && dangerLevel === "extreme") {
      const flashInterval = setInterval(() => {
        setIsFlashing(prev => !prev);
      }, 300);
      
      return () => clearInterval(flashInterval);
    }
  }, [show, dangerLevel]);

  if (!show) return null;

  const getColors = () => {
    switch (dangerLevel) {
      case "high":
        return "bg-orange-600 border-orange-400";
      case "critical":
        return "bg-red-600 border-red-400";
      case "extreme":
        return isFlashing ? "bg-red-900 border-yellow-400" : "bg-red-600 border-red-400";
      default:
        return "bg-gray-600 border-gray-400";
    }
  };

  const getIcon = () => {
    switch (dangerLevel) {
      case "high":
        return <AlertTriangle className="w-8 h-8" />;
      case "critical":
        return <Zap className="w-8 h-8" />;
      case "extreme":
        return <Skull className="w-8 h-8" />;
      default:
        return <AlertTriangle className="w-8 h-8" />;
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 ${getColors()} text-white p-4 rounded-lg border-2 shadow-2xl z-50 animate-bounce max-w-sm`}>
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 animate-spin">
          {getIcon()}
        </div>
        <div>
          <div className="font-bold text-lg uppercase">
            {dangerLevel === "extreme" ? "🚨 SISTEMA TERINFEKSI!" : 
             dangerLevel === "critical" ? "⚠️ BAHAYA TINGGI!" : 
             "⚠️ PERINGATAN!"}
          </div>
          <div className="text-sm">{warningText}</div>
        </div>
      </div>
    </div>
  );
}