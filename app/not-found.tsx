import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto grid w-full max-w-7xl flex-1 place-items-center px-4 py-24 text-center">
        <div>
          <h1 className="font-display text-3xl">Page introuvable</h1>
          <p className="mt-3 text-muted">Cette vidéo a peut-être été retirée.</p>
          <Link href="/" className="mt-6 inline-block rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-bg">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
