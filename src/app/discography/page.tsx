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
  { id: 1, title: "FIRST CONTACT", year: 2023, type: "album" },
  { id: 2, title: "VOID SERIES", year: 2022, type: "album" },
  // Singles (type === "single")
  { id: 101, title: "DARK MATTER", year: 2024, type: "single" },
  { id: 102, title: "AFTERGLOW", year: 2023, type: "single" },
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

      <main className="px-4 md:px-8 max-w-6xl mx-auto space-y-24">
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
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {releases.map((rel) => (
          <ReleaseCard key={rel.id} release={rel} />
        ))}
      </div>
    </section>
  );
}

function ReleaseCard({ release }: { release: Release }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-red-500/30 bg-black/70 hover:bg-red-500/5 transition-colors cursor-pointer overflow-hidden shadow-lg ${
        open ? "shadow-red-500/50" : "shadow-black/40"
      }`}
      onClick={() => setOpen((o) => !o)}
    >
      {/* Cover */}
      <div className="h-48 w-full bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
        Cover Art
      </div>

      {/* Title & Year */}
      <div className="p-4 flex flex-col gap-1">
        <span className="font-bold tracking-wider">{release.title}</span>
        <span className="text-xs text-gray-400">{release.year}</span>
      </div>

      {/* Dropdown */}
      <div
        className={`transition-all duration-300 ease-in-out bg-black/80 border-t border-red-500/20 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4 grid gap-4 text-sm">
          <PlaceholderLink platform="Spotify" />
          <PlaceholderLink platform="YouTube" />
          <PlaceholderLink platform="Apple Music" />
        </div>
      </div>
    </div>
  );
}

function PlaceholderLink({ platform }: { platform: string }) {
  return (
    <div className="flex items-center justify-between bg-black border border-red-500/40 p-3 hover:bg-red-500/10 transition-colors">
      <span>{platform}</span>
      <span className="text-brand-red">▶︎</span>
    </div>
  );
}