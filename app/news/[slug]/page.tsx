import { findNewsBySlug, NewsItem } from "../../../lib/data";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const article: NewsItem | null = findNewsBySlug(params.slug);
  if (!article) return { title: "Nyhed - Odense Løbeklub" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://example.com/news/${article.slug}`,
      images: [
        {
          url: "/file.svg",
          alt: article.title,
        },
      ],
    },
  };
}

export default function NewsArticle({ params }: Props) {
  const article = findNewsBySlug(params.slug);
  if (!article) return notFound();

  return (
    <article className="prose max-w-none prose-invert text-white">
      <h1 className="text-3xl font-bold text-white">{article.title}</h1>
      <p className="text-sm text-[var(--muted)]">{article.date}</p>
      <div className="mt-4 text-[var(--foreground)]">
        <p>{article.content}</p>
      </div>
    </article>
  );
}
