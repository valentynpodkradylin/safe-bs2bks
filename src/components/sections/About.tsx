import { Box, BoxProps, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { GoogleIcon, SectionHeader } from "../ui"

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: "2xl",
  p: 6,
  border: "1px solid",
  borderColor: "slate.100",
  boxShadow: "0 24px 50px rgba(9, 34, 52, 0.06)",
}

const aboutSections = [
  {
    icon: "flag",
    title: "Project Goal",
    text: "The goal of the SAFE-BS2BKS project is to transfer and implement the most effective and safe techniques used in the Baltic Sea for managing underwater munitions in the Black Sea region, with a strong focus on environmental security and the sustainability of marine ecosystems, especially in protected areas.",
  },
  {
    icon: "groups",
    title: "Project Leadership",
    text: "The project leader H9 (the EU and the Contracting Parties to HELCOM that are also Member States of the EU) will leverage its macro-regional network to foster discussions and organize key stakeholder dialogue and workshops. This will provide a substantial input for HELCOM BSAP action S34 while ensuring cross-sectoral multidisciplinary outreach and knowledge transfer to the Black Sea region and Ukraine in particular.",
  },
  {
    icon: "eco",
    title: "Key Activities",
    text: "Activities will apply proven Baltic methods for assessing and mitigating hazards from submerged munitions, integrating them into marine monitoring and climate adaptation strategies. Special care will be taken in environmentally protected and sensitive marine areas where sea-dumped munitions can harm biodiversity and ecosystem integrity.",
  },
  {
    icon: "school",
    title: "Knowledge Exchange",
    text: "Black Sea stakeholders will gain essential expertise through this exchange of knowledge and training. The project will develop an Action Plan with recommendations and an outline of future actions for the safe management of unexploded ordnances in the Black Sea, ensuring structured and coordinated marine environmental protection and risk management.",
  },
]

export const About = () => (
  <Box id="about" mb={{ base: 16, md: 24 }}>
    <Stack gap={6} mb={10}>
      <SectionHeader
        label="About the project"
        title="SAFE Actions for Environment – Baltic Solutions to the Black Sea"
      />
    </Stack>

    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
      {aboutSections.map((section) => (
        <Box
          key={section.title}
          {...cardStyles}
          display="flex"
          flexDirection="column"
          gap={4}
        >
          <Flex align="center" gap={3}>
            <Box
              w={10}
              h={10}
              borderRadius="xl"
              bg="aqua.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
            >
              <GoogleIcon name={section.icon} fontSize="24px" color="aqua.600" />
            </Box>
            <Heading size="md" color="ocean.900">
              {section.title}
            </Heading>
          </Flex>
          <Text color="slate.600" lineHeight="tall">
            {section.text}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
)

