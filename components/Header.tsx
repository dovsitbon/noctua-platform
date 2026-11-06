import Link from "next/link";
import { categories } from "@/data/categories";
import { site } from "@/data/site";

const chip =
  "block whitespace-nowrap rounded-full border px-3.5 py-1.5 transition";

export default function Header({ query = "", active }: { query?: string; active?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-2xl tracking-tight">
          {site.name}
        </Link>
        <form action="/recherche" role="search" className="ml-auto w-full max-w-sm">
          <label htmlFor="q" className="sr-only">
            Rechercher une vidéo
          </label>
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Rechercher…"
            autoComplete="off"
            className="w-full rounded-lg border border-line bg-surface px-4 py-2 text-sm placeholder:text-muted focus:border-muted focus:outline-none"
          />
        </form>
      </div>
      <nav aria-label="Catégories" className="mx-auto max-w-7xl overflow-x-auto px-4 pb-3 sm:px-6">
        <ul className="flex gap-2 text-sm">
          {[{ slug: "", name: "Tout" }, ...categories].map((c) => {
            const on = (active ?? "") === c.slug;
            return (
              <li key={c.slug || "all"}>
                <Link
                  href={c.slug ? `/categorie/${c.slug}` : "/"}
                  aria-current={on ? "page" : undefined}
                  className={`${chip} ${on ? "border-ink bg-ink text-bg" : "border-line text-muted hover:text-ink"}`}
                >
                  {c.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
