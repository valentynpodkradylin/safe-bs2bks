import Image from "next/image"
import { useTranslation } from "next-i18next"
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { SectionHeader } from "../ui"

const speakers = [
  { key: "grafov", image: "/training-session-odessa-1.jpg" },
  { key: "skudra", image: "/training-session-odessa-2.jpg" },
  { key: "sanderson", image: "/training-session-odessa-3.jpg" },
] as const

const gallery = [
  "/training-session-odessa-1.jpg",
  "/training-session-odessa-2.jpg",
  "/training-session-odessa-3.jpg",
  "/training-session-odessa-4.jpg",
] as const

export const TrainingSession = () => {
  const { t } = useTranslation("common")

  return (
    <Box id="training-session" mb={{ base: 10, md: 24 }}>
      <SectionHeader
        label={t("trainingSession.label")}
        title={t("trainingSession.title")}
      />

      <Box
        bg="white"
        borderRadius={{ base: "xl", md: "2xl" }}
        border="1px solid"
        borderColor="slate.100"
        p={{ base: 5, md: 8 }}
        boxShadow="0 24px 50px rgba(9, 34, 52, 0.06)"
        mb={{ base: 4, md: 6 }}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 2, md: 4 }} mb={4}>
          <Text fontSize={{ base: "sm", md: "md" }} color="aqua.700" fontWeight="semibold">
            {t("trainingSession.meta.date")}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="aqua.700" fontWeight="semibold">
            {t("trainingSession.meta.location")}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="aqua.700" fontWeight="semibold">
            {t("trainingSession.meta.format")}
          </Text>
        </SimpleGrid>

        <Flex direction="column" gap={3}>
          <Text color="slate.700" fontSize={{ base: "sm", md: "md" }}>
            {t("trainingSession.intro.0")}
          </Text>
          <Text color="slate.700" fontSize={{ base: "sm", md: "md" }}>
            {t("trainingSession.intro.1")}
          </Text>
        </Flex>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 3, md: 6 }} mb={{ base: 4, md: 6 }}>
        {speakers.map((speaker) => (
          <Box
            key={speaker.key}
            bg="white"
            borderRadius={{ base: "xl", md: "2xl" }}
            border="1px solid"
            borderColor="slate.100"
            overflow="hidden"
            boxShadow="0 24px 50px rgba(9, 34, 52, 0.06)"
          >
            <Box position="relative" h={{ base: "200px", md: "220px" }}>
              <Image
                src={speaker.image}
                alt={t(`trainingSession.speakers.${speaker.key}.name`)}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Flex direction="column" gap={2} p={{ base: 4, md: 5 }}>
              <Heading size={{ base: "sm", md: "md" }} lineHeight="shorter">
                {t(`trainingSession.speakers.${speaker.key}.name`)}
              </Heading>
              <Text color="aqua.700" fontSize={{ base: "xs", md: "sm" }} fontWeight="semibold">
                {t(`trainingSession.speakers.${speaker.key}.role`)}
              </Text>
              <Text color="slate.600" fontSize={{ base: "sm", md: "md" }}>
                {t(`trainingSession.speakers.${speaker.key}.summary`)}
              </Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={{ base: 2, md: 4 }} gap={3} mb={{ base: 4, md: 6 }}>
        {gallery.map((src, index) => (
          <Box key={src} position="relative" h={{ base: "120px", md: "160px" }} borderRadius="lg" overflow="hidden">
            <Image
              src={src}
              alt={`${t("trainingSession.galleryAlt")} ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </SimpleGrid>

      <Box
        bg="aqua.50"
        border="1px solid"
        borderColor="aqua.200"
        borderRadius={{ base: "xl", md: "2xl" }}
        p={{ base: 5, md: 6 }}
      >
        <Text color="aqua.800" fontSize={{ base: "xs", md: "sm" }} fontWeight="bold" mb={2}>
          {t("trainingSession.conclusionTitle")}
        </Text>
        <Text color="slate.700" fontSize={{ base: "sm", md: "md" }}>
          {t("trainingSession.conclusion")}
        </Text>
      </Box>
    </Box>
  )
}
