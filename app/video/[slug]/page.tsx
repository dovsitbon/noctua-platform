import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Player from "@/components/Player";
import VideoGrid from "@/components/VideoGrid";
import { getCategory } from "@/data/categories";
import { videos } from "@/data/videos";
import { formatDate, formatDuration, getVideo, relatedVideos } from "@/lib/catalog";

export function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps<"/video/[slug]">): Promise<Metadata> {
  const video = getVideo((await params).slug);
  if (!video) return {};
  return {
    title: video.title,
    description: video.description,
    openGraph: { title: video.title, description: video.description, images: video.thumbnail ? [video.thumbnail] : [] },
  };
}

export default async function VideoPage({ params }: PageProps<"/video/[slug]">) {
  const video = getVideo((await params).slug);
  if (!video) notFound();
  const category = getCategory(video.category);

  return (
    <>
      <Header active={video.category} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-5xl">
          <Player video={video} />
          <h1 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">{video.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {category && (
              <Link href={`/categorie/${category.slug}`} className="text-ink hover:text-accent">
                {category.name}
              </Link>
            )}{" "}
            · {formatDuration(video.duration)} · {formatDate(video.publishedAt)}
          </p>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted">{video.description}</p>
          {video.tags.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2 text-sm">
              {video.tags.map((t) => (
                <li key={t}>
                  <Link
                    href={`/recherche?q=${encodeURIComponent(t)}`}
                    className="block rounded-full bg-raised px-3 py-1 text-muted hover:text-ink"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-6 text-xs text-muted">
            Un problème avec cette vidéo ?{" "}
            <Link href={`/signaler?video=${video.slug}`} className="underline hover:text-ink">
              Signaler
            </Link>
          </p>
        </div>

        <section aria-labelledby="related-title" className="mt-14 border-t border-line pt-8">
          <h2 id="related-title" className="mb-6 text-lg font-semibold">À voir aussi</h2>
          <VideoGrid videos={relatedVideos(video)} />
        </section>
      </main>
      <Footer />
    </>
  );
}
