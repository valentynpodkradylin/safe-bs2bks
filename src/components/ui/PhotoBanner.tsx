import { Box } from "@chakra-ui/react"

interface PhotoBannerProps {
  src: string
  alt: string
  overlay?: boolean
}

export const PhotoBanner = ({ src, alt, overlay = true }: PhotoBannerProps) => (
  <Box
    position="relative"
    h={{ base: "200px", md: "280px" }}
    borderRadius="3xl"
    overflow="hidden"
    mb={{ base: 16, md: 24 }}
    role="img"
    aria-label={alt}
  >
    <Box
      position="absolute"
      inset={0}
      backgroundImage={`url('${src}')`}
      backgroundSize="cover"
      backgroundPosition="center"
    />
    {overlay && (
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-r, ocean.900/70, transparent)"
      />
    )}
  </Box>
)

