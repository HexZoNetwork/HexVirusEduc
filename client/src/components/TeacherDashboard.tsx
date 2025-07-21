import { Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeacherDashboard() {
  const activeStudents = [
    { name: "Alex Johnson", activity: "Ransomware Sim", status: "bg-safe-green" },
    { name: "Sarah Chen", activity: "Phishing Quiz", status: "bg-yellow-500" },
    { name: "Mike Davis", activity: "Social Eng.", status: "bg-blue-500" }
  ];

  return (
    <div className="bg-gradient-to-r from-warning-orange to-orange-600 rounded-xl shadow-sm p-6 text-white mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold flex items-center">
          <Presentation className="w-6 h-6 mr-2" />
          Teacher Dashboard
        </h3>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Student Activity Monitor */}
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <h4 className="font-semibold mb-3">Active Students</h4>
          <div className="space-y-2">
            {activeStudents.map((student) => (
              <div key={student.name} className="flex items-center justify-between">
                <span className="text-sm">{student.name}</span>
                <span className={`text-xs ${student.status} px-2 py-1 rounded text-white`}>
                  {student.activity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Simulation Controls */}
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <h4 className="font-semibold mb-3">Simulation Controls</h4>
          <div className="space-y-3">
            <Button className="w-full bg-white text-warning-orange hover:bg-gray-100 px-3 py-2 text-sm font-medium">
              Launch Class Simulation
            </Button>
            <Button className="w-full bg-white text-warning-orange hover:bg-gray-100 px-3 py-2 text-sm font-medium">
              End All Simulations
            </Button>
            <Button className="w-full bg-white text-warning-orange hover:bg-gray-100 px-3 py-2 text-sm font-medium">
              Generate Report
            </Button>
          </div>
        </div>

        {/* Class Performance */}
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <h4 className="font-semibold mb-3">Class Performance</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Average Score:</span>
              <span className="text-sm font-bold">78%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Completed Sims:</span>
              <span className="text-sm font-bold">24/30</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Time Remaining:</span>
              <span className="text-sm font-bold">15 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
