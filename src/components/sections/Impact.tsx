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

const impacts = [
  {
    title: "Environmental",
    description: "Risk reduction for marine ecosystems and MPAs.",
    icon: "eco",
  },
  {
    title: "Scientific",
    description:
      "Strengthened interregional expertise and risk assessment methodologies.",
    icon: "science",
  },
  {
    title: "Policy",
    description:
      "Support for evidence-based decision-making and harmonisation of approaches.",
    icon: "gavel",
  },
  {
    title: "Societal",
    description: "Increased awareness among coastal communities.",
    icon: "diversity_3",
  },
]

export const Impact = () => (
  <Box id="impact" mb={{ base: 16, md: 24 }}>
    <SectionHeader label="Project Impact" title="Expected outcomes." />
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
      {impacts.map((impact) => (
        <Box
          key={impact.title}
          {...cardStyles}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <GoogleIcon name={impact.icon} color="aqua.600" fontSize="36px" />
          <Heading size="md">{impact.title}</Heading>
          <Text color="slate.600">{impact.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
)

