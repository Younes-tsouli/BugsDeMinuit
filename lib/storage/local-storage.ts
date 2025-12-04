// Gestion du stockage local pour fonctionnement hors-ligne
import { UserProgress, RefurbishProject } from '@/types';

const STORAGE_KEYS = {
  USER_PROGRESS: 'nird_user_progress',
  PROJECTS: 'nird_projects',
  OFFLINE_MODE: 'nird_offline_mode',
} as const;

// Récupérer la progression de l'utilisateur
export function getUserProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }

  const stored = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
  if (!stored) {
    return getDefaultProgress();
  }

  try {
    return JSON.parse(stored);
  } catch {
    return getDefaultProgress();
  }
}

// Sauvegarder la progression
export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
}

// Ajouter une mission complétée
export function completeMission(missionId: string, impact: UserProgress['impact']): void {
  const progress = getUserProgress();
  
  if (!progress.missions_completed.includes(missionId)) {
    progress.missions_completed.push(missionId);
    progress.impact.total_machines_saved += impact.total_machines_saved || 0;
    progress.impact.total_energy_saved += impact.total_energy_saved || 0;
    progress.impact.total_people_helped += impact.total_people_helped || 0;
    progress.impact.total_workshops += impact.total_workshops || 0;
    
    // Calculer les points et niveau
    progress.points += 50; // Points de base par mission
    progress.level = Math.floor(progress.points / 200) + 1;
    
    saveUserProgress(progress);
  }
}

// Ajouter un badge
export function earnBadge(badgeId: string): void {
  const progress = getUserProgress();
  
  if (!progress.badges_earned.includes(badgeId)) {
    progress.badges_earned.push(badgeId);
    saveUserProgress(progress);
  }
}

// Gestion des projets de reconditionnement
export function getProjects(): RefurbishProject[] {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  if (!stored) return [];
  
  try {
    const projects = JSON.parse(stored);
    // Convertir les dates en objets Date
    return projects.map((p: any) => ({
      ...p,
      date_start: new Date(p.date_start),
      date_end: p.date_end ? new Date(p.date_end) : undefined,
    }));
  } catch {
    return [];
  }
}

export function saveProject(project: RefurbishProject): void {
  if (typeof window === 'undefined') return;
  
  const projects = getProjects();
  const existingIndex = projects.findIndex(p => p.id === project.id);
  
  if (existingIndex >= 0) {
    projects[existingIndex] = project;
  } else {
    projects.push(project);
  }
  
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  
  // Mettre à jour la progression
  const progress = getUserProgress();
  if (!progress.refurbish_projects.includes(project.id)) {
    progress.refurbish_projects.push(project.id);
    saveUserProgress(progress);
  }
}

export function deleteProject(projectId: string): void {
  if (typeof window === 'undefined') return;
  
  const projects = getProjects().filter(p => p.id !== projectId);
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
}

// Mode hors-ligne
export function isOfflineMode(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEYS.OFFLINE_MODE) === 'true';
}

export function setOfflineMode(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.OFFLINE_MODE, enabled.toString());
}

// Progression par défaut
function getDefaultProgress(): UserProgress {
  return {
    missions_completed: [],
    badges_earned: [],
    refurbish_projects: [],
    impact: {
      total_machines_saved: 0,
      total_energy_saved: 0,
      total_people_helped: 0,
      total_workshops: 0,
    },
    level: 1,
    points: 0,
  };
}

// Réinitialiser toutes les données (utile pour développement)
export function resetAllData(): void {
  if (typeof window === 'undefined') return;
  
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}
