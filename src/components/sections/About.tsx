import { useTranslation } from "next-i18next"
import { Box, BoxProps, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { GoogleIcon, SectionHeader } from "../ui"

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: { base: "xl", md: "2xl" },
  p: { base: 4, md: 6 },
  border: "1px solid",
  borderColor: "slate.100",
  boxShadow: "0 24px 50px rgba(9, 34, 52, 0.06)",
}

const aboutSectionKeys = [
  { key: "goal", icon: "flag" },
  { key: "leadership", icon: "groups" },
  { key: "activities", icon: "eco" },
  { key: "exchange", icon: "school" },
]

export const About = () => {
  const { t } = useTranslation("common")

  return (
    <Box id="about" mb={{ base: 10, md: 24 }}>
      <SectionHeader label={t("about.label")} title={t("about.title")} />

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
        {aboutSectionKeys.map((section) => (
          <Box
            key={section.key}
            {...cardStyles}
            display="flex"
            flexDirection="column"
            gap={{ base: 3, md: 4 }}
          >
            <Flex align="center" gap={3}>
              <Box
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                borderRadius="xl"
                bg="aqua.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <GoogleIcon
                  name={section.icon}
                  fontSize={{ base: "20px", md: "24px" }}
                  color="aqua.600"
                />
              </Box>
              <Heading size={{ base: "sm", md: "md" }} color="ocean.900">
                {t(`about.sections.${section.key}.title`)}
              </Heading>
            </Flex>
            <Text
              color="slate.600"
              lineHeight="tall"
              fontSize={{ base: "sm", md: "md" }}
            >
              {t(`about.sections.${section.key}.text`)}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
