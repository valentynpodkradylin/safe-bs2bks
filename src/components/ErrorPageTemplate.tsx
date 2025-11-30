import Head from "next/head"
import NextLink from "next/link"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"

type ActionLink = {
  label: string
  href: string
}

type Highlight = {
  label: string
  value: string
}

type SupportLink = {
  title: string
  description: string
  href: string
}

type ErrorPageTemplateProps = {
  code: string
  title: string
  description: string
  detail?: string
  primaryAction: ActionLink
  secondaryAction?: ActionLink
  highlights?: Highlight[]
  supportLinks?: SupportLink[]
  metaTitle?: string
  metaDescription?: string
}

export function ErrorPageTemplate({
  code,
  title,
  description,
  detail,
  primaryAction,
  secondaryAction,
  highlights = [],
  supportLinks = [],
  metaTitle,
  metaDescription,
}: ErrorPageTemplateProps) {
  return (
    <>
      <Head>
        <title>{metaTitle ?? `${code} | SAFE-BS2BKS`}</title>
        <meta name="description" content={metaDescription ?? description} />
      </Head>
      <Box
        minH="100vh"
        bg="ocean.900"
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset={0}
          opacity={0.25}
          backgroundImage="url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=70')"
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <Box position="relative" zIndex={1}>
          <Container maxW="5xl" py={{ base: 12, md: 20 }}>
            <Stack gap={6} textAlign="center" align="center">
              <Text
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.3em"
                color="aqua.200"
              >
                SAFE-BS2BKS
              </Text>
              <Box
                borderRadius="3xl"
                border="1px solid"
                borderColor="whiteAlpha.400"
                p={{ base: 6, md: 10 }}
                bg="rgba(2, 16, 31, 0.6)"
                backdropFilter="blur(18px)"
                width="100%"
              >
                <Stack gap={6} align="center">
                  <Flex
                    align="center"
                    gap={4}
                    direction={{ base: "column", md: "row" }}
                  >
                    <Text
                      fontSize={{ base: "6xl", md: "7xl" }}
                      fontWeight="bold"
                      lineHeight="1"
                    >
                      {code}
                    </Text>
                    <Box
                      w={12}
                      h="1px"
                      bg="whiteAlpha.500"
                      display={{ base: "none", md: "block" }}
                    />
                    <Heading size="lg" maxW="lg">
                      {title}
                    </Heading>
                  </Flex>
                  <Text fontSize="lg" color="whiteAlpha.900" maxW="3xl">
                    {description}
                  </Text>
                  {detail && (
                    <Text color="whiteAlpha.800" maxW="2xl">
                      {detail}
                    </Text>
                  )}
                  <HStack gap={4} flexWrap="wrap" justify="center">
                    <Button
                      asChild
                      colorScheme="cyan"
                      bg="aqua.400"
                      color="ocean.900"
                      borderRadius="pill"
                      _hover={{ bg: "aqua.300" }}
                    >
                      <NextLink href={primaryAction.href}>
                        {primaryAction.label}
                      </NextLink>
                    </Button>
                    {secondaryAction && (
                      <Button
                        asChild
                        variant="outline"
                        borderColor="whiteAlpha.600"
                        color="white"
                        borderRadius="pill"
                        _hover={{
                          bg: "whiteAlpha.200",
                          borderColor: "white",
                        }}
                      >
                        <NextLink href={secondaryAction.href}>
                          {secondaryAction.label}
                        </NextLink>
                      </Button>
                    )}
                  </HStack>
                </Stack>
              </Box>
              {highlights.length > 0 && (
                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: highlights.length >= 3 ? 3 : 2 }}
                  gap={4}
                  width="100%"
                >
                  {highlights.map((item) => (
                    <Box
                      key={item.label}
                      borderRadius="2xl"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      bg="rgba(8, 40, 72, 0.6)"
                      p={5}
                    >
                      <Text
                        fontSize="xs"
                        textTransform="uppercase"
                        letterSpacing="0.2em"
                        color="aqua.200"
                      >
                        {item.label}
                      </Text>
                      <Text fontSize="lg" fontWeight="semibold">
                        {item.value}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              )}
            </Stack>
          </Container>
        </Box>
        {supportLinks.length > 0 && (
          <Box bg="slate.50" color="slate.900" py={{ base: 12, md: 20 }}>
            <Container maxW="6xl">
              <Stack gap={6} textAlign="center" mb={8}>
                <Text
                  textTransform="uppercase"
                  letterSpacing="0.3em"
                  color="aqua.500"
                  fontSize="sm"
                >
                  Quick directions
                </Text>
                <Heading size="xl">Navigate back on track.</Heading>
                <Text color="slate.600" maxW="3xl" mx="auto">
                  Use the curated links below to continue exploring SAFE-BS2BKS
                  resources or reach the coordination team directly.
                </Text>
              </Stack>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {supportLinks.map((link) => (
                  <Box
                    key={link.title}
                    bg="white"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="slate.100"
                    p={6}
                    boxShadow="0 24px 50px rgba(9, 34, 52, 0.06)"
                    textAlign="left"
                  >
                    <Heading size="md" mb={2}>
                      {link.title}
                    </Heading>
                    <Text color="slate.600" mb={4}>
                      {link.description}
                    </Text>
                    <Button
                      asChild
                      variant="ghost"
                      color="aqua.700"
                      justifyContent="flex-start"
                      fontWeight="semibold"
                      _hover={{ bg: "aqua.50" }}
                    >
                      <NextLink href={link.href}>{link.title}</NextLink>
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
              <Text mt={12} color="slate.500" textAlign="center">
                Need urgent help?{" "}
                <Link
                  as={NextLink}
                  href="mailto:andriy.grafov@helsinki.fi"
                  color="aqua.600"
                  fontWeight="semibold"
                >
                  Email the coordinator
                </Link>{" "}
                and we&apos;ll respond shortly.
              </Text>
            </Container>
          </Box>
        )}
      </Box>
    </>
  )
}

