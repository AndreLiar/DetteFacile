import { forwardRef } from "react";

interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  ({ label, error, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor={inputId} style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: error ? "var(--sand)" : "var(--text-muted)",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}>
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          {...props}
          style={{
            width: "100%",
            padding: "13px 16px",
            border: `1.5px solid ${error ? "var(--sand)" : "var(--sage-border)"}`,
            borderRadius: 12,
            background: error ? "var(--sand-pale)" : "var(--sage-bg)",
            fontSize: "1rem",
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
            outline: "none",
            transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
            ...props.style,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--forest)";
            e.currentTarget.style.background = "var(--white)";
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(26,61,43,0.08)";
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? "var(--sand)" : "var(--sage-border)";
            e.currentTarget.style.background = error ? "var(--sand-pale)" : "var(--sage-bg)";
            e.currentTarget.style.boxShadow = "none";
            props.onBlur?.(e);
          }}
        />
        {error && (
          <p style={{
            fontSize: "0.78rem",
            color: "var(--sand)",
            margin: 0,
            fontFamily: "var(--font-body)",
            fontWeight: 500,
          }}>⚠ {error}</p>
        )}
      </div>
    );
  }
);

FieldInput.displayName = "FieldInput";
