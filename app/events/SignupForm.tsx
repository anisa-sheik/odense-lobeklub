"use client";

import { useState } from "react";

type Props = {
  eventId: string;
  eventTitle: string;
};

export default function SignupForm({ eventId, eventTitle }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // For now: simulate successful signup. Replace with real API call as needed.
    console.log("Signup", { eventId, name, email, team });
    setStatus("success");
    setName("");
    setEmail("");
    setTeam("");
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="mt-4 space-y-3" aria-labelledby={`signup-${eventId}`}>
      <div>
        <label htmlFor={`name-${eventId}`} className="block text-sm font-medium text-white">Fulde navn</label>
        <input id={`name-${eventId}`} name={`name-${eventId}`} value={name} onChange={(e) => setName(e.target.value)} required aria-required="true" className="mt-1 w-full rounded-xl bg-[var(--surface)] border border-white/6 px-3 py-2 text-white focus:ring-4 focus:ring-[rgba(255,122,24,0.12)]" />
      </div>

      <div>
        <label htmlFor={`email-${eventId}`} className="block text-sm font-medium text-white">E-mail</label>
        <input id={`email-${eventId}`} name={`email-${eventId}`} value={email} onChange={(e) => setEmail(e.target.value)} type="email" required aria-required="true" className="mt-1 w-full rounded-xl bg-[var(--surface)] border border-white/6 px-3 py-2 text-white focus:ring-4 focus:ring-[rgba(255,122,24,0.12)]" />
      </div>

      <div>
        <label htmlFor={`team-${eventId}`} className="block text-sm font-medium text-white">Hold (valgfrit)</label>
        <input id={`team-${eventId}`} value={team} onChange={(e) => setTeam(e.target.value)} className="mt-1 w-full rounded-xl bg-[var(--surface)] border border-white/6 px-3 py-2 text-white" />
      </div>

      <div>
        <button type="submit" className="rounded-full bg-[var(--accent)] px-5 py-2 text-black font-semibold shadow-lg hover:brightness-105">Tilmeld</button>
      </div>

      {status === "success" && <p className="text-green-400">Tilmelding modtaget. Tak!</p>}
      {status === "error" && <p className="text-amber-300">Udfyld venligst navn og en gyldig e-mail.</p>}
    </form>
  );
}
