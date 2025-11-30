import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
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
} from "@chakra-ui/react";
import { LanguageSwitcher } from "../ui";

const navLinks = [
  { id: "about", key: "about" },
  { id: "partners", key: "partners" },
  { id: "outputs", key: "results" },
  { id: "contacts", key: "contacts" },
];

export const Hero = () => {
  const { t } = useTranslation("common");

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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=70')",
        }}
      />
      <Box position="relative" zIndex={1}>
        <Container maxW="6xl" py={{ base: 4, md: 12 }} px={{ base: 4, md: 6 }}>
          {/* Navigation */}
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            mb={{ base: 6, md: 16 }}
            gap={{ base: 2, md: 4 }}
            flexWrap="wrap"
          >
            {/* Logo */}
            <HStack gap={{ base: 2, md: 4 }} align="center">
              <Image
                src="/logo.png"
                alt="Council of the Baltic Sea States logo"
                width={150}
                height={50}
                style={{ height: "auto", width: "auto", maxWidth: "120px" }}
              />
              <Stack gap={0} display={{ base: "none", sm: "flex" }}>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  letterSpacing="0.05em"
                >
                  SAFE-BS2BKS
                </Text>
              </Stack>
            </HStack>

            {/* Navigation Links - inline on all screens */}
            <HStack
              display={{ base: "none", md: "flex" }}
              gap={{ base: 2, sm: 3, md: 6 }}
              fontWeight="medium"
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
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

            {/* Right side controls */}
            <HStack gap={{ base: 2, md: 4 }}>
              <LanguageSwitcher />
              <Button
                asChild
                variant="solid"
                colorScheme="cyan"
                bg="aqua.400"
                color="ocean.900"
                _hover={{ bg: "aqua.300" }}
                borderRadius="pill"
                size={{ base: "xs", sm: "sm", md: "md" }}
                display={{ base: "none", sm: "flex" }}
              >
                <NextLink href="#contacts">{t("nav.contact")}</NextLink>
              </Button>
            </HStack>
          </Flex>

          {/* Hero Content */}
          <Stack
            gap={{ base: 4, md: 6 }}
            maxW="4xl"
            pb={{ base: 8, md: 20 }}
            textAlign={{ base: "center", md: "left" }}
            align={{ base: "center", md: "flex-start" }}
          >
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textTransform="uppercase"
              letterSpacing={{ base: "0.2em", md: "0.3em" }}
              color="aqua.200"
            >
              {t("hero.subtitle")}
            </Text>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              lineHeight={{ base: "1.2", md: "1.15" }}
            >
              {t("hero.title")}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              color="whiteAlpha.900"
              maxW="3xl"
            >
              {t("hero.description")}
            </Text>

            {/* CTA Buttons */}
            <Flex
              gap={2}
              pt={2}
              justify={{ base: "center", md: "flex-start" }}
              w="full"
              flexWrap="wrap"
            >
              <Button
                asChild
                colorScheme="cyan"
                bg="white"
                color="ocean.900"
                borderRadius="pill"
                _hover={{ bg: "aqua.100" }}
                size={{ base: "xs", md: "md" }}
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
                size={{ base: "xs", md: "md" }}
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
                size={{ base: "xs", md: "md" }}
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
                size={{ base: "xs", md: "md" }}
              >
                <NextLink href="#contacts">{t("nav.contacts")}</NextLink>
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
