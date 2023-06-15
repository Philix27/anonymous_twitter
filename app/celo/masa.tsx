"use client";
import React from "react";
import { MasaProvider } from "@masa-finance/masa-react";

export default function Masa() {
  return (
    <MasaProvider>
      <div>Masa</div>
    </MasaProvider>
  );
}
