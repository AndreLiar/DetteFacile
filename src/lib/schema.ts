import { z } from "zod";

const personneSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  prenom: z.string().min(1, "Le prénom est requis"),
  adresse: z.string().min(1, "L'adresse est requise"),
  ville: z.string().min(1, "La ville est requise"),
  codePostal: z
    .string()
    .regex(/^\d{5}$/, "Code postal invalide (5 chiffres)"),
});

export const debtFormSchema = z.object({
  preteur: personneSchema,
  emprunteur: personneSchema,
  pret: z.object({
    montant: z
      .number({ error: "Le montant est requis" })
      .positive("Le montant doit être positif")
      .max(10000000, "Montant trop élevé"),
    dateRemise: z.string().min(1, "La date de remise est requise"),
    dateRemboursement: z.string().min(1, "La date de remboursement est requise"),
    modalite: z.enum(["unique", "echelonne"]),
    nbEcheances: z.number().int().positive().optional(),
    lieuSignature: z.string().min(1, "Le lieu de signature est requis"),
  }),
});

export type DebtFormData = z.infer<typeof debtFormSchema>;
