# Guide de Contribution - NIRD

Merci de ton intérêt pour contribuer à NIRD ! 🌱

## 🎯 Comment Contribuer ?

NIRD est un projet **communautaire et participatif**. Toutes les contributions sont les bienvenues, qu'elles soient techniques ou non.

### Types de Contributions

#### 🐛 Signaler un Bug
1. Vérifie que le bug n'a pas déjà été signalé dans les [Issues](https://github.com/Younes-tsouli/BugsDeMinuit/issues)
2. Crée une nouvelle issue avec le template "Bug Report"
3. Décris le problème clairement avec :
   - Étapes pour reproduire
   - Comportement attendu vs observé
   - Captures d'écran si pertinent
   - Environnement (navigateur, OS, matériel)

#### ✨ Proposer une Fonctionnalité
1. Ouvre une issue avec le template "Feature Request"
2. Explique le problème que ça résout
3. Décris la solution proposée
4. Mentionne les alternatives envisagées

#### 💻 Contribuer du Code

**Avant de commencer :**
1. Fork le projet
2. Clone ton fork : `git clone https://github.com/TON-USERNAME/BugsDeMinuit.git`
3. Crée une branche : `git checkout -b feature/ma-fonctionnalite`

**Pendant le développement :**
- Respecte le style de code existant
- Écris des commits clairs et descriptifs
- Teste tes changements
- Documente si nécessaire

**Soumettre ta contribution :**
1. Push ta branche : `git push origin feature/ma-fonctionnalite`
2. Ouvre une Pull Request
3. Décris clairement tes changements
4. Réponds aux commentaires de review

#### 📝 Améliorer la Documentation
- Corriger des fautes
- Clarifier des explications
- Ajouter des exemples
- Traduire en d'autres langues

#### 📚 Créer des Ressources Pédagogiques
- Tutoriels
- Guides pratiques
- Scénarios d'ateliers
- Vidéos explicatives
- Fiches mémo

## 🛠️ Configuration de l'Environnement de Développement

```bash
# Cloner le projet
git clone https://github.com/Younes-tsouli/BugsDeMinuit.git
cd BugsDeMinuit

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## 📐 Standards de Code

### TypeScript
- Utiliser des types explicites
- Éviter `any` autant que possible
- Préférer les interfaces aux types pour les objets

### React
- Composants fonctionnels avec hooks
- Nommage en PascalCase pour les composants
- Props typées avec TypeScript

### Style
- Tailwind CSS pour le styling
- Composants shadcn/ui quand possible
- Classes utilitaires claires et lisibles

### Commits
Format recommandé :
```
type(scope): description courte

Description plus détaillée si nécessaire
```

Types : `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Exemples :
- `feat(simulator): ajouter compatibilité GPU`
- `fix(storage): corriger sauvegarde localStorage`
- `docs(readme): améliorer section installation`

## 🌍 Traductions

Pour ajouter une nouvelle langue :
1. Créer un dossier `locales/[code-langue]/`
2. Traduire les fichiers JSON
3. Ajouter la langue dans la configuration

## ✅ Checklist avant Pull Request

- [ ] Le code compile sans erreur
- [ ] Les fonctionnalités existantes fonctionnent toujours
- [ ] Le code respecte les standards du projet
- [ ] La documentation est à jour
- [ ] Les commits sont clairs et bien structurés
- [ ] La PR a une description claire

## 📜 Licence

En contribuant à NIRD, tu acceptes que ton code soit distribué sous licence **AGPL-3.0**.

## 💬 Communication

- **Issues GitHub** : Pour bugs, features, questions
- **Discussions** : Pour échanges plus généraux
- **Forum** : Pour entraide communautaire

## 🙏 Remerciements

Merci à tous les contributeurs et contributrices qui font vivre ce projet !

## 🎨 Valeurs du Projet

En contribuant, tu t'engages à respecter :
- **Inclusion** : Accessibilité, bienveillance, ouverture
- **Sobriété** : Code léger, optimisé, durable
- **Transparence** : Communication claire, décisions ouvertes
- **Collaboration** : Écoute, partage, co-construction

---

**Des questions ? N'hésite pas à ouvrir une issue ou à rejoindre les discussions !**
