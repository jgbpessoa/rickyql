import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "../lib/ApolloWrapper";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Ricky and Morty",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
