"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type DestinationOption = {
  slug: string;
  name: string;
  cities: Array<{ slug: string; name: string }>;
};

export default function MobilHomeDestinationSelector({
  destinations,
}: {
  destinations: DestinationOption[];
}) {
  const router = useRouter();
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const selectedDepartment = destinations.find((item) => item.slug === department);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!department) return;
    router.push(city ? `/mobil-home/${department}/${city}` : `/mobil-home/${department}`);
  }

  return (
    <form className="destination-selector" onSubmit={submit}>
      <div className="destination-selector-heading">
        <span>Recherche rapide</span>
        <strong>Où souhaitez-vous partir ?</strong>
      </div>
      <label>
        <span>Département</span>
        <select
          value={department}
          onChange={(event) => {
            setDepartment(event.target.value);
            setCity("");
          }}
          required
        >
          <option value="">Choisir un département</option>
          {destinations.map((destination) => (
            <option key={destination.slug} value={destination.slug}>
              {destination.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Ville</span>
        <select
          value={city}
          onChange={(event) => setCity(event.target.value)}
          disabled={!selectedDepartment || selectedDepartment.cities.length === 0}
        >
          <option value="">
            {selectedDepartment?.cities.length
              ? "Toutes les villes"
              : department
                ? "Voir tout le département"
                : "Choisir d’abord un département"}
          </option>
          {selectedDepartment?.cities.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={!department}>
        Voir les locations <span aria-hidden>→</span>
      </button>
    </form>
  );
}
