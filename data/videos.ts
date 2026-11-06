// ============================================================
//  TES VIDÉOS : c'est ici que tu ajoutes, modifies ou retires.
// ============================================================
//  Chaque vidéo est un bloc { ... }. Champs :
//   slug        identifiant unique dans l'adresse (minuscules, tirets) -> /video/mon-slug
//   title       titre affiché
//   description texte sous le lecteur
//   category    slug d'une catégorie de data/categories.ts
//   tags        mots-clés (servent aussi à la recherche)
//   duration    durée en secondes (ex. 754 = 12 min 34)
//   publishedAt date de mise en ligne, format AAAA-MM-JJ
//   thumbnail   URL de l'image de couverture (16:9 conseillé)
//   embed       URL d'intégration d'un hébergeur vidéo (Bunny Stream, etc.)  -> prioritaire
//   src         OU lien direct vers un fichier .mp4
//   featured    true = mise en avant en haut de l'accueil (une seule conseillée)
//
//  Ne mets pas les fichiers vidéo dans le projet : héberge-les chez un
//  hébergeur vidéo et colle ici le lien (embed ou src).
// ============================================================

export type Video = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  duration: number;
  publishedAt: string;
  thumbnail?: string;
  embed?: string;
  src?: string;
  featured?: boolean;
};

const cats = ["amateur", "studio", "couple", "solo", "exclusif"];
const durations = [754, 1320, 488, 2105, 965, 1610, 612, 2840, 1199, 731, 1874, 540];

// Vidéos de démonstration, à supprimer quand tu ajoutes les tiennes.
// La n°1 lit une courte vidéo libre (CC0, MDN) pour que tu voies le lecteur fonctionner.
export const videos: Video[] = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    slug: `demo-${n}`,
    title: `Vidéo de démonstration ${n}`,
    description:
      "Texte de présentation à remplacer : quelques lignes sur la vidéo, les personnes et le contexte.",
    category: cats[i % cats.length],
    tags: ["démo", cats[i % cats.length]],
    duration: durations[i],
    publishedAt: new Date(Date.UTC(2026, 10, 5 - i * 3)).toISOString().slice(0, 10),
    featured: i === 0,
    ...(i === 0
      ? { src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" }
      : {}),
  };
});
