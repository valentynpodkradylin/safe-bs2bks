import { Box, Button, Grid, Link, Stack, Text } from "@chakra-ui/react"
import { SectionHeader } from "../ui"

export const Contacts = () => (
  <Box id="contacts">
    <SectionHeader label="Contacts" title="Get in touch." />
    <Box
      bg="white"
      borderRadius="3xl"
      p={{ base: 6, md: 10 }}
      border="1px solid"
      borderColor="slate.100"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr auto" }}
        gap={8}
        alignItems="center"
      >
        <Stack gap={4}>
          <Text fontSize="lg">
            <Text as="span" fontWeight="bold">
              Coordinator:
            </Text>{" "}
            Andriy Grafov (HELCOM)
          </Text>
          <Text fontSize="lg">
            <Text as="span" fontWeight="bold">
              E-mail:
            </Text>{" "}
            <Link
              href="mailto:andriy.grafov@helsinki.fi"
              color="aqua.600"
              _hover={{ color: "aqua.700" }}
            >
              andriy.grafov@helsinki.fi
            </Link>
          </Text>
        </Stack>
        <Button
          asChild
          size="lg"
          colorScheme="cyan"
          bg="ocean.900"
          color="white"
          borderRadius="pill"
          px={10}
          _hover={{ bg: "ocean.800" }}
        >
          <Link href="mailto:andriy.grafov@helsinki.fi">Send email</Link>
        </Button>
      </Grid>
    </Box>
  </Box>
)

