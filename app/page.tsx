import Link from "next/link";
import { news, events } from "../lib/data";

export const metadata = {
  title: "Odense Løbeklub - Foreningsportal",
  description: "Velkommen til Odense Løbeklub — nyheder, events og kontakt.",
  openGraph: {
    title: "Odense Løbeklub",
    description: "Velkommen til Odense Løbeklub — nyheder, events og kontakt.",
    url: "https://example.com",
    images: [{ url: "/file.svg", alt: "Odense Løbeklub" }],
  },
};

export default function Home() {
  const upcoming = events.slice(0, 3);
  const latest = news.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <section className="rounded-2xl card p-8 shadow-2xl border-transparent">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white">Velkommen til Odense Løbeklub</h1>
            <p className="mt-3 text-lg text-[var(--muted)] max-w-xl">
              Vi er en lokal løbeklub i Odense for alle niveauer — fra begyndere til erfarne
              konkurrenceatleter. Her finder du nyheder, kommende events og muligheder for
              tilmelding.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/events" className="rounded-xl bg-[var(--accent)] px-4 py-2 text-black font-semibold shadow-lg hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-[rgba(255,122,24,0.18)]">Se kommende events</Link>
              <Link href="/news" className="rounded-xl border border-white/6 px-4 py-2 text-white hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-[rgba(102,255,153,0.08)]">Læs nyheder</Link>
            </div>
          </div>
          <div className="hidden md:block w-48 h-40 rounded-xl bg-gradient-to-tr from-[rgba(255,122,24,0.12)] to-transparent shadow-inner"></div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl card p-6 shadow-xl transition hover:translate-y-[-2px]">
          <h2 className="text-2xl font-semibold text-white">Kommende events</h2>
          <ul className="mt-4 space-y-4">
            {upcoming.map((ev) => (
              <li key={ev.id} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-white">{ev.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{ev.date} — {ev.location}</p>
                  </div>
                  <Link href={`/events#event-${ev.id}`} className="ml-4 rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-semibold text-black shadow">Tilmeld</Link>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{ev.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/events" className="text-sm font-medium text-[var(--accent)] hover:underline">Se alle events</Link>
          </div>
        </div>

        <div className="rounded-xl card p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">Seneste nyheder</h2>
          <ul className="mt-4 space-y-4">
            {latest.map((item) => (
              <li key={item.slug}>
                <Link href={`/news/${item.slug}`} className="group block">
                  <h3 className="font-medium text-white group-hover:text-[var(--accent)]">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.date} — {item.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/news" className="text-sm font-medium text-[var(--accent)] hover:underline">Se alle nyheder</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
