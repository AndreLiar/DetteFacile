# PRD — DetteFacile
> Phase 2 — Planning Output | Agent: John (Product Manager)

---

## Product Overview

**Product:** DetteFacile
**Type:** PWA (Progressive Web App)
**Goal:** Permettre à n'importe qui de créer une reconnaissance de dette légale en moins de 60 secondes.

---

## MVP Scope

### In scope
- Formulaire de saisie des données du prêt
- Génération d'un PDF de reconnaissance de dette conforme
- Téléchargement du PDF
- PWA installable sur mobile (Android/iOS)
- Utilisation offline

### Out of scope (v1)
- Authentification / comptes utilisateur
- Stockage cloud des documents
- Signature électronique
- Envoi par email
- Multi-langue (FR only pour MVP)

---

## User Stories

### Epic 1 — PWA Infrastructure
- US-01 : En tant qu'utilisateur mobile, je peux installer DetteFacile sur mon écran d'accueil comme une app native
- US-02 : En tant qu'utilisateur, je peux utiliser l'app sans connexion internet
- US-03 : En tant qu'utilisateur, le chargement initial est rapide (< 2s)

### Epic 2 — Formulaire de reconnaissance de dette
- US-04 : En tant que prêteur, je peux saisir mes informations (nom, prénom, adresse)
- US-05 : En tant que prêteur, je peux saisir les informations de l'emprunteur
- US-06 : En tant que prêteur, je peux saisir le montant prêté (en euros)
- US-07 : En tant que prêteur, je peux définir une date de remboursement
- US-08 : En tant que prêteur, je peux ajouter des modalités de remboursement (en une fois / en plusieurs fois)
- US-09 : En tant qu'utilisateur, je vois une prévisualisation du document avant téléchargement

### Epic 3 — Génération & Téléchargement PDF
- US-10 : En tant qu'utilisateur, je peux générer un PDF conforme à partir du formulaire rempli
- US-11 : En tant qu'utilisateur, le PDF généré contient toutes les mentions légales requises
- US-12 : En tant qu'utilisateur, je peux télécharger le PDF sur mon appareil
- US-13 : En tant qu'utilisateur, le PDF est formaté proprement et prêt à imprimer/signer

### Epic 4 — UI/UX
- US-14 : En tant qu'utilisateur, l'interface est claire, rassurante et mobile-first
- US-15 : En tant qu'utilisateur, je suis guidé étape par étape (wizard / stepper)
- US-16 : En tant qu'utilisateur, je reçois des messages d'erreur clairs si un champ est manquant
- US-17 : En tant qu'utilisateur, je vois une page de confirmation/succès après la génération

---

## Reconnaissance de dette — Contenu légal requis (droit français)

Conformément aux articles 1359 et suivants du Code Civil français, une reconnaissance de dette doit contenir :

1. Identité complète du prêteur (nom, prénom, adresse)
2. Identité complète de l'emprunteur (nom, prénom, adresse)
3. Montant de la somme empruntée (en chiffres ET en lettres)
4. Date de remise des fonds
5. Date ou modalités de remboursement
6. Lieu et date de signature
7. Signature manuscrite des deux parties (mention "Lu et approuvé")

---

## Success Metrics (MVP)

| Metric | Target |
|---|---|
| Documents générés / semaine | > 10 (semaine 1) |
| Taux de complétion du formulaire | > 70% |
| Temps moyen de création | < 60 secondes |
| Score de satisfaction (qualitatif) | Positif |

---

## Contraintes techniques

- Next.js 16 (App Router)
- Tailwind CSS
- next-pwa
- Génération PDF côté client (pas de backend pour MVP)
- Déploiement : Vercel
