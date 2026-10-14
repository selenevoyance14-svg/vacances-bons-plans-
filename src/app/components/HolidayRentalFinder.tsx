"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ACCOMMODATION_ROUTES: Record<string, string> = {
  maison: "/locations-vacances/france",
  chalet: "/locations-vacances/montagne",
  villa: "/locations-vacances/villa-piscine",
  groupe: "/locations-vacances/grande-famille",
};

const PRIORITY_ROUTES: Record<string, string> = {
  mer: "/locations-vacances/bord-de-mer",
  montagne: "/locations-vacances/montagne",
  chien: "/locations-vacances/avec-chien",
  piscine: "/locations-vacances/villa-piscine",
  famille: "/locations-vacances/grande-famille",
};

export default function HolidayRentalFinder() {
  const router = useRouter();
  const [accommodation, setAccommodation] = useState("maison");
  const [priority, setPriority] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(PRIORITY_ROUTES[priority] ?? ACCOMMODATION_ROUTES[accommodation]);
  }

  return (
    <form className="destination-selector home-rental-finder" onSubmit={submit}>
      <div className="destination-selector-heading">
        <span>Moteur de recherche</span>
        <strong>Trouvez votre location de vacances</strong>
      </div>
      <label>
        <span>Je cherche</span>
        <select value={accommodation} onChange={(event) => setAccommodation(event.target.value)}>
          <option value="maison">Une maison de vacances</option>
          <option value="chalet">Un chalet à la montagne</option>
          <option value="villa">Une villa avec piscine</option>
          <option value="groupe">Une grande maison</option>
        </select>
      </label>
      <label>
        <span>Ma priorité</span>
        <select value={priority} onChange={(event) => setPriority(event.target.value)}>
          <option value="">Voir toutes les possibilités</option>
          <option value="mer">Être près de la mer</option>
          <option value="montagne">Partir à la montagne</option>
          <option value="chien">Emmener mon chien</option>
          <option value="piscine">Avoir une piscine</option>
          <option value="famille">Partir en grande famille</option>
        </select>
      </label>
      <button type="submit">Trouver ma location <span aria-hidden>→</span></button>
    </form>
  );
}
