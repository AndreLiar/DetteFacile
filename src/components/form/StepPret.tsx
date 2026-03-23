"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { DebtFormData } from "@/lib/schema";
import { FieldInput } from "./FieldInput";

export function StepPret() {
  const {
    register,
    formState: { errors },
  } = useFormContext<DebtFormData>();

  const modalite = useWatch({ name: "pret.modalite" });
  const fieldErrors = errors.pret;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {/* Context banner */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        background: "var(--sage-light)",
        borderRadius: 12,
        marginBottom: 4,
      }}>
        <span style={{ fontSize: "1.3rem" }}>💰</span>
        <div>
          <div style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--text-muted)",
            marginBottom: 1,
          }}>Le prêt</div>
          <div style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "var(--forest)",
          }}>Montant et modalités</div>
        </div>
      </div>

      {/* Montant — big typographic input */}
      <div>
        <label htmlFor="montant" style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: fieldErrors?.montant ? "var(--sand)" : "var(--text-muted)",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: 8,
        }}>
          Montant prêté
        </label>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "12px 16px",
          border: `1.5px solid ${fieldErrors?.montant ? "var(--sand)" : "var(--sage-border)"}`,
          borderRadius: 12,
          background: fieldErrors?.montant ? "var(--sand-pale)" : "var(--sage-bg)",
          transition: "border-color 0.2s",
        }}
          onFocusCapture={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--forest)";
            (e.currentTarget as HTMLDivElement).style.background = "var(--white)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 3px rgba(26,61,43,0.08)";
          }}
          onBlurCapture={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = fieldErrors?.montant ? "var(--sand)" : "var(--sage-border)";
            (e.currentTarget as HTMLDivElement).style.background = fieldErrors?.montant ? "var(--sand-pale)" : "var(--sage-bg)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          <input
            id="montant"
            type="number"
            min="1"
            step="0.01"
            placeholder="1500"
            {...register("pret.montant", { valueAsNumber: true })}
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              fontSize: "1.8rem",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--forest)",
              outline: "none",
              letterSpacing: "-0.02em",
              minWidth: 0,
              lineHeight: 1,
              padding: "4px 0",
            }}
          />
          <span style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.4rem",
            color: "var(--text-muted)",
            lineHeight: 1,
          }}>€</span>
        </div>
        {fieldErrors?.montant && (
          <p style={{ fontSize: "0.78rem", color: "var(--sand)", margin: "6px 0 0", fontWeight: 500 }}>
            ⚠ {fieldErrors.montant.message}
          </p>
        )}
      </div>

      {/* Dates */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <FieldInput
          label="Date de remise"
          type="date"
          {...register("pret.dateRemise")}
          error={fieldErrors?.dateRemise?.message}
        />
        <FieldInput
          label="Date de remboursement"
          type="date"
          {...register("pret.dateRemboursement")}
          error={fieldErrors?.dateRemboursement?.message}
        />
      </div>

      {/* Modalité */}
      <div>
        <div style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "var(--text-muted)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginBottom: 10,
          fontFamily: "var(--font-body)",
        }}>Modalité de remboursement</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {(["unique", "echelonne"] as const).map((val) => {
            const selected = modalite === val;
            return (
              <label key={val} style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 16px",
                border: `1.5px solid ${selected ? "var(--forest)" : "var(--sage-border)"}`,
                borderRadius: 12,
                cursor: "pointer",
                background: selected ? "var(--sage-light)" : "var(--sage-bg)",
                transition: "all 0.2s",
              }}>
                <div style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `2px solid ${selected ? "var(--forest)" : "var(--sage-mid)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}>
                  {selected && (
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--forest)",
                    }} />
                  )}
                </div>
                <input
                  type="radio"
                  value={val}
                  {...register("pret.modalite")}
                  style={{ display: "none" }}
                />
                <span style={{
                  fontWeight: selected ? 700 : 500,
                  color: selected ? "var(--forest)" : "var(--text-secondary)",
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-body)",
                }}>
                  {val === "unique" ? "En une fois" : "En plusieurs fois"}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {modalite === "echelonne" && (
        <FieldInput
          label="Nombre d'échéances"
          type="number"
          min="2"
          placeholder="12"
          {...register("pret.nbEcheances", { valueAsNumber: true })}
          error={fieldErrors?.nbEcheances?.message}
        />
      )}

      <FieldInput
        label="Lieu de signature"
        placeholder="Paris"
        {...register("pret.lieuSignature")}
        error={fieldErrors?.lieuSignature?.message}
      />
    </div>
  );
}
