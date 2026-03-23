interface StepperProps {
  currentStep: number;
  steps: string[];
}

export function Stepper({ currentStep, steps }: StepperProps) {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div style={{ marginBottom: 40 }}>
      {/* Progress bar */}
      <div style={{
        height: 4,
        background: "var(--sage-light)",
        borderRadius: 4,
        marginBottom: 20,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(to right, var(--forest), var(--forest-light))",
          borderRadius: 4,
          width: `${Math.max(progress, 3)}%`,
          transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }} />
      </div>

      {/* Step labels */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {steps.map((label, index) => {
          const step = index + 1;
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;

          return (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: isCompleted || isCurrent ? "var(--forest)" : "var(--sage-light)",
                border: `2px solid ${isCompleted || isCurrent ? "var(--forest)" : "var(--sage-mid)"}`,
                transition: "all 0.3s",
                flexShrink: 0,
              }}>
                {isCompleted ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    fontWeight: 400,
                    color: isCurrent ? "white" : "var(--text-muted)",
                    lineHeight: 1,
                  }}>{step}</span>
                )}
              </div>
              <span style={{
                fontSize: "0.78rem",
                fontWeight: isCurrent ? 700 : 500,
                color: isCurrent ? "var(--forest)" : isCompleted ? "var(--forest-light)" : "var(--text-muted)",
                transition: "color 0.3s",
                fontFamily: "var(--font-body)",
              }}>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
