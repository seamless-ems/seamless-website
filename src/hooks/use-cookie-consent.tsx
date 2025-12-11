import { useEffect, useState, useCallback } from "react";

const CONSENT_KEY = "cookie_consent";

export type Consent = "granted" | "denied" | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent>(() => {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      return raw === "granted" ? "granted" : raw === "denied" ? "denied" : null;
    } catch {
      return null;
    }
  });

  const accept = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, "granted");
    } catch {}
    setConsent("granted");
  }, []);

  const deny = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, "denied");
    } catch {}
    setConsent("denied");
  }, []);

  // inject gtag when consent granted
  useEffect(() => {
    if (consent !== "granted") return;

    // Avoid injecting multiple times
    if ((window as any).gtagLoaded) return;

    const id = "G-1Z576VEX5Q";
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${id}');`;
    document.head.appendChild(inline);

    (window as any).gtagLoaded = true;
  }, [consent]);

  return { consent, accept, deny } as const;
}

export default useCookieConsent;
