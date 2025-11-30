import { Box, BoxProps } from "@chakra-ui/react"

export const GoogleIcon = ({
  name,
  fontSize = "40px",
  ...props
}: BoxProps & { name: string }) => (
  <Box
    as="span"
    className="material-symbols-rounded"
    fontSize={fontSize}
    lineHeight="1"
    color="currentColor"
    fontVariationSettings='"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48'
    {...props}
  >
    {name}
  </Box>
)

