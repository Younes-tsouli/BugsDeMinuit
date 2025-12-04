import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto py-12 md:py-24 lg:py-32 px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            🌱 Numérique Inclusif, Responsable et Durable
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Donne une seconde vie aux ordinateurs
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Apprends à reconditionner, partage tes connaissances, 
            et construis un numérique plus sobre et accessible à tous·tes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild className="text-lg">
              <Link href="/reconditionne">
                🔧 Commencer à reconditionner
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg">
              <Link href="/defis">
                🎯 Découvrir les défis
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto py-12 md:py-16 bg-muted/50 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">🤝</div>
              <CardTitle>Inclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Accessible sur matériel ancien, disponible hors-ligne, pour tou·tes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">♻️</div>
              <CardTitle>Responsabilité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Données minimales, respect de la vie privée, logiciels libres
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">🌿</div>
              <CardTitle>Durabilité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Prolonge la vie des machines, réduit l'impact environnemental
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-4xl mb-2">⚡</div>
              <CardTitle>Sobriété</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Interface légère, optimisée, adaptée aux anciennes machines
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modules Section */}
      <section className="container mx-auto py-12 md:py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore les modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-5xl mb-3">🔧</div>
              <CardTitle>Reconditionne-ton-ordi</CardTitle>
              <CardDescription>
                Simulateur PC + Guide pratique
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Monte un PC virtuel interactif</li>
                <li>• Guide de reconditionnement réel</li>
                <li>• Journal de tes projets</li>
                <li>• Partage ou donne du matériel</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/reconditionne">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-5xl mb-3">📚</div>
              <CardTitle>Ressources & Communs</CardTitle>
              <CardDescription>
                Bibliothèque éducative libre
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tutoriels et guides complets</li>
                <li>• Scénarios d'ateliers</li>
                <li>• Distributions Linux légères</li>
                <li>• Communauté d'entraide</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/ressources">Explorer</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-5xl mb-3">🎯</div>
              <CardTitle>Défis & Missions</CardTitle>
              <CardDescription>
                Gamification engageante
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Missions progressives</li>
                <li>• Tableau d'impact collectif</li>
                <li>• Badges symboliques</li>
                <li>• Progression personnelle</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/defis">Relever</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto py-12 md:py-16 bg-muted/50 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Impact collectif
          </h2>
          <p className="text-xl text-muted-foreground">
            Ensemble, construisons un numérique plus sobre, accessible et durable
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div>
              <div className="text-4xl font-bold text-green-600">127</div>
              <div className="text-sm text-muted-foreground">Machines sauvées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">2.4</div>
              <div className="text-sm text-muted-foreground">MWh économisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">340</div>
              <div className="text-sm text-muted-foreground">Personnes aidées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">28</div>
              <div className="text-sm text-muted-foreground">Ateliers réalisés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-12 md:py-16 px-4">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl">
              Prêt·e à faire la différence ?
            </CardTitle>
            <CardDescription className="text-lg">
              Rejoins une communauté engagée pour un numérique plus responsable
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/reconditionne">Commencer maintenant</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ressources">En savoir plus</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
