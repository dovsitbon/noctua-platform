import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 leading-relaxed sm:px-6">
        <h1 className="font-display text-3xl">Mentions légales</h1>
        <div className="mt-8 space-y-6 text-muted [&_h2]:mb-2 [&_h2]:font-semibold [&_h2]:text-ink">
          <section>
            <h2>Éditeur</h2>
            <p>
              {site.editor}
              <br />
              {site.address}
              <br />
              Contact : <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </p>
          </section>
          <section>
            <h2>Hébergeur</h2>
            <p>{site.host}</p>
          </section>
          <section>
            <h2>Public</h2>
            <p>
              Ce site est strictement réservé aux personnes majeures. Toutes les personnes apparaissant dans
              les vidéos étaient majeures au moment du tournage et ont donné leur consentement écrit à
              l&apos;enregistrement et à la diffusion. L&apos;éditeur conserve les justificatifs
              correspondants.
            </p>
          </section>
          <section>
            <h2>Signalement</h2>
            <p>
              Tout contenu illicite ou diffusé sans consentement peut être signalé à{" "}
              <a className="underline" href={`mailto:${site.abuseEmail}`}>{site.abuseEmail}</a>. Il est
              retiré dans les plus brefs délais. Vous pouvez aussi signaler sur{" "}
              <a className="underline" href="https://www.internet-signalement.gouv.fr" rel="noopener">
                internet-signalement.gouv.fr
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
