"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { debtFormSchema, DebtFormData } from "@/lib/schema";
import { Stepper } from "@/components/form/Stepper";
import { StepPersonne } from "@/components/form/StepPersonne";
import { StepPret } from "@/components/form/StepPret";

const STEPS = ["Prêteur", "Emprunteur", "Le prêt"];
const STEP_FIELDS: Array<(keyof DebtFormData)[]> = [
  ["preteur"],
  ["emprunteur"],
  ["pret"],
];

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const methods = useForm<DebtFormData>({
    resolver: zodResolver(debtFormSchema),
    defaultValues: {
      preteur: { nom: "", prenom: "", adresse: "", ville: "", codePostal: "" },
      emprunteur: { nom: "", prenom: "", adresse: "", ville: "", codePostal: "" },
      pret: {
        montant: undefined,
        dateRemise: "",
        dateRemboursement: "",
        modalite: "unique",
        lieuSignature: "",
      },
    },
    mode: "onBlur",
  });

  const { trigger, handleSubmit } = methods;

  const goNext = async () => {
    const valid = await trigger(STEP_FIELDS[currentStep - 1]);
    if (valid) setCurrentStep((s) => s + 1);
  };

  const goPrev = () => setCurrentStep((s) => s - 1);

  const onSubmit = (data: DebtFormData) => {
    sessionStorage.setItem("debtFormData", JSON.stringify(data));
    router.push("/preview");
  };

  return (
    <div style={{ background: "var(--sage-bg)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <header style={{
        borderBottom: "1px solid var(--sage-border)",
        padding: "0 24px",
        background: "rgba(239,244,238,0.9)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: 600,
          margin: "0 auto",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <a href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            textDecoration: "none",
          }}>
            <div style={{
              width: 30,
              height: 30,
              background: "var(--forest)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 3h9M2 6.5h6M2 10h4" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "var(--forest)",
            }}>DetteFacile</span>
          </a>
          <span style={{
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            fontWeight: 600,
          }}>
            {currentStep} / {STEPS.length}
          </span>
        </div>
      </header>

      {/* Main */}
      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 16px 80px",
      }}>
        <div style={{ width: "100%", maxWidth: 520 }}>

          {/* Stepper */}
          <div className="fade-up" style={{ marginBottom: 8 }}>
            <Stepper currentStep={currentStep} steps={STEPS} />
          </div>

          {/* Form card */}
          <div className="card fade-up fade-up-1" style={{ padding: "32px 28px" }}>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {currentStep === 1 && <StepPersonne role="preteur" />}
                {currentStep === 2 && <StepPersonne role="emprunteur" />}
                {currentStep === 3 && <StepPret />}

                {/* Navigation */}
                <div style={{
                  display: "flex",
                  gap: 10,
                  marginTop: 32,
                  paddingTop: 24,
                  borderTop: "1px solid var(--sage-light)",
                }}>
                  {currentStep > 1 && (
                    <button type="button" onClick={goPrev} className="btn-ghost" style={{ flex: 1 }}>
                      ← Précédent
                    </button>
                  )}

                  {currentStep < 3 ? (
                    <button type="button" onClick={goNext} className="btn-primary" style={{
                      flex: 2,
                      justifyContent: "center",
                    }}>
                      Suivant
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M3 7.5h9M8 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ) : (
                    <button type="submit" style={{
                      flex: 2,
                      padding: "16px 24px",
                      background: "var(--sand)",
                      border: "none",
                      borderRadius: 14,
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      letterSpacing: "0.01em",
                      boxShadow: "0 4px 16px rgba(200, 114, 74, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "background 0.2s, transform 0.15s",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1z" stroke="white" strokeWidth="1.5"/>
                        <path d="M4 6h8M4 9h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Générer mon document
                    </button>
                  )}
                </div>
              </form>
            </FormProvider>
          </div>

          {/* Privacy note */}
          <p style={{
            textAlign: "center",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            marginTop: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L2 3v3c0 2.5 1.8 4.5 4 5 2.2-.5 4-2.5 4-5V3L6 1z" stroke="var(--text-muted)" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            Vos données ne quittent jamais votre appareil
          </p>
        </div>
      </main>
    </div>
  );
}
