import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Signaler un contenu", robots: { index: false } };

const btn =
  "mt-8 inline-block rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:brightness-110";

async function ReportButton({ searchParams }: { searchParams: PageProps<"/signaler">["searchParams"] }) {
  const raw = (await searchParams).video;
  const video = (Array.isArray(raw) ? raw[0] : raw ?? "").replace(/[^a-z0-9-]/gi, "").slice(0, 80);
  const subject = encodeURIComponent(`Signalement${video ? ` : ${video}` : ""}`);
  const body = encodeURIComponent(
    `Vidéo concernée : ${video ? `${site.url}/video/${video}` : "(lien)"}\nMotif : \n\n`,
  );
  return (
    <a href={`mailto:${site.abuseEmail}?subject=${subject}&body=${body}`} className={btn}>
      Envoyer un signalement
    </a>
  );
}

export default function ReportPage({ searchParams }: PageProps<"/signaler">) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 leading-relaxed sm:px-6">
        <h1 className="font-display text-3xl">Signaler un contenu</h1>
        <p className="mt-6 text-muted">
          Tu apparais dans une vidéo sans l&apos;avoir accepté, tu penses qu&apos;une personne est mineure, ou
          un contenu te semble illégal ? Écris-nous, la vidéo est retirée pendant la vérification.
        </p>
        <Suspense
          fallback={
            <a href={`mailto:${site.abuseEmail}`} className={btn}>
              Envoyer un signalement
            </a>
          }
        >
          <ReportButton searchParams={searchParams} />
        </Suspense>
        <p className="mt-8 text-sm text-muted">
          Tu peux aussi signaler directement aux autorités sur{" "}
          <a className="underline" href="https://www.internet-signalement.gouv.fr" rel="noopener">
            internet-signalement.gouv.fr
          </a>{" "}
          (plateforme Pharos).
        </p>
      </main>
      <Footer />
    </>
  );
}
