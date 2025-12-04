# Planning en 3 Phases - NIRD

## 📋 Vue d'Ensemble

Ce document présente le planning de développement du projet NIRD en 3 phases cohérentes, allant du prototype minimal viable (MVP) au déploiement et à l'adaptation communautaire.

---

## Phase 1 : Prototype / MVP ✅ (COMPLÉTÉ)

**Durée estimée** : 2-3 semaines  
**Statut** : ✅ Complété

### Objectifs
Créer un prototype fonctionnel démontrant les 3 modules principaux avec une interface accessible et légère.

### Livrables Réalisés

#### Architecture & Fondations ✅
- [x] Structure de projet modulaire et évolutive
- [x] Configuration Next.js 16 + TypeScript + Tailwind CSS
- [x] Intégration shadcn/ui pour composants accessibles
- [x] Système de types TypeScript complet
- [x] Stockage local (localStorage) pour fonctionnement hors-ligne

#### Interface Globale ✅
- [x] Header avec navigation responsive
- [x] Footer avec informations projet
- [x] Page d'accueil engageante
- [x] Layout responsive (mobile-first)
- [x] Détection mode hors-ligne

#### Module 1 : Reconditionne-ton-ordi ✅
- [x] Simulateur PC virtuel interactif
  - Sélection de composants par étape
  - Vérification de compatibilité
  - Calcul performance et éco-score
- [x] Guide pratique complet (5 étapes)
  - Diagnostic initial
  - Nettoyage et maintenance
  - Effacement sécurisé des données
  - Installation de Linux
  - Tests et validation
- [x] Structure pour journal de projets (à compléter)

#### Module 2 : Ressources & Communs ✅
- [x] Bibliothèque de ressources pédagogiques
- [x] Filtrage par catégorie (reconditionnement, Linux, sobriété, etc.)
- [x] Fiches ressources avec métadonnées
- [x] Section scénarios d'ateliers
- [x] Liens vers communauté externe

#### Module 3 : Défis & Missions ✅
- [x] Système de missions progressives
- [x] Tableau de bord personnel
  - Niveau et points
  - Missions complétées
  - Badges obtenus
- [x] Mesure d'impact
  - Machines sauvées
  - Énergie économisée
  - Personnes aidées
  - Ateliers animés
- [x] Système de badges symboliques
- [x] Persistance des données (localStorage)

#### Documentation ✅
- [x] README complet
- [x] Guide de contribution (CONTRIBUTING.md)
- [x] Structure pour licence AGPL-3.0
- [x] Documentation technique inline

---

## Phase 2 : Test & Expérimentation 🚧 (EN COURS)

**Durée estimée** : 4-6 semaines  
**Statut** : 🚧 Prochaine phase

### Objectifs
Tester le prototype avec des utilisateurs réels, enrichir les contenus, optimiser les performances et implémenter les fonctionnalités avancées.

### Priorités

#### 2.1 PWA Complète (Semaines 1-2)
- [ ] Implémenter Service Worker
  - Cache stratégique des ressources
  - Gestion intelligente du mode hors-ligne
  - Synchronisation en arrière-plan
- [ ] Rendre l'application installable
  - Icônes adaptées (72px à 512px)
  - Configuration manifeste complète
  - Écran de lancement (splash screen)
- [ ] Optimiser pour connexions lentes
  - Lazy loading des images
  - Preload des ressources critiques
  - Compression des assets

#### 2.2 Enrichissement des Contenus (Semaines 2-4)
- [ ] Journal de projets fonctionnel
  - Création/édition de projets
  - Upload de photos (avec compression)
  - Partage de retours d'expérience
  - Export/import de données
- [ ] Contenus téléchargeables
  - PDFs des guides pratiques
  - Checklists imprimables
  - Vidéos tutorielles (hébergement sobre)
  - Fiches mémo illustrées
