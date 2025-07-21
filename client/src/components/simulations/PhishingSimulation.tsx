import { useState, useEffect } from "react";
import { Mail, AlertTriangle, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhishingSimulationProps {
  onExit: () => void;
}

export default function PhishingSimulation({ onExit }: PhishingSimulationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);
  const [showUrgentWarning, setShowUrgentWarning] = useState(false);

  const phishingEmails = [
    {
      sender: "microsoft-security@outlook-support.com",
      subject: "URGENT: Your Account Will Be Suspended",
      body: `Dear User,

We detected unusual activity on your Microsoft account. Your account will be suspended within 24 hours unless you verify your information immediately.

Click here to verify now: http://microsoft-verify.suspicious-domain.com

If you don't verify within 24 hours, you will lose access to all your files and emails permanently.

Best regards,
Microsoft Security Team`,
      redFlags: ["Suspicious sender domain", "Urgency tactics", "Suspicious link", "Threatening language"]
    },
    {
      sender: "noreply@bank-security.com",
      subject: "Transaction Alert - Action Required",
      body: `Security Alert

We've detected a transaction of $2,847 from your account. If this wasn't you, click here immediately:

http://secure-bank-verify.fake-domain.net

Your account has been temporarily locked for security. Enter your login credentials to unlock.

Time remaining: 2 hours 15 minutes

Customer Service`,
      redFlags: ["Generic greeting", "Fake urgency", "Suspicious URL", "Credential harvesting attempt"]
    }
  ];

  const currentEmail = phishingEmails[currentStep];

  return (
    <div className="mb-8">
      {/* Educational Overlay */}
      <div className="bg-warning-orange text-white p-4 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center">
          <AlertTriangle className="w-5 h-5 mr-3 text-yellow-200" />
          <span className="font-semibold">PHISHING EMAIL SIMULATION</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowEducationalPanel(!showEducationalPanel)}
            className="bg-white text-warning-orange hover:bg-gray-100 px-3 py-1 text-sm font-medium"
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

      {/* Windows-style Email Client */}
      <div className="bg-white border-x border-b border-gray-300 rounded-b-xl overflow-hidden">
        {/* Email Client Header */}
        <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-800">Outlook</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Email Content */}
        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{currentEmail.subject}</h3>
              <span className="text-sm text-gray-500">Today, 9:34 AM</span>
            </div>
            <div className="text-sm text-gray-600 mb-4">
              From: {currentEmail.sender}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border font-mono text-sm whitespace-pre-line mb-6">
            {currentEmail.body}
          </div>

          {/* Simulation Actions */}
          <div className="flex space-x-4">
            <Button
              onClick={() => {
                setShowUrgentWarning(true);
                setTimeout(() => {
                  alert("EXCELLENT! You correctly identified this phishing email. In real life, reporting phishing saves others from being victims!");
                  setShowUrgentWarning(false);
                }, 2000);
              }}
              className="bg-safe-green hover:bg-green-600 text-white px-4 py-2"
            >
              Report as Phishing
            </Button>
            <Button
              onClick={() => {
                setShowUrgentWarning(true);
                console.log("🚨 PHISHING LINK CLICKED! Redirecting to fake login page...");
                setTimeout(() => {
                  alert("💀 ACCOUNT COMPROMISED! Your credentials would be stolen! This shows why phishing is so dangerous - always verify emails first!");
                  setShowUrgentWarning(false);
                }, 3000);
              }}
              className="bg-danger-red hover:bg-red-600 text-white px-4 py-2 animate-pulse"
            >
              Click Link (BAHAYA!)
            </Button>
            <Button
              onClick={() => setCurrentStep((prev) => (prev + 1) % phishingEmails.length)}
              className="bg-edu-blue hover:bg-blue-700 text-white px-4 py-2"
            >
              Next Email
            </Button>
          </div>
        </div>

        {/* Educational Note */}
        <div className="absolute top-4 right-4 bg-safe-green text-white p-2 rounded text-xs">
          <Info className="w-4 h-4 inline mr-1" />
          SIMULATION ONLY
        </div>
      </div>

      {/* Educational Panel */}
      {showEducationalPanel && (
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-safe-green mt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Red Flags in This Email:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Warning Signs:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                {currentEmail.redFlags.map((flag, index) => (
                  <li key={index}>• {flag}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-safe-green mb-2">What to Do:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Report to IT security team</li>
                <li>• Delete the email</li>
                <li>• Never click suspicious links</li>
                <li>• Verify through official channels</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}