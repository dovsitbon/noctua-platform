import { videos, type Video } from "@/data/videos";

const byDate = (a: Video, b: Video) => b.publishedAt.localeCompare(a.publishedAt);

export function allVideos() {
  return [...videos].sort(byDate);
}

export function getVideo(slug: string) {
  return videos.find((v) => v.slug === slug);
}

export function featuredVideo() {
  return videos.find((v) => v.featured) ?? allVideos()[0];
}

export function videosInCategory(slug: string) {
  return allVideos().filter((v) => v.category === slug);
}

export function relatedVideos(video: Video, limit = 8) {
  const same = allVideos().filter((v) => v.slug !== video.slug && v.category === video.category);
  const rest = allVideos().filter((v) => v.slug !== video.slug && v.category !== video.category);
  return [...same, ...rest].slice(0, limit);
}

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function searchVideos(query: string) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return allVideos().filter((v) => {
    const hay = normalize([v.title, v.description, v.category, ...v.tags].join(" "));
    return terms.every((t) => hay.includes(t));
  });
}

export function formatDuration(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  const pad = (x: number) => String(x).padStart(2, "0");
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
