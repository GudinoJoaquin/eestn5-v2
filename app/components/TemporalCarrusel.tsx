import React from "react";

import { CarruselStyles } from "../ui/styles";

export default function Temporal() {
  return (
    <>
      <div
        className={`${CarruselStyles.base} ${CarruselStyles.mobile} ${CarruselStyles.desktop}`}
      >
        <p>
          Las novedades sobre el nuevo regimen academico las encontraran en{" "}
          <b className="underline">Institucionales</b>
        </p>
      </div>
    </>
  );
}
