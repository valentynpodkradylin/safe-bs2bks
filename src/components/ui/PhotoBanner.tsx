import { Box } from "@chakra-ui/react";

interface PhotoBannerProps {
  src: string;
  alt: string;
  overlay?: boolean;
  parallax?: boolean;
}

export const PhotoBanner = ({
  src,
  alt,
  overlay = true,
  parallax = false,
}: PhotoBannerProps) => (
  <Box
    position="relative"
    h={{ base: "150px", sm: "200px", md: "280px" }}
    borderRadius={{ base: "2xl" }}
    overflow="hidden"
    mb={{ base: 10, md: 24 }}
    mx={{ sm: 24, md: 0 }}
    role="img"
    aria-label={alt}
  >
    <Box
      position="absolute"
      inset={0}
      backgroundImage={`url('${src}')`}
      className={parallax ? "parallax-bg" : undefined}
      style={
        parallax
          ? {
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
      }
    />
    {overlay && (
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-r, ocean.900/70, transparent)"
      />
    )}
  </Box>
);
