import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt" data-scroll-behavior="smooth">
      <body className="m-0 p-0">
        <Navbar />

        <main className="min-h-auto md:min-h-screen">{children}</main>

        <Footer />

        {/* BOTÃO GLOBAL */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
