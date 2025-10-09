import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Ricky – Developer",
    template: "%s · Ricky",
  },
  description: "Next.js portfolio — Data, ML, and full-stack projects.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://your-domain.com",
    title: "Ricky – Developer",
    description: "Portfolio: Next.js, FastAPI, dbt, ML, and cloud projects.",
    images: [
      { url: "/api/og?title=Ricky%20Portfolio", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_handle", // ← optional: set your handle
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white`}
      >
        {/* a11y: keyboard users can jump to main content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black"
        >
          Skip to content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main id="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
