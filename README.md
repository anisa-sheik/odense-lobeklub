# Odense Løbeklub — Offentlig Foreningsportal

Velkommen til Odense Løbeklubs officielle foreningsportal. Dette referenceprojekt demonstrerer en moderne, tilgængelig og SEO-venlig webfront til en lokal løbeklub med funktioner til nyheder, events, tilmelding og kontakt.

Hovedfunktioner

- Forside med klubintroduktion, overblik over kommende events og seneste nyheder.
- Nyhedssektion med dynamisk server-side rendering (SSR) for hver artikel, så artikler er SEO-venlige og kan deles individuelt.
- Eventkalender med individuelle tilmeldingsformularer per event.
- Kontaktside med beskedformular til bestyrelsen.

Teknologier

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vitest + Testing Library (enhedstest og komponenttest)

Kom godt i gang

Forudsætning: Node.js og NPM installeret.

1. Installer afhængigheder:

```powershell
npm install
```

2. Kør udviklings-serveren:

```powershell
npm run dev
```

Åbn `http://localhost:3000` i din browser.

Byg og kør i produktion

```powershell
npm run build
npm start
```

Test

Projektet bruger Vitest med `jsdom` til komponent- og enhedstest. Kør testene med:

```powershell
npm test
```

Eller direkte med Vitest (eksplicit jsdom):

```powershell
npx vitest --environment jsdom --run
```

Watch-tilstand under udvikling:

```powershell
npm run test:watch
```

Lint

```powershell
npm run lint
```

Vigtige filer og struktur

- Forside: [app/page.tsx](app/page.tsx)
- Layout & navigation: [app/layout.tsx](app/layout.tsx)
- Nyheder: [app/news](app/news)
- Events & tilmelding: [app/events](app/events)
- Kontakt: [app/contact](app/contact)

Vil du have CI (GitHub Actions) til automatisk at køre tests på push/PR, kan jeg oprette en workflow for dig.
