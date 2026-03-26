import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

type Locale = "en" | "uk";

type MetaByLocale = {
  title: string;
  description: string;
  ogLocale: string;
  alternateOgLocale: string;
};

const META: Record<Locale, MetaByLocale> = {
  en: {
    title: "SAFE-BS2BKS | Baltic Solutions to the Black Sea",
    description:
      "SAFE-BS2BKS transfers proven Baltic approaches for managing sea-dumped munitions to the Black Sea, strengthening marine environmental security and protection of sensitive ecosystems.",
    ogLocale: "en_US",
    alternateOgLocale: "uk_UA",
  },
  uk: {
    title: "SAFE-BS2BKS | Балтійські рішення для Чорного моря",
    description:
      "SAFE-BS2BKS впроваджує перевірені балтійські підходи до управління затопленими боєприпасами в Чорному морі, посилюючи екологічну безпеку та захист чутливих морських екосистем.",
    ogLocale: "uk_UA",
    alternateOgLocale: "en_US",
  },
};

type AppDocumentProps = DocumentInitialProps & {
  locale: Locale;
  siteUrl: string;
};

class AppDocument extends Document<AppDocumentProps> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<AppDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = (ctx.locale ?? ctx.defaultLocale ?? "en") as Locale;
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
      "http://localhost:3000";

    return {
      ...initialProps,
      locale: locale === "uk" ? "uk" : "en",
      siteUrl,
    };
  }

  render() {
    const locale = this.props.locale ?? "en";
    const siteUrl = this.props.siteUrl ?? "http://localhost:3000";
    const meta = META[locale];
    const ogImage = `${siteUrl}/image.png`;

    return (
      <Html lang={locale} suppressHydrationWarning>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          />

          <meta name="description" content={meta.description} />
          <meta
            name="keywords"
            content="SAFE-BS2BKS, Baltic Sea, Black Sea, sea-dumped munitions, marine environmental security, HELCOM, Україна, Чорне море, екологічна безпека, затоплені боєприпаси"
          />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#0A2740" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="SAFE-BS2BKS" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="897" />
          <meta property="og:image:height" content="898" />
          <meta property="og:image:alt" content={meta.title} />
          <meta property="og:locale" content={meta.ogLocale} />
          <meta
            property="og:locale:alternate"
            content={meta.alternateOgLocale}
          />

          <link rel="canonical" href={siteUrl} />
          <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
          <link rel="alternate" hrefLang="uk" href={`${siteUrl}/uk`} />
          <link rel="alternate" hrefLang="x-default" href={siteUrl} />

          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-title" content="SAFE-BS2BKS" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
