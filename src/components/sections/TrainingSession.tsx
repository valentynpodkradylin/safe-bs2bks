import Image from "next/image"
import { useTranslation } from "next-i18next"
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { SectionHeader } from "../ui"

const speakers = [{ key: "grafov" }, { key: "skudra" }, { key: "sanderson" }] as const

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
      <SectionHeader label={t("trainingSession.label")} title={t("trainingSession.title")} />

      <Box
        bg="linear-gradient(140deg, rgba(7, 35, 61, 0.04), rgba(0, 188, 212, 0.06))"
        borderRadius={{ base: "xl", md: "2xl" }}
        border="1px solid"
        borderColor="aqua.100"
        p={{ base: 5, md: 8 }}
        boxShadow="0 18px 40px rgba(9, 34, 52, 0.07)"
        mb={{ base: 4, md: 6 }}
      >
        <Text
          color="aqua.800"
          fontSize={{ base: "xs", md: "sm" }}
          textTransform="uppercase"
          letterSpacing="widest"
          fontWeight="bold"
          mb={3}
        >
          {t("trainingSession.eventLine")}
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 2, md: 3 }} mb={4}>
          <Box bg="whiteAlpha.900" borderRadius="lg" px={4} py={3}>
            <Text fontSize={{ base: "sm", md: "md" }} color="aqua.700" fontWeight="semibold">
              {t("trainingSession.meta.date")}
            </Text>
          </Box>
          <Box bg="whiteAlpha.900" borderRadius="lg" px={4} py={3}>
            <Text fontSize={{ base: "sm", md: "md" }} color="aqua.700" fontWeight="semibold">
              {t("trainingSession.meta.location")}
            </Text>
          </Box>
          <Box bg="whiteAlpha.900" borderRadius="lg" px={4} py={3}>
            <Text fontSize={{ base: "sm", md: "md" }} color="aqua.700" fontWeight="semibold">
              {t("trainingSession.meta.format")}
            </Text>
          </Box>
        </SimpleGrid>

        <Flex direction="column" gap={4}>
          <Text color="slate.700" fontSize={{ base: "sm", md: "md" }}>
            {t("trainingSession.intro.0")}
          </Text>
          <Text color="slate.700" fontSize={{ base: "sm", md: "md" }}>
            {t("trainingSession.intro.1")}
          </Text>
        </Flex>
      </Box>

      <Box mb={{ base: 4, md: 6 }}>
        <Text color="aqua.800" fontSize={{ base: "xs", md: "sm" }} fontWeight="bold" mb={3}>
          {t("trainingSession.speakersTitle")}
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 3, md: 4 }}>
        {speakers.map((speaker) => (
          <Box
            key={speaker.key}
            bg="white"
            borderRadius={{ base: "xl", md: "2xl" }}
            border="1px solid"
            borderColor="slate.200"
            boxShadow="0 12px 30px rgba(9, 34, 52, 0.06)"
            p={{ base: 4, md: 5 }}
          >
            <Flex direction="column" gap={2}>
              <Heading size={{ base: "sm", md: "sm" }} lineHeight="shorter">
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
      </Box>

      <Text color="aqua.800" fontSize={{ base: "xs", md: "sm" }} fontWeight="bold" mb={3}>
        {t("trainingSession.galleryTitle")}
      </Text>
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={3} mb={{ base: 5, md: 6 }}>
        {gallery.map((src, index) => (
          <Box
            key={src}
            position="relative"
            h={{ base: "120px", md: "160px" }}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="0 10px 20px rgba(9, 34, 52, 0.1)"
          >
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
        bg="white"
        border="1px solid"
        borderColor="aqua.300"
        borderRadius={{ base: "xl", md: "2xl" }}
        p={{ base: 5, md: 6 }}
        boxShadow="0 14px 30px rgba(0, 188, 212, 0.08)"
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
