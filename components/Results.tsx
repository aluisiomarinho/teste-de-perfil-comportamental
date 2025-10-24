import React, { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { DISCProfile, type UserAnswer, type ProfileResult } from '../types';
import { PROFILE_DESCRIPTIONS } from '../constants';

interface ResultsProps {
  answers: UserAnswer[];
  onRestart: () => void;
}

const ProfileDetailCard: React.FC<{ profile: DISCProfile }> = ({ profile }) => {
    const details = PROFILE_DESCRIPTIONS[profile];
    return (
        <div className={`p-4 rounded-lg border-l-4 ${details.color.replace('text','border')} ${details.bgColor}`}>
            <h4 className={`text-xl font-bold ${details.color}`}>{details.title}</h4>
            <p className="text-slate-300 mt-2 mb-4">{details.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                    <h5 className="font-semibold text-white mb-2">Pontos Fortes:</h5>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {details.strengths.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </div>
                 <div>
                    <h5 className="font-semibold text-white mb-2">Pontos a Desenvolver:</h5>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {details.weaknesses.map(w => <li key={w}>{w}</li>)}
                    </ul>
                </div>
                 <div className="md:col-span-2">
                    <h5 className="font-semibold text-white mb-2">Estilo de Comunicação:</h5>
                    <p className="text-slate-400">{details.communicationStyle}</p>
                </div>
                 <div className="md:col-span-2">
                    <h5 className="font-semibold text-white mb-2">Principais Motivações:</h5>
                    <p className="text-slate-400">{details.motivations}</p>
                </div>
            </div>
        </div>
    );
};

const Results: React.FC<ResultsProps> = ({ answers, onRestart }) => {
  const resultsData = useMemo<ProfileResult[]>(() => {
    const scores: Record<DISCProfile, number> = {
      [DISCProfile.Dominance]: 0,
      [DISCProfile.Influence]: 0,
      [DISCProfile.Steadiness]: 0,
      [DISCProfile.Conscientiousness]: 0,
    };

    answers.forEach(answer => {
      scores[answer.most]++;
      scores[answer.least]--;
    });

    return (Object.keys(scores) as DISCProfile[]).map(profile => ({
      profile,
      score: scores[profile],
    })).sort((a, b) => b.score - a.score);
  }, [answers]);

  const dominantProfiles = useMemo(() => {
    if (!resultsData || resultsData.length === 0) return [];
    
    // Considera dominante qualquer perfil com pontuação positiva, ordenado do maior para o menor.
    // Limita a 2 ou 3 perfis principais para manter o foco.
    return resultsData.filter(p => p.score > 0).slice(0, 3);

  }, [resultsData]);
  
  const chartData = (Object.keys(DISCProfile) as (keyof typeof DISCProfile)[]).map(key => {
      const profileEnum = DISCProfile[key];
      const result = resultsData.find(r => r.profile === profileEnum);
      return {
          subject: profileEnum.substring(0,1),
          fullName: profileEnum,
          score: result ? result.score : 0,
          fullMark: 10 // O máximo de perguntas
      };
  });
  
  const resultSummary = useMemo(() => {
    if (dominantProfiles.length === 0) {
        return "Seu perfil parece ser bastante equilibrado entre as quatro dimensões.";
    }
    const primary = dominantProfiles[0].profile;
    const secondary = dominantProfiles.length > 1 ? dominantProfiles[1].profile : null;
    let summary = `Seu perfil principal é **${primary}**`;
    if (secondary) {
        summary += `, com fortes traços de **${secondary}**.`;
    } else {
        summary += '.';
    }
    return summary;
  }, [dominantProfiles]);

  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-cyan-300 mb-2">Seu Resultado</h2>
      <p className="text-slate-300 mb-8" dangerouslySetInnerHTML={{ __html: resultSummary.replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-400">$1</strong>') }} />
      
      <div className="my-8 h-80 w-full">
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="fullName" stroke="#e2e8f0" tick={{ fontSize: 14 }} />
                <PolarRadiusAxis angle={30} domain={[-10, 10]} stroke="#475569" tick={false} axisLine={false} />
                <Radar name="Pontuação" dataKey="score" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.6} />
                 <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0' }}
                />
            </RadarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-left mt-8">
         <h3 className="text-2xl font-semibold text-white mb-4">Análise Detalhada do seu Perfil:</h3>
         {dominantProfiles.length > 0 ? (
            <div className="space-y-6">
            {dominantProfiles.map(result => (
                <ProfileDetailCard key={result.profile} profile={result.profile} />
            ))}
            </div>
         ) : (
            <p className="text-slate-400 p-4 bg-slate-700 rounded-lg">Não foi possível determinar um perfil dominante claro com base nas suas respostas. Isso pode indicar um equilíbrio entre os diferentes traços de comportamento.</p>
         )}
      </div>

      <button
        onClick={onRestart}
        className="mt-10 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Refazer Teste
      </button>
    </div>
  );
};

export default Results;