import Image from "next/image"
import { Box, BoxProps, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { SectionHeader } from "../ui"

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: "2xl",
  p: 6,
  border: "1px solid",
  borderColor: "slate.100",
  boxShadow: "0 24px 50px rgba(9, 34, 52, 0.06)",
}

interface PartnerItem {
  name: string
  country: string
  logo: string | null
}

const partners: PartnerItem[] = [
  {
    name: "HELCOM",
    country: "Regional coordinator",
    logo: "/partners/helcom.png",
  },
  {
    name: "Aarhus University",
    country: "Denmark",
    logo: "/partners/aarhus.svg",
  },
  {
    name: "Latvian Institute of Aquatic Ecology",
    country: "Latvia",
    logo: "/partners/lhei.svg",
  },
  {
    name: "Ukrainian Scientific Centre of Ecology of the Sea (UkrSCES)",
    country: "Ukraine",
    logo: "/partners/ukrsces.png",
  },
  {
    name: "Institute of Marine Biology of the National Academy of Sciences of Ukraine",
    country: "Ukraine",
    logo: "/partners/imb_nasu.png",
  },
  {
    name: "Institute of Climate-Smart Agriculture of the National Academy of Agrarian Sciences of Ukraine",
    country: "Ukraine",
    logo: "/partners/icsanaas.png",
  },
]

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

export const Partners = () => (
  <Box id="partners" mb={{ base: 16, md: 24 }}>
    <SectionHeader label="Partners" title="International coalition." />
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 5, md: 6 }}>
      {partners.map((partner) => (
        <Box
          key={partner.name}
          {...cardStyles}
          display="flex"
          flexDirection="column"
          gap={4}
        >
          <Flex
            align="center"
            justify="center"
            bg="slate.50"
            borderRadius="xl"
            h={{ base: "90px", md: "120px" }}
            border="1px dashed"
            borderColor="slate.100"
            overflow="hidden"
            px={4}
          >
            <Box w="100%" h="100%" position="relative">
              <PartnerLogo logo={partner.logo} name={partner.name} />
            </Box>
          </Flex>
          <Heading size="md" mb={1}>
            {partner.name}
          </Heading>
          <Text color="slate.500" fontSize="sm">
            {partner.country}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
)

