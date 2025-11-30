import { useTranslation } from "next-i18next"
import { Box, Button, Grid, Link, Stack, Text } from "@chakra-ui/react"
import { SectionHeader } from "../ui"

export const Contacts = () => {
  const { t } = useTranslation("common")

  return (
    <Box id="contacts">
      <SectionHeader label={t("contacts.label")} title={t("contacts.title")} />
      <Box
        bg="white"
        borderRadius={{ base: "2xl", md: "3xl" }}
        p={{ base: 4, md: 10 }}
        border="1px solid"
        borderColor="slate.100"
        w="max-content"
      >
        <Stack gap={{ base: 4, md: 8 }} align={{ base: "stretch", md: "center" }}>
          <Stack gap={{ base: 2, md: 4 }} textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={{ base: "md", md: "lg" }}>
              <Text as="span" fontWeight="bold">
                {t("contacts.coordinator")}
              </Text>{" "}
              {t("contacts.coordinatorName")}
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
              <Text as="span" fontWeight="bold">
                {t("contacts.email")}
              </Text>{" "}
              <Link
                href="mailto:andriy.grafov@helsinki.fi"
                color="aqua.600"
                _hover={{ color: "aqua.700" }}
              >
                andriy.grafov@helsinki.fi
              </Link>
            </Text>
          </Stack>
          <Button
            asChild
            size={{ base: "md", md: "lg" }}
            colorScheme="cyan"
            bg="ocean.900"
            color="white"
            borderRadius="pill"
            px={{ base: 6, md: 10 }}
            w={{ base: "full", md: "auto" }}
            _hover={{ bg: "ocean.800" }}
          >
            <Link href="mailto:andriy.grafov@helsinki.fi">
              {t("contacts.sendEmail")}
            </Link>
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
