import Link from "next/link";
import { news } from "../../lib/data";

export const metadata = {
  title: "Nyheder - Odense Løbeklub",
  description: "Seneste opdateringer fra Odense Løbeklub",
  openGraph: {
    title: "Nyheder - Odense Løbeklub",
    description: "Seneste opdateringer fra Odense Løbeklub",
    url: "https://example.com/news",
    images: [
      { url: "/file.svg", alt: "Odense Løbeklub" },
    ],
  },
};

export default function NewsIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Nyheder</h1>
      <p className="text-[var(--muted)]">Seneste opdateringer fra Odense Løbeklub.</p>

      <ul className="mt-4 space-y-4">
        {news.map((item) => (
          <li key={item.slug} className="rounded-xl card p-4 shadow-lg transition hover:translate-y-[-2px]">
            <Link href={`/news/${item.slug}`} className="group block">
              <h2 className="text-lg font-semibold text-white group-hover:text-[var(--accent)]">{item.title}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.date} — {item.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
