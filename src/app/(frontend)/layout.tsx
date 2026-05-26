import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/Footer";
import { LoaderExtensionProvider } from "@/components/loader-extension-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "ZerofAI",
    template: "%s | ZerofAI",
  },
  description:
    "The autonomous enterprise consciousness — operating in production for Fortune 100 enterprises today.",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "overflow-x-hidden", poppins.variable)}
    >
      <body className="min-w-0 overflow-x-hidden">
        <ThemeProvider defaultTheme="system">
          <LoaderExtensionProvider>
            <Header />
            {children}
            <Footer />
          </LoaderExtensionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
