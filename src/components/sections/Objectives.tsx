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
    <Box id="objectives" mb={{ base: 10, md: 24 }}>
      <SectionHeader
        label={t("objectives.label")}
        title={t("objectives.title")}
      />
      <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} gap={{ base: 3, md: 6 }}>
        {objectiveKeys.map((item) => (
          <Box key={item.key} {...cardStyles}>
            <Flex align="center" gap={4} mb={{ base: 2, md: 3 }}>
              <GoogleIcon
                name={item.icon}
                color="aqua.600"
                fontSize={{ base: "32px", md: "40px" }}
              />
              <Heading size={{ base: "sm", md: "md" }} lineHeight="shorter">
                {t(`objectives.items.${item.key}.title`)}
              </Heading>
            </Flex>
            <Text color="slate.600" fontSize={{ base: "sm", md: "md" }}>
              {t(`objectives.items.${item.key}.description`)}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
