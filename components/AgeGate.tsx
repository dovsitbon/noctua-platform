"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const KEY = "age-ok";

// Page d'entrée 18+. Attention : en France (loi SREN, référentiel ARCOM), une
// simple déclaration ne suffit pas pour un site pornographique ; il faudra brancher
// un vrai prestataire de vérification d'âge à la place de ce bouton.
export default function AgeGate() {
  const [state, setState] = useState<"loading" | "ask" | "ok">("loading");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(localStorage.getItem(KEY) === "1" ? "ok" : "ask");
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = state === "ok" ? "" : "hidden";
  }, [state]);

  if (state === "ok") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-title"
      className="fixed inset-0 z-50 grid place-items-center bg-bg/95 px-5 backdrop-blur-xl"
    >
      {state === "ask" && (
        <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-8">
          <p className="font-display text-3xl">{site.name}</p>
          <h1 id="age-title" className="mt-6 text-xl font-semibold">
            Ce site est réservé aux adultes
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Il contient des vidéos à caractère sexuel. Pour entrer, tu dois avoir au moins 18 ans
            (ou l&apos;âge de la majorité dans ton pays) et accepter de voir ce type de contenu.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              autoFocus
              onClick={() => {
                localStorage.setItem(KEY, "1");
                setState("ok");
              }}
              className="flex flex-1 items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              J&apos;ai 18 ans, entrer
            </button>
            <a
              href="https://www.google.com"
              className="flex flex-1 items-center justify-center rounded-lg border border-line px-5 py-3 text-sm font-medium text-muted transition hover:text-ink"
            >
              Quitter
            </a>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            Parents : des outils de contrôle parental gratuits existent, voir{" "}
            <a className="underline" href="https://www.jeprotegemonenfant.gouv.fr" rel="noopener">
              jeprotegemonenfant.gouv.fr
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
