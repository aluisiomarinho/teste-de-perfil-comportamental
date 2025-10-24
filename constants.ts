import type { Question } from './types';
import { DISCProfile } from './types';

export const DISC_QUESTIONS: Question[] = [
  {
    id: 1,
    options: [
      { text: 'Direto(a) e assertivo(a)', profile: DISCProfile.Dominance },
      { text: 'Otimista e sociável', profile: DISCProfile.Influence },
      { text: 'Calmo(a) e paciente', profile: DISCProfile.Steadiness },
      { text: 'Preciso(a) e detalhista', profile: DISCProfile.Conscientiousness },
    ],
  },
  {
    id: 2,
    options: [
      { text: 'Líder e controlador(a)', profile: DISCProfile.Dominance },
      { text: 'Inspirador(a) e motivador(a)', profile: DISCProfile.Influence },
      { text: 'Apoiador(a) e colaborador(a)', profile: DISCProfile.Steadiness },
      { text: 'Analítico(a) e planejador(a)', profile: DISCProfile.Conscientiousness },
    ],
  },
  {
    id: 3,
    options: [
      { text: 'Competitivo(a) e focado(a) em resultados', profile: DISCProfile.Dominance },
      { text: 'Interativo(a) e que busca reconhecimento', profile: DISCProfile.Influence },
      { text: 'Estável e previsível', profile: DISCProfile.Steadiness },
      { text: 'Criterioso(a) e focado(a) em qualidade', profile: DISCProfile.Conscientiousness },
    ],
  },
  {
    id: 4,
    options: [
      { text: 'Decidido(a) e rápido(a) para agir', profile: DISCProfile.Dominance },
      { text: 'Persuasivo(a) e influente', profile: DISCProfile.Influence },
      { text: 'Leal e um(a) bom(a) ouvinte', profile: DISCProfile.Steadiness },
      { text: 'Sistemático(a) e cuidadoso(a)', profile: DISCProfile.Conscientiousness },
    ],
  },
  {
    id: 5,
    options: [
      { text: 'Impaciente e exigente', profile: DISCProfile.Dominance },
      { text: 'Desorganizado(a) e falante', profile: DISCProfile.Influence },
      { text: 'Resistente a mudanças e indeciso(a)', profile: DISCProfile.Steadiness },
      { text: 'Crítico(a) e perfeccionista', profile: DISCProfile.Conscientiousness },
    ],
  },
  {
    id: 6,
    options: [
      { text: 'Focado(a) em poder e autoridade', profile: DISCProfile.Dominance },
      { text: 'Focado(a) em popularidade e aprovação', profile: DISCProfile.Influence },
      { text: 'Focado(a) em segurança e harmonia', profile: DISCProfile.Steadiness },
      { text: 'Focado(a) em qualidade e precisão', profile: DISCProfile.Conscientiousness },
    ],
  },
    {
    id: 7,
    options: [
      { text: 'Corajoso(a) e que assume riscos', profile: DISCProfile.Dominance },
      { text: 'Entusiasmado(a) e otimista', profile: DISCProfile.Influence },
      { text: 'Consistente e metódico(a)', profile: DISCProfile.Steadiness },
      { text: 'Lógico(a) e orientado(a) a dados', profile: DISCProfile.Conscientiousness },
    ],
  },
  {
    id: 8,
    options: [
      { text: 'Independente e autossuficiente', profile: DISCProfile.Dominance },
      { text: 'Social e extrovertido(a)', profile: DISCProfile.Influence },
      { text: 'Agradável e cooperativo(a)', profile: DISCProfile.Steadiness },
      { text: 'Disciplinado(a) e ordeiro(a)', profile: DISCProfile.Conscientiousness },
    ],
  },
    {
    id: 9,
    options: [
      { text: 'Enérgico(a) e acelerado(a)', profile: DISCProfile.Dominance },
      { text: 'Espontâneo(a) e animado(a)', profile: DISCProfile.Influence },
      { text: 'Paciente e tranquilo(a)', profile: DISCProfile.Steadiness },
      { text: 'Calculado(a) e deliberado(a)', profile: DISCProfile.Conscientiousness },
    ],
  },
    {
    id: 10,
    options: [
      { text: 'Prático(a) e orientado(a) à ação', profile: DISCProfile.Dominance },
      { text: 'Emocional e aberto(a)', profile: DISCProfile.Influence },
      { text: 'Previsível e confiável', profile: DISCProfile.Steadiness },
      { text: 'Formal e que segue as regras', profile: DISCProfile.Conscientiousness },
    ],
  }
];

