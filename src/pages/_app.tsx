import { ChakraProvider, defaultSystem as defaultStyleSystem } from "@chakra-ui/react";
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${headingFont.variable} ${bodyFont.variable}`}>
      <ChakraProvider value={defaultStyleSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </div>
  );
}
