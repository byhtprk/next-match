import type { Metadata } from "next";
import "./globals.css";
import Providers from "../components/Providers";
import TopNav from '../components/navbar/TopNav';

export const metadata: Metadata = {
  title: "NextMatch",
  description: "Next js Match App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <TopNav/>
          <main className="container mx-auto pt-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
