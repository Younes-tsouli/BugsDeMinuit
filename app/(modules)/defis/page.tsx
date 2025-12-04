'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MISSIONS, BADGES } from "@/data/content";
import { useUserProgress } from "@/hooks/use-user-progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DefisPage() {
  const { progress, isLoading, completeMission } = useUserProgress();

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-muted-foreground">Chargement...</p>
          </div>
        </div>
      </div>
    );
  }

  const availableMissions = MISSIONS.filter(m => !progress?.missions_completed.includes(m.id));
  const completedMissions = MISSIONS.filter(m => progress?.missions_completed.includes(m.id));
  const earnedBadges = BADGES.filter(b => progress?.badges_earned.includes(b.id));
  const availableBadges = BADGES.filter(b => !progress?.badges_earned.includes(b.id));

  const levelProgress = progress ? (progress.points % 200) / 200 * 100 : 0;
  const pointsToNextLevel = progress ? 200 - (progress.points % 200) : 200;

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <Badge variant="secondary" className="text-sm">
          Module 3
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          🎯 Défis & Missions Sobres
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Accomplis des missions, mesure ton impact, gagne des badges symboliques 
          et progresse vers un numérique plus responsable
        </p>
      </div>

      {/* Dashboard Utilisateur */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Ton Tableau de Bord</CardTitle>
          <CardDescription>Suis ta progression et ton impact</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                Niv. {progress?.level || 1}
              </div>
              <div className="text-sm text-muted-foreground">Niveau</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-blue-600">
                {progress?.points || 0}
              </div>
              <div className="text-sm text-muted-foreground">Points</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-purple-600">
                {completedMissions.length}
              </div>
              <div className="text-sm text-muted-foreground">Missions</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-orange-600">
                {earnedBadges.length}
              </div>
              <div className="text-sm text-muted-foreground">Badges</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progression vers niveau {(progress?.level || 1) + 1}</span>
              <span className="text-muted-foreground">{pointsToNextLevel} pts restants</span>
            </div>
            <Progress value={levelProgress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Impact Collectif */}
      <Card>
        <CardHeader>
          <CardTitle>🌍 Ton Impact Personnel</CardTitle>
          <CardDescription>Mesure concrète de tes actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-4xl mb-2">💻</div>
              <div className="text-2xl font-bold">
                {progress?.impact.total_machines_saved || 0}
              </div>
              <div className="text-sm text-muted-foreground">Machines sauvées</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-2xl font-bold">
                {progress?.impact.total_energy_saved || 0}
              </div>
              <div className="text-sm text-muted-foreground">kWh économisés</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-4xl mb-2">🤝</div>
              <div className="text-2xl font-bold">
                {progress?.impact.total_people_helped || 0}
              </div>
              <div className="text-sm text-muted-foreground">Personnes aidées</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-4xl mb-2">🎓</div>
              <div className="text-2xl font-bold">
                {progress?.impact.total_workshops || 0}
              </div>
              <div className="text-sm text-muted-foreground">Ateliers animés</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Missions */}
      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">
            Missions Disponibles ({availableMissions.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Complétées ({completedMissions.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          {availableMissions.length === 0 ? (
            <Alert>
              <AlertDescription>
                🎉 Félicitations ! Tu as complété toutes les missions disponibles. 
                D'autres missions arrivent bientôt !
              </AlertDescription>
            </Alert>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableMissions.map(mission => (
                <Card key={mission.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={
                        mission.difficulty === 'facile' ? 'default' :
                        mission.difficulty === 'moyen' ? 'secondary' : 'outline'
                      }>
                        {mission.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        +{mission.points} pts
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{mission.title}</CardTitle>
                    <CardDescription>{mission.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Étapes à suivre:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                        {mission.steps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {Object.keys(mission.impact).length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Impact prévu:</h4>
                        <div className="flex flex-wrap gap-2">
                          {mission.impact.machines_saved && (
                            <Badge variant="outline">
                              💻 {mission.impact.machines_saved} machine(s)
                            </Badge>
                          )}
                          {mission.impact.energy_saved && (
                            <Badge variant="outline">
                              ⚡ {mission.impact.energy_saved} kWh
                            </Badge>
                          )}
                          {mission.impact.people_helped && (
                            <Badge variant="outline">
                              🤝 {mission.impact.people_helped} personne(s)
                            </Badge>
                          )}
                          {mission.impact.workshops_held && (
                            <Badge variant="outline">
                              🎓 {mission.impact.workshops_held} atelier(s)
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    <Button 
                      className="w-full"
                      onClick={() => {
                        if (confirm('Marquer cette mission comme complétée ?')) {
                          completeMission(mission.id, {
                            total_machines_saved: mission.impact.machines_saved || 0,
                            total_energy_saved: mission.impact.energy_saved || 0,
                            total_people_helped: mission.impact.people_helped || 0,
                            total_workshops: mission.impact.workshops_held || 0,
                          });
                        }
                      }}
                    >
                      Commencer la mission
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedMissions.length === 0 ? (
            <Alert>
              <AlertDescription>
                Tu n'as pas encore complété de mission. Commence par une mission facile !
              </AlertDescription>
            </Alert>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedMissions.map(mission => (
                <Card key={mission.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="default">✅ Complétée</Badge>
                      <Badge variant="outline">
                        +{mission.points} pts
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{mission.title}</CardTitle>
                    <CardDescription>{mission.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Mission accomplie ! Continue sur ta lancée.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Badges */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">🏆 Badges</h2>
          <p className="text-muted-foreground">
            Récompenses symboliques de ton engagement
          </p>
        </div>

        {earnedBadges.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Badges obtenus</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {earnedBadges.map(badge => (
                <Card key={badge.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-2">
                    <div className="text-5xl mb-2">{badge.icon}</div>
                    <h4 className="font-semibold text-sm">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {badge.description}
                    </p>
                    <Badge variant="default" className="text-xs">
                      Obtenu
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold mb-4">Badges à débloquer</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {availableBadges.map(badge => (
              <Card key={badge.id} className="text-center opacity-60 grayscale">
                <CardContent className="pt-6 space-y-2">
                  <div className="text-5xl mb-2">{badge.icon}</div>
                  <h4 className="font-semibold text-sm">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {badge.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Verrouillé
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
