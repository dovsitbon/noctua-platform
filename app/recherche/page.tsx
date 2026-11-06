import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoGrid from "@/components/VideoGrid";
import { searchVideos } from "@/lib/catalog";

export const metadata: Metadata = { title: "Recherche", robots: { index: false } };

async function Results({ searchParams }: { searchParams: PageProps<"/recherche">["searchParams"] }) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw ?? "").trim().slice(0, 100);
  const results = searchVideos(q);

  return (
    <>
      <Header query={q} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="mb-8 text-2xl font-semibold">
          {q ? (
            <>
              {results.length} résultat{results.length > 1 ? "s" : ""} pour «&nbsp;{q}&nbsp;»
            </>
          ) : (
            "Que cherches-tu ?"
          )}
        </h1>
        {q && <VideoGrid videos={results} />}
      </main>
    </>
  );
}

export default function SearchPage({ searchParams }: PageProps<"/recherche">) {
  return (
    <>
      <Suspense fallback={<Header />}>
        <Results searchParams={searchParams} />
      </Suspense>
      <Footer />
    </>
  );
}
