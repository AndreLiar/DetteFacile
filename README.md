# 🌿 DetteFacile

**Générateur de reconnaissance de dette légale en moins d'une minute**

DetteFacile permet aux particuliers français de créer facilement une reconnaissance de dette conforme au Code Civil français. Simple, rapide, et 100% privé.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-ready-purple?style=flat-square)

---

## ✨ Fonctionnalités

- 📝 **Formulaire guidé en 3 étapes** - Interface intuitive pour créer votre document
- 📄 **Génération PDF automatique** - Document légal prêt à imprimer en quelques secondes
- 🔒 **100% privé** - Toutes les données restent sur votre appareil, aucune transmission
- ⚖️ **Conforme au droit français** - Respecte les articles 1359+ du Code Civil
- 📱 **PWA installable** - Fonctionne hors ligne, installable sur mobile
- 🎨 **Design "Sage & Silence"** - Esthétique calme et rassurante pour un sujet sensible
- 🌍 **Responsive** - Optimisé mobile-first pour tous les appareils

---

## 🎨 Design System

### Palette "Sage & Silence"
- **Forest Green** (#1A3D2B) - Confiance et professionnalisme
- **Sage Background** (#EFF4EE) - Calme et sérénité
- **Warm Sand** (#C8724A) - Accent chaleureux et humain

### Typographie
- **Display**: Instrument Serif (italic) - Élégance accessible
- **Body**: Plus Jakarta Sans - Clarté et modernité

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repo
git clone https://github.com/AndreLiar/DetteFacile.git
cd DetteFacile

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 🛠 Stack technique

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Validation**: [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
- **PDF**: [@react-pdf/renderer](https://react-pdf.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) avec design tokens custom
- **PWA**: Service Worker natif pour offline-first

---

## 📁 Structure du projet

```
DetteFacile/
├── src/
│   ├── app/
│   │   ├── form/           # Formulaire multi-étapes
│   │   ├── preview/        # Aperçu et téléchargement
│   │   ├── globals.css     # Design system
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Page d'accueil
│   ├── components/
│   │   ├── form/           # Composants du formulaire
│   │   └── pdf/            # Génération PDF
│   └── lib/
│       ├── schema.ts       # Validation Zod
│       ├── formatDate.ts   # Formatage dates
│       └── numberToWords.ts # Conversion montants
├── public/
│   ├── icons/              # Icônes PWA
│   ├── manifest.json       # Manifest PWA
│   └── sw.js              # Service Worker
└── _bmad-output/          # Documentation produit
```

---

## 📖 Utilisation

1. **Remplir les informations** du prêteur (vous)
2. **Remplir les informations** de l'emprunteur
3. **Définir les modalités** du prêt (montant, dates, remboursement)
4. **Télécharger le PDF** généré
5. **Imprimer en 2 exemplaires** et faire signer les deux parties

---

## 🔐 Sécurité & Confidentialité

- ✅ **Aucune donnée n'est envoyée** à un serveur
- ✅ Traitement 100% client-side (navigateur)
- ✅ Pas de cookies, pas de tracking
- ✅ Code open source et auditable

---

## 🌍 Conformité légale

Les documents générés sont conformes au **Code Civil français** :
- Article 1359 (acte sous seing privé)
- Article 1376 (reconnaissance de dette)
- Montant en chiffres ET en lettres
- Signatures manuscrites obligatoires

⚠️ **Important** : Ce document est un modèle juridique. Pour des montants importants ou des situations complexes, consultez un professionnel du droit.

---

## 🚢 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Autres plateformes
Compatible avec toute plateforme supportant Next.js :
- Netlify
- Railway
- Cloudflare Pages
- VPS avec Docker

---

## 🤝 Contribution

Les contributions sont les bienvenues ! 

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 🙏 Remerciements

- Design inspiré par le mouvement "Calm Technology"
- Polices : [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- Communauté Next.js pour les outils incroyables

---

## 📬 Contact

Pour toute question ou suggestion :
- GitHub Issues : [Ouvrir un ticket](https://github.com/AndreLiar/DetteFacile/issues)
- Email : [Votre email]

---

<div align="center">
  <p>Fait avec 🌿 pour simplifier les prêts entre proches</p>
  <p><strong>Calme • Humain • Rassurant • Accessible</strong></p>
</div>
