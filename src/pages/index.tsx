import Head from "next/head"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { Box, Container } from "@chakra-ui/react"
import {
  Hero,
  About,
  Objectives,
  News,
  TrainingSession,
  Outputs,
  Partners,
  Impact,
  Contacts,
  Footer,
  PhotoBanner,
} from "@/components"

type HomeProps = {
  siteUrl: string
  currentLocale: "en" | "uk"
  ogLocale: "en_US" | "uk_UA"
  alternateOgLocale: "en_US" | "uk_UA"
}

const SITE_URL = "https://safe-bs2bks.vercel.app"

export default function Home({
  siteUrl,
  currentLocale,
  ogLocale,
  alternateOgLocale,
}: HomeProps) {
  const { t } = useTranslation("common")
  const title = `SAFE-BS2BKS | ${t("hero.title")}`
  const description = t("hero.description")
  const keywords =
    currentLocale === "uk"
      ? "SAFE-BS2BKS, Балтійське море, Чорне море, затоплені боєприпаси, екологічна безпека, HELCOM, Україна"
      : "SAFE-BS2BKS, Baltic Sea, Black Sea, sea-dumped munitions, marine environmental security, HELCOM, Ukraine"
  const ogImageUrl = `${siteUrl}/safe-bs2bks-logo-mini.png`
  const isUk = currentLocale === "uk"
  const canonicalUrl = isUk ? `${siteUrl}/uk` : siteUrl
  const enUrl = siteUrl
  const ukUrl = `${siteUrl}/uk`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SAFE-BS2BKS" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="897" />
        <meta property="og:image:height" content="898" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:locale:alternate" content={alternateOgLocale} />

        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="uk" href={ukUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </Head>
      <Box bg="ocean.900" color="white">
        <Hero />
        <Box as="main" bg="slate.50" color="slate.900">
          <Container maxW="6xl" py={{ base: 16, md: 24 }}>
            <About />

            <PhotoBanner
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=70"
              alt="Underwater marine ecosystem"
              parallax
            />

            <Objectives />
            <News />
            <TrainingSession />
            <Outputs />

            <PhotoBanner
              src="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1600&q=70"
              alt="Ocean waves and marine environment"
              parallax
            />

            <Partners />

            <PhotoBanner
              src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1800&q=75"
              alt="Marine research and underwater monitoring in the Black Sea region"
              parallax
              parallaxDirection="diagonal"
            />

            <Impact />
            <Contacts />
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const normalizedLocale = locale === "uk" ? "uk" : "en"

  return {
    props: {
      ...(await serverSideTranslations(normalizedLocale, ["common"])),
      siteUrl: SITE_URL,
      currentLocale: normalizedLocale,
      ogLocale: normalizedLocale === "uk" ? "uk_UA" : "en_US",
      alternateOgLocale: normalizedLocale === "uk" ? "en_US" : "uk_UA",
    },
  }
}
