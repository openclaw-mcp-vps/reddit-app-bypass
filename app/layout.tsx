import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean Reddit — No App Prompts",
  description: "Browse Reddit on mobile without annoying app download prompts. A clean, fast proxy experience."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="daab9f3e-3a7a-4c0c-a143-bc01d2931145"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
