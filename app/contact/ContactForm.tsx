"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes("@") || !message.trim()) {
      setStatus("error");
      return;
    }
    console.log("Contact", { name, email, message });
    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-white" htmlFor="contact-name">Navn</label>
        <input id="contact-name" name="contact-name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-xl bg-[var(--surface)] border border-white/6 px-3 py-2 text-white" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-white" htmlFor="contact-email">E-mail</label>
        <input id="contact-email" name="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-xl bg-[var(--surface)] border border-white/6 px-3 py-2 text-white" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-white" htmlFor="contact-message">Besked</label>
        <textarea id="contact-message" name="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 w-full rounded-xl bg-[var(--surface)] border border-white/6 px-3 py-2 text-white" required />
      </div>

      <div>
        <button type="submit" className="rounded-full bg-[var(--accent)] px-5 py-2 text-black font-semibold shadow-lg hover:brightness-105">Send besked</button>
      </div>

      {status === "success" && <p className="text-green-400">Besked sendt. Vi svarer hurtigst muligt.</p>}
      {status === "error" && <p className="text-rose-400">Udfyld alle felter korrekt.</p>}
    </form>
  );
}
