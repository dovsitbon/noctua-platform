# Noctua · plateforme vidéo

Site Next.js sans base de données : toutes les vidéos sont décrites dans un seul fichier.

## Ajouter une vidéo

1. Mets la vidéo en ligne chez un hébergeur vidéo (Bunny Stream, etc.). Ne mets pas les fichiers vidéo dans ce projet : ils sont trop lourds pour Vercel.
2. Ouvre `data/videos.ts` et ajoute un bloc :

```ts
{
  slug: "ma-video",               // adresse : /video/ma-video
  title: "Titre de la vidéo",
  description: "Quelques lignes de présentation.",
  category: "amateur",            // un slug de data/categories.ts
  tags: ["mot-clé", "autre"],
  duration: 754,                  // en secondes
  publishedAt: "2026-11-06",
  thumbnail: "https://…/miniature.jpg",
  embed: "https://iframe.mediadelivery.net/embed/…",  // OU src: "https://…/video.mp4"
},
```

3. Supprime les vidéos de démonstration (le bloc `Array.from(...)`), puis commit et push : Vercel redéploie tout seul.

## Réglages

- `data/site.ts` : nom du site, e-mails, éditeur et adresse (mentions légales).
- `data/categories.ts` : catégories.
- `app/globals.css` : couleurs.

## Avant de publier du contenu adulte

- **Vérification d'âge** : en France (loi SREN, référentiel ARCOM), le bouton « J'ai 18 ans » ne suffit pas pour un site pornographique. Il faut brancher un prestataire de vérification d'âge certifié à la place de `components/AgeGate.tsx`.
- **Consentement et âge des personnes filmées** : garde une pièce d'identité et un accord écrit de diffusion pour chaque personne.
- **Hébergement** : la politique d'utilisation de Vercel interdit le contenu « obscène ». Le site vide est OK, mais avec du contenu pornographique le projet (et le compte) risque d'être suspendu. Prévois un hébergeur qui accepte le contenu adulte.

## Lancer en local

```bash
npm install
npm run dev
```
