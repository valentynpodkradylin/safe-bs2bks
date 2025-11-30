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

const objectiveItems = [
  {
    title: "Environmental risk assessment",
    description: "Assessment of environmental risks from sea-dumped munitions.",
    icon: "radar",
  },
  {
    title: "Marine monitoring integration",
    description: "Integration of these risks into marine monitoring systems.",
    icon: "monitoring",
  },
  {
    title: "Capacity building",
    description: "Capacity building through training and workshops.",
    icon: "school",
  },
  {
    title: "Joint Action Plan",
    description: "Development of a Joint Baltic–Black Sea Action Plan.",
    icon: "checklist_rtl",
  },
  {
    title: "Communication",
    description:
      "Communication with authorities, scientific community, and the public.",
    icon: "group",
  },
]

export const Objectives = () => (
  <Box id="objectives" mb={{ base: 16, md: 24 }}>
    <SectionHeader
      label="Key Objectives"
      title="What SAFE-BS2BKS aims to achieve."
    />
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
      {objectiveItems.map((item) => (
        <Box key={item.title} {...cardStyles}>
          <GoogleIcon name={item.icon} color="aqua.600" mb={4} />
          <Heading size="md" mb={3}>
            {item.title}
          </Heading>
          <Text color="slate.600">{item.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
)

