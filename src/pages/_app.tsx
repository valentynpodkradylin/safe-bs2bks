import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { Space_Grotesk, Inter } from "next/font/google";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const customSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        ocean: {
          50: { value: "#e6f1ff" },
          100: { value: "#bfd9ff" },
          200: { value: "#97c1ff" },
          300: { value: "#6fa9ff" },
          400: { value: "#4791ff" },
          500: { value: "#2d78e6" },
          600: { value: "#1f5db4" },
          700: { value: "#134282" },
          800: { value: "#082851" },
          900: { value: "#02101f" },
        },
        aqua: {
          50: { value: "#e4fbff" },
          100: { value: "#bdf3ff" },
          200: { value: "#94e9ff" },
          300: { value: "#6bdfff" },
          400: { value: "#42d5fa" },
          500: { value: "#28bbdf" },
          600: { value: "#1c91ad" },
          700: { value: "#12687b" },
          800: { value: "#084048" },
          900: { value: "#01191a" },
        },
        slate: {
          50: { value: "#f8fafc" },
          100: { value: "#f1f5f9" },
          200: { value: "#e2e8f0" },
          300: { value: "#cbd5f5" },
          400: { value: "#94a3b8" },
          500: { value: "#64748b" },
          600: { value: "#475569" },
          700: { value: "#334155" },
          800: { value: "#1e293b" },
          900: { value: "#0f172a" },
        },
      },
      radii: {
        pill: { value: "999px" },
      },
    },
    semanticTokens: {
      colors: {
        "chakra-body-text": {
          value: { base: "slate.900", _dark: "slate.50" },
        },
        "chakra-body-bg": {
          value: { base: "white", _dark: "ocean.900" },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${headingFont.variable} ${bodyFont.variable}`}>
      <ChakraProvider value={customSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </div>
  );
}
