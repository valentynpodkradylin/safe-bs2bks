import { useTranslation } from "next-i18next"
import { Box, BoxProps, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { GoogleIcon, SectionHeader } from "../ui"

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: { base: "xl", md: "2xl" },
  p: { base: 4, md: 6 },
  border: "1px solid",
  borderColor: "slate.100",
  boxShadow: "0 24px 50px rgba(9, 34, 52, 0.06)",
}

const outputKeys = [
  { key: "guidelines", icon: "menu_book" },
  { key: "briefs", icon: "article" },
  { key: "training", icon: "cast_for_education" },
  { key: "videos", icon: "slideshow" },
  { key: "actionPlan", icon: "playlist_add_check_circle" },
]

export const Outputs = () => {
  const { t } = useTranslation("common")

  return (
    <Box id="outputs" mb={{ base: 10, md: 24 }}>
      <SectionHeader label={t("outputs.label")} title={t("outputs.title")} />
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 3, md: 6 }}>
        {outputKeys.map((item) => (
          <Box key={item.key} {...cardStyles}>
            <GoogleIcon
              name={item.icon}
              color="aqua.600"
              mb={{ base: 2, md: 4 }}
              fontSize={{ base: "32px", md: "40px" }}
            />
            <Heading size={{ base: "sm", md: "md" }} mb={{ base: 2, md: 3 }}>
              {t(`outputs.items.${item.key}.title`)}
            </Heading>
            <Text color="slate.600" fontSize={{ base: "sm", md: "md" }}>
              {t(`outputs.items.${item.key}.description`)}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
