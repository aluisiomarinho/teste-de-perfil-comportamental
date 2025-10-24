import React, { useState } from 'react';
import type { Question, DISCProfile, UserAnswer } from '../types';

interface QuestionCardProps {
  question: Question;
  onNext: (answer: UserAnswer) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onNext, questionNumber, totalQuestions }) => {
  const [selectedMost, setSelectedMost] = useState<DISCProfile | null>(null);
  const [selectedLeast, setSelectedLeast] = useState<DISCProfile | null>(null);

  const handleSelect = (profile: DISCProfile, type: 'most' | 'least') => {
    if (type === 'most') {
      if (profile === selectedLeast) setSelectedLeast(null);
      setSelectedMost(profile);
    } else {
      if (profile === selectedMost) setSelectedMost(null);
      setSelectedLeast(profile);
    }
  };

  const isComplete = selectedMost !== null && selectedLeast !== null && selectedMost !== selectedLeast;

  const handleSubmit = () => {
    if (isComplete) {
      onNext({ most: selectedMost, least: selectedLeast });
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-right text-sm text-slate-400 mb-2">
        Pergunta {questionNumber} de {totalQuestions}
      </div>
      <h2 className="text-xl font-semibold text-cyan-300 mb-6 text-center">
        Para o grupo de palavras abaixo, qual descreve você <span className="text-green-400">MAIS</span> e qual descreve você <span className="text-red-400">MENOS</span>?
      </h2>
      
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4">
        <div></div>
        <div className="text-green-400 font-bold text-center text-sm">MAIS</div>
        <div className="text-red-400 font-bold text-center text-sm">MENOS</div>
        
        {question.options.map((option) => (
          <React.Fragment key={option.profile}>
            <div className="p-3 bg-slate-700 rounded-l-lg my-2 text-slate-200">
              {option.text}
            </div>
            <div className="p-3 bg-slate-700 my-2 flex justify-center items-center">
              <input
                type="radio"
                name="most"
                checked={selectedMost === option.profile}
                onChange={() => handleSelect(option.profile, 'most')}
                className="w-5 h-5 cursor-pointer accent-green-500"
              />
            </div>
            <div className="p-3 bg-slate-700 rounded-r-lg my-2 flex justify-center items-center">
              <input
                type="radio"
                name="least"
                checked={selectedLeast === option.profile}
                onChange={() => handleSelect(option.profile, 'least')}
                className="w-5 h-5 cursor-pointer accent-red-500"
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          className="bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100 hover:enabled:bg-cyan-600 hover:enabled:scale-105"
        >
          Próxima Pergunta
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;