import { ErrorPageTemplate } from "../components/ErrorPageTemplate"

const notFoundHighlights = [
  {
    label: "Likely cause",
    value: "The page moved or the link is outdated.",
  },
  {
    label: "Your options",
    value: "Jump to key sections or reach the coordinator.",
  },
  {
    label: "Next action",
    value: "Start from the homepage for the latest updates.",
  },
]

const notFoundSupportLinks = [
  {
    title: "About the project",
    description:
      "Review how Baltic expertise secures the Black Sea environment.",
    href: "/#about",
  },
  {
    title: "Key objectives",
    description: "Explore the main work streams and expected benefits.",
    href: "/#objectives",
  },
  {
    title: "Project outputs",
    description: "See the guidelines, trainings, and action plan deliverables.",
    href: "/#outputs",
  },
  {
    title: "Partners",
    description: "Meet the Baltic and Black Sea coalition members.",
    href: "/#partners",
  },
  {
    title: "Contacts",
    description: "Get in touch with HELCOM coordination for assistance.",
    href: "/#contacts",
  },
]

export default function NotFoundPage() {
  return (
    <ErrorPageTemplate
      code="404"
      title="We can’t find the page you’re looking for."
      description="The URL may be incorrect or the content was archived while we update our Black Sea knowledge base."
      detail="Choose one of the quick destinations below or return to the homepage to continue exploring SAFE-BS2BKS."
      primaryAction={{ label: "Back to homepage", href: "/" }}
      secondaryAction={{
        label: "Contact the coordinator",
        href: "mailto:andriy.grafov@helsinki.fi",
      }}
      highlights={notFoundHighlights}
      supportLinks={notFoundSupportLinks}
      metaTitle="404 | SAFE-BS2BKS"
      metaDescription="Oops! The SAFE-BS2BKS page you requested is unavailable. Use the quick links to continue exploring the project."
    />
  )
}

