"use client";

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Kontakt bestyrelsen</h1>
      <p className="text-[var(--muted)]">Brug formularen nedenfor til at kontakte bestyrelsen i Odense Løbeklub.</p>

      <div className="mt-4 rounded-xl card p-6 shadow-xl">
        <ContactForm />
      </div>
    </div>
  );
}
