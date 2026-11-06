import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:px-6">
        <p>
          <span className="font-display text-base text-ink">{site.name}</span> · Réservé aux plus de 18 ans
        </p>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-6 gap-y-2 sm:ml-auto">
          <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          <Link href="/signaler" className="hover:text-ink">Signaler un contenu</Link>
          <a href={`mailto:${site.contactEmail}`} className="hover:text-ink">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
