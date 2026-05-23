import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Taylor",
  description: "Design engineer based in NSW, Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}