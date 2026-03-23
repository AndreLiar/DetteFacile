import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "var(--sage-bg)", color: "var(--text-primary)", minHeight: "100vh" }}>

      {/* ── Header ───────────────────────────────────────────── */}
      <header style={{
        background: "rgba(239,244,238,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--sage-border)",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34,
              height: 34,
              background: "var(--forest)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 4h10M3 8h7M3 12h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.25rem",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.01em",
            }}>DetteFacile</span>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}>
              ⚖ Droit français
            </span>
            <Link href="/form" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.88rem", borderRadius: 12 }}>
              Commencer
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 24px 88px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Floating blobs */}
        <div className="blob blob-float" style={{
          width: 340,
          height: 340,
          background: "var(--sage-light)",
          opacity: 0.7,
          top: -80,
          right: -60,
        }} />
        <div className="blob blob-float-slow" style={{
          width: 220,
          height: 220,
          background: "var(--sage-mid)",
          opacity: 0.4,
          bottom: 0,
          right: 200,
        }} />

        <div style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 48,
          alignItems: "center",
        }}>
          {/* Left */}
          <div style={{ maxWidth: 640 }}>
            <div className="fade-up tag" style={{ marginBottom: 28 }}>
              <span>🌿</span> Conforme au Code Civil français
            </div>

            <h1 className="fade-up fade-up-1" style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              color: "var(--forest)",
              margin: "0 0 20px",
            }}>
              Formalisez un prêt<br />
              entre proches —<br />
              <span style={{ color: "var(--sand)" }}>en toute sérénité.</span>
            </h1>

            <p className="fade-up fade-up-2" style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 500,
            }}>
              DetteFacile génère une <strong style={{ color: "var(--forest)", fontWeight: 700 }}>reconnaissance de dette légale</strong> prête
              à signer — sans notaire, sans complexité. Juste vous, votre proche, et un document clair.
            </p>

            <div className="fade-up fade-up-3" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <Link href="/form" className="btn-primary" style={{ fontSize: "1.05rem", padding: "17px 36px" }}>
                Créer mon document gratuitement
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Gratuit · Aucun compte · PDF téléchargeable
              </span>
            </div>
          </div>

          {/* Right — calm stat card */}
          <div className="fade-up fade-up-4 card" style={{
            padding: "40px 36px",
            textAlign: "center",
            minWidth: 190,
            flexShrink: 0,
          }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "5.5rem",
              fontWeight: 400,
              lineHeight: 1,
              color: "var(--forest)",
              letterSpacing: "-0.04em",
            }}>60</div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "var(--sand)",
              marginTop: 2,
            }}>secondes</div>
            <hr className="divider" style={{ margin: "16px 0" }} />
            <div style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: "0.02em",
            }}>Du formulaire au PDF<br />prêt à signer</div>
          </div>
        </div>
      </section>

      {/* ── Social proof strip ────────────────────────────────── */}
      <div style={{
        background: "var(--forest)",
        padding: "18px 24px",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          flexWrap: "wrap",
        }}>
          {[
            { v: "100%", l: "Données privées" },
            { v: "0€", l: "Coût pour l'utilisateur" },
            { v: "Art. 1359+", l: "Code Civil" },
            { v: "< 60s", l: "Temps de création" },
          ].map((item) => (
            <div key={item.l} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.3rem",
                color: "var(--white)",
                letterSpacing: "-0.02em",
              }}>{item.v}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(226,237,224,0.65)", fontWeight: 500 }}>{item.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ──────────────────────────────────────── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>Comment ça marche</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 400,
            color: "var(--forest)",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>
            Simple. Guidé. Rassurant.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            {
              step: "01",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              ),
              title: "Remplissez",
              desc: "3 étapes guidées. Vos informations, celles de l'emprunteur, le montant et les dates.",
            },
            {
              step: "02",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                </svg>
              ),
              title: "Votre document est généré",
              desc: "Une reconnaissance de dette conforme au Code Civil. Montant en chiffres et en lettres.",
            },
            {
              step: "03",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
              ),
              title: "Téléchargez & signez",
              desc: "Imprimez en 2 exemplaires. Les deux parties signent. Chacun garde l'original.",
            },
          ].map((s, i) => (
            <div key={s.step} className="card fade-up" style={{
              padding: "32px 28px",
              animationDelay: `${0.1 + i * 0.1}s`,
            }}>
              <div style={{
                width: 48,
                height: 48,
                background: "var(--sage-light)",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}>{s.icon}</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginBottom: 8,
              }}>Étape {s.step}</div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--forest)",
                margin: "0 0 10px",
                letterSpacing: "-0.01em",
              }}>{s.title}</h3>
              <p style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                margin: 0,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why DetteFacile ───────────────────────────────────── */}
      <section style={{
        background: "var(--white)",
        borderTop: "1px solid var(--sage-border)",
        borderBottom: "1px solid var(--sage-border)",
        padding: "88px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}>
            {/* Left text */}
            <div>
              <div className="tag" style={{ marginBottom: 20 }}>Pourquoi DetteFacile</div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 400,
                color: "var(--forest)",
                margin: "0 0 20px",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}>
                L&apos;argent entre proches<br />mérite un document clair.
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: "0 0 32px",
              }}>
                Ni trop formel pour paraître méfiant, ni trop informel pour manquer de valeur juridique.
                DetteFacile trouve le juste milieu — un document <em>humain</em> et <em>légal</em>.
              </p>
              <Link href="/form" className="btn-primary">
                Essayer maintenant
              </Link>
            </div>

            {/* Right features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "⚡", title: "Moins d'une minute", desc: "Du formulaire au PDF téléchargeable. Zéro friction." },
                { icon: "🔒", title: "Données 100% privées", desc: "Tout se passe dans votre navigateur. Rien n'est envoyé." },
                { icon: "📱", title: "Optimisé mobile", desc: "Installable sur votre téléphone, fonctionne hors ligne." },
                { icon: "⚖", title: "Valeur légale", desc: "Acte sous seing privé conforme aux articles 1359+ du Code Civil." },
              ].map((f) => (
                <div key={f.title} style={{
                  display: "flex",
                  gap: 16,
                  padding: "18px 20px",
                  background: "var(--sage-bg)",
                  borderRadius: 14,
                  border: "1px solid var(--sage-border)",
                }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0, lineHeight: 1.4 }}>{f.icon}</span>
                  <div>
                    <div style={{
                      fontWeight: 700,
                      color: "var(--forest)",
                      marginBottom: 3,
                      fontSize: "0.95rem",
                    }}>{f.title}</div>
                    <div style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Use cases ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.9rem",
            fontWeight: 400,
            color: "var(--forest)",
            margin: 0,
          }}>Pour quelles situations ?</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          {[
            "🤝 Prêt entre amis",
            "👨‍👩‍👧 Prêt familial",
            "🏠 Colocation",
            "💼 Arrangement professionnel",
            "🎓 Aide aux études",
            "🚗 Achat partagé",
            "🛠 Avance sur travaux",
          ].map((tag) => (
            <div key={tag} style={{
              background: "var(--white)",
              border: "1px solid var(--sage-border)",
              borderRadius: 50,
              padding: "10px 20px",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "var(--text-secondary)",
            }}>{tag}</div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section style={{
        maxWidth: 1100,
        margin: "0 auto 80px",
        padding: "0 24px",
      }}>
        <div style={{
          background: "var(--forest)",
          borderRadius: 28,
          padding: "64px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Blob decoration */}
          <div className="blob" style={{
            width: 300,
            height: 300,
            background: "rgba(255,255,255,0.04)",
            top: -80,
            right: -40,
          }} />
          <div className="blob" style={{
            width: 200,
            height: 200,
            background: "rgba(255,255,255,0.04)",
            bottom: -60,
            left: 40,
          }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "-0.02em",
              marginBottom: 12,
              lineHeight: 1.2,
            }}>
              Prêtez en confiance.<br />
              <span style={{ color: "var(--sage-light)" }}>Protégez votre relation.</span>
            </div>
            <p style={{
              color: "rgba(226,237,224,0.7)",
              fontSize: "1rem",
              marginBottom: 36,
              lineHeight: 1.6,
            }}>
              {"Gratuit, privé, et prêt en moins d'une minute."}
            </p>
            <Link href="/form" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--white)",
              color: "var(--forest)",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "17px 36px",
              borderRadius: 14,
              textDecoration: "none",
              transition: "transform 0.15s",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}>
              Créer mon document
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid var(--sage-border)",
        padding: "32px 24px",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "1.05rem",
          color: "var(--forest)",
          marginBottom: 8,
        }}>DetteFacile</div>
        <p style={{
          fontSize: "0.78rem",
          color: "var(--text-muted)",
          margin: 0,
          lineHeight: 1.7,
        }}>
          Générateur d&apos;acte sous seing privé · Ce document est un modèle.<br />
          Il ne remplace pas un conseil juridique professionnel.
        </p>
      </footer>
    </div>
  );
}
