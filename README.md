# NIRD - Numérique Inclusif, Responsable et Durable

[![Licence: AGPL-3.0](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## 🌱 À Propos

**NIRD** est une application web libre et open-source conçue pour promouvoir l'inclusion numérique, la responsabilité, la durabilité et la sobriété numérique. Elle permet d'apprendre le reconditionnement informatique, de découvrir Linux et les logiciels libres, et d'adopter des pratiques numériques plus responsables.

### Valeurs Fondamentales

- **🤝 Inclusion** : Accessible sur matériel ancien, disponible hors-ligne, pour tous·tes
- **♻️ Responsabilité** : Respect de la vie privée, données minimales, logiciels libres
- **🌿 Durabilité** : Prolonger la vie des machines, réduire l'impact environnemental
- **⚡ Sobriété** : Interface légère, optimisée pour ancien matériel

## ✨ Fonctionnalités

### 🔧 Module Reconditionne-ton-ordi
- **Simulateur PC virtuel** : Monte un ordinateur en choisissant des composants compatibles
- **Guide pratique complet** : Diagnostic, nettoyage, effacement, installation Linux
- **Journal de projets** : Documente tes reconditionnements
- **Partage solidaire** : Propose ou reçois du matériel reconditionné

### 📚 Ressources & Communs Éducatifs
- **Bibliothèque libre** : Tutoriels, guides, cours sur Linux, maintenance, sobriété
- **Scénarios d'ateliers** : Kits pour animer des séances éducatives
- **Communauté** : Espace d'échange et d'entraide

### 🎯 Défis & Missions Sobres
- **Missions progressives** : Diagnostique un PC, installe Linux, organise un atelier
- **Tableau d'impact** : Mesure concrète de tes actions (machines sauvées, énergie économisée)
- **Badges symboliques** : Récompenses non-consuméristes pour encourager l'engagement

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ ou 20+
- npm ou yarn

### Installation

\`\`\`bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
\`\`\`

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build pour Production

\`\`\`bash
# Créer le build optimisé
npm run build

# Lancer en production
npm start
\`\`\`

## 🛠️ Stack Technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript 5](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Composants UI** : [shadcn/ui](https://ui.shadcn.com/)
- **Stockage** : LocalStorage (fonctionnement hors-ligne)

### Pourquoi cette Stack ?

- **Légèreté** : Build optimisé, peu de JavaScript côté client
- **Performance** : Compatible avec machines anciennes grâce au SSR
- **Accessibilité** : Composants accessibles par défaut
- **Progressive** : Fonctionne même avec connexion faible ou hors-ligne
- **Open Source** : Toutes les technologies utilisées sont libres

## 📂 Structure du Projet

\`\`\`
BugsDeMinuit/
├── app/                      # Routes Next.js (App Router)
│   ├── (modules)/           # Modules principaux
│   │   ├── reconditionne/   # Module Reconditionne-ton-ordi
│   │   ├── ressources/      # Module Ressources
│   │   └── defis/           # Module Défis & Missions
│   ├── layout.tsx           # Layout global
│   └── page.tsx             # Page d'accueil
├── components/              # Composants React
│   ├── ui/                  # Composants shadcn/ui
│   ├── modules/             # Composants métier
│   └── layout/              # Header, Footer
├── lib/                     # Utilitaires
│   └── storage/             # Gestion localStorage
├── types/                   # Types TypeScript
├── data/                    # Données statiques
├── hooks/                   # Hooks React personnalisés
└── public/                  # Assets statiques
\`\`\`

## 🤝 Contribuer

NIRD est un projet **participatif et communautaire**. Toute contribution est bienvenue !

### Types de Contributions

- 🐛 Corriger des bugs
- ✨ Ajouter des fonctionnalités
- 📝 Améliorer la documentation
- 🌍 Traduire l'interface
- 📚 Créer des ressources pédagogiques
- 🎨 Améliorer le design

## 📋 Roadmap

### Phase 1 : Prototype (MVP) ✅
- [x] Architecture de base
- [x] Module Reconditionne-ton-ordi (simulateur + guide)
- [x] Module Ressources (bibliothèque + ateliers)
- [x] Module Défis (missions + badges + impact)
- [x] Interface responsive et accessible

### Phase 2 : Test & Expérimentation 🚧
- [ ] PWA complète (Service Worker, installation)
- [ ] Journal de projets fonctionnel
- [ ] Système de partage de matériel
- [ ] Contenus téléchargeables
- [ ] Tests utilisateurs

### Phase 3 : Déploiement & Adaptation 🔜
- [ ] Multilingue
- [ ] API optionnelle
- [ ] Documentation avancée
- [ ] Intégration communauté

## 📄 Licence

Ce projet est sous licence **GNU Affero General Public License v3.0** (AGPL-3.0).

### Pourquoi l'AGPL-3.0 ?

- Garantit que le code reste **libre** même en cas de déploiement en SaaS
- Protège les **libertés** des utilisateurs
- Encourage le **partage** et la collaboration
- Cohérent avec les valeurs de **transparence** et d'**ouverture**

---

**Fait avec 💚 pour un numérique plus sobre, inclusif et durable**
