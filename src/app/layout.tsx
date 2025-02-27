import { Footer } from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { GlobalStyle, ResetStyle, ThemeProvider } from "@yamada-ui/core";
import defaultTheme, { defaultConfig } from "@yamada-ui/theme";
import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";

export const metadata: Metadata = {
  title: "Dango the World",
  description: "Dango the Worldのポートフォリオ",
};

const kosugiMaru = Kosugi_Maru({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={kosugiMaru.className}>
        <ThemeProvider theme={defaultTheme} config={defaultConfig}>
          <ResetStyle />
          <GlobalStyle />

          {children}
          <Navigation />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
