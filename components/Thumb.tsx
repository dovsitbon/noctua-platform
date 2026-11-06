/* eslint-disable @next/next/no-img-element */
import type { Video } from "@/data/videos";
import { formatDuration } from "@/lib/catalog";

export default function Thumb({ video, eager = false }: { video: Video; eager?: boolean }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-raised">
      {video.thumbnail ? (
        <img
          src={video.thumbnail}
          alt=""
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="grid h-full w-full place-items-center text-xs text-muted">Miniature à ajouter</div>
      )}
      <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium tabular-nums text-white">
        {formatDuration(video.duration)}
      </span>
    </div>
  );
}
