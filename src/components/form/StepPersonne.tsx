"use client";

import { useFormContext } from "react-hook-form";
import { DebtFormData } from "@/lib/schema";
import { FieldInput } from "./FieldInput";

interface Props {
  role: "preteur" | "emprunteur";
}

const config = {
  preteur: {
    emoji: "👤",
    title: "Le prêteur",
    subtitle: "Qui prête l'argent ?",
    color: "var(--forest)",
  },
  emprunteur: {
    emoji: "🤝",
    title: "L'emprunteur",
    subtitle: "Qui reçoit l'argent ?",
    color: "var(--forest)",
  },
};

export function StepPersonne({ role }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<DebtFormData>();

  const fieldErrors = errors[role];
  const c = config[role];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        background: "var(--sage-light)",
        borderRadius: 12,
        marginBottom: 4,
      }}>
        <span style={{ fontSize: "1.3rem" }}>{c.emoji}</span>
        <div>
          <div style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--text-muted)",
            marginBottom: 1,
          }}>{c.title}</div>
          <div style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "var(--forest)",
            fontWeight: 400,
          }}>{c.subtitle}</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <FieldInput
          label="Prénom"
          placeholder="Marie"
          {...register(`${role}.prenom`)}
          error={fieldErrors?.prenom?.message}
        />
        <FieldInput
          label="Nom"
          placeholder="Dupont"
          {...register(`${role}.nom`)}
          error={fieldErrors?.nom?.message}
        />
      </div>

      <FieldInput
        label="Adresse"
        placeholder="12 rue de la Paix"
        {...register(`${role}.adresse`)}
        error={fieldErrors?.adresse?.message}
      />

      <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 14 }}>
        <FieldInput
          label="Code postal"
          placeholder="75001"
          maxLength={5}
          {...register(`${role}.codePostal`)}
          error={fieldErrors?.codePostal?.message}
        />
        <FieldInput
          label="Ville"
          placeholder="Paris"
          {...register(`${role}.ville`)}
          error={fieldErrors?.ville?.message}
        />
      </div>
    </div>
  );
}
