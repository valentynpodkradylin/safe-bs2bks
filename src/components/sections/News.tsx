import Image from "next/image"
import { useTranslation } from "next-i18next"
import { Box, BoxProps, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { SectionHeader } from "../ui"

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: { base: "xl", md: "2xl" },
  border: "1px solid",
  borderColor: "slate.100",
  boxShadow: "0 24px 50px rgba(9, 34, 52, 0.06)",
  overflow: "hidden",
}

const newsItems = [
  { key: "kickoff", image: "/news/IMG_0182.jpg" },
  { key: "sampling", image: "/news/IMG_0194.jpg" },
  { key: "workshop", image: "/news/IMG_0204.jpg" },
]

export const News = () => {
  const { t } = useTranslation("common")

  return (
    <Box id="news" mb={{ base: 10, md: 24 }}>
      <SectionHeader label={t("news.label")} title={t("news.title")} />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 3, md: 6 }}>
        {newsItems.map((item) => (
          <Box key={item.key} {...cardStyles}>
            <Box position="relative" h={{ base: "180px", md: "220px" }}>
              <Image
                src={item.image}
                alt={t(`news.items.${item.key}.title`)}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Flex direction="column" gap={{ base: 2, md: 3 }} p={{ base: 4, md: 6 }}>
              <Text color="aqua.700" fontSize={{ base: "xs", md: "sm" }} fontWeight="semibold">
                {t(`news.items.${item.key}.date`)}
              </Text>
              <Heading size={{ base: "sm", md: "md" }} lineHeight="shorter">
                {t(`news.items.${item.key}.title`)}
              </Heading>
              <Text color="slate.600" fontSize={{ base: "sm", md: "md" }}>
                {t(`news.items.${item.key}.description`)}
              </Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
