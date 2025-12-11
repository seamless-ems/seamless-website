import React from "react";
import useCookieConsent from "@/hooks/use-cookie-consent";

const CookieBanner = () => {
  const { consent, accept, deny } = useCookieConsent();

  // hide if user already decided
  if (consent) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 max-w-3xl w-[92%] bg-card/90 backdrop-blur-md border border-border rounded-2xl p-4 flex items-center gap-4 shadow-lg z-50">
      <div className="flex-1 text-sm text-foreground">
        We use cookies to improve your experience. Do you consent to analytics tracking?
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={deny}
          className="px-4 py-2 rounded-md border border-input bg-background text-foreground text-sm hover:bg-secondary/50 transition"
        >
          No
        </button>
        <button
          onClick={accept}
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm hover:brightness-95 transition"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
