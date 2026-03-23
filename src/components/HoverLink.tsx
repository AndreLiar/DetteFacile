"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";

interface Props {
  href: string;
  baseStyle: CSSProperties;
  hoverStyle: CSSProperties;
  children: React.ReactNode;
}

export function HoverLink({ href, baseStyle, hoverStyle, children }: Props) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{ ...baseStyle, ...(hovered ? hoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}
