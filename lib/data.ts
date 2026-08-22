export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

export const news: NewsItem[] = [
  {
    slug: "vaer-med-til-motionsloeb",
    title: "Vær med til månedens motionsløb",
    date: "2026-09-12",
    excerpt: "Månedens motionsløb går gennem Munke Mose — tilmelding åben.",
    content:
      "Kom og vær med til vores hyggelige motionsløb gennem grønne områder. Alle niveauer er velkomne. Vi mødes ved Rådhuset kl. 18:00.",
  },
  {
    slug: "nye-traenere-2026",
    title: "Nye trænere i klubben 2026",
    date: "2026-08-01",
    excerpt: "Vi byder velkommen til to nye trænere i ungdomsafdelingen.",
    content:
      "De nye trænere har erfaring med både sprint og distance. Der er træning hver tirsdag og torsdag kl. 17:30.",
  },
  {
    slug: "sponsor-aftale",
    title: "Ny sponsor-aftale indgået",
    date: "2026-07-20",
    excerpt: "Vi har indgået en ny lokal sponsor-aftale med SportsOdense.",
    content:
      "Sponsoratet hjælper os med at købe nyt udstyr og arrangere motionsløb for lokalområdet.",
  },
];

export const events: EventItem[] = [
  {
    id: "1",
    title: "Månedsmotion - Munke Mose",
    date: "2026-09-12",
    location: "Munke Mose",
    description: "Hyggeligt løb for alle niveauer. Ruter på 5 km og 10 km.",
  },
  {
    id: "2",
    title: "Holdløb: Firkantløbet",
    date: "2026-10-03",
    location: "Rydsvej Stadion",
    description: "Holdstafet og sociale aktiviteter efter løbet.",
  },
  {
    id: "3",
    title: "Træningsweekend",
    date: "2026-11-14",
    location: "Munkebo Hallen",
    description: "Weekend med fokus på teknik, styrke og fællesskab.",
  },
];

export function findNewsBySlug(slug: string) {
  return news.find((n) => n.slug === slug) || null;
}
