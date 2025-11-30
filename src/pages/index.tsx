import Head from "next/head"
import Image from "next/image"
import NextLink from "next/link"
import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"

const navLinks = [
  { id: "about", label: "About" },
  { id: "objectives", label: "Objectives" },
  { id: "outputs", label: "Outputs" },
  { id: "partners", label: "Partners" },
  { id: "contacts", label: "Contacts" },
]

const heroHighlights = [
  {
    label: "Focus",
    value: "Safe handling of marine munitions",
  },
  {
    label: "Geography",
    value: "Baltic know-how → Black Sea MPAs",
  },
  {
    label: "Format",
    value: "Dialogue, risk assessments, trainings, Action Plan",
  },
]

const keyPhrases = [
  "Baltic monitoring expertise",
  "Protecting marine ecosystems",
  "Risk management for MPAs",
  "Joint Action Plan",
]

type IconCardItem = {
  title: string
  description: string
  icon: string
}

const objectiveItems: IconCardItem[] = [
  {
    title: "Environmental risk assessment",
    description: "Hazard maps and impact scenarios for the Black Sea and MPAs.",
    icon: "radar",
  },
  {
    title: "Monitoring and data",
    description:
      "Embedding risks into marine monitoring systems and climate adaptation.",
    icon: "monitoring",
  },
  {
    title: "Capacity building",
    description: "Hands-on trainings, workshops, and field sessions for specialists.",
    icon: "school",
  },
  {
    title: "Joint Action Plan",
    description: "Shared response protocols linking the Baltic and the Black Sea.",
    icon: "checklist_rtl",
  },
  {
    title: "Communication",
    description: "Dialogue with authorities, science, and communities for one voice.",
    icon: "group",
  },
]

const outputItems: IconCardItem[] = [
  {
    title: "Practical guidelines",
    description: "Step-by-step instructions for national authorities.",
    icon: "menu_book",
  },
  {
    title: "Policy briefs",
    description: "Analytical overviews for rapid decision making.",
    icon: "article",
  },
  {
    title: "Training packages",
    description: "Case studies, trainings, and infographics for experts and communities.",
    icon: "cast_for_education",
  },
  {
    title: "Awareness videos",
    description: "Short videos highlighting risks and solutions.",
    icon: "slideshow",
  },
  {
    title: "Joint Action Plan",
    description: "Roadmap for safe munitions management.",
    icon: "playlist_add_check_circle",
  },
]

const approachSteps = [
  {
    title: "Scanning Baltic experience",
    detail: "Selecting the most effective methods and analyzing them.",
  },
  {
    title: "Adapting to the Black Sea",
    detail: "Assessing risks, ecosystems, and regulatory gaps.",
  },
  {
    title: "Training and exchange",
    detail: "Workshops, trainings, and field demonstrations for regional experts.",
  },
  {
    title: "Action plan and implementation",
    detail: "Shared recommendations, aligned protocols, and a roadmap.",
  },
]

type PartnerItem = {
  name: string
  description: string
  logo: string | null
}

const partners: PartnerItem[] = [
  {
    name: "HELCOM",
    description: "Regional coordinator / H9",
    logo: "/partners/helcom.png",
  },
  {
    name: "Aarhus University",
    description: "Denmark",
    logo: "/partners/aarhus.svg",
  },
  {
    name: "Latvian Institute of Aquatic Ecology",
    description: "Latvia",
    logo: "/partners/lhei.svg",
  },
  {
    name: "Ukrainian Scientific Centre of Ecology of the Sea (UkrSCES)",
    description: "Ukraine",
    logo: "/partners/ukrsces.png",
  },
  {
    name: "Institute of Marine Biology NAS of Ukraine",
    description: "Ukraine",
    logo: "/partners/imb_nasu.png",
  },
  {
    name: "Institute of Climate-Smart Agriculture NAAS",
    description: "Ukraine",
    logo: "/partners/icsanaas.png",
  },
]

