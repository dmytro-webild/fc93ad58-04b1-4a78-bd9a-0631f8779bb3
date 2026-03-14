import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Čištění vozidel Praha | Profesionální detailing',
  description: 'Profesionální čištění vozidel v Praze. Ruční mytí, tepování interiéru, keramická ochrana laku a VIP detailing. Vyzvednutí vozu v Praze zdarma. Objednávky telefonicky: +420 721 611 123',
};

const figtree = Figtree({
  variable: "--font-figtree",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}
