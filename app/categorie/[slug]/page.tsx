import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoGrid from "@/components/VideoGrid";
import { categories, getCategory } from "@/data/categories";
import { videosInCategory } from "@/lib/catalog";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/categorie/[slug]">): Promise<Metadata> {
  const category = getCategory((await params).slug);
  return category ? { title: category.name } : {};
}

export default async function CategoryPage({ params }: PageProps<"/categorie/[slug]">) {
  const category = getCategory((await params).slug);
  if (!category) notFound();
  const list = videosInCategory(category.slug);

  return (
    <>
      <Header active={category.slug} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
        <div className="mb-8 flex items-baseline justify-between">
          <h1 className="font-display text-3xl">{category.name}</h1>
          <p className="text-sm text-muted">{list.length} vidéo{list.length > 1 ? "s" : ""}</p>
        </div>
        <VideoGrid videos={list} />
      </main>
      <Footer />
    </>
  );
}
