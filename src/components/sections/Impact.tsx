import { useTranslation } from "next-i18next"
import { Box, BoxProps, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { GoogleIcon, SectionHeader } from "../ui"

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: { base: "xl", md: "2xl" },
  p: { base: 4, md: 6 },
  border: "1px solid",
  borderColor: "slate.100",
  boxShadow: "0 24px 50px rgba(9, 34, 52, 0.06)",
}

const impactKeys = [
  { key: "environmental", icon: "eco" },
  { key: "scientific", icon: "science" },
  { key: "policy", icon: "gavel" },
  { key: "societal", icon: "diversity_3" },
]

export const Impact = () => {
  const { t } = useTranslation("common")

  return (
    <Box id="impact" mb={{ base: 10, md: 24 }}>
      <SectionHeader label={t("impact.label")} title={t("impact.title")} />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 3, md: 6 }}>
        {impactKeys.map((impact) => (
          <Box
            key={impact.key}
            {...cardStyles}
            display="flex"
            flexDirection="column"
            gap={{ base: 2, md: 3 }}
          >
            <Flex align="center" gap={4} mb={{ base: 1, md: 2 }}>
              <GoogleIcon
                name={impact.icon}
                color="aqua.600"
                fontSize={{ base: "28px", md: "36px" }}
              />
              <Heading size={{ base: "sm", md: "md" }}>
                {t(`impact.items.${impact.key}.title`)}
              </Heading>
            </Flex>
            <Text color="slate.600" fontSize={{ base: "sm", md: "md" }}>
              {t(`impact.items.${impact.key}.description`)}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
