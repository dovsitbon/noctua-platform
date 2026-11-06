import Link from "next/link";
import type { Video } from "@/data/videos";
import { getCategory } from "@/data/categories";
import { formatDate } from "@/lib/catalog";
import Thumb from "./Thumb";

export default function VideoGrid({ videos }: { videos: Video[] }) {
  if (!videos.length) {
    return <p className="py-16 text-center text-muted">Aucune vidéo pour le moment.</p>;
  }
  return (
    <ul className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((v) => (
        <li key={v.slug}>
          <Link href={`/video/${v.slug}`} className="group block">
            <Thumb video={v} />
            <h3 className="mt-3 line-clamp-2 text-[15px] font-medium leading-snug group-hover:text-accent">
              {v.title}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {getCategory(v.category)?.name ?? v.category} · {formatDate(v.publishedAt)}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
