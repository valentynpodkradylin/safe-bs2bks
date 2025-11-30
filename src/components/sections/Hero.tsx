import Image from "next/image"
import NextLink from "next/link"
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

const navLinks = [
  { id: "about", label: "About" },
  { id: "partners", label: "Partners" },
  { id: "outputs", label: "Results" },
  { id: "contacts", label: "Contacts" },
]

export const Hero = () => (
  <Box
    as="header"
    position="relative"
    overflow="hidden"
    bgGradient="linear(135deg, ocean.900, aqua.800)"
  >
    <Box
      position="absolute"
      inset={0}
      opacity={0.2}
      backgroundImage="url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=70')"
      backgroundSize="cover"
      backgroundPosition="center"
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
                {link.label}
              </Link>
            ))}
          </HStack>
          <Button
            asChild
            variant="solid"
            colorScheme="cyan"
            bg="aqua.400"
            color="ocean.900"
            _hover={{ bg: "aqua.300" }}
            borderRadius="pill"
          >
            <NextLink href="#contacts">Contact</NextLink>
          </Button>
        </Flex>

        <Stack gap={6} maxW="4xl" pb={{ base: 12, md: 20 }}>
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="0.3em"
            color="aqua.200"
          >
            SAFE Actions for Environment
          </Text>
          <Heading as="h1" size="2xl" lineHeight="1.15">
            Baltic Solutions to the Black Sea
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.900" maxW="3xl">
            Implementation of proven Baltic approaches to the management of
            sea-dumped munitions and enhancement of environmental security in
            the Black Sea, with a particular focus on marine protected areas.
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
              <NextLink href="#about">About</NextLink>
            </Button>
            <Button
              asChild
              variant="outline"
              borderColor="whiteAlpha.600"
              color="white"
              borderRadius="pill"
              _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
            >
              <NextLink href="#partners">Partners</NextLink>
            </Button>
            <Button
              asChild
              variant="outline"
              borderColor="whiteAlpha.600"
              color="white"
              borderRadius="pill"
              _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
            >
              <NextLink href="#outputs">Results</NextLink>
            </Button>
            <Button
              asChild
              variant="outline"
              borderColor="whiteAlpha.600"
              color="white"
              borderRadius="pill"
              _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
            >
              <NextLink href="#contacts">Contacts</NextLink>
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  </Box>
)

