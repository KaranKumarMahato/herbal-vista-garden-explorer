
import { useState, useEffect } from 'react';
import { Leaf, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { plants } from '@/data/plantData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const generateQuizQuestions = (): QuizQuestion[] => {
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "Which plant is known as 'Holy Basil' and used for respiratory disorders?",
      options: ["Turmeric", "Tulsi", "Ginger", "Aloe Vera"],
      correctAnswer: "Tulsi",
      explanation: "Tulsi, also known as Holy Basil (Ocimum sanctum), is commonly used to treat respiratory disorders like bronchitis and asthma."
    },
    {
      id: 2,
      question: "Which medicinal plant is called 'Indian Ginseng' and helps in reducing stress?",
      options: ["Neem", "Turmeric", "Ashwagandha", "Ginger"],
      correctAnswer: "Ashwagandha",
      explanation: "Ashwagandha (Withania somnifera) is known as 'Indian Ginseng' for its rejuvenating properties and ability to reduce stress and anxiety."
    },
    {
      id: 3,
      question: "Which plant has powerful anti-inflammatory properties and is commonly known as 'Haldi'?",
      options: ["Ginger", "Turmeric", "Ashwagandha", "Aloe Vera"],
      correctAnswer: "Turmeric",
      explanation: "Turmeric (Curcuma longa), commonly known as Haldi, has powerful anti-inflammatory effects due to its active compound curcumin."
    },
    {
      id: 4,
      question: "Which plant is primarily used for skin treatments and wound healing?",
      options: ["Aloe Vera", "Ginger", "Neem", "Tulsi"],
      correctAnswer: "Aloe Vera",
      explanation: "Aloe Vera is widely known for its skin healing properties, treating sunburns, wounds, and various skin conditions."
    },
    {
      id: 5,
      question: "Which plant is known for its antibacterial properties and is commonly used in dental issues?",
      options: ["Turmeric", "Ashwagandha", "Neem", "Ginger"],
      correctAnswer: "Neem",
      explanation: "Neem has strong antibacterial and antifungal properties and is commonly used to treat dental issues like gingivitis."
    },
    {
      id: 6,
      question: "Which plant helps relieve nausea and digestive issues?",
      options: ["Tulsi", "Ginger", "Neem", "Ashwagandha"],
      correctAnswer: "Ginger",
      explanation: "Ginger is effective at relieving nausea, morning sickness, and treating various digestive issues."
    },
    {
      id: 7,
      question: "What is the botanical name of Turmeric?",
      options: ["Zingiber officinale", "Ocimum sanctum", "Curcuma longa", "Withania somnifera"],
      correctAnswer: "Curcuma longa",
      explanation: "The botanical name of Turmeric is Curcuma longa, a flowering plant of the ginger family, Zingiberaceae."
    },
    {
      id: 8,
      question: "Which medicinal plant is native to the Arabian Peninsula?",
      options: ["Ashwagandha", "Aloe Vera", "Turmeric", "Tulsi"],
      correctAnswer: "Aloe Vera",
      explanation: "Aloe vera originated in the Arabian Peninsula but now grows in tropical, semi-tropical, and arid climates worldwide."
    }
  ];
  
  // Shuffle and return a subset of questions
  return questions.sort(() => 0.5 - Math.random()).slice(0, 5);
};

const Quiz = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Generate quiz questions when component mounts
    setQuestions(generateQuizQuestions());
  }, []);
  
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  
  const handleNextQuestion = () => {
    if (!selectedOption) {
      toast({
        title: "Please select an answer",
        description: "You need to select an option to continue.",
        variant: "destructive",
      });
      return;
    }
    
    // Check answer and update score
    if (!answerSubmitted) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      setAnswerSubmitted(true);
      return;
    }
    
    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
      setAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      setShowResult(true);
    }
  };
  
  const restartQuiz = () => {
    setQuestions(generateQuizQuestions());
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
    setAnswerSubmitted(false);
  };
  
  if (questions.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          <Card className="w-full max-w-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Loading Quiz...</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <Leaf className="text-herb-green-dark" />
              Herbal Knowledge Quiz
              <Leaf className="text-herb-green-dark" />
            </h1>
            <p className="text-muted-foreground">Test your knowledge about medicinal plants and their benefits</p>
          </div>
          
          {!showResult ? (
            <Card className="w-full shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</div>
                  <div className="text-sm font-medium">Score: {score}</div>
                </div>
                <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <RadioGroup value={selectedOption} onValueChange={handleOptionChange} className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className={`flex items-center space-x-2 rounded-lg border p-3 ${
                      answerSubmitted && option === questions[currentQuestion].correctAnswer 
                        ? 'bg-green-50 border-green-200' 
                        : answerSubmitted && option === selectedOption && option !== questions[currentQuestion].correctAnswer
                          ? 'bg-red-50 border-red-200'
                          : ''
                    }`}>
                      <RadioGroupItem 
                        value={option} 
                        id={`option-${index}`} 
                        disabled={answerSubmitted}
                      />
                      <label 
                        htmlFor={`option-${index}`}
                        className="flex-grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
                
                {answerSubmitted && (
                  <div className="mt-4 p-3 bg-herb-cream rounded-lg">
                    <p className="text-sm font-medium">
                      {selectedOption === questions[currentQuestion].correctAnswer 
                        ? '✅ Correct!' 
                        : `❌ Incorrect. The correct answer is ${questions[currentQuestion].correctAnswer}.`}
                    </p>
                    <p className="text-sm mt-2">{questions[currentQuestion].explanation}</p>
                  </div>
                )}
              </CardContent>
              
              <CardFooter>
                <Button 
                  onClick={handleNextQuestion} 
                  className="w-full"
                >
                  {answerSubmitted 
                    ? currentQuestion < questions.length - 1 
                      ? 'Next Question' 
                      : 'Show Results'
                    : 'Submit Answer'
                  }
                  {answerSubmitted && <ArrowRight size={16} className="ml-2" />}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="w-full shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-center">Quiz Results</CardTitle>
                <CardDescription className="text-center">
                  You scored {score} out of {questions.length}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="text-center">
                  {score === questions.length ? (
                    <p className="mb-4">Perfect score! You're a herbal expert! 🌿</p>
                  ) : score >= questions.length / 2 ? (
                    <p className="mb-4">Good job! You know your herbs well! 🌱</p>
                  ) : (
                    <p className="mb-4">Keep learning about these amazing medicinal plants! 🌼</p>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center">
                <Button onClick={restartQuiz} className="w-full md:w-auto">
                  <BookOpen size={16} className="mr-2" />
                  Take Another Quiz
                </Button>
              </CardFooter>
            </Card>
          )}
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Want to learn more about medicinal plants? Check out our{" "}
              <a href="/catalog" className="text-herb-green-dark hover:underline">plant catalog</a>.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Quiz;
