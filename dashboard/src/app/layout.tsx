import type { Metadata } from "next";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { UserProvider } from "@/contexts/UserContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { DevConsoleFilter } from "@/components/DevConsoleFilter";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fde-toolkit.com"),
  title: {
    default: "FDE-Toolkit | Customer-to-code infrastructure for forward-deployed teams",
    template: "%s | FDE-Toolkit",
  },
  description:
    "FDE-Toolkit helps forward-deployed engineers, solutions teams, and product leaders turn customer workflows into governed software experiments and reviewable GitHub pull requests.",
  keywords: [
    "forward deployed engineering",
    "FDE platform",
    "enterprise AI deployment",
    "design partner software",
    "customer sandbox",
    "AI product development",
    "GitHub workflow",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://fde-toolkit.com",
    title: "FDE-Toolkit | Turn customer conversations into working software",
    description:
      "Isolated customer sandboxes, AI-assisted iteration, persistent product memory, and governed GitHub handoff for forward-deployed teams.",
    siteName: "FDE-Toolkit",
  },
  twitter: {
    card: "summary_large_image",
    title: "FDE-Toolkit | Customer-to-code infrastructure",
    description:
      "A governed operating layer for forward-deployed engineers, solutions teams, and enterprise design partners.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/fde-toolkit.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        var k = 'fde-toolkit-theme';
        var stored = localStorage.getItem(k);
        var dark = stored === 'dark' || (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.classList.toggle('dark', dark);
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
          suppressHydrationWarning
        />
        <ThemeProvider initialTheme="light">
          <ConvexClientProvider>
            <UserProvider>
              <TooltipProvider>
                <DevConsoleFilter />
                <div className="min-h-screen w-full flex flex-col">{children}</div>
                <Toaster />
              </TooltipProvider>
            </UserProvider>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
