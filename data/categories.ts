// Les catégories du site. Renomme-les ou ajoutes-en : le "slug" sert dans l'adresse (/categorie/slug).
export type Category = { slug: string; name: string };

export const categories: Category[] = [
  { slug: "amateur", name: "Amateur" },
  { slug: "studio", name: "Studio" },
  { slug: "couple", name: "Couple" },
  { slug: "solo", name: "Solo" },
  { slug: "exclusif", name: "Exclusif" },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
