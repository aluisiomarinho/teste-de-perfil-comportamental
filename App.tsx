import React, { useState, useCallback } from 'react';
import { DISC_QUESTIONS } from './constants';
import type { UserAnswer } from './types';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';

const App: React.FC = () => {
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [testFinished, setTestFinished] = useState<boolean>(false);

  const handleStart = useCallback(() => {
    setTestStarted(true);
  }, []);

  const handleNextQuestion = useCallback((answer: UserAnswer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < DISC_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestFinished(true);
    }
  }, [answers, currentQuestionIndex]);

  const handleRestart = useCallback(() => {
    setTestStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTestFinished(false);
  }, []);

  const progress = ((currentQuestionIndex + 1) / DISC_QUESTIONS.length) * 100;

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">Análise de Perfil DISC</h1>
          <p className="text-slate-400 mt-2">Descubra seus traços comportamentais dominantes.</p>
        </header>

        <main className="bg-slate-800 rounded-lg shadow-2xl p-6 md:p-8 transition-all duration-500">
          {!testStarted ? (
            <StartScreen onStart={handleStart} />
          ) : !testFinished ? (
            <>
              <ProgressBar progress={progress} />
              <QuestionCard
                key={currentQuestionIndex}
                question={DISC_QUESTIONS[currentQuestionIndex]}
                onNext={handleNextQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={DISC_QUESTIONS.length}
              />
            </>
          ) : (
            <Results answers={answers} onRestart={handleRestart} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;