"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { DebtFormData } from "@/lib/schema";
import { numberToWordsFr } from "@/lib/numberToWords";
import { formatDateFr } from "@/lib/formatDate";

Font.register({
  family: "Times New Roman",
  src: "https://fonts.gstatic.com/s/timesnewroman/v1/TimesNewRoman.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 70,
    lineHeight: 1.6,
    color: "#1a1a1a",
  },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    textDecoration: "underline",
    marginBottom: 30,
    letterSpacing: 1,
  },
  section: {
    marginBottom: 18,
  },
  paragraph: {
    marginBottom: 10,
    textAlign: "justify",
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  signatureBlock: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signatureBox: {
    width: "45%",
  },
  signatureLabel: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    fontSize: 10,
  },
  signatureLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 6,
    height: 40,
  },
  mention: {
    fontSize: 9,
    color: "#555",
    marginTop: 40,
    textAlign: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  luApprouve: {
    fontSize: 10,
    fontFamily: "Helvetica-Oblique",
    marginBottom: 4,
    color: "#333",
  },
});

interface Props {
  data: DebtFormData;
}

export function ReconnaissanceDette({ data }: Props) {
  const { preteur, emprunteur, pret } = data;

  const preteurNom = `${preteur.prenom} ${preteur.nom}`;
  const emprunteurNom = `${emprunteur.prenom} ${emprunteur.nom}`;
  const preteurAdresse = `${preteur.adresse}, ${preteur.codePostal} ${preteur.ville}`;
  const emprunteurAdresse = `${emprunteur.adresse}, ${emprunteur.codePostal} ${emprunteur.ville}`;

  const montantChiffres = pret.montant.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  const montantLettres = numberToWordsFr(pret.montant);

  const modaliteText =
    pret.modalite === "unique"
      ? `en une seule fois`
      : `en ${pret.nbEcheances ?? "plusieurs"} échéances`;

  return (
    <Document
      title="Reconnaissance de Dette"
      author="DetteFacile"
      subject="Reconnaissance de dette — acte sous seing privé"
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>RECONNAISSANCE DE DETTE</Text>

        <View style={styles.section}>
          <Text style={styles.paragraph}>
            Je soussigné(e),{" "}
            <Text style={styles.bold}>{emprunteurNom}</Text>, demeurant au{" "}
            <Text style={styles.bold}>{emprunteurAdresse}</Text>,
          </Text>
          <Text style={styles.paragraph}>
            reconnais avoir reçu ce jour de{" "}
            <Text style={styles.bold}>{preteurNom}</Text>, demeurant au{" "}
            <Text style={styles.bold}>{preteurAdresse}</Text>,
          </Text>
          <Text style={styles.paragraph}>
            la somme de{" "}
            <Text style={styles.bold}>{montantChiffres}</Text> ({montantLettres}),
          </Text>
          <Text style={styles.paragraph}>
            à titre de prêt, dont je reconnais avoir pris possession le{" "}
            <Text style={styles.bold}>{formatDateFr(pret.dateRemise)}</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.paragraph}>
            Je m&apos;engage à rembourser cette somme {modaliteText}, et au plus
            tard le{" "}
            <Text style={styles.bold}>
              {formatDateFr(pret.dateRemboursement)}
            </Text>
            , à{" "}
            <Text style={styles.bold}>{preteurNom}</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.paragraph}>
            Le présent acte est établi conformément aux articles 1359 et suivants
            du Code civil français. En cas de litige, les parties conviennent de
            rechercher une solution amiable avant tout recours judiciaire.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.paragraph}>
            Fait à{" "}
            <Text style={styles.bold}>{pret.lieuSignature}</Text>, le{" "}
            <Text style={styles.bold}>{formatDateFr(new Date().toISOString().split("T")[0])}</Text>.
          </Text>
        </View>

        <View style={styles.signatureBlock}>
          <View style={styles.signatureBox}>
            <Text style={styles.signatureLabel}>Le prêteur :</Text>
            <Text style={styles.bold}>{preteurNom}</Text>
            <Text style={styles.luApprouve}>Lu et approuvé,</Text>
            <View style={styles.signatureLine} />
            <Text style={{ fontSize: 9, color: "#666" }}>Signature</Text>
          </View>

          <View style={styles.signatureBox}>
            <Text style={styles.signatureLabel}>L&apos;emprunteur :</Text>
            <Text style={styles.bold}>{emprunteurNom}</Text>
            <Text style={styles.luApprouve}>Lu et approuvé,</Text>
            <View style={styles.signatureLine} />
            <Text style={{ fontSize: 9, color: "#666" }}>Signature</Text>
          </View>
        </View>

        <Text style={styles.mention}>
          Document généré par DetteFacile — acte sous seing privé — à faire
          signer en deux exemplaires originaux.
        </Text>
      </Page>
    </Document>
  );
}