export const PROFILE_DESCRIPTIONS: Record<DISCProfile, { 
    title: string; 
    description: string; 
    color: string; 
    bgColor: string;
    strengths: string[];
    weaknesses: string[];
    communicationStyle: string;
    motivations: string;
}> = {
    [DISCProfile.Dominance]: {
        title: 'Dominância (D)',
        description: 'Pessoas com alta dominância são diretas, focadas em resultados, competitivas e assertivas. Gostam de desafios e de assumir o controle para alcançar objetivos ambiciosos.',
        color: 'text-red-400',
        bgColor: 'bg-red-900/50',
        strengths: ['Decidido(a)', 'Independente', 'Orientado(a) a metas', 'Assume riscos', 'Direto(a)'],
        weaknesses: ['Impaciente', 'Pode ser visto como autoritário(a)', 'Pouca atenção aos detalhes', 'Pode intimidar os outros'],
        communicationStyle: 'Comunica-se de forma direta, clara e focada no "o quê". Prefere ir direto ao ponto e pode parecer breve ou apressado(a).',
        motivations: 'É motivado(a) por desafios, poder, autoridade e a oportunidade de alcançar resultados concretos e vencer.'
    },
    [DISCProfile.Influence]: {
        title: 'Influência (I)',
        description: 'Pessoas com alta influência são otimistas, sociáveis, entusiasmadas e persuasivas. Gostam de interagir, colaborar e motivar os outros através de seu carisma.',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-900/50',
        strengths: ['Entusiasmado(a)', 'Persuasivo(a)', 'Otimista', 'Constrói relacionamentos', 'Comunicativo(a)'],
        weaknesses: ['Impulsivo(a)', 'Desorganizado(a)', 'Evita detalhes e tarefas de acompanhamento', 'Pode ser excessivamente falante'],
        communicationStyle: 'Comunica-se de forma calorosa, amigável e expressiva, focando no "quem". Adora interagir e compartilhar histórias para criar conexões.',
        motivations: 'É motivado(a) por reconhecimento social, popularidade, trabalhar em equipe e a chance de expressar ideias e inspirar pessoas.'
    },
    [DISCProfile.Steadiness]: {
        title: 'Estabilidade (S)',
        description: 'Pessoas com alta estabilidade são calmas, pacientes, leais e previsíveis. Valorizam a segurança, a cooperação e a harmonia no ambiente, sendo ótimos ouvintes.',
        color: 'text-green-400',
        bgColor: 'bg-green-900/50',
        strengths: ['Paciente', 'Leal', 'Bom(a) ouvinte', 'Trabalha bem em equipe', 'Consistente'],
        weaknesses: ['Resistente a mudanças', 'Evita conflitos', 'Pode ser indeciso(a)', 'Guarda ressentimentos'],
        communicationStyle: 'Comunica-se de forma calma, metódica e atenciosa, focando no "como". Prefere ouvir a falar e busca criar um ambiente seguro e amigável.',
        motivations: 'É motivado(a) por segurança, apreciação sincera, estabilidade, harmonia e a oportunidade de ajudar os outros de maneira prática.'
    },
    [DISCProfile.Conscientiousness]: {
        title: 'Conformidade (C)',
        description: 'Pessoas com alta conformidade são precisas, detalhistas, analíticas e sistemáticas. Valorizam a qualidade, a lógica e o cumprimento de regras para garantir a exatidão.',
        color: 'text-blue-400',
        bgColor: 'bg-blue-900/50',
        strengths: ['Preciso(a)', 'Analítico(a)', 'Sistemático(a)', 'Alta qualidade no trabalho', 'Diplomático(a)'],
        weaknesses: ['Perfeccionista', 'Pode ser excessivamente crítico(a)', 'Hesita em tomar decisões sem dados', 'Pode se perder nos detalhes'],
        communicationStyle: 'Comunica-se de forma formal, precisa e baseada em fatos, focando no "porquê". Prefere comunicação escrita e detalhada para evitar ambiguidades.',
        motivations: 'É motivado(a) por qualidade, precisão, lógica, ordem e a oportunidade de seguir processos e garantir que as coisas sejam feitas da maneira certa.'
    }
};