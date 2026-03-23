# Epic 2 — Multi-step Form
> Agent: Bob (Scrum Master)

**Goal:** A guided, mobile-first 3-step form collecting all data required for the recognition of debt.

---

## Stories

### STORY-05 — Zod schema definition
- Define `DebtFormData` schema in `lib/schema.ts`
- Include all fields: prêteur, emprunteur, montant, dates, modalité, lieu
- Status: TODO

### STORY-06 — Step indicator (Stepper)
- Visual step indicator showing current step (1/3, 2/3, 3/3)
- Accessible, mobile-friendly
- Status: TODO

### STORY-07 — Step 1: Info prêteur
- Fields: nom, prénom, adresse, ville, code postal
- Validation inline (react-hook-form + zod)
- "Suivant" button disabled until valid
- Status: TODO

### STORY-08 — Step 2: Info emprunteur
- Same fields as Step 1 but for the emprunteur
- "Précédent" returns to Step 1 without data loss
- Status: TODO

### STORY-09 — Step 3: Montant & modalités
- Fields: montant (€), date de remise, date de remboursement, modalité (unique/échelonné), nb d'échéances (conditionnel), lieu de signature
- Status: TODO

### STORY-10 — Form state persistence (session)
- Store form data in sessionStorage so page refresh doesn't lose data
- Status: TODO
