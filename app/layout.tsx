import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CookiesData from "@/components/CookiesData";
import Script from "next/script";

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt" data-scroll-behavior="smooth">
      <body className="m-0 p-0">
        <Navbar />

        <main className="min-h-auto md:min-h-screen">{children}</main>

        <Footer />

        {/* BOTÃO GLOBAL */}
        <ScrollToTopButton />

        <CookiesData />
        {/* Script do Google Analytics*/}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5X1N882CSV"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-5X1N882CSV');
  `}
        </Script>
      </body>
    </html>
  );
}
