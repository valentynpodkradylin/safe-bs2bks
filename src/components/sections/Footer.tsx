import Image from "next/image"
import { useTranslation } from "next-i18next"
import { Box, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react"

export const Footer = () => {
  const { t } = useTranslation("common")

  return (
    <Box as="footer" bg="ocean.900" color="white" py={10}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={6}
        >
          <HStack gap={4} align="center">
            <Image
              src="/logo.png"
              alt="SAFE-BS2BKS"
              width={100}
              height={40}
              style={{ height: "auto", width: "auto", maxWidth: "80px" }}
            />
            <Stack gap={1}>
              <Text fontWeight="bold">{t("footer.name")}</Text>
              <Text color="whiteAlpha.700" fontSize="sm">
                {t("footer.description")}
              </Text>
            </Stack>
          </HStack>
          <Text color="whiteAlpha.700" fontSize="sm">
            © {new Date().getFullYear()} SAFE-BS2BKS
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
