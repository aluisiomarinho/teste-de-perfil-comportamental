
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Bem-vindo ao Teste de Perfil DISC</h2>
      <p className="text-slate-300 mb-6">
        Este teste rápido irá ajudá-lo a entender melhor seu estilo de comportamento. Responda às perguntas com base no que mais se aproxima de você. Não há respostas certas ou erradas.
      </p>
      <button
        onClick={onStart}
        className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Iniciar Teste
      </button>
    </div>
  );
};

export default StartScreen;
