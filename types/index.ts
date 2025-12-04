// Types globaux pour l'application NIRD

export type PCComponent = {
  id: string;
  name: string;
  type: 'cpu' | 'ram' | 'motherboard' | 'storage' | 'gpu' | 'psu' | 'case';
  description: string;
  compatible: string[];
  performance: number;
  eco_score: number;
  price_range: 'gratuit' | 'peu-cher' | 'moyen' | 'cher';
  image?: string;
};

export type RefurbishProject = {
  id: string;
  user_name?: string;
  title: string;
  description: string;
  status: 'en-cours' | 'termine' | 'partage';
  components_used: string[];
  date_start: Date;
  date_end?: Date;
  photos?: string[];
  linux_distro?: string;
  problems_encountered?: string[];
  solutions?: string[];
  available_for_donation?: boolean;
};

export type Resource = {
  id: string;
  title: string;
  type: 'tutoriel' | 'cours' | 'guide' | 'video' | 'fiche' | 'atelier';
  category: 'reconditionnement' | 'linux' | 'sobriete' | 'securite' | 'souverainete' | 'maintenance';
  description: string;
  content?: string;
  url?: string;
  difficulty: 'debutant' | 'intermediaire' | 'avance';
  duration?: number; // en minutes
  tags: string[];
  offline_available: boolean;
};

export type Mission = {
  id: string;
  title: string;
  description: string;
  category: 'diagnostic' | 'installation' | 'optimisation' | 'partage' | 'atelier' | 'sobriete';
  difficulty: 'facile' | 'moyen' | 'difficile';
  points: number;
  steps: string[];
  completion_criteria: string;
  impact: {
    machines_saved?: number;
    energy_saved?: number; // kWh
    people_helped?: number;
    workshops_held?: number;
  };
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
  category: 'reconditionnement' | 'sobriete' | 'partage' | 'education' | 'engagement';
};

export type UserProgress = {
  missions_completed: string[];
  badges_earned: string[];
  refurbish_projects: string[];
  impact: {
    total_machines_saved: number;
    total_energy_saved: number;
    total_people_helped: number;
    total_workshops: number;
  };
  level: number;
  points: number;
};

export type Workshop = {
  id: string;
  title: string;
  description: string;
  target_audience: string[];
  duration: number; // minutes
  materials_needed: string[];
  objectives: string[];
  steps: {
    title: string;
    duration: number;
    content: string;
  }[];
  resources: string[];
};
