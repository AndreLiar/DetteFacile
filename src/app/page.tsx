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
              Droit français
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
              Tu as déjà prêté de l&apos;argent à un proche sans document ?
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
              Les personnes sérieuses<br />
              protègent leurs proches —<br />
              <span style={{ color: "var(--sand)" }}>et leur relation.</span>
            </h1>

            <p className="fade-up fade-up-2" style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 500,
            }}>
              La plupart des prêts entre amis finissent par créer des tensions. Pas parce que les gens sont malhonnêtes — mais parce qu&apos;il n&apos;y avait aucun document clair. DetteFacile génère une <strong style={{ color: "var(--forest)", fontWeight: 700 }}>reconnaissance de dette légale</strong> en moins de 60 secondes — sans notaire, sans complexité.
            </p>

            <div className="fade-up fade-up-3" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <Link href="/form" className="btn-primary" style={{ fontSize: "1.05rem", padding: "17px 36px" }}>
                Créer mon document gratuitement
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Pas besoin d&apos;être juriste. Pas besoin de notaire. 60 secondes suffisent.
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

      {/* ── La réalité section ────────────────────────────────── */}
      <section style={{
        background: "var(--white)",
        borderTop: "1px solid var(--sage-border)",
        borderBottom: "1px solid var(--sage-border)",
        padding: "72px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}>
            <div>
              <div className="tag" style={{ marginBottom: 20 }}>La réalité</div>
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
                La plupart des gens font<br />confiance à leur mémoire.<br />
                <span style={{ color: "var(--sand)" }}>Les autres font confiance à un document.</span>
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: "0 0 24px",
              }}>
                Ce n&apos;est pas un manque de confiance envers votre proche. C&apos;est exactement le contraire — c&apos;est ce qui <em>préserve</em> la confiance, même si les souvenirs divergent dans 6 mois.
              </p>
              <p style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                margin: 0,
                fontStyle: "italic",
                fontFamily: "var(--font-display)",
              }}>
                &ldquo;On s&apos;en souviendra&rdquo; — c&apos;est ce que pensent ceux qui perdent leurs amis.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { stat: "1 sur 3", label: "prêts entre proches créent des conflits durables", highlight: true },
                { stat: "76%", label: "des gens regrettent de ne pas avoir formalisé un prêt", highlight: false },
                { stat: "0€", label: "c'est ce que coûte la protection avec DetteFacile", highlight: false },
              ].map((item) => (
                <div key={item.stat} style={{
                  padding: "20px 24px",
                  background: item.highlight ? "var(--forest)" : "var(--sage-bg)",
                  borderRadius: 14,
                  border: `1px solid ${item.highlight ? "var(--forest)" : "var(--sage-border)"}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    color: item.highlight ? "var(--white)" : "var(--forest)",
                    minWidth: 70,
                    letterSpacing: "-0.03em",
                  }}>{item.stat}</div>
                  <div style={{
                    fontSize: "0.9rem",
                    color: item.highlight ? "rgba(226,237,224,0.85)" : "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            On va éviter le jargon juridique.<br />Juste ce qu&apos;il faut, dans l&apos;ordre.
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
              <div className="tag" style={{ marginBottom: 20 }}>Pour les personnes organisées</div>
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
                Ce n&apos;est pas parce que<br />tu ne fais pas confiance.<br />
                <span style={{ color: "var(--sand)" }}>C&apos;est parce que tu tiens à eux.</span>
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                margin: "0 0 32px",
              }}>
                Beaucoup pensent qu&apos;exiger un document, c&apos;est manquer de confiance. En réalité, c&apos;est l&apos;inverse — c&apos;est protéger la relation, pas seulement l&apos;argent. Les personnes qui formalisent leurs prêts gardent leurs amis. Les autres croient que ça n&apos;arrive qu&apos;aux autres.
              </p>
              <Link href="/form" className="btn-primary">
                Je suis quelqu&apos;un de sérieux →
              </Link>
            </div>

            {/* Right features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "Moins d'une minute", desc: "Du formulaire au PDF téléchargeable. Zéro friction." },
                { title: "Données 100% privées", desc: "Tout se passe dans votre navigateur. Rien n'est envoyé." },
                { title: "Optimisé mobile", desc: "Installable sur votre téléphone, fonctionne hors ligne." },
                { title: "Valeur légale", desc: "Acte sous seing privé conforme aux articles 1359+ du Code Civil." },
              ].map((f) => (
                <div key={f.title} style={{
                  display: "flex",
                  gap: 16,
                  padding: "18px 20px",
                  background: "var(--sage-bg)",
                  borderRadius: 14,
                  border: "1px solid var(--sage-border)",
                }}>
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
            "Prêt entre amis",
            "Prêt familial",
            "Colocation",
            "Arrangement professionnel",
            "Aide aux études",
            "Achat partagé",
            "Avance sur travaux",
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

      {/* ── PWA Installation Guide ───────────────────────────── */}
      <section style={{
        maxWidth: 1100,
        margin: "0 auto 80px",
        padding: "0 24px",
      }}>
        <div className="card" style={{ padding: "48px 32px", overflow: "hidden", position: "relative" }}>
          {/* Background decoration */}
          <div className="blob blob-float" style={{
            width: 200,
            height: 200,
            background: "var(--sage-light)",
            opacity: 0.5,
            top: -40,
            right: -30,
          }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="tag" style={{ marginBottom: 16, display: "inline-flex" }}>
                Application mobile
              </div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 400,
                color: "var(--forest)",
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}>
                Installez l&apos;app sur votre téléphone
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                margin: 0,
                lineHeight: 1.6,
              }}>
                Accédez à DetteFacile comme une vraie app, même hors ligne
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
            }}>
              {/* iPhone Guide */}
              <div style={{
                background: "var(--sage-bg)",
                borderRadius: 16,
                padding: "28px 24px",
                border: "1px solid var(--sage-border)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    background: "var(--forest)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M13.5 1C12.9 1.6 11.8 2 10.9 2C10.8 1.4 11.1 0.6 11.6 0C12.2 -0.6 13.4 -1 14.2 -1C14.3 -0.4 14 0.4 13.5 1ZM14.1 2.1C12.5 2 11.1 3.1 10.3 3.1C9.5 3.1 8.3 2.1 6.9 2.1C5 2.2 3.2 3.3 2.2 5C0.2 8.4 1.7 13.5 3.6 16.3C4.5 17.7 5.6 19.2 7 19.2C8.3 19.2 8.8 18.4 10.5 18.4C12.2 18.4 12.6 19.2 14 19.2C15.5 19.2 16.5 17.9 17.4 16.5C18.1 15.4 18.4 14.3 18.4 14.3C18.4 14.3 15.9 13.3 15.9 10.4C15.9 7.9 17.9 6.8 18 6.8C16.8 4.9 14.9 4.7 14.1 4.7V2.1Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--forest)",
                    margin: 0,
                  }}>iPhone / iPad</h3>
                </div>

                <ol style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}>
                  {[
                    "Ouvrez dette-facile.vercel.app dans Safari",
                    "Appuyez sur le bouton Partager (en bas)",
                    "Sélectionnez \"Sur l'écran d'accueil\"",
                    "Confirmez - l'app apparaît sur votre écran",
                  ].map((step, i) => (
                    <li key={i} style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-body)",
                    }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Android Guide */}
              <div style={{
                background: "var(--sage-bg)",
                borderRadius: 16,
                padding: "28px 24px",
                border: "1px solid var(--sage-border)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    background: "var(--forest)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M0.5 4.5C0.5 3.4 1.4 2.5 2.5 2.5H15.5C16.6 2.5 17.5 3.4 17.5 4.5V15.5C17.5 16.6 16.6 17.5 15.5 17.5H2.5C1.4 17.5 0.5 16.6 0.5 15.5V4.5Z" stroke="white" strokeWidth="1.5"/>
                      <path d="M11.5 0L13.5 2.5M6.5 0L4.5 2.5M2.5 17.5V19.5M15.5 17.5V19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--forest)",
                    margin: 0,
                  }}>Android</h3>
                </div>

                <ol style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}>
                  {[
                    "Ouvrez dette-facile.vercel.app dans Chrome",
                    "Appuyez sur le menu (3 points en haut)",
                    "Sélectionnez \"Installer l'application\"",
                    "Confirmez - l'app s'installe automatiquement",
                  ].map((step, i) => (
                    <li key={i} style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-body)",
                    }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Benefits */}
            <div style={{
              marginTop: 32,
              padding: "20px 24px",
              background: "var(--sage-light)",
              borderRadius: 12,
              border: "1px solid var(--sage-mid)",
            }}>
              <div style={{
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: 12,
                fontFamily: "var(--font-body)",
              }}>Avantages de l&apos;installation</div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}>
                {[
                  "Accès instantané",
                  "Fonctionne hors ligne",
                  "Icône sur l'écran",
                  "Plus rapide",
                ].map((benefit) => (
                  <div key={benefit} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}>
                    <div style={{
                      width: 6,
                      height: 6,
                      background: "var(--forest)",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                      fontFamily: "var(--font-body)",
                    }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Micro-yes funnel ──────────────────────────────────── */}
      <section style={{
        maxWidth: 860,
        margin: "0 auto 40px",
        padding: "0 24px",
      }}>
        <div className="card" style={{ padding: "48px 40px", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "var(--text-muted)",
            marginBottom: 32,
            letterSpacing: "-0.01em",
          }}>Avant de continuer, dis-moi juste...</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40, textAlign: "left" }}>
            {[
              "Tu veux protéger ta relation, pas juste ton argent ?",
              "Tu préfères avoir un document clair plutôt que de te fier à ta mémoire ?",
              "Tu es prêt en moins de 60 secondes ?",
            ].map((question, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "16px 20px",
                background: "var(--sage-bg)",
                borderRadius: 12,
                border: "1px solid var(--sage-border)",
              }}>
                <div style={{
                  width: 24,
                  height: 24,
                  background: "var(--forest)",
                  borderRadius: 6,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}>{question}</span>
              </div>
            ))}
          </div>

          <Link href="/form" className="btn-primary" style={{ fontSize: "1.05rem", padding: "17px 40px" }}>
            Oui — créer mon document maintenant
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div style={{ marginTop: 14, fontSize: "0.78rem", color: "var(--text-muted)" }}>
            Gratuit · Aucun compte · Données 100% privées
          </div>
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
              Les personnes sérieuses<br />ne laissent pas le hasard décider.<br />
              <span style={{ color: "var(--sage-light)" }}>Elles formalisent.</span>
            </div>
            <p style={{
              color: "rgba(226,237,224,0.7)",
              fontSize: "1rem",
              marginBottom: 36,
              lineHeight: 1.6,
            }}>
              {"Ce document ne coûte rien. L'absence de document, elle, peut tout coûter."}
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
              Créer mon document — gratuitement
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
