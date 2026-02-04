import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ILEAGENT - Nigeria's Premier Rental Property Marketplace",
  description: "Connect with verified landlords, tenants, and real estate agents. Secure escrow protection, digital leases, and verified properties.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
