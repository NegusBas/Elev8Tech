import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Elev8Tech - Web & Mobile Development Solutions",
  description:
    "Get in touch with Elev8Tech for your web and mobile development needs. We're here to help bring your digital vision to life.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
