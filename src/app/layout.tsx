import { ThemeProvider } from "@/Components/ThemeProvider";
import Session from "@/Components/Session";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T3 Nest.JS App",
  description: "Full Stack T3 Nest.JS App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Session>
            {children}
          </Session>
        </ThemeProvider>
      </body>
    </html>
  )
};