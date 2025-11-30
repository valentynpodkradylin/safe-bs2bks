import { Box, Heading, Text } from "@chakra-ui/react"

interface SectionHeaderProps {
  label: string
  title: string
}

export const SectionHeader = ({ label, title }: SectionHeaderProps) => (
  <Box mb={10}>
    <Text color="aqua.600" fontWeight="semibold" fontSize="md" mb={3}>
      {label}
    </Text>
    <Heading size="2xl" color="ocean.900">
      {title}
    </Heading>
  </Box>
)

