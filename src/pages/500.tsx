import { ErrorPageTemplate } from "../components/ErrorPageTemplate"

const serverErrorHighlights = [
  {
    label: "Status",
    value: "Temporary disruption in our content delivery.",
  },
  {
    label: "Impact",
    value: "No submissions or requests were lost.",
  },
  {
    label: "Follow-up",
    value: "The coordination team has been notified.",
  },
]

const serverErrorSupportLinks = [
  {
    title: "Project status",
    description: "Return to the homepage to refresh the latest SAFE news.",
    href: "/",
  },
  {
    title: "Coordinator contact",
    description: "Write directly to HELCOM for urgent clarifications.",
    href: "mailto:andriy.grafov@helsinki.fi",
  },
  {
    title: "Partners overview",
    description: "Reach an alternative focal point within the network.",
    href: "/#partners",
  },
  {
    title: "Objectives & outputs",
    description: "Review the workstreams while we restore the page.",
    href: "/#objectives",
  },
  {
    title: "Download dossier",
    description: "Use the Action Plan summary available on request.",
    href: "mailto:andriy.grafov@helsinki.fi?subject=SAFE-BS2BKS%20materials",
  },
]

export default function ServerErrorPage() {
  return (
    <ErrorPageTemplate
      code="500"
      title="Something went wrong on our side."
      description="Our system hit an unexpected snag while serving the requested SAFE-BS2BKS content. The engineering and coordination teams are already on it."
      detail="Please try the homepage again or reach out to HELCOM so we can send the needed materials manually."
      primaryAction={{ label: "Reload homepage", href: "/" }}
      secondaryAction={{
        label: "Email HELCOM support",
        href: "mailto:andriy.grafov@helsinki.fi",
      }}
      highlights={serverErrorHighlights}
      supportLinks={serverErrorSupportLinks}
      metaTitle="500 | SAFE-BS2BKS"
      metaDescription="We experienced a temporary technical issue. Reload the SAFE-BS2BKS homepage or contact HELCOM for immediate assistance."
    />
  )
}

