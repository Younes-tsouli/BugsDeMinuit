import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RESOURCES } from "@/data/content";
import Link from "next/link";

export default function RessourcesPage() {
  const categories = [
    { id: 'all', label: 'Toutes', icon: '📚' },
    { id: 'reconditionnement', label: 'Reconditionnement', icon: '🔧' },
    { id: 'linux', label: 'Linux', icon: '🐧' },
    { id: 'sobriete', label: 'Sobriété', icon: '🌿' },
    { id: 'maintenance', label: 'Maintenance', icon: '🛠️' },
  ];

  const resourcesByCategory = (categoryId: string) => {
    if (categoryId === 'all') return RESOURCES;
    return RESOURCES.filter(r => r.category === categoryId);
  };

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <Badge variant="secondary" className="text-sm">
          Module 2
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          📚 Ressources & Communs Éducatifs
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Bibliothèque libre de tutoriels, guides pratiques, scénarios d'ateliers 
          et ressources pédagogiques pour tous les niveaux
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
          {categories.map(cat => (
            <TabsTrigger key={cat.id} value={cat.id}>
              <span className="hidden sm:inline">{cat.icon} </span>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map(category => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourcesByCategory(category.id).map(resource => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={
                        resource.difficulty === 'debutant' ? 'default' :
                        resource.difficulty === 'intermediaire' ? 'secondary' : 'outline'
                      }>
                        {resource.difficulty}
                      </Badge>
                      {resource.offline_available && (
                        <Badge variant="outline" className="text-xs">
                          📡 Hors-ligne
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>
                        {resource.type === 'tutoriel' && '📖'}
                        {resource.type === 'cours' && '🎓'}
                        {resource.type === 'guide' && '📝'}
                        {resource.type === 'video' && '🎥'}
                        {resource.type === 'fiche' && '📄'}
                        {resource.type === 'atelier' && '🛠️'}
                        {' '}{resource.type}
                      </span>
                      {resource.duration && (
                        <span>⏱️ {resource.duration} min</span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full" variant="outline">
                      Consulter
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Section Ateliers */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">🎓 Scénarios d'Ateliers</h2>
          <p className="text-muted-foreground">
            Kits complets pour animer des ateliers avec élèves, familles ou communautés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className="w-fit mb-2">🏫 Milieu scolaire</Badge>
              <CardTitle>Atelier Reconditionnement en Collège</CardTitle>
              <CardDescription>
                Séance de 2h pour initier des collégiens au reconditionnement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Public:</span>
                  <span className="text-muted-foreground">12-15 ans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Durée:</span>
                  <span className="text-muted-foreground">120 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Participants:</span>
                  <span className="text-muted-foreground">10-20 élèves</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Objectifs pédagogiques:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Comprendre l'architecture d'un PC</li>
                  <li>Identifier les composants principaux</li>
                  <li>Sensibiliser à l'obsolescence programmée</li>
                  <li>Découvrir les alternatives libres</li>
                </ul>
              </div>

              <Button className="w-full">Télécharger le kit complet</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className="w-fit mb-2">👨‍👩‍👧‍👦 Tout public</Badge>
              <CardTitle>Install Party Linux</CardTitle>
              <CardDescription>
                Organiser un événement d'installation de Linux en communauté
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Public:</span>
                  <span className="text-muted-foreground">Débutants et curieux</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Durée:</span>
                  <span className="text-muted-foreground">3-4 heures</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Participants:</span>
                  <span className="text-muted-foreground">5-30 personnes</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Contenus inclus:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Guide d'organisation logistique</li>
                  <li>Checklist matériel nécessaire</li>
                  <li>Présentation de démonstration</li>
                  <li>Aide-mémoire installation</li>
                </ul>
              </div>

              <Button className="w-full">Télécharger le kit complet</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section Communauté */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2">
        <CardHeader className="text-center">
          <div className="text-5xl mb-3">🤝</div>
          <CardTitle className="text-2xl">Rejoins la Communauté</CardTitle>
          <CardDescription className="text-base">
            Échange avec d'autres passionné·es, pose tes questions, partage tes expériences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto py-4" asChild>
              <a href="https://forum.example.com" target="_blank" rel="noopener noreferrer">
                <div className="space-y-1">
                  <div className="text-2xl">💬</div>
                  <div className="font-semibold">Forum</div>
                  <div className="text-xs text-muted-foreground">Discussions et entraide</div>
                </div>
              </a>
            </Button>

            <Button variant="outline" className="h-auto py-4" asChild>
              <a href="https://chat.example.com" target="_blank" rel="noopener noreferrer">
                <div className="space-y-1">
                  <div className="text-2xl">💭</div>
                  <div className="font-semibold">Chat</div>
                  <div className="text-xs text-muted-foreground">Temps réel</div>
                </div>
              </a>
            </Button>

            <Button variant="outline" className="h-auto py-4" asChild>
              <a href="https://wiki.example.com" target="_blank" rel="noopener noreferrer">
                <div className="space-y-1">
                  <div className="text-2xl">📖</div>
                  <div className="font-semibold">Wiki</div>
                  <div className="text-xs text-muted-foreground">Documentation collaborative</div>
                </div>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Section Contribution */}
      <Card>
        <CardHeader>
          <CardTitle>✨ Contribuer aux Ressources</CardTitle>
          <CardDescription>
            Tu as créé un tutoriel, un guide ou un atelier ? Partage-le avec la communauté !
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            NIRD est un projet libre et participatif. Toute contribution est bienvenue :
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
            <li>Rédiger ou traduire des tutoriels</li>
            <li>Créer des scénarios d'ateliers</li>
            <li>Partager des retours d'expérience</li>
            <li>Améliorer la documentation</li>
            <li>Proposer des ressources externes de qualité</li>
          </ul>
          <Button asChild>
            <Link href="/contribute">Découvrir comment contribuer</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