- [ ] Ressources supplémentaires
  - 15-20 tutoriels complets
  - 5-8 scénarios d'ateliers détaillés
  - Base de données de distributions Linux
  - FAQ communautaire

#### 2.3 Système de Partage (Semaines 3-4)
- [ ] Module "Don / Prêt / Partage"
  - Formulaire de mise à disposition
  - Recherche de matériel disponible
  - Système de messagerie simple
  - Gestion de la confidentialité
- [ ] Carte interactive (optionnelle)
  - Localisation des matériels disponibles
  - Anonymisation des adresses précises
  - Filtres par type de matériel

#### 2.4 Tests Utilisateurs (Semaines 4-6)
- [ ] Tests en milieu scolaire
  - 2-3 collèges/lycées
  - Retours élèves et enseignants
  - Adaptation du vocabulaire
- [ ] Tests avec associations
  - Accompagnement à l'appropriation
  - Retours d'animateurs
  - Cas d'usage réels
- [ ] Tests accessibilité
  - Lecteurs d'écran
  - Navigation clavier
  - Contraste et lisibilité
  - Compatibilité matériel ancien (PC 10+ ans)

#### 2.5 Optimisations Performance (Semaines 5-6)
- [ ] Audit Lighthouse (objectif 90+)
- [ ] Optimisation bundle JavaScript
- [ ] Réduction taille des images
- [ ] Tests sur connexions 3G/Edge
- [ ] Tests sur vieux navigateurs
- [ ] Mesure consommation ressources (RAM, CPU)

### Métriques de Succès Phase 2
- Score Lighthouse Performance : 90+
- Score Lighthouse Accessibility : 95+
- Temps de chargement initial < 3s (3G)
- Fonctionne sur matériel 10+ ans
- 50+ utilisateurs testeurs
- 20+ retours qualitatifs

---

## Phase 3 : Déploiement & Adaptation 🔜 (À VENIR)

**Durée estimée** : 8-12 semaines  
**Statut** : 🔜 Future phase

### Objectifs
Déployer l'application à grande échelle, faciliter l'appropriation par des communautés, et assurer la pérennité du projet.

### Priorités

#### 3.1 Multilingue (Semaines 1-3)
- [ ] Infrastructure i18n
  - Intégration next-intl ou similar
  - Fichiers de traduction structurés
  - Détection automatique de langue
- [ ] Traductions initiales
  - Anglais (priorité)
  - Espagnol
  - Allemand (si ressources disponibles)
- [ ] Interface de contribution traduction
  - Plateforme Weblate ou Crowdin
  - Guide pour traducteurs bénévoles

#### 3.2 API Optionnelle (Semaines 2-4)
- [ ] API REST légère (optionnelle)
  - Synchronisation entre appareils
  - Agrégation des impacts collectifs
  - Partage de projets entre utilisateurs
- [ ] Backend sobre
  - Base de données minimale
  - Hébergement éthique (Framasoft, Chatons)
  - Respect RGPD / vie privée
- [ ] Documentation API
  - Endpoints documentés
  - Exemples d'utilisation
  - Authentification simple

#### 3.3 Enrichissement Communautaire (Semaines 3-6)
- [ ] Intégration forum/chat
  - Lien vers Discourse, Mattermost, Matrix
  - Modération communautaire
  - Charte de bonne conduite
- [ ] Wiki collaboratif
  - Documentation étendue
  - Contributions communautaires
  - Système de validation
- [ ] Plateforme de partage de contenus
  - Dépôt de tutoriels communautaires
  - Validation par pairs
  - Licence obligatoire (CC-BY-SA)

#### 3.4 Kits d'Ateliers Complets (Semaines 4-7)
- [ ] 10+ scénarios d'ateliers détaillés
  - Écoles (primaire, collège, lycée)
  - Associations
  - Bibliothèques / médiathèques
  - Espaces publics numériques
