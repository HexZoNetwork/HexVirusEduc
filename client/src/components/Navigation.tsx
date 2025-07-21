import { Shield, Presentation, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isTeacherMode: boolean;
  onToggleTeacherMode: () => void;
}

export default function Navigation({ isTeacherMode, onToggleTeacherMode }: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Shield className="text-edu-blue h-8 w-8 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">CyberGuard Academy</h1>
            </div>
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <a href="#" className="text-edu-blue border-b-2 border-edu-blue px-3 py-2 text-sm font-medium">
                Dashboard
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Simulations
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Progress
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Resources
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={onToggleTeacherMode}
              className="bg-warning-orange hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium"
            >
              <Presentation className="w-4 h-4 mr-2" />
              {isTeacherMode ? 'Student Mode' : 'Teacher Mode'}
            </Button>
            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
