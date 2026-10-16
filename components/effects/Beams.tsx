"use client";

import React from "react";

/**
 * Beams — React Bits "Beams" interpretation.
 * Glossy diagonal ribbons drifting across the section, pure CSS.
 */
export function Beams() {
  return (
    <div aria-hidden="true" className="beams-root pointer-events-none">
      <div className="beams-ribbon" style={{ top: "16%" }} />
      <div className="beams-ribbon beams-ribbon--alt" style={{ top: "48%" }} />
      <div className="beams-ribbon beams-ribbon--soft" style={{ top: "74%" }} />
    </div>
  );
}
