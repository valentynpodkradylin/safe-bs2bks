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

const objectiveKeys = [
  { key: "risk", icon: "radar" },
  { key: "monitoring", icon: "monitoring" },
  { key: "capacity", icon: "school" },
  { key: "plan", icon: "checklist_rtl" },
  { key: "communication", icon: "group" },
]

export const Objectives = () => {
  const { t } = useTranslation("common")

  return (
    <Box id="objectives" mb={{ base: 16, md: 24 }}>
      <SectionHeader
        label={t("objectives.label")}
        title={t("objectives.title")}
      />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
        {objectiveKeys.map((item) => (
          <Box key={item.key} {...cardStyles}>
            <GoogleIcon name={item.icon} color="aqua.600" mb={4} />
            <Heading size="md" mb={3}>
              {t(`objectives.items.${item.key}.title`)}
            </Heading>
            <Text color="slate.600">
              {t(`objectives.items.${item.key}.description`)}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
