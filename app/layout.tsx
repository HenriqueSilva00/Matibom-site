import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt">
      <body className="m-0 p-0">
        {" "}
        {/* espaço para navbar fixa */}
        <Navbar />
        <main className="min-h-auto md:min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
