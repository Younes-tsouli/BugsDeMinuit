import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PCSimulator } from "@/components/modules/pc-simulator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ReconditionPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <Badge variant="secondary" className="text-sm">
          Module 1
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          🔧 Reconditionne-ton-ordi
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Apprends à monter un PC virtuel, découvre les guides pratiques, 
          et documente tes propres projets de reconditionnement
        </p>
      </div>

      <Tabs defaultValue="simulator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="simulator">🎮 Simulateur</TabsTrigger>
          <TabsTrigger value="guide">📖 Guide Pratique</TabsTrigger>
          <TabsTrigger value="projects">📝 Mes Projets</TabsTrigger>
        </TabsList>

        <TabsContent value="simulator" className="space-y-6">
          <PCSimulator />
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Guide Complet de Reconditionnement</CardTitle>
              <CardDescription>
                Toutes les étapes pour donner une seconde vie à un ordinateur
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6">
                <AlertDescription>
                  ⚠️ Avant de commencer, assure-toi de travailler dans un espace propre, 
                  sec, et de débrancher tout appareil électrique. Touche un objet métallique 
                  relié à la terre pour évacuer l'électricité statique.
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="diagnostic">
                  <AccordionTrigger className="text-lg font-semibold">
                    1️⃣ Diagnostic Initial
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Le diagnostic permet de déterminer l'état du matériel et les composants fonctionnels.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Vérifications visuelles</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Inspecter l'extérieur : fissures, chocs, corrosion</li>
                          <li>Ouvrir le boîtier et observer les composants</li>
                          <li>Vérifier les condensateurs gonflés (carte-mère)</li>
                          <li>Contrôler la poussière et l'état du ventilateur</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Tests de démarrage</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Brancher et tenter de démarrer</li>
                          <li>Noter les bips ou signaux lumineux (codes d'erreur)</li>
                          <li>Vérifier l'affichage BIOS/UEFI</li>
                          <li>Identifier les composants reconnus</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Inventaire des composants</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Carte-mère (modèle, socket)</li>
                          <li>Processeur (type, fréquence)</li>
                          <li>RAM (type DDR, capacité, fréquence)</li>
                          <li>Stockage (HDD/SSD, capacité)</li>
                          <li>Carte graphique (intégrée/dédiée)</li>
                          <li>Alimentation (puissance)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cleaning">
                  <AccordionTrigger className="text-lg font-semibold">
                    2️⃣ Nettoyage et Maintenance
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Un nettoyage approfondi améliore les performances et prolonge la durée de vie.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Matériel nécessaire</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Bombe à air comprimé (ou soufflette)</li>
                          <li>Chiffons microfibres propres</li>
                          <li>Alcool isopropylique (90%+)</li>
                          <li>Cotons-tiges</li>
                          <li>Pâte thermique (pour processeur)</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Procédure de nettoyage</h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                          <li>Débrancher tous les câbles</li>
                          <li>Retirer les composants amovibles (RAM, cartes d'extension)</li>
                          <li>Souffler la poussière avec l'air comprimé</li>
                          <li>Nettoyer les ventilateurs délicatement</li>
                          <li>Nettoyer les contacts avec alcool isopropylique</li>
                          <li>Renouveler la pâte thermique du processeur si nécessaire</li>
                          <li>Laisser sécher complètement avant de remonter</li>
                        </ol>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="data">
                  <AccordionTrigger className="text-lg font-semibold">
                    3️⃣ Effacement Sécurisé des Données
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Protéger la vie privée en effaçant complètement les données existantes.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Outils recommandés</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>DBAN (Darik's Boot and Nuke)</strong> - Effacement complet</li>
                          <li><strong>Parted Magic</strong> - Suite complète avec Secure Erase</li>
                          <li><strong>Commande dd</strong> (Linux) - Overwrite avec /dev/zero</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Méthodes d'effacement</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Passage simple</strong> : Rapide, suffisant pour usage personnel</li>
                          <li><strong>DoD 3 passes</strong> : Standard militaire américain</li>
                          <li><strong>Gutmann 35 passes</strong> : Maximum de sécurité (très long)</li>
                        </ul>
                      </div>

                      <Alert>
                        <AlertDescription className="text-sm">
                          💡 Pour les SSD, privilégier la commande Secure Erase du fabricant (ATA Secure Erase) 
                          plutôt que les méthodes de réécriture multiples qui usent inutilement le disque.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="linux">
                  <AccordionTrigger className="text-lg font-semibold">
                    4️⃣ Installation de Linux
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Installer un système d'exploitation libre, léger et performant.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Distributions recommandées</h4>
                        <div className="space-y-3 mt-3">
                          <div className="border-l-4 border-green-500 pl-3">
                            <div className="font-semibold">Lubuntu / Xubuntu</div>
                            <p className="text-sm text-muted-foreground">
                              Léger, basé sur Ubuntu, excellent pour débutants
                            </p>
                          </div>
                          <div className="border-l-4 border-blue-500 pl-3">
                            <div className="font-semibold">Linux Mint XFCE</div>
                            <p className="text-sm text-muted-foreground">
                              Interface familière, très stable, bon support matériel
                            </p>
                          </div>
                          <div className="border-l-4 border-purple-500 pl-3">
                            <div className="font-semibold">Debian LXDE</div>
                            <p className="text-sm text-muted-foreground">
                              Ultra-léger, stable, pour machines très modestes
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Étapes d'installation</h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                          <li>Télécharger l'image ISO de la distribution choisie</li>
                          <li>Créer une clé USB bootable (avec Rufus, Etcher, ou dd)</li>
                          <li>Démarrer depuis la clé USB (modifier ordre de boot dans BIOS)</li>
                          <li>Tester le système en mode "Live" avant installation</li>
                          <li>Lancer l'installateur et suivre les instructions</li>
                          <li>Choisir le partitionnement (tout le disque recommandé)</li>
                          <li>Créer un compte utilisateur</li>
                          <li>Redémarrer et retirer la clé USB</li>
                        </ol>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Configuration post-installation</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Mettre à jour le système</li>
                          <li>Installer les pilotes nécessaires</li>
                          <li>Configurer les applications essentielles</li>
                          <li>Activer le pare-feu (ufw)</li>
                          <li>Créer un point de restauration</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="test">
                  <AccordionTrigger className="text-lg font-semibold">
                    5️⃣ Tests et Validation
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Vérifier que tout fonctionne correctement avant de déclarer le PC opérationnel.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Tests matériels</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Test de mémoire (Memtest86+)</li>
                          <li>Test du disque (badblocks, SMART)</li>
                          <li>Test de stabilité CPU (stress, mprime)</li>
                          <li>Test de température (sensors, psensor)</li>
                          <li>Test audio, vidéo, réseau, USB</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Tests fonctionnels</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Navigation web fluide</li>
                          <li>Lecture vidéo</li>
                          <li>Traitement de texte / bureautique</li>
                          <li>Installation/désinstallation de logiciels</li>
                          <li>Extinction/redémarrage</li>
                        </ul>
                      </div>

                      <Alert>
                        <AlertDescription className="text-sm">
                          ✅ Si tous les tests passent, félicitations ! Ton PC reconditionné est prêt 
                          à servir pour de nombreuses années.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
            <CardHeader>
              <CardTitle>📥 Ressources Téléchargeables</CardTitle>
              <CardDescription>
                Documents pratiques pour t'accompagner
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="font-medium">Checklist de diagnostic (PDF)</span>
                <Badge>Bientôt</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="font-medium">Guide illustré complet (PDF)</span>
                <Badge>Bientôt</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="font-medium">Tableau de compatibilité composants</span>
                <Badge>Bientôt</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mes Projets de Reconditionnement</CardTitle>
              <CardDescription>
                Documente tes projets et partage ton expérience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 space-y-4">
                <div className="text-6xl">📝</div>
                <h3 className="text-xl font-semibold">Aucun projet pour l'instant</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Commence un projet de reconditionnement et documente ton parcours : 
                  composants utilisés, problèmes rencontrés, solutions trouvées.
                </p>
                <Badge variant="secondary" className="text-sm">
                  Fonctionnalité en développement
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