- [ ] Supports pédagogiques
  - Présentations (LibreOffice Impress)
  - Vidéos explicatives courtes
  - Fiches animateurs
  - Évaluations / quiz
- [ ] Guide d'organisation d'événements
  - Install Party Linux
  - Repair Café numérique
  - Journée de sensibilisation

#### 3.5 Modes d'Hébergement Variés (Semaines 5-8)
- [ ] Hébergement statique
  - Documentation Netlify / Vercel
  - GitHub Pages
  - GitLab Pages
- [ ] Auto-hébergement
  - Docker / Docker Compose
  - Scripts d'installation
  - Sauvegarde et maintenance
- [ ] Déclinaisons locales
  - Guide pour adapter à un territoire
  - Personnalisation (logo, couleurs)
  - Données locales (associations, lieux)

#### 3.6 Gouvernance & Pérennité (Semaines 6-10)
- [ ] Structure de gouvernance
  - Collectif de mainteneurs
  - Processus de décision
  - Roadmap collaborative
- [ ] Financement éthique
  - Dons (Liberapay, Open Collective)
  - Subventions publiques
  - Partenariats associatifs
- [ ] Communication & Visibilité
  - Site vitrine
  - Réseaux sociaux éthiques (Mastodon)
  - Relations presse
  - Conférences / événements

#### 3.7 Monitoring & Amélioration Continue (Semaines 8-12)
- [ ] Système de feedback utilisateurs
- [ ] Analytics respectueux (Plausible, Matomo)
- [ ] Issues tracking organisé
- [ ] Versions releases régulières
- [ ] Changelog détaillé

### Métriques de Succès Phase 3
- 5000+ utilisateurs actifs
- 3+ langues disponibles
- 50+ établissements utilisant l'app
- 100+ ressources pédagogiques
- 20+ contributions communautaires/mois
- Documentation complète (95%+ couverture)

---

## 📊 Indicateurs Clés de Performance (KPI)

### Techniques
- Performance Lighthouse : 90+
- Accessibilité : 95+
- SEO : 90+
- PWA : 100%
- Compatibilité navigateurs : 95%+
- Temps de chargement : < 3s (3G)

### Utilisateurs
- Taux d'engagement : 40%+
- Retour régulier : 30%+
- Missions complétées : 60%+ des utilisateurs
- Satisfaction : 4.5/5

### Impact
- Machines reconditionnées : 1000+
- Énergie économisée : 50+ MWh
- Personnes formées : 5000+
- Ateliers organisés : 200+

### Communauté
- Contributeurs actifs : 20+
- Pull requests mensuelles : 10+
- Issues résolues : 80%+
- Ressources créées : 100+

---

## 🔄 Méthodologie

### Approche Itérative
- Sprints de 2 semaines
- Démos régulières
- Feedback continu
- Amélioration progressive

### Outils
- **Gestion** : GitHub Projects
- **Communication** : GitHub Discussions
- **Code** : GitHub (git flow)
- **CI/CD** : GitHub Actions
- **Tests** : Playwright, Jest

### Valeurs de Développement
- **Sobriété** : Code minimal et efficace
- **Accessibilité** : Tests réguliers
- **Documentation** : Au fil du développement
- **Communauté** : Décisions ouvertes

---

## 📅 Timeline Globale

```
Semaine 1-3   : Phase 1 MVP (COMPLÉTÉ) ✅
Semaine 4-9   : Phase 2 Tests & Expérimentation 🚧
Semaine 10-21 : Phase 3 Déploiement & Adaptation 🔜
Semaine 22+   : Maintenance & Évolution continue ♻️
```

---

## 🎯 Prochaines Étapes Immédiates

1. **Implémenter Service Worker** (PWA)
2. **Créer les icônes** (72px à 512px)
3. **Compléter le journal de projets**
4. **Préparer premiers tests utilisateurs**
5. **Optimiser les performances**

---

**Ce planning est évolutif et s'adapte aux retours de la communauté et des utilisateurs.**
