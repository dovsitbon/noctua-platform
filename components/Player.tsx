import type { Video } from "@/data/videos";

export default function Player({ video }: { video: Video }) {
  if (video.embed) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
        <iframe
          src={video.embed}
          title={video.title}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }
  if (video.src) {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        poster={video.thumbnail}
        className="aspect-video w-full rounded-xl bg-black"
      >
        <source src={video.src} type="video/mp4" />
        Ton navigateur ne lit pas cette vidéo.
      </video>
    );
  }
  return (
    <div className="grid aspect-video place-items-center rounded-xl border border-dashed border-line bg-surface px-6 text-center">
      <div>
        <p className="font-medium">Vidéo pas encore ajoutée</p>
        <p className="mt-2 text-sm text-muted">
          Renseigne <code className="text-ink">embed</code> ou <code className="text-ink">src</code> pour «&nbsp;{video.slug}&nbsp;»
          dans data/videos.ts.
        </p>
      </div>
    </div>
  );
}
