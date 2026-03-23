"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DebtFormData } from "@/lib/schema";
import { PDFDownloadButton } from "@/components/pdf/PDFDownloadButton";
import { formatDateFr } from "@/lib/formatDate";
import { numberToWordsFr } from "@/lib/numberToWords";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "10px 0",
      borderBottom: "1px solid var(--sage-light)",
      gap: 16,
    }}>
      <span style={{
        fontSize: "0.72rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontWeight: 600,
        color: "var(--text-muted)",
        fontFamily: "var(--font-body)",
        flexShrink: 0,
      }}>{label}</span>
      <span style={{
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "0.95rem",
        fontWeight: 400,
        color: "var(--forest)",
        textAlign: "right",
      }}>{value}</span>
    </div>
  );
}

export default function PreviewPage() {
  const [data, setData] = useState<DebtFormData | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem("debtFormData");
    if (!stored) {
      router.replace("/form");
      return;
    }
    setData(JSON.parse(stored));
  }, [router]);

  if (!data || !mounted) return null;

  const { preteur, emprunteur, pret } = data;

  return (
    <div style={{ background: "var(--sage-bg)", minHeight: "100vh" }}>

      {/* Header */}
      <header style={{
        borderBottom: "1px solid var(--sage-border)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(239,244,238,0.9)",
        backdropFilter: "blur(10px)",
      }}>
        <a href="/" style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "1.25rem",
          fontWeight: 400,
          color: "var(--forest)",
          textDecoration: "none",
        }}>
          Dette<span style={{ color: "var(--sand)" }}>Facile</span>
        </a>
        <button
          onClick={() => router.push("/form")}
          style={{
            fontSize: "0.8rem",
            color: "var(--text-secondary)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            textDecoration: "underline",
          }}
        >
          ← Modifier
        </button>
      </header>

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "48px 16px 80px" }}>

        {/* Success headline */}
        <div className="fade-up" style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "var(--forest)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span style={{
              fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase",
              fontWeight: 600, color: "var(--forest)", fontFamily: "var(--font-body)",
            }}>Document prêt</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            margin: 0,
            color: "var(--forest)",
          }}>
            Votre reconnaissance<br />de dette est générée.
          </h1>
        </div>

        {/* Summary card */}
        <div className="fade-up fade-up-1 card">
          {/* Parties */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderBottom: "1px solid var(--sage-border)",
          }}>
            {[
              { role: "Prêteur", p: preteur },
              { role: "Emprunteur", p: emprunteur },
            ].map(({ role, p }) => (
              <div key={role} style={{
                padding: "24px 24px",
                borderRight: role === "Prêteur" ? "1px solid var(--sage-border)" : "none",
              }}>
                <div style={{
                  fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  fontWeight: 600, color: "var(--text-muted)", marginBottom: 8,
                  fontFamily: "var(--font-body)",
                }}>{role}</div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  fontWeight: 400,
                  color: "var(--forest)",
                  marginBottom: 4,
                }}>{p.prenom} {p.nom}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {p.adresse}<br />{p.codePostal} {p.ville}
                </div>
              </div>
            ))}
          </div>

          {/* Details */}
          <div style={{ padding: "4px 24px 16px" }}>
            <DetailRow label="Montant" value={pret.montant?.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })} />
            <DetailRow label="En lettres" value={numberToWordsFr(pret.montant)} />
            <DetailRow label="Date de remise" value={formatDateFr(pret.dateRemise)} />
            <DetailRow label="Remboursement" value={formatDateFr(pret.dateRemboursement)} />
            <DetailRow
              label="Modalité"
              value={pret.modalite === "unique" ? "En une fois" : `En ${pret.nbEcheances} échéances`}
            />
            <DetailRow label="Lieu" value={pret.lieuSignature} />
          </div>
        </div>

        {/* Download */}
        <div className="fade-up fade-up-2" style={{ marginBottom: 20 }}>
          <PDFDownloadButton data={data} />
        </div>

        {/* What next */}
        <div className="fade-up fade-up-3" style={{
          background: "var(--sage-light)",
          border: "1px solid var(--sage-border)",
          borderRadius: 14,
          padding: "20px 24px",
          marginBottom: 24,
        }}>
          <div style={{
            fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase",
            fontWeight: 600, color: "var(--text-muted)", marginBottom: 12,
            fontFamily: "var(--font-body)",
          }}>Que faire ensuite ?</div>
          <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "Imprimez le document en 2 exemplaires",
              "Les deux parties signent chaque exemplaire",
              "Chacun conserve un original signé",
            ].map((step, i) => (
              <li key={i} style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
              }}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Info card instead of PDF preview */}
        <div className="hidden md:block fade-up fade-up-4 card" style={{ padding: "32px 28px", textAlign: "center" }}>
          <div style={{
            width: 56,
            height: 56,
            background: "var(--sage-light)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
            </svg>
          </div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.3rem",
            fontWeight: 400,
            color: "var(--forest)",
            margin: "0 0 8px",
          }}>Document prêt</h3>
          <p style={{
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            margin: 0,
          }}>
            Cliquez sur le bouton ci-dessus pour télécharger<br />
            votre reconnaissance de dette au format PDF.
          </p>
        </div>
      </main>
    </div>
  );
}
