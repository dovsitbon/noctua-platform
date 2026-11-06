import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Thumb from "@/components/Thumb";
import VideoGrid from "@/components/VideoGrid";
import { getCategory } from "@/data/categories";
import { allVideos, featuredVideo, formatDate } from "@/lib/catalog";

export default function Home() {
  const featured = featuredVideo();
  const rest = allVideos().filter((v) => v.slug !== featured?.slug);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6">
        {featured && (
          <section aria-labelledby="featured-title" className="py-8 sm:py-10">
            <Link href={`/video/${featured.slug}`} className="group grid items-center gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
              <Thumb video={featured} eager />
              <div>
                <p className="text-sm text-accent">À la une</p>
                <h1 id="featured-title" className="mt-2 font-display text-3xl leading-tight sm:text-4xl">
                  {featured.title}
                </h1>
                <p className="mt-3 line-clamp-3 text-muted">{featured.description}</p>
                <p className="mt-4 text-sm text-muted">
                  {getCategory(featured.category)?.name} · {formatDate(featured.publishedAt)}
                </p>
                <span className="mt-6 inline-block rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition group-hover:bg-accent group-hover:text-white">
                  Regarder
                </span>
              </div>
            </Link>
          </section>
        )}

        <section aria-labelledby="latest-title" className="border-t border-line pt-8">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 id="latest-title" className="text-lg font-semibold">Dernières vidéos</h2>
            <p className="text-sm text-muted">{rest.length + (featured ? 1 : 0)} vidéos</p>
          </div>
          <VideoGrid videos={rest} />
        </section>
      </main>
      <Footer />
    </>
  );
}
