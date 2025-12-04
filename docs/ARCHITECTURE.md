# Architecture Technique - NIRD

## 🏗️ Vue d'Ensemble

NIRD est une application web progressive (PWA) construite avec Next.js, conçue pour être légère, performante et accessible sur du matériel ancien.

## 📐 Stack Technique

### Frontend
- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript 5
- **Styling** : Tailwind CSS 4
- **Composants UI** : shadcn/ui (basé sur Radix UI)
- **Gestion d'état** : React Hooks + LocalStorage
- **Routing** : Next.js App Router (file-based)

### Pourquoi cette Stack ?

#### Next.js
- **SSR/SSG** : Permet de générer des pages statiques, réduisant la charge JavaScript
- **Optimisation automatique** : Images, fonts, scripts
- **Performance** : Compatible avec machines anciennes
- **SEO** : Essentiel pour la découvrabilité

#### TypeScript
- **Sécurité** : Détection d'erreurs à la compilation
- **Maintenabilité** : Documentation via types
- **DX** : Autocomplétion, refactoring

#### Tailwind CSS
- **Légèreté** : Pas de CSS inutilisé en production
- **Performance** : Pas de runtime CSS-in-JS
- **Consistance** : Système de design cohérent
- **Accessibilité** : Classes utilitaires pour focus, contraste

#### shadcn/ui
- **Accessibilité** : Composants ARIA-compliant
- **Personnalisable** : Code source modifiable
- **Léger** : Copie locale, pas de dépendance lourde
- **Best practices** : Construit sur Radix UI

## 📂 Structure des Dossiers

```
BugsDeMinuit/
├── app/                          # Next.js App Router
│   ├── (modules)/               # Groupe de routes (n'affecte pas l'URL)
│   │   ├── reconditionne/       # Route /reconditionne
│   │   │   └── page.tsx        # Page du module
│   │   ├── ressources/          # Route /ressources
│   │   │   └── page.tsx
│   │   └── defis/               # Route /defis
│   │       └── page.tsx
│   ├── api/                     # API Routes (future)
│   ├── layout.tsx               # Layout racine (Header, Footer)
│   ├── page.tsx                 # Page d'accueil /
│   └── globals.css              # Styles globaux Tailwind
│
├── components/
│   ├── ui/                      # Composants shadcn/ui
│   │   ├── button.tsx           # Bouton accessible
│   │   ├── card.tsx             # Carte conteneur
│   │   ├── badge.tsx            # Badge/Tag
│   │   ├── progress.tsx         # Barre de progression
│   │   ├── tabs.tsx             # Onglets
│   │   ├── accordion.tsx        # Accordéon
│   │   ├── dialog.tsx           # Modal
│   │   ├── alert.tsx            # Alerte
│   │   ├── input.tsx            # Champ de saisie
│   │   └── ...                  # Autres composants UI
│   │
│   ├── modules/                 # Composants métier
│   │   └── pc-simulator.tsx     # Simulateur PC
│   │
│   └── layout/                  # Composants de layout
│       ├── header.tsx           # En-tête avec navigation
│       └── footer.tsx           # Pied de page
│
├── lib/                         # Bibliothèque utilitaires
│   ├── storage/                 # Gestion du stockage
│   │   └── local-storage.ts    # LocalStorage helpers
│   ├── offline/                 # Service Worker (future)
│   └── utils.ts                 # Utilitaires généraux (cn, etc.)
│
├── types/                       # Définitions TypeScript
│   └── index.ts                 # Types globaux (Mission, Badge, etc.)
│
├── data/                        # Données statiques
│   └── content.ts               # Missions, Badges, Ressources, Composants PC
│
├── hooks/                       # Custom React Hooks
│   ├── use-user-progress.ts    # Hook progression utilisateur
│   └── use-offline.ts           # Hook détection hors-ligne
│
└── public/                      # Assets statiques
    ├── icons/                   # Icônes PWA
    ├── guides/                  # Guides téléchargeables
    └── manifest.json            # Manifeste PWA
```

## 🔄 Flux de Données

### Architecture Client-Side

```
┌─────────────────────────────────────────────────────────────┐
│                        User Interface                        │
│  (React Components + shadcn/ui)                             │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│                     Custom Hooks                             │
│  • useUserProgress() - Gestion progression                  │
│  • useOffline() - Détection connectivité                    │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│                  Storage Layer (lib/storage)                 │
│  • getUserProgress()                                         │
│  • saveUserProgress()                                        │
│  • completeMission()                                         │
│  • earnBadge()                                               │
│  • getProjects() / saveProject()                            │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│                    Browser LocalStorage                      │
│  • nird_user_progress                                        │
│  • nird_projects                                             │
│  • nird_offline_mode                                         │
└─────────────────────────────────────────────────────────────┘
```

