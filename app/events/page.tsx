"use client";

import SignupForm from "./SignupForm";
import { events } from "../../lib/data";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Events & Kalender</h1>
      <p className="text-[var(--muted)]">Tilmeld dig kommende løb og klubarrangementer.</p>

      <div className="mt-4 space-y-6">
        {events.map((ev) => (
          <section id={`event-${ev.id}`} key={ev.id} className="rounded-xl card p-4 shadow-xl">
            <header>
              <h2 className="text-xl font-semibold text-white">{ev.title}</h2>
              <p className="text-sm text-[var(--muted)]">{ev.date} — {ev.location}</p>
            </header>
            <p className="mt-2 text-[var(--muted)]">{ev.description}</p>
            <div className="mt-3">
              <h3 id={`signup-${ev.id}`} className="text-sm font-medium text-white">Tilmeld dig</h3>
              <SignupForm eventId={ev.id} eventTitle={ev.title} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
