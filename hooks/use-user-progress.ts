'use client';

import { useState, useEffect } from 'react';
import { UserProgress } from '@/types';
import { getUserProgress, saveUserProgress, completeMission as completeStorageMission, earnBadge as earnStorageBadge } from '@/lib/storage/local-storage';

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProgress = () => {
      const data = getUserProgress();
      setProgress(data);
      setIsLoading(false);
    };

    loadProgress();
  }, []);

  const updateProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    saveUserProgress(newProgress);
  };

  const completeMission = (missionId: string, impact: UserProgress['impact']) => {
    completeStorageMission(missionId, impact);
    setProgress(getUserProgress());
  };

  const earnBadge = (badgeId: string) => {
    earnStorageBadge(badgeId);
    setProgress(getUserProgress());
  };

  return {
    progress,
    isLoading,
    updateProgress,
    completeMission,
    earnBadge,
  };
}
