import { useState, useEffect } from "react";
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
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GoogleIcon, LanguageSwitcher } from "../ui";

const navLinks = [
  { id: "about", key: "about" },
  { id: "partners", key: "partners" },
  { id: "outputs", key: "results" },
  { id: "contacts", key: "contacts" },
];

export const Hero = () => {
  const { t } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        bg={isScrolled || mobileMenuOpen ? "rgba(18, 50, 73, 0.8)" : "transparent"}
        backdropFilter={isScrolled || mobileMenuOpen ? "blur(12px)" : "none"}
        transition="all 0.3s ease"
      >
        <Container maxW="6xl" px={{ base: 4, md: 6 }}>
          <Flex
            align="center"
            justify="space-between"
            py={3}
            gap={{ base: 2, md: 4 }}
          >
            {/* Logo */}
            <HStack gap={{ base: 2, md: 4 }} align="center">
              <Image
                src="/logo.png"
                alt="Council of the Baltic Sea States logo"
                width={120}
                height={40}
                style={{ height: "auto", width: "auto", maxWidth: "100px" }}
              />
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="bold"
                letterSpacing="0.05em"
                color="white"
                display={{ base: "none", sm: "block" }}
              >
                SAFE-BS2BKS
              </Text>
            </HStack>

            {/* Navigation Links - Desktop */}
            <HStack
              display={{ base: "none", md: "flex" }}
              gap={5}
              fontWeight="medium"
              fontSize="sm"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  color="whiteAlpha.900"
                  _hover={{ color: "aqua.300" }}
                  transition="color 0.2s"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </HStack>

            {/* Right side controls */}
            <HStack gap={2}>
              <LanguageSwitcher />
              <Button
                asChild
                variant="solid"
                bg="aqua.400"
                color="ocean.900"
                _hover={{ bg: "aqua.300" }}
                borderRadius="pill"
                size="sm"
                display={{ base: "none", md: "flex" }}
              >
                <NextLink href="#contacts">{t("nav.contact")}</NextLink>
              </Button>

              {/* Burger Menu Button - Mobile */}
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Menu"
                variant="ghost"
                color="white"
                size="sm"
                _hover={{ bg: "whiteAlpha.200" }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                bg={
                  !isScrolled && !mobileMenuOpen ? "transparent" : undefined
                }
              >
                <GoogleIcon
                  name={mobileMenuOpen ? "close" : "menu"}
                  fontSize="24px"
                />
              </IconButton>
            </HStack>
          </Flex>
        </Container>

      </Box>

      {/* Mobile Menu Dropdown - separate for backdrop blur */}
      <Box
        display={{ base: mobileMenuOpen ? "block" : "none", md: "none" }}
        position="fixed"
        top="57px"
        left={0}
        right={0}
        zIndex={99}
        bg="rgba(18, 50, 73, 0.8)"
        backdropFilter="blur(12px)"
      >
        <Container maxW="6xl" px={4} py={3}>
          <Flex gap={2} flexWrap="wrap" justify="center">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                asChild
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                borderRadius="pill"
                _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
                size="sm"
              >
                <NextLink href={`#${link.id}`} onClick={closeMobileMenu}>
                  {t(`nav.${link.key}`)}
                </NextLink>
              </Button>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        as="header"
        position="relative"
        overflow="hidden"
        bgGradient="linear(135deg, ocean.900, aqua.800)"
        pt={{ base: "70px", md: "80px" }}
        minH="100vh"
        display="flex"
        alignItems="center"
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
          <Container
            maxW="6xl"
            py={{ base: 8, md: 16 }}
            px={{ base: 4, md: 6 }}
          >
            {/* Hero Content */}
            <Stack
              gap={{ base: 4, md: 6 }}
              maxW="4xl"
              pb={{ base: 8, md: 20 }}
              textAlign={{ base: "center", md: "left" }}
              align={{ base: "center", md: "flex-start" }}
            >
              <Box mb={2}>
                <Image
                  src="/logo.png"
                  alt="Council of the Baltic Sea States logo"
                  width={200}
                  height={80}
                  style={{ height: "auto", width: "auto", maxWidth: "180px" }}
                />
              </Box>
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
    </>
  );
};
