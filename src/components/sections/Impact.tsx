import { useTranslation } from "next-i18next"
import { Box, BoxProps, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { GoogleIcon, SectionHeader } from "../ui"

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: "2xl",
  p: 6,
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
    <Box id="impact" mb={{ base: 16, md: 24 }}>
      <SectionHeader label={t("impact.label")} title={t("impact.title")} />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {impactKeys.map((impact) => (
          <Box
            key={impact.key}
            {...cardStyles}
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <GoogleIcon name={impact.icon} color="aqua.600" fontSize="36px" />
            <Heading size="md">{t(`impact.items.${impact.key}.title`)}</Heading>
            <Text color="slate.600">
              {t(`impact.items.${impact.key}.description`)}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
