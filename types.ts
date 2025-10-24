export enum DISCProfile {
  Dominance = 'Dominância',
  Influence = 'Influência',
  Steadiness = 'Estabilidade',
  Conscientiousness = 'Conformidade',
}

export interface Answer {
  text: string;
  profile: DISCProfile;
}

export interface Question {
  id: number;
  // O texto da pergunta foi removido pois a instrução será fixa no componente
  options: Answer[];
}

export interface UserAnswer {
  most: DISCProfile;
  least: DISCProfile;
}

export interface ProfileResult {
    profile: DISCProfile;
    score: number;
}