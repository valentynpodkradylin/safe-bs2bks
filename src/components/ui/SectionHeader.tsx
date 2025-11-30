import { Box, Heading, Text } from "@chakra-ui/react"

interface SectionHeaderProps {
  label: string
  title: string
}

export const SectionHeader = ({ label, title }: SectionHeaderProps) => (
  <Box mb={{ base: 6, md: 10 }}>
    <Text
      color="aqua.600"
      fontWeight="semibold"
      fontSize={{ base: "sm", md: "md" }}
      mb={{ base: 2, md: 3 }}
    >
      {label}
    </Text>
    <Heading size={{ base: "xl", md: "2xl" }} color="ocean.900">
      {title}
    </Heading>
  </Box>
)

