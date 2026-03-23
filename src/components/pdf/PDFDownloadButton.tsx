"use client";

import dynamic from "next/dynamic";
import { DebtFormData } from "@/lib/schema";
import { ReconnaissanceDette } from "./ReconnaissanceDette";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
  { ssr: false }
);

interface Props {
  data: DebtFormData;
}

export function PDFDownloadButton({ data }: Props) {
  const today = new Date().toISOString().split("T")[0];
  const filename = `reconnaissance-dette-${today}.pdf`;

  return (
    <PDFDownloadLink
      document={<ReconnaissanceDette data={data} />}
      fileName={filename}
      style={{ textDecoration: "none", display: "block" }}
    >
      {({ loading }) => (
        <button
          disabled={loading}
          style={{
            width: "100%",
            padding: "18px 24px",
            background: loading ? "var(--sage-mid)" : "var(--sand)",
            border: "none",
            borderRadius: 14,
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            transition: "background 0.2s, transform 0.1s",
            boxShadow: loading ? "none" : "0 4px 20px rgba(200, 114, 74, 0.32)",
          }}
        >
          {loading ? (
            <>
              <svg style={{ animation: "spin 1s linear infinite", width: 18, height: 18 }} viewBox="0 0 24 24" fill="none">
                <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                <circle cx="12" cy="12" r="10" stroke="var(--text-muted)" strokeWidth="3" strokeDasharray="20 40" />
              </svg>
              <span style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
              }}>Génération en cours…</span>
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "white",
                letterSpacing: "-0.01em",
              }}>Télécharger le PDF</span>
            </>
          )}
        </button>
      )}
    </PDFDownloadLink>
  );
}