### Avantages de cette Architecture
- **Pas de serveur nécessaire** pour le MVP
- **Fonctionnement hors-ligne** natif
- **Performance** : Pas de latence réseau
- **Vie privée** : Données restent sur l'appareil
- **Évolutivité** : Ajout facile d'une API ultérieure

## 🎨 Design System

### Couleurs Principales
```css
/* Tailwind CSS Variables */
--color-primary: 22 163 74;      /* green-600 - Sobriété */
--color-secondary: 59 130 246;   /* blue-500 - Inclusion */
--color-accent: 168 85 247;      /* purple-500 - Engagement */
--color-warning: 249 115 22;     /* orange-500 - Attention */
```

### Typographie
- **Font principale** : Geist Sans (système variable)
- **Font monospace** : Geist Mono (code, données)
- **Tailles** : Scale modulaire (0.875rem à 3rem)

### Espacements
- **Mobile-first** : Padding 4/6/8 (1rem, 1.5rem, 2rem)
- **Responsive** : Breakpoints Tailwind (sm, md, lg, xl)

### Accessibilité
- **Contraste** : WCAG AA minimum (4.5:1 texte, 3:1 UI)
- **Focus visible** : Ring Tailwind sur tous les interactifs
- **Navigation clavier** : Tabindex logique
- **ARIA** : Labels, roles, states via Radix UI

## 🔌 Intégrations Futures

### Phase 2
- **Service Worker** : Cache stratégique, offline-first
- **IndexedDB** : Stockage plus performant que localStorage
- **Web Share API** : Partage natif mobile

### Phase 3
- **API REST** (optionnelle) : Synchronisation multi-appareils
- **WebSockets** (optionnelle) : Chat communautaire temps réel
- **Notification API** : Rappels missions (avec permission)

## 📊 Performance

### Objectifs
- **First Contentful Paint** : < 1.5s
- **Time to Interactive** : < 3s (3G)
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **Total Bundle Size** : < 200KB (gzip)

### Optimisations Implémentées
- ✅ Static Generation (SSG) pour pages statiques
- ✅ Image Optimization (Next.js Image)
- ✅ Code Splitting automatique (Next.js)
- ✅ Tailwind CSS Purge (production)
- ✅ Font Optimization (next/font)

### Optimisations Futures
- [ ] Service Worker avec cache intelligent
- [ ] Lazy loading des composants lourds
- [ ] Prefetch des routes critiques
- [ ] Compression Brotli serveur
- [ ] CDN pour assets statiques

## 🛡️ Sécurité & Vie Privée

### Principes
- **Minimisation des données** : Collecter uniquement le nécessaire
- **Stockage local** : Pas de transmission à des tiers
- **Pas de tracking** : Pas de Google Analytics, Facebook Pixel, etc.
- **Consentement** : Informations claires sur les données stockées

### Implémentation
- LocalStorage pour progression (effaçable par utilisateur)
- Pas de cookies tiers
- Pas d'identifiants uniques
- Code source ouvert et auditable

### Future (si API)
- Chiffrement des données sensibles
- Authentification optionnelle (JWT)
- Conformité RGPD
- Droit à l'oubli

## 🧪 Tests

### Stratégie (Future)
- **Unit Tests** : Jest + React Testing Library
- **Integration Tests** : Playwright
- **Accessibility Tests** : axe-core
- **Performance Tests** : Lighthouse CI
- **Visual Regression** : Chromatic / Percy

## 📦 Build & Déploiement

### Production Build
```bash
npm run build        # Next.js optimized build
npm run start        # Production server
```

### Déploiement Recommandé
- **Vercel** : Hébergement optimisé Next.js (gratuit pour OSS)
- **Netlify** : Alternative avec CI/CD intégré
- **Self-hosted** : Export statique + Nginx/Apache
- **Hébergeurs éthiques** : Infomaniak, Netlify EU, etc.

### CI/CD (Future)
- GitHub Actions pour build automatique
- Tests automatiques sur PR
- Preview deployments
- Semantic versioning

## 🔄 Évolutivité

### Modulaire
Chaque module est indépendant et peut être développé séparément :
- **Reconditionne** : Simulateur + Guides
- **Ressources** : Bibliothèque + Ateliers
- **Défis** : Missions + Badges + Impact

### Extensible
Facile d'ajouter :
- Nouveaux types de missions
- Nouvelles ressources
- Nouveaux composants PC
- Nouveaux badges
- Nouvelles langues

### Communautaire
- Code sous AGPL-3.0
- Contributions bienvenues
- Fork pour adaptations locales
- Documentation complète

---

**Cette architecture est conçue pour être sobre, performante et accessible, alignée avec les valeurs de NIRD.**
