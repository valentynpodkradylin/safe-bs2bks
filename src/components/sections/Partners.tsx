import Image from "next/image"
import { useTranslation } from "next-i18next"
import { Box, BoxProps, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { SectionHeader } from "../ui"

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: { base: "xl", md: "2xl" },
  p: { base: 4, md: 6 },
  border: "1px solid",
  borderColor: "slate.100",
  boxShadow: "0 24px 50px rgba(9, 34, 52, 0.06)",
}

const partnerKeys = [
  { key: "helcom", logo: "/partners/helcom.png", flag: "eu" },
  { key: "aarhus", logo: "/partners/aarhus.svg", flag: "dk" },
  { key: "liae", logo: "/partners/lhei.svg", flag: "lv" },
  { key: "ukrsces", logo: "/partners/ukrsces.png", flag: "ua" },
  { key: "imb", logo: "/partners/imb_nasu.png", flag: "ua" },
  { key: "icsa", logo: "/partners/icsanaas.png", flag: "ua" },
]

const FlagIcon = ({ code }: { code: string }) => (
  <Image
    src={`https://flagcdn.com/16x12/${code}.png`}
    alt=""
    width={16}
    height={12}
    style={{ display: "inline-block", verticalAlign: "middle", marginRight: "4px" }}
  />
)

const getInitials = (name: string) =>
  name
    .split(/[\s-]/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase()

const PartnerLogo = ({ logo, name }: { logo: string | null; name: string }) => {
  if (!logo) {
    return (
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        fontSize="2xl"
        fontWeight="bold"
        color="ocean.900"
      >
        {getInitials(name)}
      </Flex>
    )
  }

  return (
    <Box position="relative" w="100%" h="100%">
      <Image
        src={logo}
        alt={`${name} logo`}
        fill
        sizes="(max-width: 768px) 60vw, 200px"
        style={{ objectFit: "contain" }}
      />
    </Box>
  )
}

export const Partners = () => {
  const { t } = useTranslation("common")

  return (
    <Box id="partners" mb={{ base: 10, md: 24 }}>
      <SectionHeader label={t("partners.label")} title={t("partners.title")} />
      <SimpleGrid columns={{ base: 2, lg: 3 }} gap={{ base: 3, md: 6 }}>
        {partnerKeys.map((partner) => {
          const name = t(`partners.items.${partner.key}.name`)
          return (
            <Box
              key={partner.key}
              {...cardStyles}
              display="flex"
              flexDirection="column"
              gap={{ base: 2, md: 4 }}
            >
              <Flex
                align="center"
                justify="center"
                bg="slate.50"
                borderRadius={{ base: "lg", md: "xl" }}
                h={{ base: "70px", md: "120px" }}
                border="1px dashed"
                borderColor="slate.100"
                overflow="hidden"
                px={{ base: 2, md: 4 }}
              >
                <Box w="100%" h="100%" position="relative">
                  <PartnerLogo logo={partner.logo} name={name} />
                </Box>
              </Flex>
              <Heading size={{ base: "xs", md: "md" }} mb={0}>
                {name}
              </Heading>
              <Text color="slate.500" fontSize={{ base: "xs", md: "sm" }}>
                <FlagIcon code={partner.flag} />
                {t(`partners.items.${partner.key}.country`)}
              </Text>
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}
