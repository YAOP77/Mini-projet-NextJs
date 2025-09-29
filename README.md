# Mini-projet Next.js : Streaming de films

Ce projet est une application web de streaming de films réalisée avec Next.js. Il a pour objectif de démontrer l'apprentissage des bases du framework Next.js, notamment :

- La structure d'un projet Next.js (pages, layouts, composants)
- La gestion du routage dynamique (ex : `/movie/[id]`)
- L'utilisation de l'API The Movie Database (TMDB) pour récupérer des films
- L'intégration de Tailwind CSS pour le style
- La gestion des hooks et des composants réutilisables

## Fonctionnalités principales

- **Accueil** : Liste des films populaires
- **Recherche** : Barre de recherche pour filtrer les films
- **Détail d'un film** : Page dynamique affichant les informations d'un film (`/movie/[id]`)
- **Pages statiques** : À propos, Contact
- **Dashboard** : Exemple de page protégée ou réservée

## Technologies utilisées

- [Next.js](https://nextjs.org/) : Framework React pour le rendu côté serveur et le routage
- [Tailwind CSS](https://tailwindcss.com/) : Framework CSS utilitaire
- [TMDB API](https://www.themoviedb.org/documentation/api) : Source des données de films
- [TypeScript](https://www.typescriptlang.org/) : Typage statique

## Structure du projet

```
src/
  app/
    layout.tsx
    page.tsx
    (public)/
      layout.tsx
      page.tsx
      about/
        page.tsx
      contact/
        page.tsx
    dashboard/
      layout.tsx
      page.tsx
    movie/
      [id]/
        page.tsx
  components/
    MovieCard.tsx
    MovieList.tsx
    SearchBar.tsx
    layout/
      Footer.tsx
      Navbar.tsx
  hooks/
    useDebounce.ts
  lib/
    tmdb.ts
```

## Lancement du projet

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Ajouter la clé API TMDB dans un fichier `.env.local` :
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=VotreCléAPI
   ```
3. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```

## Ce que j'ai appris

- Créer et organiser un projet Next.js
- Utiliser le routage dynamique et les pages statiques
- Consommer une API externe avec fetch
- Gérer le typage avec TypeScript
- Styliser avec Tailwind CSS
- Créer des composants réutilisables

---

> Ce projet est un exercice personnel pour valider la compréhension des bases de Next.js et la création d'une application web moderne.
