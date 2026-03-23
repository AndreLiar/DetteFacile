// Converts a number to French words (required by French law for debt documents)

const units = [
  "", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf",
  "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize",
  "dix-sept", "dix-huit", "dix-neuf",
];

const tens = [
  "", "", "vingt", "trente", "quarante", "cinquante",
  "soixante", "soixante", "quatre-vingt", "quatre-vingt",
];

function convertHundreds(n: number): string {
  if (n === 0) return "";
  if (n < 20) return units[n];

  const ten = Math.floor(n / 10);
  const unit = n % 10;

  if (ten === 7) {
    // 70-79: soixante-dix...
    return unit === 1
      ? "soixante et onze"
      : `soixante-${units[10 + unit]}`;
  }
  if (ten === 9) {
    // 90-99: quatre-vingt-dix...
    return `quatre-vingt-${units[10 + unit]}`.replace("quatre-vingt-", unit === 0 ? "quatre-vingts" : "quatre-vingt-");
  }
  if (ten === 8) {
    return unit === 0 ? "quatre-vingts" : `quatre-vingt-${units[unit]}`;
  }

  const tenStr = tens[ten];
  if (unit === 0) return tenStr;
  if (unit === 1 && ten !== 8) return `${tenStr} et un`;
  return `${tenStr}-${units[unit]}`;
}

function convertThousands(n: number): string {
  if (n === 0) return "zéro";

  const parts: string[] = [];

  const millions = Math.floor(n / 1_000_000);
  const thousands = Math.floor((n % 1_000_000) / 1_000);
  const hundreds = Math.floor((n % 1_000) / 100);
  const remainder = n % 100;

  if (millions > 0) {
    parts.push(millions === 1 ? "un million" : `${convertThousands(millions)} millions`);
  }

  if (thousands > 0) {
    if (thousands === 1) {
      parts.push("mille");
    } else {
      parts.push(`${convertHundreds(thousands)} mille`);
    }
  }

  if (hundreds > 0) {
    if (hundreds === 1) {
      parts.push("cent");
    } else {
      parts.push(`${units[hundreds]} cent${remainder === 0 ? "s" : ""}`);
    }
  }

  if (remainder > 0) {
    parts.push(convertHundreds(remainder));
  }

  return parts.join(" ");
}

export function numberToWordsFr(amount: number): string {
  const euros = Math.floor(amount);
  const cents = Math.round((amount - euros) * 100);

  let result = convertThousands(euros) + " euro" + (euros > 1 ? "s" : "");

  if (cents > 0) {
    result += ` et ${convertThousands(cents)} centime${cents > 1 ? "s" : ""}`;
  }

  // Capitalize first letter
  return result.charAt(0).toUpperCase() + result.slice(1);
}