const getInitials = (name: string) =>
  name
    .split(/[\s-]/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase()

const PartnerLogo = ({ logo, name }: PartnerItem) => {
  if (!logo) {
    return (
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        fontSize="2xl"
        fontWeight="bold"
        color="ocean.900"
      >
        {getInitials(name)}
      </Flex>
    )
  }

  return (
    <Box position="relative" w="100%" h="100%">
      <Image
        src={logo}
        alt={`${name} logo`}
        fill
        sizes="(max-width: 768px) 60vw, 200px"
        style={{ objectFit: "contain" }}
      />
    </Box>
  )
}

const impacts: IconCardItem[] = [
  {
    title: "Environmental",
    description: "Reducing risks for biodiversity and protected areas.",
    icon: "info",
  },
  {
    title: "Scientific",
    description: "Strengthening interregional expertise and assessment methods.",
    icon: "science",
  },
  {
    title: "Policy",
    description: "Evidence base for decisions and aligned approaches.",
    icon: "gavel",
  },
  {
    title: "Societal",
    description: "Greater awareness among coastal communities and rescue services.",
    icon: "diversity_3",
  },
]

const cardStyles: BoxProps = {
  bg: "white",
  borderRadius: "2xl",
  p: 6,
  border: "1px solid",
  borderColor: "slate.100",
  boxShadow: "0 24px 50px rgba(9, 34, 52, 0.06)",
}

const GoogleIcon = ({
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

const Hero = () => (
  <Box
    as="header"
    position="relative"
    overflow="hidden"
    bgGradient="linear(135deg, ocean.900, aqua.800)"
  >
    <Box
      position="absolute"
      inset={0}
      opacity={0.25}
      backgroundImage="url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=70')"
      backgroundSize="cover"
      backgroundPosition="center"
    />
    <Box position="relative" zIndex={1}>
      <Container maxW="6xl" py={{ base: 8, md: 12 }}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          mb={{ base: 10, md: 16 }}
          gap={4}
          flexWrap="wrap"
        >
          <HStack gap={4} align="center">
            <Image
              src="/logo.png"
              alt="Council of the Baltic Sea States logo"
              width={150}
              height={50}
              style={{ height: "auto", width: "auto", maxWidth: "160px" }}
            />
            <Stack gap={1}>
              <Text
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.2em"
                color="aqua.200"
              >
                SAFE-BS2BKS
              </Text>
              <Heading size="md">SAFE Actions for Environment</Heading>
            </Stack>
          </HStack>
          <HStack
            gap={4}
            display={{ base: "none", lg: "flex" }}
            fontWeight="medium"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                color="whiteAlpha.900"
                _hover={{ color: "aqua.200" }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
          <Button
            asChild
            variant="solid"
            colorScheme="cyan"
            bg="aqua.400"
            color="ocean.900"
            _hover={{ bg: "aqua.300" }}
            borderRadius="pill"
          >
            <NextLink href="#contacts">Contact the coordinator</NextLink>
          </Button>
        </Flex>

        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 0.9fr" }}
          gap={{ base: 10, lg: 16 }}
          alignItems="center"
          pb={{ base: 12, md: 20 }}
        >
          <Stack gap={6}>
            <Text
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.3em"
              color="aqua.200"
            >
              Baltic solutions → Black Sea
            </Text>
            <Heading as="h1" size="2xl" lineHeight="1.1" maxW="3xl">
              Safe management of underwater munitions in the Black Sea, powered
              by Baltic experience.
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.900" maxW="2xl">
              SAFE Actions for Environment – Baltic Solutions to the Black Sea
              (SAFE-BS2BKS) deploys proven HELCOM approaches from Baltic
              countries to reduce ecological risks in the Black Sea and its
              protected waters.
            </Text>
            <HStack gap={4} flexWrap="wrap">
              <Button
                asChild
                colorScheme="cyan"
                bg="white"
                color="ocean.900"
                borderRadius="pill"
                _hover={{ bg: "aqua.100" }}
              >
                <NextLink href="#about">About the project</NextLink>
              </Button>
              <Button
                asChild
                variant="outline"
                borderColor="whiteAlpha.600"
                color="white"
                borderRadius="pill"
                _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
              >
                <NextLink href="#partners">Partners</NextLink>
              </Button>
            </HStack>
          </Stack>
          <Box position="relative">
            <Box
              borderRadius="3xl"
              border="1px solid"
              borderColor="whiteAlpha.400"
              p={8}
              bg="whiteAlpha.50"
              backdropFilter="blur(18px)"
            >
              <Text
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.3em"
                color="aqua.200"
                mb={4}
              >
                Key highlights
              </Text>
              <Stack gap={6}>
                {heroHighlights.map((item) => (
                  <Box key={item.label}>
                    <Text
                      fontSize="sm"
                      color="aqua.100"
                      textTransform="uppercase"
                      letterSpacing="0.15em"
                    >
                      {item.label}
                    </Text>
                    <Text fontSize="lg" fontWeight="semibold">
                      {item.value}
                    </Text>
                  </Box>
                ))}
              </Stack>
              <Box h="1px" my={6} backgroundColor="whiteAlpha.300" />
              <Stack gap={3}>
                <Text color="aqua.100" fontSize="sm">
                  Trajectory
                </Text>
                <Flex
                  align="center"
                  gap={3}
                  fontWeight="semibold"
                  fontSize="lg"
                >
                  Baltic Sea
                  <Box as="span" fontSize="2xl" color="aqua.200">
                    →
                  </Box>
                  Black Sea
                </Flex>
                <Text color="whiteAlpha.800">
                  HELCOM expertise supporting BSAP S34 and Ukraine.
                </Text>
              </Stack>
            </Box>
            <Box
              position="absolute"
              inset={-4}
              borderRadius="3xl"
              border="1px dashed"
              borderColor="whiteAlpha.300"
              transform="rotate(-2deg)"
              opacity={0.4}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  </Box>
)

const About = () => (
  <Box id="about" mb={{ base: 16, md: 24 }}>
    <Grid
      templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
      gap={{ base: 12, lg: 16 }}
      alignItems="center"
    >
      <Stack gap={5}>
        <Text
          textTransform="uppercase"
          letterSpacing="0.3em"
          color="aqua.500"
          fontSize="sm"
        >
          About the project
        </Text>
        <Heading size="2xl">
          Baltic know-how for the Black Sea&rsquo;s environmental security.
        </Heading>
        <Text fontSize="lg" color="slate.600">
          The SAFE-BS2BKS project transfers the most effective underwater
          munitions management practices proven in the Baltic region. We help
          Black Sea countries assess risks, integrate them into monitoring, plan
          climate adaptation, and safeguard marine ecosystems, especially within
          protected areas.
        </Text>
        <Text fontSize="lg" color="slate.600">
          Project lead H9 (EU and HELCOM EU parties) mobilizes a macro-regional
          network for dialogue, trainings, and an Action Plan with
          recommendations for safe underwater munitions management in the Black
          Sea.
        </Text>
      </Stack>
      <Box>
        <Stack gap={4}>
          {keyPhrases.map((phrase) => (
            <Flex
              key={phrase}
              align="center"
              bg="white"
              borderRadius="xl"
              boxShadow="0 20px 60px rgba(13, 46, 66, 0.08)"
              px={4}
              py={3}
              gap={4}
            >
              <Box
                w={10}
                h={10}
                borderRadius="full"
                bg="aqua.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="aqua.800"
                fontWeight="bold"
              >
                ●
              </Box>
              <Text fontWeight="medium">{phrase}</Text>
            </Flex>
          ))}
        </Stack>
      </Box>
    </Grid>
  </Box>
)

const Objectives = () => (
  <Box id="objectives" mb={{ base: 16, md: 24 }}>
    <Stack gap={6} mb={10}>
      <Text
        textTransform="uppercase"
        letterSpacing="0.3em"
        color="aqua.500"
        fontSize="sm"
      >
        Key Objectives
      </Text>
      <Heading size="xl">What SAFE-BS2BKS delivers.</Heading>
    </Stack>
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

const Outputs = () => (
  <>
    <Box id="outputs" mb={{ base: 16, md: 24 }}>
      <Stack gap={6} mb={10}>
        <Text
          textTransform="uppercase"
          letterSpacing="0.3em"
          color="aqua.500"
          fontSize="sm"
        >
          Key Outputs
        </Text>
        <Heading size="xl">Tangible project outcomes.</Heading>
      </Stack>
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
    <Box mb={{ base: 16, md: 24 }}>
      <Stack gap={6} mb={10}>
        <Text
          textTransform="uppercase"
          letterSpacing="0.3em"
          color="aqua.500"
          fontSize="sm"
        >
          How we work
        </Text>
        <Heading size="xl">A four-step process.</Heading>
      </Stack>
      <Stack
        bg="white"
        borderRadius="3xl"
        p={{ base: 6, md: 10 }}
        border="1px solid"
        borderColor="slate.100"
        gap={0}
      >
        {approachSteps.map((step, index) => (
          <Flex
            key={step.title}
            py={6}
            direction={{ base: "column", md: "row" }}
            gap={4}
          >
            <HStack gap={3} minW={{ base: "auto", md: "200px" }}>
              <Box
                w={10}
                h={10}
                borderRadius="full"
                bg="aqua.100"
                color="aqua.700"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {index + 1}
              </Box>
              <Heading size="md">{step.title}</Heading>
            </HStack>
            <Text color="slate.600" flex="1">
              {step.detail}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Box>
  </>
)

const Partners = () => (
  <Box id="partners" mb={{ base: 16, md: 24 }}>
    <Stack gap={6} mb={10}>
      <Text
        textTransform="uppercase"
        letterSpacing="0.3em"
        color="aqua.500"
        fontSize="sm"
      >
        Partners
      </Text>
      <Heading size="xl">International coalition.</Heading>
    </Stack>
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 5, md: 6 }}>
      {partners.map((partner) => (
        <Box
          key={partner.name}
          {...cardStyles}
          display="flex"
          flexDirection="column"
          gap={4}
        >
          <Flex
            align="center"
            justify="center"
            bg="slate.50"
            borderRadius="xl"
            h={{ base: "90px", md: "120px" }}
            border="1px dashed"
            borderColor="slate.100"
            overflow="hidden"
            px={4}
          >
            <Box w="100%" h="100%" position="relative">
              <PartnerLogo {...partner} />
            </Box>
          </Flex>
          <Heading size="md" mb={2}>
            {partner.name}
          </Heading>
          <Text color="slate.600">{partner.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
)

const Impact = () => (
  <Box id="impact" mb={{ base: 16, md: 24 }}>
    <Stack gap={6} mb={10}>
      <Text
        textTransform="uppercase"
        letterSpacing="0.3em"
        color="aqua.500"
        fontSize="sm"
      >
        Project Impact
      </Text>
      <Heading size="xl">What will change.</Heading>
    </Stack>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
      {impacts.map((impact) => {
        const IconComponent = impact.icon
        return (
          <Box
            key={impact.title}
            {...cardStyles}
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <IconComponent
              boxSize={9}
              color="aqua.600"
              strokeWidth="1.6px"
            />
            <Heading size="md">{impact.title}</Heading>
            <Text color="slate.600">{impact.description}</Text>
          </Box>
        )
      })}
    </SimpleGrid>
  </Box>
)

const Contacts = () => (
  <Box id="contacts" mb={{ base: 16, md: 24 }}>
    <Stack gap={6} mb={10}>
      <Text
        textTransform="uppercase"
        letterSpacing="0.3em"
        color="aqua.500"
        fontSize="sm"
      >
        Contacts
      </Text>
      <Heading size="xl">Get in touch with the coordinator.</Heading>
    </Stack>
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={8}
      bg="white"
      borderRadius="3xl"
      p={{ base: 6, md: 10 }}
      border="1px solid"
      borderColor="slate.100"
      align="center"
    >
      <Stack flex="1" gap={4}>
        <Text fontSize="lg">
          Coordinator:{" "}
          <Text as="span" fontWeight="bold">
            Andriy Grafov (HELCOM)
          </Text>
        </Text>
        <Text color="slate.600">
          Questions about partnerships, workshops, or access to materials?
          Reach out anytime.
        </Text>
        <Text fontSize="lg">E-mail: andriy.grafov@helsinki.fi</Text>
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
        <Link href="mailto:andriy.grafov@helsinki.fi">Email the coordinator</Link>
      </Button>
    </Flex>
  </Box>
)

const Footer = () => (
  <Box as="footer" bg="ocean.900" color="white" py={10}>
    <Container maxW="6xl">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap={4}
      >
        <Stack gap={1}>
          <Text fontWeight="bold">SAFE-BS2BKS</Text>
          <Text color="whiteAlpha.700">
            SAFE Actions for Environment – Baltic Solutions to the Black Sea
          </Text>
        </Stack>
        <HStack gap={6} color="whiteAlpha.700">
          <Link href="#about">Privacy</Link>
          <Link href="#about">Terms</Link>
        </HStack>
        <Text color="whiteAlpha.700">
          © {new Date().getFullYear()} SAFE-BS2BKS
        </Text>
      </Flex>
    </Container>
  </Box>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>SAFE-BS2BKS | Baltic solutions for the Black Sea</title>
        <meta
          name="description"
          content="SAFE Actions for Environment – Baltic Solutions to the Black Sea. Managing marine munitions and protecting the Black Sea."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="ocean.900" color="white">
        <Hero />
        <Box as="main" bg="slate.50" color="slate.900">
          <Container maxW="6xl" py={{ base: 16, md: 24 }}>
            <About />
            <Objectives />
            <Outputs />
            <Partners />
            <Impact />
            <Contacts />
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  )
}
