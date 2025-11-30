import { useRouter } from "next/router"
import { Button, HStack } from "@chakra-ui/react"

export const LanguageSwitcher = () => {
  const router = useRouter()
  const { locale, pathname, asPath, query } = router

  const changeLocale = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <HStack gap={1}>
      <Button
        size="sm"
        variant={locale === "en" ? "solid" : "ghost"}
        bg={locale === "en" ? "whiteAlpha.200" : "transparent"}
        color="white"
        _hover={{ bg: "whiteAlpha.300" }}
        onClick={() => changeLocale("en")}
        px={3}
        fontWeight={locale === "en" ? "bold" : "normal"}
      >
        EN
      </Button>
      <Button
        size="sm"
        variant={locale === "uk" ? "solid" : "ghost"}
        bg={locale === "uk" ? "whiteAlpha.200" : "transparent"}
        color="white"
        _hover={{ bg: "whiteAlpha.300" }}
        onClick={() => changeLocale("uk")}
        px={3}
        fontWeight={locale === "uk" ? "bold" : "normal"}
      >
        UA
      </Button>
    </HStack>
  )
}

