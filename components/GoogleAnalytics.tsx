"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  const checkConsent = () => {
    if (typeof window === "undefined") return;

    try {
      const data = localStorage.getItem("cookies_accepted");
      if (!data) return setEnabled(false);

      const parsed = JSON.parse(data);

      setEnabled(!!parsed.analytics);
    } catch {
      setEnabled(false);
    }
  };

  useEffect(() => {
    // verifica ao carregar
    checkConsent();

    // reage quando o modal atualiza cookies
    window.addEventListener("cookies_updated", checkConsent);

    return () => {
      window.removeEventListener("cookies_updated", checkConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5X1N882CSV"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('js', new Date());
          gtag('config', 'G-5X1N882CSV', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
