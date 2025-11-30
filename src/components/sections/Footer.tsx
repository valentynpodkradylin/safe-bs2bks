import { useTranslation } from "next-i18next"
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react"

export const Footer = () => {
  const { t } = useTranslation("common")

  return (
    <Box as="footer" bg="ocean.900" color="white" py={10}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Stack gap={1}>
            <Text fontWeight="bold">{t("footer.name")}</Text>
            <Text color="whiteAlpha.700">{t("footer.description")}</Text>
          </Stack>
          <Text color="whiteAlpha.700">
            © {new Date().getFullYear()} SAFE-BS2BKS
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
