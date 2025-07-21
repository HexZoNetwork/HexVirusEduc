import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function QuickQuiz() {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const question = "What should you do if you receive a suspicious email?";
  const options = [
    { id: "1", text: "Click all links to investigate" },
    { id: "2", text: "Delete immediately without reading" },
    { id: "3", text: "Report to IT and avoid clicking links" }
  ];
  const correctAnswer = "3";

  const handleSubmit = () => {
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <HelpCircle className="w-5 h-5 text-edu-blue mr-2" />
        Quick Knowledge Check
      </h3>
      
      {!showResult ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-700">{question}</p>
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            {options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="text-sm cursor-pointer">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="bg-edu-blue hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium"
          >
            Submit Answer
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-700">{question}</p>
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-l-4 border-green-400' : 'bg-red-50 border-l-4 border-red-400'}`}>
            <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? "Correct!" : "Incorrect"}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Always report suspicious emails to IT and never click on unknown links as they could contain malware.
            </p>
          </div>
          <Button
            onClick={() => { setShowResult(false); setSelectedAnswer(""); }}
            className="bg-edu-blue hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium"
          >
            Try Another Question
          </Button>
        </div>
      )}
    </div>
  );
}
