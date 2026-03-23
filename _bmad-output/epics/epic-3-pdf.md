# Epic 3 — PDF Generation & Download
> Agent: Bob (Scrum Master)

**Goal:** Generate a legally-structured PDF recognition of debt from form data, downloadable client-side.

---

## Stories

### STORY-11 — Number to words utility (fr)
- Implement `lib/numberToWords.ts` converting a number to French text
- e.g. 1500 → "mille cinq cents"
- Required by French law (montant en lettres)
- Status: TODO

### STORY-12 — PDF template component
- Build `components/pdf/ReconnaissanceDette.tsx` using @react-pdf/renderer
- Include all legally required mentions (see architecture.md)
- Montant en chiffres AND en lettres
- Signature zones for both parties
- Styled, print-ready
- Status: TODO

### STORY-13 — PDF preview page
- Route: `/preview`
- Render PDF inline using `<PDFViewer>` on desktop
- Mobile: show document summary + download button only
- Status: TODO

### STORY-14 — PDF download button
- `components/pdf/PDFDownloadButton.tsx`
- Uses `<PDFDownloadLink>` from @react-pdf/renderer
- Filename: `reconnaissance-dette-[date].pdf`
- Loading state while PDF is generating
- Status: TODO
