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

const outputItems = [
  {
    title: "Practical guidelines",
    description: "Practical guidelines for national authorities.",
    icon: "menu_book",
  },
  {
    title: "Policy briefs",
    description: "Policy briefs for evidence-based decision-making.",
    icon: "article",
  },
  {
    title: "Training materials",
    description: "Training materials and case studies.",
    icon: "cast_for_education",
  },
  {
    title: "Awareness videos",
    description: "Awareness-raising videos for communities and stakeholders.",
    icon: "slideshow",
  },
  {
    title: "Joint Action Plan",
    description: "The Joint Action Plan as a tool for long-term risk management.",
    icon: "playlist_add_check_circle",
  },
]

export const Outputs = () => (
  <Box id="outputs" mb={{ base: 16, md: 24 }}>
    <SectionHeader label="Key Outputs" title="Tangible project results." />
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {outputItems.map((item) => (
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

