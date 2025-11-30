import Image from "next/image"
import NextLink from "next/link"
import { useTranslation } from "next-i18next"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { LanguageSwitcher } from "../ui"

const navLinks = [
  { id: "about", key: "about" },
  { id: "partners", key: "partners" },
  { id: "outputs", key: "results" },
  { id: "contacts", key: "contacts" },
]

export const Hero = () => {
  const { t } = useTranslation("common")

  return (
    <Box
      as="header"
      position="relative"
      overflow="hidden"
      bgGradient="linear(135deg, ocean.900, aqua.800)"
    >
      <Box
        position="absolute"
        inset={0}
        opacity={0.3}
        className="parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=70')",
        }}
      />
      <Box position="relative" zIndex={1}>
        <Container maxW="6xl" py={{ base: 8, md: 12 }}>
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            mb={{ base: 10, md: 16 }}
            gap={4}
            flexWrap="wrap"
          >
            <HStack gap={4} align="center">
              <Image
                src="/logo.png"
                alt="Council of the Baltic Sea States logo"
                width={150}
                height={50}
                style={{ height: "auto", width: "auto", maxWidth: "160px" }}
              />
              <Stack gap={0}>
                <Text fontSize="lg" fontWeight="bold" letterSpacing="0.05em">
                  SAFE-BS2BKS
                </Text>
              </Stack>
            </HStack>
            <HStack
              gap={6}
              display={{ base: "none", lg: "flex" }}
              fontWeight="medium"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  color="whiteAlpha.900"
                  _hover={{ color: "aqua.200" }}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </HStack>
            <HStack gap={4}>
              <LanguageSwitcher />
              <Button
                asChild
                variant="solid"
                colorScheme="cyan"
                bg="aqua.400"
                color="ocean.900"
                _hover={{ bg: "aqua.300" }}
                borderRadius="pill"
              >
                <NextLink href="#contacts">{t("nav.contact")}</NextLink>
              </Button>
            </HStack>
          </Flex>

          <Stack gap={6} maxW="4xl" pb={{ base: 12, md: 20 }}>
            <Text
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.3em"
              color="aqua.200"
            >
              {t("hero.subtitle")}
            </Text>
            <Heading as="h1" size="2xl" lineHeight="1.15">
              {t("hero.title")}
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.900" maxW="3xl">
              {t("hero.description")}
            </Text>
            <HStack gap={4} flexWrap="wrap" pt={2}>
              <Button
                asChild
                colorScheme="cyan"
                bg="white"
                color="ocean.900"
                borderRadius="pill"
                _hover={{ bg: "aqua.100" }}
              >
                <NextLink href="#about">{t("nav.about")}</NextLink>
              </Button>
              <Button
                asChild
                variant="outline"
                borderColor="whiteAlpha.600"
                color="white"
                borderRadius="pill"
                _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
              >
                <NextLink href="#partners">{t("nav.partners")}</NextLink>
              </Button>
              <Button
                asChild
                variant="outline"
                borderColor="whiteAlpha.600"
                color="white"
                borderRadius="pill"
                _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
              >
                <NextLink href="#outputs">{t("nav.results")}</NextLink>
              </Button>
              <Button
                asChild
                variant="outline"
                borderColor="whiteAlpha.600"
                color="white"
                borderRadius="pill"
                _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
              >
                <NextLink href="#contacts">{t("nav.contacts")}</NextLink>
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
