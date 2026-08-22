import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odense Løbeklub - Foreningsportal",
  description: "Officiel foreningsportal for Odense Løbeklub: nyheder, events og kontakt.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="da"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex min-h-screen flex-col bg-slate-900 bg-[var(--background)] text-[var(--foreground)]">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white/5 p-2 rounded shadow-md text-[var(--foreground)]">
          Spring til indhold
        </a>
        <header className="backdrop-blur-sm border-b border-white/6">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" aria-label="Odense Løbeklub - Forside" className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              <span className="inline-block rounded-md bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Odense</span>
              <span className="ml-2 text-[var(--foreground)]">Løbeklub</span>
            </Link>
            <nav aria-label="Hovednavigation">
              <ul className="flex gap-3">
                <li>
                  <Link href="/news" className="px-3 py-2 rounded-md text-sm hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-[rgba(255,122,24,0.12)]">Nyheder</Link>
                </li>
                <li>
                  <Link href="/events" className="px-3 py-2 rounded-md text-sm hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-[rgba(255,122,24,0.12)]">Events</Link>
                </li>
                <li>
                  <Link href="/contact" className="px-3 py-2 rounded-md text-sm hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-[rgba(255,122,24,0.12)]">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
          {children}
        </main>

        <footer className="border-t border-white/6">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-[var(--muted)]">
            <p>© {new Date().getFullYear()} Odense Løbeklub — Kontakt bestyrelsen via kontaktsiden.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
