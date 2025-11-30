import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GoogleIcon, SectionHeader } from "../ui";

const outputKeys = [
  { key: "guidelines", icon: "menu_book" },
  { key: "briefs", icon: "article" },
  { key: "training", icon: "cast_for_education" },
  { key: "videos", icon: "slideshow" },
  { key: "actionPlan", icon: "playlist_add_check_circle" },
] as const;

const initialExpanded = outputKeys[0].key;

export const Outputs = () => {
  const { t } = useTranslation("common");
  const [expanded, setExpanded] = useState<string | null>(initialExpanded);

  const toggleExpand = (key: string) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <Box id="outputs" mb={{ base: 10, md: 24 }}>
      <SectionHeader label={t("outputs.label")} title={t("outputs.title")} />
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 5 }}
        gap={{ base: 3, md: 4 }}
        alignItems="start"
      >
        {outputKeys.map((item) => {
          const isExpanded = expanded === item.key;
          return (
            <Flex
              key={item.key}
              bg="white"
              borderRadius="xl"
              p={{ base: 3, md: 4 }}
              border="1px solid"
              borderColor={isExpanded ? "aqua.300" : "slate.100"}
              boxShadow={
                isExpanded
                  ? "0 8px 32px rgba(0, 188, 212, 0.15)"
                  : "0 8px 24px rgba(9, 34, 52, 0.04)"
              }
              direction="column"
              align="center"
              textAlign="center"
              gap={2}
              cursor="pointer"
              onClick={() => toggleExpand(item.key)}
              transition="all 0.2s"
              _hover={{
                borderColor: "aqua.200",
                transform: "translateY(-2px)",
              }}
            >
              <Box
                w={{ base: 10, md: 12 }}
                h={{ base: 10, md: 12 }}
                borderRadius="lg"
                bg={isExpanded ? "aqua.100" : "aqua.50"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="all 0.2s"
              >
                <GoogleIcon
                  name={item.icon}
                  color="aqua.600"
                  fontSize={{ base: "20px", md: "24px" }}
                />
              </Box>
              <Text
                fontWeight="semibold"
                fontSize={{ base: "xs", md: "sm" }}
                color="ocean.900"
              >
                {t(`outputs.items.${item.key}.title`)}
              </Text>
              <Box
                overflow="hidden"
                maxH={isExpanded ? "200px" : "0"}
                opacity={isExpanded ? 1 : 0}
                transition="all 0.3s ease"
              >
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  color="slate.600"
                  pt={1}
                >
                  {t(`outputs.items.${item.key}.description`)}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
