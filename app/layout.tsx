import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt">
      <body className="pt-20">
        {" "}
        {/* espaço para navbar fixa */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
