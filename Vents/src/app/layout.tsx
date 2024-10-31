import MainProvider from "@/Components/MainProvider";
import { Provider } from "@/Components/Provider";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "USA Vents Care",
  description: "USA Vents Care",
  icons: {
    icon: [
      {
        url: "/favicon.jpg",
        href: "/favicon.jpg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainProvider>
            <Navbar />
            {children}
            <Footer />
          </MainProvider>
        </Provider>
      </body>
    </html>
  );
};