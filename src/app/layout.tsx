import type { Metadata } from "next";
import "./globals.css";
import ChatbotEmbed from "@/components/ChatbotEmbed";

export const metadata: Metadata = {
  title: "J Bizz Web Dev | AI-Powered Websites That Print Leads",
  description: "Florida's #1 AI web dev for realtors, contractors & coaches.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatbotEmbed />
      </body>
    </html>
  );
}