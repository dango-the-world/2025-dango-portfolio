import { GlobalStyle, ResetStyle, ThemeProvider } from "@yamada-ui/core";
import defaultTheme, { defaultConfig } from "@yamada-ui/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dango the World",
  description: "Dango the Worldのポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider theme={defaultTheme} config={defaultConfig}>
          <ResetStyle />
          <GlobalStyle />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
