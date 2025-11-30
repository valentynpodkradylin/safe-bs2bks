import Head from "next/head"
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { Box, Container } from "@chakra-ui/react"
import {
  Hero,
  About,
  Objectives,
  Outputs,
  Partners,
  Impact,
  Contacts,
  Footer,
  PhotoBanner,
} from "@/components"

export default function Home() {
  const { t } = useTranslation("common")

  return (
    <>
      <Head>
        <title>SAFE-BS2BKS | {t("hero.title")}</title>
        <meta name="description" content={t("hero.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="ocean.900" color="white">
        <Hero />
        <Box as="main" bg="slate.50" color="slate.900">
          <Container maxW="6xl" py={{ base: 16, md: 24 }}>
            <About />

            <PhotoBanner
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=70"
              alt="Container ship at sea"
            />

            <Objectives />
            <Outputs />

            <PhotoBanner
              src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&q=70"
              alt="Cargo ship in port"
            />

            <Partners />
            <Impact />
            <Contacts />
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  }
}
