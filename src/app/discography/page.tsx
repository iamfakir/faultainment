"use client";
import { useState } from "react";
import Link from "next/link";

interface Release {
  id: number;
  title: string;
  year: number;
  cover?: string; // URL to cover art (optional for future use)
  type: "album" | "single";
}

const releases: Release[] = [
  // Albums (type === "album")
  { id: 1, title: "Neruppu Kumar", year: 2023, type: "album", cover: "/tracks/album/neruppu.png" },
  { id: 2, title: "Neruppu 2", year: 2024, type: "album", cover: "/tracks/album/neruppu2.png" },
  // Singles (type === "single")
  { id: 101, title: "Damaal Dumeel", year: 2024, type: "single", cover: "/tracks/single/Damaal Dumeel.png" },
  { id: 102, title: "DFWMF", year: 2023, type: "single", cover: "/tracks/single/DFWMF.png" },
  { id: 103, title: "Elchapo", year: 2023, type: "single", cover: "/tracks/single/Elchapo.png" },
];

export default function DiscographyPage() {
  const albums = releases.filter((r) => r.type === "album");
  const singles = releases.filter((r) => r.type === "single");

  return (
    <div className="bg-black text-white min-h-screen font-mono pb-16">
      {/* Header */}
      <header className="pt-24 md:pt-32 text-center">
        <h1 className="text-4xl md:text-7xl font-headline tracking-wider mb-12">
          DISCOGRAPHY
        </h1>
      </header>

      <main className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto space-y-20 sm:space-y-24">
        <Section title="Albums" releases={albums} />
        <Section title="Singles" releases={singles} />
      </main>

      <footer className="text-center mt-24 text-xs text-gray-500">
        <Link href="/" className="hover:text-brand-red transition-colors">
          &larr; Back to Home
        </Link>
      </footer>
    </div>
  );
}

function Section({
  title,
  releases,
}: {
  title: string;
  releases: Release[];
}) {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-headline tracking-wider mb-8 text-brand-red uppercase">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {releases.map((rel) => (
          <ReleaseCard key={rel.id} release={rel} />
        ))}
      </div>
    </section>
  );
}

function ReleaseCard({ release }: { release: Release }) {
  const [open, setOpen] = useState(false);

  const getLinks = () => {
    const linkMap: Record<string, Record<string, string>> = {
      "Neruppu Kumar": {
        spotify: "https://open.spotify.com/track/4GDyUOruJdpNu1tKH0VwZH?si=8a482abdc8b545df",
        apple: "https://music.apple.com/us/song/neruppu-feat-kalla-sha/1538786868",
        youtube: "https://www.youtube.com/watch?v=F98yPaWOLCw&list=OLAK5uy_nCVTgun2owevRns67B164clK74vEqb5hw"
      },
      "Neruppu 2": {
        spotify: "https://open.spotify.com/album/6Avtjei5Zymj7G7I1sbawk"
      },
      "Damaal Dumeel": {
        spotify: "https://open.spotify.com/album/7FtGIiblZpHznWtj4lsh4V",
        apple: "https://music.apple.com/us/album/dammal-dumeel-feat-kishore-thulasiraman-single/1777180280",
        youtube: "https://www.youtube.com/watch?v=xx80rtvWlfI"
      },
      "DFWMF": {
        spotify: "https://open.spotify.com/album/1UWggT5hwgbY3yha5HM2Qc",
        apple: "https://music.apple.com/us/album/dfwmf-feat-kalla-sha-single/1534899189",
        youtube: "https://www.youtube.com/watch?v=dhaFgQ8Oc-c"
      },
      "Elchapo": {
        spotify: "https://open.spotify.com/album/4gVjOlLINg9jN5qUF0Qmst",
        apple: "https://music.apple.com/us/album/el-chapo-single/1506434155",
        youtube: "https://www.youtube.com/watch?v=D_96uXQaElI"
      }
    };

    const links = linkMap[release.title];
    if (!links) return [];

    return [
      { platform: "Spotify", url: links.spotify },
      { platform: "Apple Music", url: links.apple },
      { platform: "YouTube", url: links.youtube }
    ];
  };

  const links = getLinks();

  return (
    <div
      className={`group border border-red-500/20 bg-zinc-900/50 hover:bg-red-900/20 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden shadow-lg rounded-lg ${
        open ? "shadow-red-700/30 scale-105" : "shadow-black/40"
      }`}
      onClick={() => setOpen((o) => !o)}
    >
      {/* Cover */}
      <div className="aspect-w-1 aspect-h-1 w-full bg-zinc-800 flex items-center justify-center text-gray-500 text-xs">
        {release.cover ? (
          <img 
            src={release.cover} 
            alt={release.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        ) : (
          "Cover Art"
        )}
      </div>

      {/* Title & Year */}
      <div className="p-4">
        <h3 className="font-bold tracking-wider truncate">{release.title}</h3>
        <p className="text-xs text-gray-400">{release.year}</p>
      </div>

      {/* Dropdown */}
      <div
        className={`transition-all duration-300 ease-in-out bg-black/80 border-t border-red-500/20 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4 grid gap-3 text-sm">
          {links.filter(link => link.url).map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-zinc-800/70 border border-red-500/30 p-3 rounded-md hover:bg-red-500/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{link.platform}</span>
              <span className="text-brand-red text-lg">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}